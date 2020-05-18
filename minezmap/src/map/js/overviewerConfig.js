/*
    Settings for Overviewer
*/
var overviewerConfig = {
    worlds: [
        {
            name: "MineZ",
            markerset: "Classic",
            center: [
                450, 
                64, 
                -1700
            ],
            defaultZoom: 3, 
            zoomLevels: 9, 
            minZoom: 2, 
            maxZoom: 9, 
            markerZoomThresholds: {
                major: 3,
                minor: 5,
                spawn: 4,
                dungeon: 4,
                elite: 4,
                chest: 6
            },
            bgcolor: "#1a1a1a", 
            tilesets: [
                {
                    name: "Surface (NE)", 
                    northDirection: "upper-right", 
                    renderTime: 1, 
                    path: "https://shotbow.net/minez/map/NE",
                    imgextension: "png"
                },
                {
                    name: "Underground (NE)", 
                    northDirection: "upper-right", 
                    renderTime: 1, 
                    path: "https://shotbow.net/minez/map/NE-Cave",
                    imgextension: "png"
                },
                {
                    name: "Surface (NW)", 
                    northDirection: "upper-left", 
                    renderTime: 1, 
                    path: "https://shotbow.net/minez/map/NW",
                    imgextension: "png"
                },
                {
                    name: "Underground (NW)", 
                    northDirection: "upper-left", 
                    renderTime: 1, 
                    path: "https://shotbow.net/minez/map/NW-Cave",
                    imgextension: "png"
                }
            ]
        }/*,
        {
            name: "LMS Snow",
            markerset: "LMS_Snow",
            center: [
                52, 
                64, 
                74
            ],
            defaultZoom: 3, 
            zoomLevels: 6, 
            minZoom: 0, 
            maxZoom: 6, 
            markerZoomThresholds: {
                major: 0,
                minor: 3
            },
            bgcolor: "#1a1a1a", 
            tilesets: [
                {
                    name: "NE",
                    markerset: "LMS_Snow",
                    northDirection: "upper-right", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSSnow/NE",
                    imgextension: "jpg"
                },
                {
                    name: "NW",
                    northDirection: "upper-left", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSSnow/NW",
                    imgextension: "jpg"
                },
                {
                    name: "SW",
                    northDirection: "lower-left", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSSnow/SW",
                    imgextension: "jpg"
                },
                {
                    name: "SE",
                    northDirection: "lower-right", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSSnow/SE",
                    imgextension: "jpg"
                }
            ]
        },
        {
            name: "LMS Desert",
            markerset: "LMS_Desert",
            center: [
                -35, 
                64, 
                -35
            ],
            defaultZoom: 2, 
            zoomLevels: 5, 
            minZoom: 0, 
            maxZoom: 5, 
            markerZoomThresholds: {
                major: 0,
                minor: 2
            },
            bgcolor: "#1a1a1a", 
            tilesets: [
                {
                    name: "NE", 
                    northDirection: "upper-right", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSDesert/NE",
                    imgextension: "jpg"
                },
                {
                    name: "NW", 
                    northDirection: "upper-left", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSDesert/NW",
                    imgextension: "jpg"
                },
                {
                    name: "SW", 
                    northDirection: "lower-left", 
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSDesert/SW",
                    imgextension: "jpg"
                },
                {
                    name: "SE", 
                    northDirection: "lower-right",  
                    renderTime: 1350195401, 
                    path: "http://static.minezmap.com/MineZ/LMSDesert/SE",
                    imgextension: "jpg"
                }
            ]
        }*/
    ],
    markerStyles: {
        major: {
            textColor: "96FFFF",
            undergroundTextColor: "66a6ff",
            coordsColor: "96FF96",
            outlineColor: "000000",
            textSize: 15,
            coordsSize: 13
        },
        minor: {
            textColor: "FFFF66",
            undergroundTextColor: "FFCC66",
            coordsColor: "96FF96",
            outlineColor: "000000",
            textSize: 13,
            coordsSize: 11
        },
        spawn: {
            textColor: "FFC7C7",
            undergroundTextColor: "FFC7C7",
            coordsColor: "FFF47E",
            outlineColor: "000000",
            textSize: 13,
            coordsSize: 11
        },
        dungeon: {
            textColor: "ff8080",
            undergroundTextColor: "ff8080",
            coordsColor: "96FF96",
            outlineColor: "000000",
            textSize: 13,
            coordsSize: 11
        },
        elite: {
            textColor: "ff5050",
            undergroundTextColor: "ff5050",
            coordsColor: "96FF96",
            outlineColor: "000000",
            textSize: 13,
            coordsSize: 11
        }
    },
    settings: {
        mapName: "MineZ Map",
        tileSize: 384, 
        mapRootDirectory: "/src/",
        wikiUrl: "https://wiki.shotbow.net/{page}{div}",
        wikiDiv: "",
        enableWiki: true,
        labelDelimiter: "$",
        showYCoord: false,
        chestDataUrl: "/data/chests.csv?c=" + Math.random(),
        showChestMarkers: !$.browser.mobile,
        resetTilesetOnWorldChange: true,
        servers: [
            "us.shotbow.net",
            "US.SHOTBOW.NET",
            "play.shotbow.net",
            "PLAY.SHOTBOW.NET",
            "jp.shotbow.net",
            "JP.SHOTBOW.NET"
        ]
    },
    plugins: [
        {
            id: "TNW",
            src: "https://minez-nightswatch.com/map/players.js",
            requiresParam: true,
            init: function() {}
        },
        {
            id: "FridgeMarkers",
            src:"/src/map/js/plugins/navarr/fridgeMarkers.js",
            requiresParam: false,
            init: function() {}
        }
    ]
};