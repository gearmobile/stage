module.exports = {
    "autoprefixerConfig": [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "android 4"
    ],
    "postcss": [],
    // конфиг для работы с svg-графикой
    "svg": {
        "active": true, // Включение поддержки svg в проекте
        "workflow": "symbols", // Способ работы с svg-графикой
        "symbolsConfig": { // конфиг для работы с svg-symbols
            "loadingType": "separate-file-with-link", // способ подключения svg-symbols на странице
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": "" // путь, по которому файл с svg-symbols.svg находится в проекте
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
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img"
    }
};
