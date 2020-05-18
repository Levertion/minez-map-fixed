//@ts-check

import { readFileSync, writeFileSync } from "fs";
import { writeFile } from "fs/promises";
import { join } from "path";
import fetch from "node-fetch";
import writefile from "writefile";
import blobto from "blob-to-buffer";
import { promisify } from "util";

const blob = promisify(blobto);
const data = JSON.parse(readFileSync("./requests.har.json").toString());
async function main() {
    const promises = [];
    const urls = [];
    let index = 0;
    for (const entry of data.log.entries) {
        const loc = entry.request.url;
        urls.push(loc);
    }
    const res = setInterval(async () => {
        if (!(index < urls.length)) {
            clearInterval(res);
            return;
        }
        const src = urls[index].replace(".min.js", ".js");
        const url = new URL(urls[index]);
        index++;
        let folder;
        if (url.pathname === "/" || url.pathname === "") {
            url.pathname = "/index.html";
        }
        if (url.host === "minezmap.com") {
            folder = "minezmap";
        } else if (url.host === "shotbow.net") {
            // folder = "shotbow";
            return;
        } else {
            return;
        }
        try {
            const fetched = await fetch(src);
            if (fetched.ok) {
                /**
                 * @type {ArrayBuffer}
                 */
                const file = await (await fetched.blob()).arrayBuffer();
                const buffer = Buffer.from(file);
                await writefile(join(".", folder, url.pathname), buffer)
            } else {
                console.log(src);
            }
        } catch (e) {
            console.log(e);
        }

    }, 100);
}

main();