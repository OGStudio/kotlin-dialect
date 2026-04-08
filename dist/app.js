#!/usr/bin/env node
/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 3.1.0
 */

let fs = require("fs");
let KT = require("./ver-nodejs-app").org.opengamestudio;

//!<-- API -->

function appSet(key, value) {
    KT.appCtrl().set(key, value);
}

//!<-- Component -->

function AppComponent() {
    this._construct = function() {
        // Effects
        let oneliners = [ 
            "inputFile", (c) => { appReadFile(c.inputFile) },
            "outputFileContents", (c) => { appWriteFile(c.outputFile, c.outputFileContents) },
        ];
        KT.registerOneliners(KT.appCtrl(), oneliners);

        // Defaults.
        //appSet("isDbg", true);
        appSet("arguments", process.argv);
    };

    this._construct();
}

//<!-- Effects -->

function appReadFile(fileName) {
    let contents = fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });
    let lines = contents.split("\n");
    appSet("inputFileLines", lines);
}

function appWriteFile(fileName, contents) {
    fs.writeFileSync(fileName, contents);
    appSet("didWriteOutputFile", true);
}

//<!-- Installation -->

let cmp = new AppComponent();

//<!-- Run -->

appSet("didLaunch", true);
