module.exports = {
    "autoprefixerConfig": [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "android 4"
    ],
    "postcss": [
        {
            "name": "lost",
            "options": {
                // "flexbox": "flex",
                "gutter": "30px"
            }
        }
    ],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "separate-file-with-link",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "useJsLintAndHint": true,
    "jsPathsToConcatBeforeModulesJs": [],
    "lintJsCodeBeforeModules": false,
    "jsPathsToConcatAfterModulesJs": [],
    "lintJsCodeAfterModules": false,
    "useBabel": false,
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "browserSyncConfig": {
        "baseDir": "./dev",
        "port": 3004,
        "open": true,
        "browser": "default",
        "startUrl": "/index.html",
        "useNotifyInBrowser": true,
        "injectChanges": false
    },
    "removeConsoleLog": true,
    "minifyHtml": false,
    "staticPrefix": "static/",
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "jade",
    "cssPreprocessor": "stylus",
    "useImagesForDisplayWithDpi": [
        96,
        192
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img"
    }
};
