console.log('plugin loaded');
core.util.createChestMarker = function(e) {
console.log('createChestMarker called');
        e.type = e.type.toLowerCase();
        e.type = e.type.charAt(0).toUpperCase() + e.type.slice(1);
        
        var imgName = e.type;
        if (e.type.substring(e.type.length - 2) == '_?') {
                imgName = 'Unknown';
        }

        var i = L.icon({
            iconUrl: overviewerConfig.settings.mapRootDirectory + "map/images/navarr/" + imgName + ".png",
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        var s = {
            icon: i,
            title: "Chest" + " (" + e.lX + ", " + e.lY + ", " + e.lZ + ")"
        };
        var o = overviewer.util.fromWorldToLatLng(e.lX, e.lY, e.lZ);
        var u = new L.marker(o,s);
        core.markerClusters["chest"].addLayer(u);
        var a;
        if (e.type == "civ_?") {
            a = "#Civilian_chests"
        } else if (e.type == "mil_?") {
            a = "#Military_chests"
        } else if (e.type == "food_?") {
            a = "#Food_chests"
        } else if (e.type == "pot_?") {
            a = "#Pot_chests"
        } else {
            a = "#" + e.type
        }
        var f = "<a href='#' onclick='(function(e){" + "e.preventDefault();" + 'mapUi.openWiki("{page}","{div}");' + "})(event)'>{link}</a>";
        var l = "<a href='#' onclick='(function(e){" + "e.preventDefault();" + "mapUi.openFormTemplate({" + 'username:"{username}", ' + 'message:"{message}", ' + 'email:"{email}"});' + "})(event)'>{link}</a>";
        u.bindPopup("<div class='header'>Chest</div>" + "x:" + e.lX + ", y:" + e.lY + ", z:" + e.lZ + "<br><hr>" + "<b>Type: </b>" + (e.trap ? L.Util.template(f, {
            page: "Trap_chests",
            div: "#firstHeading",
            link: "Trapped"
        }) + " " : "") + (e.type != "" ? e.type : "Unknown") + (e.type != "" ? " " + L.Util.template(f, {
            page: "minez-loot",
            div: a,
            link: "(loot details)"
        }) : "") + "<br>" + "<b>Last seen: </b>" + e.date + "<br><br>" + "<i>Loot incorrect? " + L.Util.template(l, {
            username: "",
            message: "The chest at (" + e.lX + ", " + e.lY + ", " + e.lZ + ") should be a...",
            email: "",
            link: "Submit a correction!"
        }) + "</i>")
    };

// Updates Chest Legend via JavaScript

var chestTypes = {
    "Civilian Chests": {
        "tool_south": "South",
        "civ_common": "Common",
        "civ_tool": "Tool"
    },
    "Military Chests": {
        "mil_common": "Common",
        "mil_uncommon": "Uncommon",
        "mil_rare": "Rare",
        "mil_epic": "Epic"
    },
    "Food Chests": {
        "food_common": "Common",
        "food_uncommon": "Uncommon",
        "food_rare": "Rare"
    },
    "Potion Chests": {
        "pot_south": "South",
        "pot_common": "Common",
        "pot_uncommon": "Uncommon",
        "pot_rare": "Rare"
    },
    "Other": {
        "axis_mundi": "Axis Mundi",
        "spire_air": "Spire Air",
        "spire_earth": "Spire Earth",
        "spire_fire": "Spire Fire",
        "spire_water": "Spire Water",
        "eillom_ale": "Eillom Ale",
        "unknown": "Unknown"
    }
};

$(document).ready(function () {
    var chestLegend = $('#chestLegend');
    chestLegend.find('ul,span').remove();

    var html = '<div class="key-groups">';
    for (var category in chestTypes) {
        html = html + '<div class="marker-group"><span>' + category + '</span><ul>';
        for (var imgName in chestTypes[category]) {
            html = html + '<li><div class="markerImg" style="background-image: url(' + overviewerConfig.settings.mapRootDirectory + 'map/images/navarr/' + imgName + '.png)">' +
                '</div><div>' + chestTypes[category][imgName] + '</div></li>';
        }
        html = html + '</ul></div>';
    }
    html = html + '</div>';

    chestLegend.prepend(html);

    mapUi.linkMethods['send-message'] = function () { window.open('https://shotbow.net/forum/conversations/add?to=Fridge2177'); };
});