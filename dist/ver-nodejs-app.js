(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ver-nodejs:app'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ver-nodejs:app'.");
    }
    globalThis['ver-nodejs:app'] = factory(typeof globalThis['ver-nodejs:app'] === 'undefined' ? {} : globalThis['ver-nodejs:app'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var joinToString = kotlin_kotlin.$_$.m;
  var split = kotlin_kotlin.$_$.k1;
  var dropLast = kotlin_kotlin.$_$.i;
  var joinToString_0 = kotlin_kotlin.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d;
  var replace = kotlin_kotlin.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.p1;
  var Unit_instance = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.c1;
  var initMetadataForObject = kotlin_kotlin.$_$.z;
  var emptyMap = kotlin_kotlin.$_$.j;
  var sorted = kotlin_kotlin.$_$.p;
  var substring = kotlin_kotlin.$_$.n1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.q1;
  var copyToArray = kotlin_kotlin.$_$.h;
  var charSequenceLength = kotlin_kotlin.$_$.r;
  var startsWith = kotlin_kotlin.$_$.l1;
  var endsWith = kotlin_kotlin.$_$.i1;
  var contains = kotlin_kotlin.$_$.f1;
  var VOID = kotlin_kotlin.$_$.a;
  var first = kotlin_kotlin.$_$.k;
  var last = kotlin_kotlin.$_$.n;
  var isArray = kotlin_kotlin.$_$.a1;
  var KtMap = kotlin_kotlin.$_$.g;
  var isInterface = kotlin_kotlin.$_$.b1;
  var toString = kotlin_kotlin.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.w;
  var getStringHashCode = kotlin_kotlin.$_$.v;
  var getBooleanHashCode = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.t;
  var defineProp = kotlin_kotlin.$_$.s;
  var initMetadataForClass = kotlin_kotlin.$_$.x;
  var initMetadataForInterface = kotlin_kotlin.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.e;
  var decodeToString = kotlin_kotlin.$_$.g1;
  var substring_0 = kotlin_kotlin.$_$.m1;
  var take = kotlin_kotlin.$_$.o1;
  var println = kotlin_kotlin.$_$.q;
  var last_0 = kotlin_kotlin.$_$.o;
  var dropLast_0 = kotlin_kotlin.$_$.h1;
  var capitalize = kotlin_kotlin.$_$.e1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(AppProto, 'AppProto');
  function fieldAny(name) {
    return this.field(name);
  }
  initMetadataForInterface(KDContext, 'KDContext');
  initMetadataForClass(AppContext, 'AppContext', AppContext, VOID, [KDContext]);
  initMetadataForClass(OutputPath, 'OutputPath', OutputPath);
  initMetadataForClass(KDController, 'KDController');
  initMetadataForObject(F, 'F');
  //endregion
  var APP_KD_IMPORT;
  var APP_KD_JSEXPORT;
  var APP_KD_PACKAGE;
  function appCtrl() {
    return AppProto_getInstance().ma_1;
  }
  function appShouldCollectEntityComments(c) {
    if (c.na_1 === 'entityNames') {
      c.entityComments = parseEntityComments(c.inputFileLines);
      c.na_1 = 'entityComments';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFieldComments(c) {
    if (c.na_1 === 'entityFields') {
      c.entityFieldComments = parseEntityFieldComments(c.inputFileLines);
      c.na_1 = 'entityFieldComments';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFields(c) {
    if (c.na_1 === 'entityTypes') {
      c.entityFields = parseEntityFields(c.inputFileLines);
      c.na_1 = 'entityFields';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectEntityNames(c) {
    if (c.na_1 === 'inputFileLines') {
      c.entityNames = parseEntityNames(c.inputFileLines);
      c.na_1 = 'entityNames';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectEntityPrefixesKotlin(c) {
    if (c.na_1 === 'entityComments') {
      c.entityPrefixesKotlin = parseEntityPrefixes(c.inputFileLines, '    prefix-kotlin: ');
      c.na_1 = 'entityPrefixesKotlin';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectEntityTypes(c) {
    if (c.na_1 === 'entityComments') {
      c.entityTypes = parseEntityTypes(c.inputFileLines);
      c.na_1 = 'entityTypes';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectRawCPPSDK(c) {
    if (c.na_1 === 'inputFileLines') {
      c.rawCPPSDK = parseRawCPPSDK(c.inputFileLines);
      c.na_1 = 'rawCPPSDK';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectRawKotlin(c) {
    if (c.na_1 === 'inputFileLines') {
      c.rawKotlin = parseRawKotlin(c.inputFileLines);
      c.na_1 = 'rawKotlin';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldCollectRawSwift(c) {
    if (c.na_1 === 'inputFileLines') {
      c.rawSwift = parseRawSwift(c.inputFileLines);
      c.na_1 = 'rawSwift';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldGenerateKotlinEntities(c) {
    if (c.na_1 === 'entityFieldComments') {
      c.outputEntityContents = genKotlinEntitiesFile(c.entityComments, c.entityFieldComments, c.entityFields, c.entityNames, c.entityPrefixesKotlin, c.entityTypes, c.rawKotlin);
      c.na_1 = 'outputEntityContents';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldParseInputFilePath(c) {
    if (c.na_1 === 'didLaunch' && cliArgumentValue(c.arguments, '--file').length > 0) {
      c.inputFile = cliArgumentValue(c.arguments, '--file');
      c.na_1 = 'inputFile';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldParseOutputPaths(c) {
    if (c.na_1 === 'inputFileLines') {
      c.outputPaths = parseOutputPaths(c.inputFileLines);
      c.na_1 = 'outputPaths';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldPrintToConsole(c) {
    var tmp;
    if (c.na_1 === 'didLaunch') {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = c.arguments.length === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      c.consoleOutput = 'Usage: {bin} --file=/path/to/file.yml';
      c.na_1 = 'consoleOutput';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPAPIHeader(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppAPIHeader = cppAPIHeader(prefixes);
      c.na_1 = 'cppAPIHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPAPISource(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppAPISource = cppAPISource(prefixes);
      c.na_1 = 'cppAPISource';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPContextsHeader(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      var tmp = c.entityFields;
      var fields = cppContextFieldsHeader(ids, tmp, cppContextFieldFormatterHeader$ref());
      c.cppContextsHeader = cppContextsHeader(fields, prefixes);
      c.na_1 = 'cppContextsHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPContextsSource(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var tmp = c.entityFields;
      var tmp_0 = c.entityNames;
      var fields = cppContextFieldsSource(ids, tmp, tmp_0, cppContextFieldFormatterSource$ref());
      c.cppContextsSource = joinToString(fields, '\n');
      c.na_1 = 'cppContextsSource';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPEffectsHeader(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppEffectsHeader = cppEffectsHeader(prefixes);
      c.na_1 = 'cppEffectsHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPEffectsSource(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppEffectsSource = cppEffectsSource(prefixes);
      c.na_1 = 'cppEffectsSource';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPSetHeader(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppSetHeader = cppSetHeader(prefixes);
      c.na_1 = 'cppSetHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCPPSetSource(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppSetSource = cppSetSource(prefixes);
      c.na_1 = 'cppSetSource';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetCurrentOutputPathId(c) {
    if (c.na_1 === 'outputSwift') {
      c.currentOutputPathId = 0;
      c.na_1 = 'currentOutputPathId';
      return c;
    }
    if (c.na_1 === 'didWriteOutputFile' && (c.currentOutputPathId + 1 | 0) < c.outputPaths.length) {
      c.currentOutputPathId = c.currentOutputPathId + 1 | 0;
      c.na_1 = 'currentOutputPathId';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetFObjCPPHeader(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjCPPHeader = fobjCPPHeader(fields);
      c.na_1 = 'fobjCPPHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetFObjKotlin(c) {
    if (c.na_1 === 'outputEntityContents') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjKotlin = fobjKotlin(fields);
      c.na_1 = 'fobjKotlin';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetFObjSwift(c) {
    if (c.na_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjSwift = fobjSwift(fields);
      c.na_1 = 'fobjSwift';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetInputFileDir(c) {
    if (c.na_1 === 'inputFile') {
      var parts = split(c.inputFile, ['/']);
      var dirParts = dropLast(parts, 1);
      c.inputFileDir = joinToString_0(dirParts, '/');
      c.na_1 = 'inputFileDir';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPHeader(c) {
    if (c.na_1 === 'outputKotlin') {
      c.outputCPPHeader = '\n#ifndef KLIN_AUTOGENERATED_CPP_HEADER_H\n#define KLIN_AUTOGENERATED_CPP_HEADER_H\n\n#include <any>\n#include <string>\n#include <QObject>\n#include <QString>\n#include <QVariant>\n#include "KT.h"\n' + c.cppAPIHeader + c.cppContextsHeader + c.cppEffectsHeader + c.cppSetHeader + c.fobjCPPHeader + '\n#endif // KLIN_AUTOGENERATED_CPP_HEADER_H\n';
      c.na_1 = 'outputCPPHeader';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPSDK(c) {
    if (c.na_1 === 'outputKotlin') {
      var tmp0 = c.outputKotlin;
      // Inline function 'kotlin.text.replace' call
      var outk = Regex_init_$Create$('package.*').y6(tmp0, '');
      c.outputCPPSDK = c.rawCPPSDK + outk + '\n// Convert Bool to Any (for SDK)\nfun boolToAny(item: Boolean): Any {\n    return item as Any\n}\n\n// Convert String to Any (for SDK)\nfun strToAny(item: String): Any {\n    return item as Any\n}\n' + '\n// Register C callback into KDController\n@OptIn(ExperimentalForeignApi::class)\nfun KDController.registerCallbackC(cb: CPointer<CFunction<() -> Unit>>) {\n    callbacks.add({ c -> cb() })\n}\n';
      c.na_1 = 'outputCPPSDK';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPSource(c) {
    if (c.na_1 === 'outputKotlin') {
      c.outputCPPSource = '\n#include "ignore.kd.h"\n#include "KT.h"\n' + c.cppAPISource + c.cppContextsSource + c.cppEffectsSource + c.cppSetSource;
      c.na_1 = 'outputCPPSource';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputFile(c) {
    if (c.na_1 === 'currentOutputPathId') {
      var item = c.outputPaths[c.currentOutputPathId];
      c.outputFile = c.inputFileDir + '/' + item.path;
      c.na_1 = 'outputFile';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputFileContents(c) {
    if (c.na_1 === 'outputFile') {
      var item = c.outputPaths[c.currentOutputPathId];
      c.outputFileContents = outputFileContents(c.outputCPPHeader, c.outputCPPSDK, c.outputCPPSource, c.outputJSExport, c.outputKotlin, c.outputSwift, item.type);
      c.na_1 = 'outputFileContents';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputJSExport(c) {
    if (c.na_1 === 'srcKotlin') {
      c.outputJSExport = c.outputEntityContents + c.srcKotlin + c.fobjKotlin;
      c.na_1 = 'outputJSExport';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputKotlin(c) {
    if (c.na_1 === 'outputJSExport') {
      c.outputKotlin = replace(replace(c.outputJSExport, APP_KD_IMPORT, ''), APP_KD_JSEXPORT, '');
      c.na_1 = 'outputKotlin';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetOutputSwift(c) {
    if (c.na_1 === 'outputKotlin') {
      c.outputSwift = c.rawSwift + c.srcSwift + c.fobjSwift;
      c.na_1 = 'outputSwift';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetSrcKotlin(c) {
    if (c.na_1 === 'outputEntityContents') {
      var contents = base64ToString(get_embKotlin64());
      c.srcKotlin = replace(replace(contents, APP_KD_IMPORT, ''), APP_KD_PACKAGE, '');
      c.na_1 = 'srcKotlin';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function appShouldResetSrcSwift(c) {
    if (c.na_1 === 'srcKotlin') {
      c.srcSwift = base64ToString(get_embSwift64());
      c.na_1 = 'srcSwift';
      return c;
    }
    c.na_1 = 'none';
    return c;
  }
  function cppContextFieldFormatterHeader$ref() {
    var l = function (p0, p1) {
      return cppContextFieldFormatterHeader(p0, p1);
    };
    l.callableName = 'cppContextFieldFormatterHeader';
    return l;
  }
  function cppContextFieldFormatterSource$ref() {
    var l = function (p0, p1, p2) {
      return cppContextFieldFormatterSource(p0, p1, p2);
    };
    l.callableName = 'cppContextFieldFormatterSource';
    return l;
  }
  function appShouldCollectEntityComments$ref() {
    var l = function (p0) {
      return appShouldCollectEntityComments(p0);
    };
    l.callableName = 'appShouldCollectEntityComments';
    return l;
  }
  function appShouldCollectEntityFieldComments$ref() {
    var l = function (p0) {
      return appShouldCollectEntityFieldComments(p0);
    };
    l.callableName = 'appShouldCollectEntityFieldComments';
    return l;
  }
  function appShouldCollectEntityFields$ref() {
    var l = function (p0) {
      return appShouldCollectEntityFields(p0);
    };
    l.callableName = 'appShouldCollectEntityFields';
    return l;
  }
  function appShouldCollectEntityNames$ref() {
    var l = function (p0) {
      return appShouldCollectEntityNames(p0);
    };
    l.callableName = 'appShouldCollectEntityNames';
    return l;
  }
  function appShouldCollectEntityPrefixesKotlin$ref() {
    var l = function (p0) {
      return appShouldCollectEntityPrefixesKotlin(p0);
    };
    l.callableName = 'appShouldCollectEntityPrefixesKotlin';
    return l;
  }
  function appShouldCollectEntityTypes$ref() {
    var l = function (p0) {
      return appShouldCollectEntityTypes(p0);
    };
    l.callableName = 'appShouldCollectEntityTypes';
    return l;
  }
  function appShouldCollectRawCPPSDK$ref() {
    var l = function (p0) {
      return appShouldCollectRawCPPSDK(p0);
    };
    l.callableName = 'appShouldCollectRawCPPSDK';
    return l;
  }
  function appShouldCollectRawKotlin$ref() {
    var l = function (p0) {
      return appShouldCollectRawKotlin(p0);
    };
    l.callableName = 'appShouldCollectRawKotlin';
    return l;
  }
  function appShouldCollectRawSwift$ref() {
    var l = function (p0) {
      return appShouldCollectRawSwift(p0);
    };
    l.callableName = 'appShouldCollectRawSwift';
    return l;
  }
  function appShouldGenerateKotlinEntities$ref() {
    var l = function (p0) {
      return appShouldGenerateKotlinEntities(p0);
    };
    l.callableName = 'appShouldGenerateKotlinEntities';
    return l;
  }
  function appShouldParseInputFilePath$ref() {
    var l = function (p0) {
      return appShouldParseInputFilePath(p0);
    };
    l.callableName = 'appShouldParseInputFilePath';
    return l;
  }
  function appShouldParseOutputPaths$ref() {
    var l = function (p0) {
      return appShouldParseOutputPaths(p0);
    };
    l.callableName = 'appShouldParseOutputPaths';
    return l;
  }
  function appShouldPrintToConsole$ref() {
    var l = function (p0) {
      return appShouldPrintToConsole(p0);
    };
    l.callableName = 'appShouldPrintToConsole';
    return l;
  }
  function appShouldResetCPPAPIHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPAPIHeader(p0);
    };
    l.callableName = 'appShouldResetCPPAPIHeader';
    return l;
  }
  function appShouldResetCPPAPISource$ref() {
    var l = function (p0) {
      return appShouldResetCPPAPISource(p0);
    };
    l.callableName = 'appShouldResetCPPAPISource';
    return l;
  }
  function appShouldResetCPPContextsHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPContextsHeader(p0);
    };
    l.callableName = 'appShouldResetCPPContextsHeader';
    return l;
  }
  function appShouldResetCPPContextsSource$ref() {
    var l = function (p0) {
      return appShouldResetCPPContextsSource(p0);
    };
    l.callableName = 'appShouldResetCPPContextsSource';
    return l;
  }
  function appShouldResetCPPEffectsHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPEffectsHeader(p0);
    };
    l.callableName = 'appShouldResetCPPEffectsHeader';
    return l;
  }
  function appShouldResetCPPEffectsSource$ref() {
    var l = function (p0) {
      return appShouldResetCPPEffectsSource(p0);
    };
    l.callableName = 'appShouldResetCPPEffectsSource';
    return l;
  }
  function appShouldResetCPPSetHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPSetHeader(p0);
    };
    l.callableName = 'appShouldResetCPPSetHeader';
    return l;
  }
  function appShouldResetCPPSetSource$ref() {
    var l = function (p0) {
      return appShouldResetCPPSetSource(p0);
    };
    l.callableName = 'appShouldResetCPPSetSource';
    return l;
  }
  function appShouldResetCurrentOutputPathId$ref() {
    var l = function (p0) {
      return appShouldResetCurrentOutputPathId(p0);
    };
    l.callableName = 'appShouldResetCurrentOutputPathId';
    return l;
  }
  function appShouldResetFObjCPPHeader$ref() {
    var l = function (p0) {
      return appShouldResetFObjCPPHeader(p0);
    };
    l.callableName = 'appShouldResetFObjCPPHeader';
    return l;
  }
  function appShouldResetFObjKotlin$ref() {
    var l = function (p0) {
      return appShouldResetFObjKotlin(p0);
    };
    l.callableName = 'appShouldResetFObjKotlin';
    return l;
  }
  function appShouldResetFObjSwift$ref() {
    var l = function (p0) {
      return appShouldResetFObjSwift(p0);
    };
    l.callableName = 'appShouldResetFObjSwift';
    return l;
  }
  function appShouldResetInputFileDir$ref() {
    var l = function (p0) {
      return appShouldResetInputFileDir(p0);
    };
    l.callableName = 'appShouldResetInputFileDir';
    return l;
  }
  function appShouldResetOutputCPPHeader$ref() {
    var l = function (p0) {
      return appShouldResetOutputCPPHeader(p0);
    };
    l.callableName = 'appShouldResetOutputCPPHeader';
    return l;
  }
  function appShouldResetOutputCPPSDK$ref() {
    var l = function (p0) {
      return appShouldResetOutputCPPSDK(p0);
    };
    l.callableName = 'appShouldResetOutputCPPSDK';
    return l;
  }
  function appShouldResetOutputCPPSource$ref() {
    var l = function (p0) {
      return appShouldResetOutputCPPSource(p0);
    };
    l.callableName = 'appShouldResetOutputCPPSource';
    return l;
  }
  function appShouldResetOutputFile$ref() {
    var l = function (p0) {
      return appShouldResetOutputFile(p0);
    };
    l.callableName = 'appShouldResetOutputFile';
    return l;
  }
  function appShouldResetOutputFileContents$ref() {
    var l = function (p0) {
      return appShouldResetOutputFileContents(p0);
    };
    l.callableName = 'appShouldResetOutputFileContents';
    return l;
  }
  function appShouldResetOutputJSExport$ref() {
    var l = function (p0) {
      return appShouldResetOutputJSExport(p0);
    };
    l.callableName = 'appShouldResetOutputJSExport';
    return l;
  }
  function appShouldResetOutputKotlin$ref() {
    var l = function (p0) {
      return appShouldResetOutputKotlin(p0);
    };
    l.callableName = 'appShouldResetOutputKotlin';
    return l;
  }
  function appShouldResetOutputSwift$ref() {
    var l = function (p0) {
      return appShouldResetOutputSwift(p0);
    };
    l.callableName = 'appShouldResetOutputSwift';
    return l;
  }
  function appShouldResetSrcKotlin$ref() {
    var l = function (p0) {
      return appShouldResetSrcKotlin(p0);
    };
    l.callableName = 'appShouldResetSrcKotlin';
    return l;
  }
  function appShouldResetSrcSwift$ref() {
    var l = function (p0) {
      return appShouldResetSrcSwift(p0);
    };
    l.callableName = 'appShouldResetSrcSwift';
    return l;
  }
  function AppProto$lambda($f) {
    return function (c) {
      return $f(c instanceof AppContext ? c : THROW_CCE());
    };
  }
  function AppProto() {
    AppProto_instance = this;
    this.ma_1 = new KDController(new AppContext());
    setupComponentDebugging(this.ma_1, 'App');
    var tmp = appShouldCollectEntityComments$ref();
    var tmp_0 = appShouldCollectEntityFieldComments$ref();
    var tmp_1 = appShouldCollectEntityFields$ref();
    var tmp_2 = appShouldCollectEntityNames$ref();
    var tmp_3 = appShouldCollectEntityPrefixesKotlin$ref();
    var tmp_4 = appShouldCollectEntityTypes$ref();
    var tmp_5 = appShouldCollectRawCPPSDK$ref();
    var tmp_6 = appShouldCollectRawKotlin$ref();
    var tmp_7 = appShouldCollectRawSwift$ref();
    var tmp_8 = appShouldGenerateKotlinEntities$ref();
    var tmp_9 = appShouldParseInputFilePath$ref();
    var tmp_10 = appShouldParseOutputPaths$ref();
    var tmp_11 = appShouldPrintToConsole$ref();
    var tmp_12 = appShouldResetCPPAPIHeader$ref();
    var tmp_13 = appShouldResetCPPAPISource$ref();
    var tmp_14 = appShouldResetCPPContextsHeader$ref();
    var tmp_15 = appShouldResetCPPContextsSource$ref();
    var tmp_16 = appShouldResetCPPEffectsHeader$ref();
    var tmp_17 = appShouldResetCPPEffectsSource$ref();
    var tmp_18 = appShouldResetCPPSetHeader$ref();
    var tmp_19 = appShouldResetCPPSetSource$ref();
    var tmp_20 = appShouldResetCurrentOutputPathId$ref();
    var tmp_21 = appShouldResetFObjCPPHeader$ref();
    var tmp_22 = appShouldResetFObjKotlin$ref();
    var tmp_23 = appShouldResetFObjSwift$ref();
    var tmp_24 = appShouldResetInputFileDir$ref();
    var tmp_25 = appShouldResetOutputCPPHeader$ref();
    var tmp_26 = appShouldResetOutputCPPSDK$ref();
    var tmp_27 = appShouldResetOutputCPPSource$ref();
    var tmp_28 = appShouldResetOutputFile$ref();
    var tmp_29 = appShouldResetOutputFileContents$ref();
    var tmp_30 = appShouldResetOutputJSExport$ref();
    var tmp_31 = appShouldResetOutputKotlin$ref();
    var tmp_32 = appShouldResetOutputSwift$ref();
    var tmp_33 = appShouldResetSrcKotlin$ref();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, appShouldResetSrcSwift$ref()];
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.ma_1.registerFunction(AppProto$lambda(element));
    }
  }
  var AppProto_instance;
  function AppProto_getInstance() {
    if (AppProto_instance == null)
      new AppProto();
    return AppProto_instance;
  }
  function cppAPIHeader(prefixes) {
    var itemsText = '';
    var inductionVariable = 0;
    var last = prefixes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = prefixes[i];
        var tmp = itemsText;
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = name.toLowerCase();
        itemsText = tmp + replace('\n        void %PREFIX%Set(const QString &key, const QVariant &value);\n', '%PREFIX%', tmp$ret$1);
      }
       while (inductionVariable <= last);
    return replace('\nclass API: public QObject {\n    Q_OBJECT\n\n    public slots:\n%ITEMS%\n};\n', '%ITEMS%', itemsText);
  }
  function cppAPISource(prefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = prefixes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = prefixes[i];
        var tmp = o;
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = name.toLowerCase();
        o = tmp + replace('\nvoid API::%PREFIX%Set(const QString &key, const QVariant &value) {\n    auto skey = key.toStdString();\n    auto type = value.userType();\n\n    // Bool\n    if (type == QMetaType::Bool) {\n        ::%PREFIX%Set(skey, value.toBool());\n    }\n    // QString\n    else if (type == QMetaType::QString) {\n        ::%PREFIX%Set(skey, value.toString().toStdString().c_str());\n    }\n    // Unknown\n    else {\n        printf("ERR UI.%PREFIX%S unknown type for key \'%s\'\\n", skey.c_str());\n    }\n}\n', '%PREFIX%', tmp$ret$1);
      }
       while (inductionVariable <= last);
    return o;
  }
  function cppContextFieldFormatterHeader(name, type) {
    var template = '';
    switch (type) {
      case 'Bool':
        template = '\n        bool %FIELD%();\n';
        break;
      case 'Int':
        template = '\n        int %FIELD%();\n';
        break;
      case 'String':
        template = '\n        QString %FIELD%() const &;\n';
        break;
    }
    return replace(template, '%FIELD%', name);
  }
  function cppContextFieldFormatterSource(entityName, fieldName, type) {
    var template = '';
    switch (type) {
      case 'Bool':
        template = '\nbool %NAME%::%FIELD%() {\n    return KT.%NAME%.get_%FIELD%(ctx);\n}\n';
        break;
      case 'Int':
        template = '\nint %NAME%::%FIELD%() {\n    return KT.%NAME%.get_%FIELD%(ctx);\n}\n';
        break;
      case 'String':
        template = '\nQString %NAME%::%FIELD%() const & {\n    const char *raw = KT.%NAME%.get_%FIELD%(ctx);\n    QString str(raw);\n    KTSym->DisposeString(raw);\n    return str;\n}\n';
        break;
    }
    return replace(replace(template, '%FIELD%', fieldName), '%NAME%', entityName);
  }
  function cppContextFieldsHeader(contextIds, entityFields, fieldFormatter) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var contexts = [];
    var inductionVariable = 0;
    var last = contextIds.length;
    while (inductionVariable < last) {
      var id = contextIds[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_elvis_lhs = entityFields.z(id);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mapOf' call
        tmp = emptyMap();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var fields = tmp;
      var sortedFieldNames = sorted(fields.a1());
      var fieldsText = '';
      var _iterator__ex2g4s = sortedFieldNames.g();
      while (_iterator__ex2g4s.h()) {
        var name = _iterator__ex2g4s.i();
        var tmp1_elvis_lhs = fields.z(name);
        var type = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        fieldsText = fieldsText + fieldFormatter(name, type);
      }
      var tmp0 = contexts;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = [fieldsText];
      contexts = tmp0.concat(tmp$ret$7);
    }
    return contexts;
  }
  function cppContextFieldsSource(contextIds, entityFields, entityNames, fieldFormatter) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var inductionVariable = 0;
    var last = contextIds.length;
    while (inductionVariable < last) {
      var id = contextIds[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_elvis_lhs = entityNames[id];
      var entityName = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = entityFields.z(id);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mapOf' call
        tmp = emptyMap();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var fields = tmp;
      var sortedFieldNames = sorted(fields.a1());
      var text = '';
      var _iterator__ex2g4s = sortedFieldNames.g();
      while (_iterator__ex2g4s.h()) {
        var fieldName = _iterator__ex2g4s.i();
        var tmp2_elvis_lhs = fields.z(fieldName);
        var type = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        text = text + fieldFormatter(entityName, fieldName, type);
      }
      var tmp0 = items;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = [text];
      items = tmp0.concat(tmp$ret$7);
    }
    return items;
  }
  function cppContextsHeader(contextFields, contextPrefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = contextPrefixes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fieldsText = contextFields[i];
        var name = contextPrefixes[i];
        o = o + replace(replace('\nclass %NAME%Context {\n    public:\n        %NAME%Context(KTRef(%NAME%Context) ctx): ctx(ctx) { }\n\n%ITEMS%\n\n    private:\n        KTRef(%NAME%Context) ctx;\n};\n', '%ITEMS%', fieldsText), '%NAME%', name);
      }
       while (inductionVariable <= last);
    return o;
  }
  function cppEffectsHeader(entityPrefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = entityPrefixes.length;
    while (inductionVariable < last) {
      var name = entityPrefixes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      o = o + replace('\nclass %NAME%EffectRegistry {\n    public:\n        static void processOneliners();\n        static void registerOneliners(\n            KTRef(KDController) ctrl,\n            const std::vector<std::any> &items\n        );\n\n    private:\n        static std::vector<std::any> _items;\n};\n', '%NAME%', name);
    }
    return o;
  }
  function cppEffectsSource(entityPrefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = entityPrefixes.length;
    while (inductionVariable < last) {
      var name = entityPrefixes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = o;
      var tmp_0 = replace("\nstd::vector<std::any> %NAME%EffectRegistry::_items;\n\nvoid %NAME%EffectRegistry::processOneliners() {\n    auto %PREFIX%Ctx = KT.%PREFIX%CtrlCtx();\n    auto recentField = KT.%PREFIX%CtrlCtxField();\n\n    int halfCount = _items.size() / 2;\n    for (int i = 0; i < halfCount; ++i) {\n        auto effectField = std::any_cast<const char *>(_items[i * 2]);\n        if (strcmp(effectField, recentField) == 0) {\n            auto callback = std::any_cast<std::function<void(%NAME%Context)>>(_items[i * 2 + 1]);\n            auto c = %NAME%Context(%PREFIX%Ctx);\n            callback(c);\n        }\n    }\n\n    KTSym->DisposeString(recentField);\n}\n\nvoid %NAME%EffectRegistry::registerOneliners(\n    KTRef(KDController) ctrl,\n    const std::vector<std::any> &items\n) {\n    // This should only be run once. Yes, it's ugly\n    // but it keeps API consistent with other platforms.\n    KT.registerCallbackC(\n        ctrl,\n        (void *)&%NAME%EffectRegistry::processOneliners\n    );\n    _items = items;\n}\n", '%NAME%', name);
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      o = tmp + replace(tmp_0, '%PREFIX%', tmp$ret$1);
    }
    return o;
  }
  function cppEntityPrefixes(entityNames) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var inductionVariable = 0;
    var last = entityNames.length;
    while (inductionVariable < last) {
      var fullName = entityNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var nameLen = fullName.length;
      var suffixLen = 7;
      var name = substring(fullName, 0, nameLen - suffixLen | 0);
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = items;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [name];
      items = tmp$ret$3.concat(tmp$ret$6);
    }
    return items;
  }
  function cppSetHeader(entityPrefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = entityPrefixes.length;
    while (inductionVariable < last) {
      var prefix = entityPrefixes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = o;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = prefix.toLowerCase();
      o = tmp + replace('template<typename T> void %PREFIX%Set(const std::string &key, T value);\n', '%PREFIX%', tmp$ret$1);
    }
    return o;
  }
  function cppSetSource(entityPrefixes) {
    var o = '';
    var inductionVariable = 0;
    var last = entityPrefixes.length;
    while (inductionVariable < last) {
      var prefix = entityPrefixes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = o;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = prefix.toLowerCase();
      o = tmp + replace('template<> void %PREFIX%Set(\n    const std::string &key,\n    bool value\n) {\n    KT.KDController.set(KT.%PREFIX%Ctrl(), key.c_str(), KT.boolToAny(value));\n}\n\ntemplate<> void %PREFIX%Set(\n    const std::string &key,\n    const char *value\n) {\n    KT.KDController.set(KT.%PREFIX%Ctrl(), key.c_str(), KT.strToAny(value));\n}\n', '%PREFIX%', tmp$ret$1);
    }
    return o;
  }
  function get_embKotlin64() {
    return embKotlin64;
  }
  var embKotlin64;
  function get_embSwift64() {
    return embSwift64;
  }
  var embSwift64;
  function fobjCPPHeader(fieldNames) {
    var fstructContents = '';
    var inductionVariable = 0;
    var last = fieldNames.length;
    while (inductionVariable < last) {
      var name = fieldNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      fstructContents = fstructContents + replace('    static inline constexpr const char *%NAME% = "%NAME%";\n', '%NAME%', name);
    }
    var fobjPropertyContents = '';
    var inductionVariable_0 = 0;
    var last_0 = fieldNames.length;
    while (inductionVariable_0 < last_0) {
      var name_0 = fieldNames[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      fobjPropertyContents = fobjPropertyContents + replace('    Q_PROPERTY(QString %NAME% READ key_%NAME% CONSTANT)\n', '%NAME%', name_0);
    }
    var fobjImplContents = '';
    var inductionVariable_1 = 0;
    var last_1 = fieldNames.length;
    while (inductionVariable_1 < last_1) {
      var name_1 = fieldNames[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      fobjImplContents = fobjImplContents + replace('        QString key_%NAME%() const { return F.%NAME%; }\n', '%NAME%', name_1);
    }
    return replace(replace(replace('\n// Special structure to reference keys with a compile time check\nstruct FStruct {\n%FSTRUCT_ITEMS%\n};\ninline FStruct F;\n\n// Special structure to reference keys in QML\nclass FObj: public QObject {\n    Q_OBJECT\n%PROPERTY_ITEMS%\n\n    public:\n        FObj(): QObject() { }\n%IMPL_ITEMS%\n};\n', '%FSTRUCT_ITEMS%', fstructContents), '%IMPL_ITEMS%', fobjImplContents), '%PROPERTY_ITEMS%', fobjPropertyContents);
  }
  function fobjFields(entityFields, ids) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.set' call
    d.c2('none', true);
    var inductionVariable = 0;
    var last = ids.length;
    while (inductionVariable < last) {
      var id = ids[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var fieldTypes = ensureNotNull(entityFields.z(id));
      var _iterator__ex2g4s = fieldTypes.a1().g();
      while (_iterator__ex2g4s.h()) {
        var fieldName = _iterator__ex2g4s.i();
        // Inline function 'kotlin.collections.set' call
        d.c2(fieldName, true);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = sorted(d.a1());
    return copyToArray(this_0);
  }
  function fobjKotlin(fieldNames) {
    var itemContents = '';
    var inductionVariable = 0;
    var last = fieldNames.length;
    while (inductionVariable < last) {
      var name = fieldNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      itemContents = itemContents + replace('    const val %NAME% = "%NAME%"\n', '%NAME%', name);
    }
    return replace('\n// Special object to reference context fields with a compile time validation\n@JsExport\nobject F {\n%ITEMS%\n}\n', '%ITEMS%', itemContents);
  }
  function fobjSwift(fieldNames) {
    var itemContents = '';
    var inductionVariable = 0;
    var last = fieldNames.length;
    while (inductionVariable < last) {
      var name = fieldNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      itemContents = itemContents + replace('    static let %NAME% = "%NAME%"\n', '%NAME%', name);
    }
    return replace('\n// Special object to reference context fields with a compile time validation\nstruct F {\n%ITEMS%\n}\n', '%ITEMS%', itemContents);
  }
  function genKotlinComment(comment) {
    // Inline function 'kotlin.text.isEmpty' call
    if (!(charSequenceLength(comment) === 0)) {
      return '// ' + comment;
    }
    return '';
  }
  function genKotlinEntitiesFile(entityComments, entityFieldComments, entityFields, entityNames, entityPrefixes, entityTypes, rawKotlin) {
    var s = rawKotlin;
    var id = 0;
    var inductionVariable = 0;
    var last = entityNames.length;
    while (inductionVariable < last) {
      var name = entityNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_elvis_lhs = entityComments.z(id);
      var comment = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = entityPrefixes.z(id);
      var prefix = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = entityTypes.z(id);
      var type = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
      var tmp3_elvis_lhs = entityFieldComments.z(id);
      var tmp;
      if (tmp3_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mapOf' call
        tmp = emptyMap();
      } else {
        tmp = tmp3_elvis_lhs;
      }
      var fieldComments = tmp;
      var tmp4_elvis_lhs = entityFields.z(id);
      var tmp_0;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mapOf' call
        tmp_0 = emptyMap();
      } else {
        tmp_0 = tmp4_elvis_lhs;
      }
      var fields = tmp_0;
      s = s + genKotlinEntity(comment, fieldComments, fields, name, prefix, type);
      id = id + 1 | 0;
    }
    return s;
  }
  function genKotlinEntity(comment, fieldComments, fields, name, prefix, type) {
    var template = '\n%COMMENT%\n%PREFIX%\ndata class %NAME%(\n%FIELDS%\n) {}\n';
    if (type === 'context') {
      template = '\n%COMMENT%\n%PREFIX%\ndata class %NAME%(\n%FIELDS%\n    override var recentField: String = "",\n): KDContext {\n    override fun <T> field(name: String): T {\n%GETTERS%        }\n        return "unknown-field-name" as T\n    }\n\n    override fun selfCopy(): KDContext {\n        return this.copy()\n    }\n\n    override fun setField(\n        name: String,\n        value: Any?\n    ) {\n%SETTERS%        }\n    }\n}\n';
    }
    var genComment = genKotlinComment(comment);
    var genFields = genKotlinFields(fieldComments, fields);
    var genGetters = genKotlinGetters(fields);
    var genSetters = genKotlinSetters(fields);
    return replace(replace(replace(replace(replace(replace(template, '%NAME%', name), '%COMMENT%', genComment), '%FIELDS%', genFields), '%GETTERS%', genGetters), '%PREFIX%', prefix), '%SETTERS%', genSetters);
  }
  function genKotlinField(comment, name, ymlType) {
    var contents = '';
    // Inline function 'kotlin.text.isEmpty' call
    if (!(charSequenceLength(comment) === 0)) {
      contents = contents + ('    // ' + comment + '\n');
    }
    var default_0 = genKotlinFieldDefault(ymlType);
    var type = genKotlinFieldType(ymlType);
    contents = contents + replace(replace(replace('    var %NAME%: %TYPE% = %DEFAULT%,', '%NAME%', name), '%TYPE%', type), '%DEFAULT%', default_0);
    return contents;
  }
  function genKotlinFieldDefault(type) {
    if (type === 'Bool') {
      return 'false';
    }
    if (type === 'Double') {
      return '0';
    }
    if (type === 'Int') {
      return '0';
    }
    if (type === 'Long') {
      return '0';
    }
    if (type === 'String') {
      return '""';
    }
    if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      return 'arrayOf()';
    }
    if (startsWith(type, '[') && endsWith(type, ']') && contains(type, ': ')) {
      return 'mapOf()';
    }
    return type + '()';
  }
  function genKotlinFields(fieldComments, fields) {
    var contents = '';
    var sortedFieldNames = sorted(fields.a1());
    var _iterator__ex2g4s = sortedFieldNames.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = contents;
      if (!(charSequenceLength(this_0) === 0)) {
        contents = contents + '\n';
      }
      var tmp0_elvis_lhs = fieldComments.z(name);
      var comment = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = fields.z(name);
      var type = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      contents = contents + genKotlinField(comment, name, type);
    }
    return contents;
  }
  function genKotlinFieldType(type) {
    if (type === 'Bool') {
      return 'Boolean';
    }
    if (type === 'Double') {
      return 'Double';
    }
    if (type === 'Long') {
      return 'Long';
    }
    if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      var innerString = substring(type, 1, type.length - 1 | 0);
      var innerType = genKotlinFieldType(innerString);
      return 'Array<' + innerType + '>';
    }
    if (startsWith(type, '[') && endsWith(type, ']') && contains(type, ': ')) {
      var innerString_0 = substring(type, 1, type.length - 1 | 0);
      var parts = split(innerString_0, [': '], VOID, 2);
      var innerTypeA = genKotlinFieldType(first(parts));
      var innerTypeB = genKotlinFieldType(last(parts));
      return 'Map<' + innerTypeA + ', ' + innerTypeB + '>';
    }
    return type;
  }
  function genKotlinGetter(isFirst, name) {
    var template = '        } else if (name == "%NAME%") {\n            return %NAME% as T\n';
    if (isFirst) {
      template = '        if (name == "%NAME%") {\n            return %NAME% as T\n';
    }
    var contents = '';
    contents = contents + replace(template, '%NAME%', name);
    return contents;
  }
  function genKotlinGetters(fields) {
    var contents = '';
    var isFirst = true;
    var sortedFieldNames = sorted(fields.a1());
    var _iterator__ex2g4s = sortedFieldNames.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      contents = contents + genKotlinGetter(isFirst, name);
      isFirst = false;
    }
    return contents;
  }
  function genKotlinSetter(isFirst, name, ymlType) {
    var template = '        } else if (name == "%NAME%") {\n            %NAME% = value as %TYPE%\n';
    if (isFirst) {
      template = '        if (name == "%NAME%") {\n            %NAME% = value as %TYPE%\n';
    }
    var contents = '';
    var type = genKotlinFieldType(ymlType);
    contents = contents + replace(replace(template, '%NAME%', name), '%TYPE%', type);
    return contents;
  }
  function genKotlinSetters(fields) {
    var contents = '';
    var isFirst = true;
    var sortedFieldNames = sorted(fields.a1());
    var _iterator__ex2g4s = sortedFieldNames.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = fields.z(name);
      var type = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      contents = contents + genKotlinSetter(isFirst, name, type);
      isFirst = false;
    }
    return contents;
  }
  var KD_FIELD_NONE;
  function AppContext(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) {
    var tmp;
    if (arguments_0 === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    } else {
      tmp = arguments_0;
    }
    arguments_0 = tmp;
    consoleOutput = consoleOutput === VOID ? '' : consoleOutput;
    cppAPIHeader = cppAPIHeader === VOID ? '' : cppAPIHeader;
    cppAPISource = cppAPISource === VOID ? '' : cppAPISource;
    cppContextsHeader = cppContextsHeader === VOID ? '' : cppContextsHeader;
    cppContextsSource = cppContextsSource === VOID ? '' : cppContextsSource;
    cppEffectsHeader = cppEffectsHeader === VOID ? '' : cppEffectsHeader;
    cppEffectsSource = cppEffectsSource === VOID ? '' : cppEffectsSource;
    cppSetHeader = cppSetHeader === VOID ? '' : cppSetHeader;
    cppSetSource = cppSetSource === VOID ? '' : cppSetSource;
    currentOutputPathId = currentOutputPathId === VOID ? 0 : currentOutputPathId;
    didLaunch = didLaunch === VOID ? false : didLaunch;
    didWriteOutputFile = didWriteOutputFile === VOID ? false : didWriteOutputFile;
    var tmp_0;
    if (entityComments === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_0 = emptyMap();
    } else {
      tmp_0 = entityComments;
    }
    entityComments = tmp_0;
    var tmp_1;
    if (entityFieldComments === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = entityFieldComments;
    }
    entityFieldComments = tmp_1;
    var tmp_2;
    if (entityFields === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    } else {
      tmp_2 = entityFields;
    }
    entityFields = tmp_2;
    var tmp_3;
    if (entityNames === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = [];
    } else {
      tmp_3 = entityNames;
    }
    entityNames = tmp_3;
    var tmp_4;
    if (entityPrefixesKotlin === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_4 = emptyMap();
    } else {
      tmp_4 = entityPrefixesKotlin;
    }
    entityPrefixesKotlin = tmp_4;
    var tmp_5;
    if (entityTypes === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_5 = emptyMap();
    } else {
      tmp_5 = entityTypes;
    }
    entityTypes = tmp_5;
    fobjCPPHeader = fobjCPPHeader === VOID ? '' : fobjCPPHeader;
    fobjCPPSource = fobjCPPSource === VOID ? '' : fobjCPPSource;
    fobjKotlin = fobjKotlin === VOID ? '' : fobjKotlin;
    fobjSwift = fobjSwift === VOID ? '' : fobjSwift;
    inputFile = inputFile === VOID ? '' : inputFile;
    inputFileDir = inputFileDir === VOID ? '' : inputFileDir;
    var tmp_6;
    if (inputFileLines === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = [];
    } else {
      tmp_6 = inputFileLines;
    }
    inputFileLines = tmp_6;
    isDbg = isDbg === VOID ? false : isDbg;
    outputCPPHeader = outputCPPHeader === VOID ? '' : outputCPPHeader;
    outputCPPSDK = outputCPPSDK === VOID ? '' : outputCPPSDK;
    outputCPPSource = outputCPPSource === VOID ? '' : outputCPPSource;
    outputEntityContents = outputEntityContents === VOID ? '' : outputEntityContents;
    outputFile = outputFile === VOID ? '' : outputFile;
    outputFileContents = outputFileContents === VOID ? '' : outputFileContents;
    outputJSExport = outputJSExport === VOID ? '' : outputJSExport;
    outputKotlin = outputKotlin === VOID ? '' : outputKotlin;
    var tmp_7;
    if (outputPaths === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_7 = [];
    } else {
      tmp_7 = outputPaths;
    }
    outputPaths = tmp_7;
    outputSwift = outputSwift === VOID ? '' : outputSwift;
    rawCPPSDK = rawCPPSDK === VOID ? '' : rawCPPSDK;
    rawKotlin = rawKotlin === VOID ? '' : rawKotlin;
    rawSwift = rawSwift === VOID ? '' : rawSwift;
    srcKotlin = srcKotlin === VOID ? '' : srcKotlin;
    srcSwift = srcSwift === VOID ? '' : srcSwift;
    recentField = recentField === VOID ? '' : recentField;
    this.arguments = arguments_0;
    this.consoleOutput = consoleOutput;
    this.cppAPIHeader = cppAPIHeader;
    this.cppAPISource = cppAPISource;
    this.cppContextsHeader = cppContextsHeader;
    this.cppContextsSource = cppContextsSource;
    this.cppEffectsHeader = cppEffectsHeader;
    this.cppEffectsSource = cppEffectsSource;
    this.cppSetHeader = cppSetHeader;
    this.cppSetSource = cppSetSource;
    this.currentOutputPathId = currentOutputPathId;
    this.didLaunch = didLaunch;
    this.didWriteOutputFile = didWriteOutputFile;
    this.entityComments = entityComments;
    this.entityFieldComments = entityFieldComments;
    this.entityFields = entityFields;
    this.entityNames = entityNames;
    this.entityPrefixesKotlin = entityPrefixesKotlin;
    this.entityTypes = entityTypes;
    this.fobjCPPHeader = fobjCPPHeader;
    this.fobjCPPSource = fobjCPPSource;
    this.fobjKotlin = fobjKotlin;
    this.fobjSwift = fobjSwift;
    this.inputFile = inputFile;
    this.inputFileDir = inputFileDir;
    this.inputFileLines = inputFileLines;
    this.isDbg = isDbg;
    this.outputCPPHeader = outputCPPHeader;
    this.outputCPPSDK = outputCPPSDK;
    this.outputCPPSource = outputCPPSource;
    this.outputEntityContents = outputEntityContents;
    this.outputFile = outputFile;
    this.outputFileContents = outputFileContents;
    this.outputJSExport = outputJSExport;
    this.outputKotlin = outputKotlin;
    this.outputPaths = outputPaths;
    this.outputSwift = outputSwift;
    this.rawCPPSDK = rawCPPSDK;
    this.rawKotlin = rawKotlin;
    this.rawSwift = rawSwift;
    this.srcKotlin = srcKotlin;
    this.srcSwift = srcSwift;
    this.na_1 = recentField;
  }
  protoOf(AppContext).oa = function (_set____db54di) {
    this.arguments = _set____db54di;
  };
  protoOf(AppContext).pa = function () {
    return this.arguments;
  };
  protoOf(AppContext).qa = function (_set____db54di) {
    this.consoleOutput = _set____db54di;
  };
  protoOf(AppContext).ra = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).sa = function (_set____db54di) {
    this.cppAPIHeader = _set____db54di;
  };
  protoOf(AppContext).ta = function () {
    return this.cppAPIHeader;
  };
  protoOf(AppContext).ua = function (_set____db54di) {
    this.cppAPISource = _set____db54di;
  };
  protoOf(AppContext).va = function () {
    return this.cppAPISource;
  };
  protoOf(AppContext).wa = function (_set____db54di) {
    this.cppContextsHeader = _set____db54di;
  };
  protoOf(AppContext).xa = function () {
    return this.cppContextsHeader;
  };
  protoOf(AppContext).ya = function (_set____db54di) {
    this.cppContextsSource = _set____db54di;
  };
  protoOf(AppContext).za = function () {
    return this.cppContextsSource;
  };
  protoOf(AppContext).ab = function (_set____db54di) {
    this.cppEffectsHeader = _set____db54di;
  };
  protoOf(AppContext).bb = function () {
    return this.cppEffectsHeader;
  };
  protoOf(AppContext).cb = function (_set____db54di) {
    this.cppEffectsSource = _set____db54di;
  };
  protoOf(AppContext).db = function () {
    return this.cppEffectsSource;
  };
  protoOf(AppContext).eb = function (_set____db54di) {
    this.cppSetHeader = _set____db54di;
  };
  protoOf(AppContext).fb = function () {
    return this.cppSetHeader;
  };
  protoOf(AppContext).gb = function (_set____db54di) {
    this.cppSetSource = _set____db54di;
  };
  protoOf(AppContext).hb = function () {
    return this.cppSetSource;
  };
  protoOf(AppContext).ib = function (_set____db54di) {
    this.currentOutputPathId = _set____db54di;
  };
  protoOf(AppContext).jb = function () {
    return this.currentOutputPathId;
  };
  protoOf(AppContext).kb = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(AppContext).lb = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).mb = function (_set____db54di) {
    this.didWriteOutputFile = _set____db54di;
  };
  protoOf(AppContext).nb = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).ob = function (_set____db54di) {
    this.entityComments = _set____db54di;
  };
  protoOf(AppContext).pb = function () {
    return this.entityComments;
  };
  protoOf(AppContext).qb = function (_set____db54di) {
    this.entityFieldComments = _set____db54di;
  };
  protoOf(AppContext).rb = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).sb = function (_set____db54di) {
    this.entityFields = _set____db54di;
  };
  protoOf(AppContext).tb = function () {
    return this.entityFields;
  };
  protoOf(AppContext).ub = function (_set____db54di) {
    this.entityNames = _set____db54di;
  };
  protoOf(AppContext).vb = function () {
    return this.entityNames;
  };
  protoOf(AppContext).wb = function (_set____db54di) {
    this.entityPrefixesKotlin = _set____db54di;
  };
  protoOf(AppContext).xb = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).yb = function (_set____db54di) {
    this.entityTypes = _set____db54di;
  };
  protoOf(AppContext).zb = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).ac = function (_set____db54di) {
    this.fobjCPPHeader = _set____db54di;
  };
  protoOf(AppContext).bc = function () {
    return this.fobjCPPHeader;
  };
  protoOf(AppContext).cc = function (_set____db54di) {
    this.fobjCPPSource = _set____db54di;
  };
  protoOf(AppContext).dc = function () {
    return this.fobjCPPSource;
  };
  protoOf(AppContext).ec = function (_set____db54di) {
    this.fobjKotlin = _set____db54di;
  };
  protoOf(AppContext).fc = function () {
    return this.fobjKotlin;
  };
  protoOf(AppContext).gc = function (_set____db54di) {
    this.fobjSwift = _set____db54di;
  };
  protoOf(AppContext).hc = function () {
    return this.fobjSwift;
  };
  protoOf(AppContext).ic = function (_set____db54di) {
    this.inputFile = _set____db54di;
  };
  protoOf(AppContext).jc = function () {
    return this.inputFile;
  };
  protoOf(AppContext).kc = function (_set____db54di) {
    this.inputFileDir = _set____db54di;
  };
  protoOf(AppContext).lc = function () {
    return this.inputFileDir;
  };
  protoOf(AppContext).mc = function (_set____db54di) {
    this.inputFileLines = _set____db54di;
  };
  protoOf(AppContext).nc = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).oc = function (_set____db54di) {
    this.isDbg = _set____db54di;
  };
  protoOf(AppContext).pc = function () {
    return this.isDbg;
  };
  protoOf(AppContext).qc = function (_set____db54di) {
    this.outputCPPHeader = _set____db54di;
  };
  protoOf(AppContext).rc = function () {
    return this.outputCPPHeader;
  };
  protoOf(AppContext).sc = function (_set____db54di) {
    this.outputCPPSDK = _set____db54di;
  };
  protoOf(AppContext).tc = function () {
    return this.outputCPPSDK;
  };
  protoOf(AppContext).uc = function (_set____db54di) {
    this.outputCPPSource = _set____db54di;
  };
  protoOf(AppContext).vc = function () {
    return this.outputCPPSource;
  };
  protoOf(AppContext).wc = function (_set____db54di) {
    this.outputEntityContents = _set____db54di;
  };
  protoOf(AppContext).xc = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).yc = function (_set____db54di) {
    this.outputFile = _set____db54di;
  };
  protoOf(AppContext).zc = function () {
    return this.outputFile;
  };
  protoOf(AppContext).ad = function (_set____db54di) {
    this.outputFileContents = _set____db54di;
  };
  protoOf(AppContext).bd = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).cd = function (_set____db54di) {
    this.outputJSExport = _set____db54di;
  };
  protoOf(AppContext).dd = function () {
    return this.outputJSExport;
  };
  protoOf(AppContext).ed = function (_set____db54di) {
    this.outputKotlin = _set____db54di;
  };
  protoOf(AppContext).fd = function () {
    return this.outputKotlin;
  };
  protoOf(AppContext).gd = function (_set____db54di) {
    this.outputPaths = _set____db54di;
  };
  protoOf(AppContext).hd = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).id = function (_set____db54di) {
    this.outputSwift = _set____db54di;
  };
  protoOf(AppContext).jd = function () {
    return this.outputSwift;
  };
  protoOf(AppContext).kd = function (_set____db54di) {
    this.rawCPPSDK = _set____db54di;
  };
  protoOf(AppContext).ld = function () {
    return this.rawCPPSDK;
  };
  protoOf(AppContext).md = function (_set____db54di) {
    this.rawKotlin = _set____db54di;
  };
  protoOf(AppContext).nd = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).od = function (_set____db54di) {
    this.rawSwift = _set____db54di;
  };
  protoOf(AppContext).pd = function () {
    return this.rawSwift;
  };
  protoOf(AppContext).qd = function (_set____db54di) {
    this.srcKotlin = _set____db54di;
  };
  protoOf(AppContext).rd = function () {
    return this.srcKotlin;
  };
  protoOf(AppContext).sd = function (_set____db54di) {
    this.srcSwift = _set____db54di;
  };
  protoOf(AppContext).td = function () {
    return this.srcSwift;
  };
  protoOf(AppContext).ud = function (_set____db54di) {
    this.na_1 = _set____db54di;
  };
  protoOf(AppContext).vd = function () {
    return this.na_1;
  };
  protoOf(AppContext).field = function (name) {
    switch (name) {
      case 'arguments':
        var tmp = this.arguments;
        return !(tmp == null) ? tmp : THROW_CCE();
      case 'consoleOutput':
        var tmp_0 = this.consoleOutput;
        return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      case 'cppAPIHeader':
        var tmp_1 = this.cppAPIHeader;
        return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
      case 'cppAPISource':
        var tmp_2 = this.cppAPISource;
        return !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      case 'cppContextsHeader':
        var tmp_3 = this.cppContextsHeader;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'cppContextsSource':
        var tmp_4 = this.cppContextsSource;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'cppEffectsHeader':
        var tmp_5 = this.cppEffectsHeader;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      case 'cppEffectsSource':
        var tmp_6 = this.cppEffectsSource;
        return !(tmp_6 == null) ? tmp_6 : THROW_CCE();
      case 'cppSetHeader':
        var tmp_7 = this.cppSetHeader;
        return !(tmp_7 == null) ? tmp_7 : THROW_CCE();
      case 'cppSetSource':
        var tmp_8 = this.cppSetSource;
        return !(tmp_8 == null) ? tmp_8 : THROW_CCE();
      case 'currentOutputPathId':
        var tmp_9 = this.currentOutputPathId;
        return !(tmp_9 == null) ? tmp_9 : THROW_CCE();
      case 'didLaunch':
        var tmp_10 = this.didLaunch;
        return !(tmp_10 == null) ? tmp_10 : THROW_CCE();
      case 'didWriteOutputFile':
        var tmp_11 = this.didWriteOutputFile;
        return !(tmp_11 == null) ? tmp_11 : THROW_CCE();
      case 'entityComments':
        var tmp_12 = this.entityComments;
        return !(tmp_12 == null) ? tmp_12 : THROW_CCE();
      case 'entityFieldComments':
        var tmp_13 = this.entityFieldComments;
        return !(tmp_13 == null) ? tmp_13 : THROW_CCE();
      case 'entityFields':
        var tmp_14 = this.entityFields;
        return !(tmp_14 == null) ? tmp_14 : THROW_CCE();
      case 'entityNames':
        var tmp_15 = this.entityNames;
        return !(tmp_15 == null) ? tmp_15 : THROW_CCE();
      case 'entityPrefixesKotlin':
        var tmp_16 = this.entityPrefixesKotlin;
        return !(tmp_16 == null) ? tmp_16 : THROW_CCE();
      case 'entityTypes':
        var tmp_17 = this.entityTypes;
        return !(tmp_17 == null) ? tmp_17 : THROW_CCE();
      case 'fobjCPPHeader':
        var tmp_18 = this.fobjCPPHeader;
        return !(tmp_18 == null) ? tmp_18 : THROW_CCE();
      case 'fobjCPPSource':
        var tmp_19 = this.fobjCPPSource;
        return !(tmp_19 == null) ? tmp_19 : THROW_CCE();
      case 'fobjKotlin':
        var tmp_20 = this.fobjKotlin;
        return !(tmp_20 == null) ? tmp_20 : THROW_CCE();
      case 'fobjSwift':
        var tmp_21 = this.fobjSwift;
        return !(tmp_21 == null) ? tmp_21 : THROW_CCE();
      case 'inputFile':
        var tmp_22 = this.inputFile;
        return !(tmp_22 == null) ? tmp_22 : THROW_CCE();
      case 'inputFileDir':
        var tmp_23 = this.inputFileDir;
        return !(tmp_23 == null) ? tmp_23 : THROW_CCE();
      case 'inputFileLines':
        var tmp_24 = this.inputFileLines;
        return !(tmp_24 == null) ? tmp_24 : THROW_CCE();
      case 'isDbg':
        var tmp_25 = this.isDbg;
        return !(tmp_25 == null) ? tmp_25 : THROW_CCE();
      case 'outputCPPHeader':
        var tmp_26 = this.outputCPPHeader;
        return !(tmp_26 == null) ? tmp_26 : THROW_CCE();
      case 'outputCPPSDK':
        var tmp_27 = this.outputCPPSDK;
        return !(tmp_27 == null) ? tmp_27 : THROW_CCE();
      case 'outputCPPSource':
        var tmp_28 = this.outputCPPSource;
        return !(tmp_28 == null) ? tmp_28 : THROW_CCE();
      case 'outputEntityContents':
        var tmp_29 = this.outputEntityContents;
        return !(tmp_29 == null) ? tmp_29 : THROW_CCE();
      case 'outputFile':
        var tmp_30 = this.outputFile;
        return !(tmp_30 == null) ? tmp_30 : THROW_CCE();
      case 'outputFileContents':
        var tmp_31 = this.outputFileContents;
        return !(tmp_31 == null) ? tmp_31 : THROW_CCE();
      case 'outputJSExport':
        var tmp_32 = this.outputJSExport;
        return !(tmp_32 == null) ? tmp_32 : THROW_CCE();
      case 'outputKotlin':
        var tmp_33 = this.outputKotlin;
        return !(tmp_33 == null) ? tmp_33 : THROW_CCE();
      case 'outputPaths':
        var tmp_34 = this.outputPaths;
        return !(tmp_34 == null) ? tmp_34 : THROW_CCE();
      case 'outputSwift':
        var tmp_35 = this.outputSwift;
        return !(tmp_35 == null) ? tmp_35 : THROW_CCE();
      case 'rawCPPSDK':
        var tmp_36 = this.rawCPPSDK;
        return !(tmp_36 == null) ? tmp_36 : THROW_CCE();
      case 'rawKotlin':
        var tmp_37 = this.rawKotlin;
        return !(tmp_37 == null) ? tmp_37 : THROW_CCE();
      case 'rawSwift':
        var tmp_38 = this.rawSwift;
        return !(tmp_38 == null) ? tmp_38 : THROW_CCE();
      case 'srcKotlin':
        var tmp_39 = this.srcKotlin;
        return !(tmp_39 == null) ? tmp_39 : THROW_CCE();
      case 'srcSwift':
        var tmp_40 = this.srcSwift;
        return !(tmp_40 == null) ? tmp_40 : THROW_CCE();
    }
    return !('unknown-field-name' == null) ? 'unknown-field-name' : THROW_CCE();
  };
  protoOf(AppContext).selfCopy = function () {
    return this.copy();
  };
  protoOf(AppContext).setField = function (name, value) {
    switch (name) {
      case 'arguments':
        var tmp = this;
        tmp.arguments = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'consoleOutput':
        var tmp_0 = this;
        tmp_0.consoleOutput = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppAPIHeader':
        var tmp_1 = this;
        tmp_1.cppAPIHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppAPISource':
        var tmp_2 = this;
        tmp_2.cppAPISource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppContextsHeader':
        var tmp_3 = this;
        tmp_3.cppContextsHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppContextsSource':
        var tmp_4 = this;
        tmp_4.cppContextsSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppEffectsHeader':
        var tmp_5 = this;
        tmp_5.cppEffectsHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppEffectsSource':
        var tmp_6 = this;
        tmp_6.cppEffectsSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppSetHeader':
        var tmp_7 = this;
        tmp_7.cppSetHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppSetSource':
        var tmp_8 = this;
        tmp_8.cppSetSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'currentOutputPathId':
        var tmp_9 = this;
        tmp_9.currentOutputPathId = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'didLaunch':
        var tmp_10 = this;
        tmp_10.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didWriteOutputFile':
        var tmp_11 = this;
        tmp_11.didWriteOutputFile = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'entityComments':
        var tmp_12 = this;
        tmp_12.entityComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFieldComments':
        var tmp_13 = this;
        tmp_13.entityFieldComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFields':
        var tmp_14 = this;
        tmp_14.entityFields = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityNames':
        var tmp_15 = this;
        tmp_15.entityNames = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'entityPrefixesKotlin':
        var tmp_16 = this;
        tmp_16.entityPrefixesKotlin = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityTypes':
        var tmp_17 = this;
        tmp_17.entityTypes = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'fobjCPPHeader':
        var tmp_18 = this;
        tmp_18.fobjCPPHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjCPPSource':
        var tmp_19 = this;
        tmp_19.fobjCPPSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjKotlin':
        var tmp_20 = this;
        tmp_20.fobjKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjSwift':
        var tmp_21 = this;
        tmp_21.fobjSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFile':
        var tmp_22 = this;
        tmp_22.inputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFileDir':
        var tmp_23 = this;
        tmp_23.inputFileDir = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFileLines':
        var tmp_24 = this;
        tmp_24.inputFileLines = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'isDbg':
        var tmp_25 = this;
        tmp_25.isDbg = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPHeader':
        var tmp_26 = this;
        tmp_26.outputCPPHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPSDK':
        var tmp_27 = this;
        tmp_27.outputCPPSDK = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPSource':
        var tmp_28 = this;
        tmp_28.outputCPPSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputEntityContents':
        var tmp_29 = this;
        tmp_29.outputEntityContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFile':
        var tmp_30 = this;
        tmp_30.outputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFileContents':
        var tmp_31 = this;
        tmp_31.outputFileContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputJSExport':
        var tmp_32 = this;
        tmp_32.outputJSExport = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputKotlin':
        var tmp_33 = this;
        tmp_33.outputKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputPaths':
        var tmp_34 = this;
        tmp_34.outputPaths = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'outputSwift':
        var tmp_35 = this;
        tmp_35.outputSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawCPPSDK':
        var tmp_36 = this;
        tmp_36.rawCPPSDK = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawKotlin':
        var tmp_37 = this;
        tmp_37.rawKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawSwift':
        var tmp_38 = this;
        tmp_38.rawSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'srcKotlin':
        var tmp_39 = this;
        tmp_39.srcKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'srcSwift':
        var tmp_40 = this;
        tmp_40.srcSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
    }
  };
  protoOf(AppContext).ka = function () {
    return this.arguments;
  };
  protoOf(AppContext).la = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).wd = function () {
    return this.cppAPIHeader;
  };
  protoOf(AppContext).xd = function () {
    return this.cppAPISource;
  };
  protoOf(AppContext).yd = function () {
    return this.cppContextsHeader;
  };
  protoOf(AppContext).zd = function () {
    return this.cppContextsSource;
  };
  protoOf(AppContext).ae = function () {
    return this.cppEffectsHeader;
  };
  protoOf(AppContext).be = function () {
    return this.cppEffectsSource;
  };
  protoOf(AppContext).ce = function () {
    return this.cppSetHeader;
  };
  protoOf(AppContext).de = function () {
    return this.cppSetSource;
  };
  protoOf(AppContext).ee = function () {
    return this.currentOutputPathId;
  };
  protoOf(AppContext).fe = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).ge = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).he = function () {
    return this.entityComments;
  };
  protoOf(AppContext).ie = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).je = function () {
    return this.entityFields;
  };
  protoOf(AppContext).ke = function () {
    return this.entityNames;
  };
  protoOf(AppContext).le = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).me = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).ne = function () {
    return this.fobjCPPHeader;
  };
  protoOf(AppContext).oe = function () {
    return this.fobjCPPSource;
  };
  protoOf(AppContext).pe = function () {
    return this.fobjKotlin;
  };
  protoOf(AppContext).qe = function () {
    return this.fobjSwift;
  };
  protoOf(AppContext).re = function () {
    return this.inputFile;
  };
  protoOf(AppContext).se = function () {
    return this.inputFileDir;
  };
  protoOf(AppContext).te = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).ue = function () {
    return this.isDbg;
  };
  protoOf(AppContext).ve = function () {
    return this.outputCPPHeader;
  };
  protoOf(AppContext).we = function () {
    return this.outputCPPSDK;
  };
  protoOf(AppContext).xe = function () {
    return this.outputCPPSource;
  };
  protoOf(AppContext).ye = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).ze = function () {
    return this.outputFile;
  };
  protoOf(AppContext).af = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).bf = function () {
    return this.outputJSExport;
  };
  protoOf(AppContext).cf = function () {
    return this.outputKotlin;
  };
  protoOf(AppContext).df = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).ef = function () {
    return this.outputSwift;
  };
  protoOf(AppContext).ff = function () {
    return this.rawCPPSDK;
  };
  protoOf(AppContext).gf = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).hf = function () {
    return this.rawSwift;
  };
  protoOf(AppContext).if = function () {
    return this.srcKotlin;
  };
  protoOf(AppContext).jf = function () {
    return this.srcSwift;
  };
  protoOf(AppContext).kf = function () {
    return this.na_1;
  };
  protoOf(AppContext).lf = function (arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) {
    return new AppContext(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField);
  };
  protoOf(AppContext).copy = function (arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField, $super) {
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    consoleOutput = consoleOutput === VOID ? this.consoleOutput : consoleOutput;
    cppAPIHeader = cppAPIHeader === VOID ? this.cppAPIHeader : cppAPIHeader;
    cppAPISource = cppAPISource === VOID ? this.cppAPISource : cppAPISource;
    cppContextsHeader = cppContextsHeader === VOID ? this.cppContextsHeader : cppContextsHeader;
    cppContextsSource = cppContextsSource === VOID ? this.cppContextsSource : cppContextsSource;
    cppEffectsHeader = cppEffectsHeader === VOID ? this.cppEffectsHeader : cppEffectsHeader;
    cppEffectsSource = cppEffectsSource === VOID ? this.cppEffectsSource : cppEffectsSource;
    cppSetHeader = cppSetHeader === VOID ? this.cppSetHeader : cppSetHeader;
    cppSetSource = cppSetSource === VOID ? this.cppSetSource : cppSetSource;
    currentOutputPathId = currentOutputPathId === VOID ? this.currentOutputPathId : currentOutputPathId;
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    didWriteOutputFile = didWriteOutputFile === VOID ? this.didWriteOutputFile : didWriteOutputFile;
    entityComments = entityComments === VOID ? this.entityComments : entityComments;
    entityFieldComments = entityFieldComments === VOID ? this.entityFieldComments : entityFieldComments;
    entityFields = entityFields === VOID ? this.entityFields : entityFields;
    entityNames = entityNames === VOID ? this.entityNames : entityNames;
    entityPrefixesKotlin = entityPrefixesKotlin === VOID ? this.entityPrefixesKotlin : entityPrefixesKotlin;
    entityTypes = entityTypes === VOID ? this.entityTypes : entityTypes;
    fobjCPPHeader = fobjCPPHeader === VOID ? this.fobjCPPHeader : fobjCPPHeader;
    fobjCPPSource = fobjCPPSource === VOID ? this.fobjCPPSource : fobjCPPSource;
    fobjKotlin = fobjKotlin === VOID ? this.fobjKotlin : fobjKotlin;
    fobjSwift = fobjSwift === VOID ? this.fobjSwift : fobjSwift;
    inputFile = inputFile === VOID ? this.inputFile : inputFile;
    inputFileDir = inputFileDir === VOID ? this.inputFileDir : inputFileDir;
    inputFileLines = inputFileLines === VOID ? this.inputFileLines : inputFileLines;
    isDbg = isDbg === VOID ? this.isDbg : isDbg;
    outputCPPHeader = outputCPPHeader === VOID ? this.outputCPPHeader : outputCPPHeader;
    outputCPPSDK = outputCPPSDK === VOID ? this.outputCPPSDK : outputCPPSDK;
    outputCPPSource = outputCPPSource === VOID ? this.outputCPPSource : outputCPPSource;
    outputEntityContents = outputEntityContents === VOID ? this.outputEntityContents : outputEntityContents;
    outputFile = outputFile === VOID ? this.outputFile : outputFile;
    outputFileContents = outputFileContents === VOID ? this.outputFileContents : outputFileContents;
    outputJSExport = outputJSExport === VOID ? this.outputJSExport : outputJSExport;
    outputKotlin = outputKotlin === VOID ? this.outputKotlin : outputKotlin;
    outputPaths = outputPaths === VOID ? this.outputPaths : outputPaths;
    outputSwift = outputSwift === VOID ? this.outputSwift : outputSwift;
    rawCPPSDK = rawCPPSDK === VOID ? this.rawCPPSDK : rawCPPSDK;
    rawKotlin = rawKotlin === VOID ? this.rawKotlin : rawKotlin;
    rawSwift = rawSwift === VOID ? this.rawSwift : rawSwift;
    srcKotlin = srcKotlin === VOID ? this.srcKotlin : srcKotlin;
    srcSwift = srcSwift === VOID ? this.srcSwift : srcSwift;
    recentField = recentField === VOID ? this.na_1 : recentField;
    return $super === VOID ? this.lf(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) : $super.lf.call(this, arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField);
  };
  protoOf(AppContext).toString = function () {
    return 'AppContext(arguments=' + toString(this.arguments) + ', consoleOutput=' + this.consoleOutput + ', cppAPIHeader=' + this.cppAPIHeader + ', cppAPISource=' + this.cppAPISource + ', cppContextsHeader=' + this.cppContextsHeader + ', cppContextsSource=' + this.cppContextsSource + ', cppEffectsHeader=' + this.cppEffectsHeader + ', cppEffectsSource=' + this.cppEffectsSource + ', cppSetHeader=' + this.cppSetHeader + ', cppSetSource=' + this.cppSetSource + ', currentOutputPathId=' + this.currentOutputPathId + ', didLaunch=' + this.didLaunch + ', didWriteOutputFile=' + this.didWriteOutputFile + ', entityComments=' + toString(this.entityComments) + ', entityFieldComments=' + toString(this.entityFieldComments) + ', entityFields=' + toString(this.entityFields) + ', entityNames=' + toString(this.entityNames) + ', entityPrefixesKotlin=' + toString(this.entityPrefixesKotlin) + ', entityTypes=' + toString(this.entityTypes) + ', fobjCPPHeader=' + this.fobjCPPHeader + ', fobjCPPSource=' + this.fobjCPPSource + ', fobjKotlin=' + this.fobjKotlin + ', fobjSwift=' + this.fobjSwift + ', inputFile=' + this.inputFile + ', inputFileDir=' + this.inputFileDir + ', inputFileLines=' + toString(this.inputFileLines) + ', isDbg=' + this.isDbg + ', outputCPPHeader=' + this.outputCPPHeader + ', outputCPPSDK=' + this.outputCPPSDK + ', outputCPPSource=' + this.outputCPPSource + ', outputEntityContents=' + this.outputEntityContents + ', outputFile=' + this.outputFile + ', outputFileContents=' + this.outputFileContents + ', outputJSExport=' + this.outputJSExport + ', outputKotlin=' + this.outputKotlin + ', outputPaths=' + toString(this.outputPaths) + ', outputSwift=' + this.outputSwift + ', rawCPPSDK=' + this.rawCPPSDK + ', rawKotlin=' + this.rawKotlin + ', rawSwift=' + this.rawSwift + ', srcKotlin=' + this.srcKotlin + ', srcSwift=' + this.srcSwift + ', recentField=' + this.na_1 + ')';
  };
  protoOf(AppContext).hashCode = function () {
    var result = hashCode(this.arguments);
    result = imul(result, 31) + getStringHashCode(this.consoleOutput) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppAPIHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppAPISource) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppContextsHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppContextsSource) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppEffectsHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppEffectsSource) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppSetHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppSetSource) | 0;
    result = imul(result, 31) + this.currentOutputPathId | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didLaunch) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didWriteOutputFile) | 0;
    result = imul(result, 31) + hashCode(this.entityComments) | 0;
    result = imul(result, 31) + hashCode(this.entityFieldComments) | 0;
    result = imul(result, 31) + hashCode(this.entityFields) | 0;
    result = imul(result, 31) + hashCode(this.entityNames) | 0;
    result = imul(result, 31) + hashCode(this.entityPrefixesKotlin) | 0;
    result = imul(result, 31) + hashCode(this.entityTypes) | 0;
    result = imul(result, 31) + getStringHashCode(this.fobjCPPHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.fobjCPPSource) | 0;
    result = imul(result, 31) + getStringHashCode(this.fobjKotlin) | 0;
    result = imul(result, 31) + getStringHashCode(this.fobjSwift) | 0;
    result = imul(result, 31) + getStringHashCode(this.inputFile) | 0;
    result = imul(result, 31) + getStringHashCode(this.inputFileDir) | 0;
    result = imul(result, 31) + hashCode(this.inputFileLines) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isDbg) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputCPPHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputCPPSDK) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputCPPSource) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputEntityContents) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputFile) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputFileContents) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputJSExport) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputKotlin) | 0;
    result = imul(result, 31) + hashCode(this.outputPaths) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputSwift) | 0;
    result = imul(result, 31) + getStringHashCode(this.rawCPPSDK) | 0;
    result = imul(result, 31) + getStringHashCode(this.rawKotlin) | 0;
    result = imul(result, 31) + getStringHashCode(this.rawSwift) | 0;
    result = imul(result, 31) + getStringHashCode(this.srcKotlin) | 0;
    result = imul(result, 31) + getStringHashCode(this.srcSwift) | 0;
    result = imul(result, 31) + getStringHashCode(this.na_1) | 0;
    return result;
  };
  protoOf(AppContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AppContext))
      return false;
    var tmp0_other_with_cast = other instanceof AppContext ? other : THROW_CCE();
    if (!equals(this.arguments, tmp0_other_with_cast.arguments))
      return false;
    if (!(this.consoleOutput === tmp0_other_with_cast.consoleOutput))
      return false;
    if (!(this.cppAPIHeader === tmp0_other_with_cast.cppAPIHeader))
      return false;
    if (!(this.cppAPISource === tmp0_other_with_cast.cppAPISource))
      return false;
    if (!(this.cppContextsHeader === tmp0_other_with_cast.cppContextsHeader))
      return false;
    if (!(this.cppContextsSource === tmp0_other_with_cast.cppContextsSource))
      return false;
    if (!(this.cppEffectsHeader === tmp0_other_with_cast.cppEffectsHeader))
      return false;
    if (!(this.cppEffectsSource === tmp0_other_with_cast.cppEffectsSource))
      return false;
    if (!(this.cppSetHeader === tmp0_other_with_cast.cppSetHeader))
      return false;
    if (!(this.cppSetSource === tmp0_other_with_cast.cppSetSource))
      return false;
    if (!(this.currentOutputPathId === tmp0_other_with_cast.currentOutputPathId))
      return false;
    if (!(this.didLaunch === tmp0_other_with_cast.didLaunch))
      return false;
    if (!(this.didWriteOutputFile === tmp0_other_with_cast.didWriteOutputFile))
      return false;
    if (!equals(this.entityComments, tmp0_other_with_cast.entityComments))
      return false;
    if (!equals(this.entityFieldComments, tmp0_other_with_cast.entityFieldComments))
      return false;
    if (!equals(this.entityFields, tmp0_other_with_cast.entityFields))
      return false;
    if (!equals(this.entityNames, tmp0_other_with_cast.entityNames))
      return false;
    if (!equals(this.entityPrefixesKotlin, tmp0_other_with_cast.entityPrefixesKotlin))
      return false;
    if (!equals(this.entityTypes, tmp0_other_with_cast.entityTypes))
      return false;
    if (!(this.fobjCPPHeader === tmp0_other_with_cast.fobjCPPHeader))
      return false;
    if (!(this.fobjCPPSource === tmp0_other_with_cast.fobjCPPSource))
      return false;
    if (!(this.fobjKotlin === tmp0_other_with_cast.fobjKotlin))
      return false;
    if (!(this.fobjSwift === tmp0_other_with_cast.fobjSwift))
      return false;
    if (!(this.inputFile === tmp0_other_with_cast.inputFile))
      return false;
    if (!(this.inputFileDir === tmp0_other_with_cast.inputFileDir))
      return false;
    if (!equals(this.inputFileLines, tmp0_other_with_cast.inputFileLines))
      return false;
    if (!(this.isDbg === tmp0_other_with_cast.isDbg))
      return false;
    if (!(this.outputCPPHeader === tmp0_other_with_cast.outputCPPHeader))
      return false;
    if (!(this.outputCPPSDK === tmp0_other_with_cast.outputCPPSDK))
      return false;
    if (!(this.outputCPPSource === tmp0_other_with_cast.outputCPPSource))
      return false;
    if (!(this.outputEntityContents === tmp0_other_with_cast.outputEntityContents))
      return false;
    if (!(this.outputFile === tmp0_other_with_cast.outputFile))
      return false;
    if (!(this.outputFileContents === tmp0_other_with_cast.outputFileContents))
      return false;
    if (!(this.outputJSExport === tmp0_other_with_cast.outputJSExport))
      return false;
    if (!(this.outputKotlin === tmp0_other_with_cast.outputKotlin))
      return false;
    if (!equals(this.outputPaths, tmp0_other_with_cast.outputPaths))
      return false;
    if (!(this.outputSwift === tmp0_other_with_cast.outputSwift))
      return false;
    if (!(this.rawCPPSDK === tmp0_other_with_cast.rawCPPSDK))
      return false;
    if (!(this.rawKotlin === tmp0_other_with_cast.rawKotlin))
      return false;
    if (!(this.rawSwift === tmp0_other_with_cast.rawSwift))
      return false;
    if (!(this.srcKotlin === tmp0_other_with_cast.srcKotlin))
      return false;
    if (!(this.srcSwift === tmp0_other_with_cast.srcSwift))
      return false;
    if (!(this.na_1 === tmp0_other_with_cast.na_1))
      return false;
    return true;
  };
  function OutputPath(path, type) {
    path = path === VOID ? '' : path;
    type = type === VOID ? '' : type;
    this.path = path;
    this.type = type;
  }
  protoOf(OutputPath).mf = function (_set____db54di) {
    this.path = _set____db54di;
  };
  protoOf(OutputPath).nf = function () {
    return this.path;
  };
  protoOf(OutputPath).of = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(OutputPath).pf = function () {
    return this.type;
  };
  protoOf(OutputPath).ka = function () {
    return this.path;
  };
  protoOf(OutputPath).la = function () {
    return this.type;
  };
  protoOf(OutputPath).qf = function (path, type) {
    return new OutputPath(path, type);
  };
  protoOf(OutputPath).copy = function (path, type, $super) {
    path = path === VOID ? this.path : path;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.qf(path, type) : $super.qf.call(this, path, type);
  };
  protoOf(OutputPath).toString = function () {
    return 'OutputPath(path=' + this.path + ', type=' + this.type + ')';
  };
  protoOf(OutputPath).hashCode = function () {
    var result = getStringHashCode(this.path);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    return result;
  };
  protoOf(OutputPath).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OutputPath))
      return false;
    var tmp0_other_with_cast = other instanceof OutputPath ? other : THROW_CCE();
    if (!(this.path === tmp0_other_with_cast.path))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    return true;
  };
  function KDContext() {
  }
  function KDController$registerFieldCallback$lambda($fieldName, $cb) {
    return function (c) {
      var tmp;
      if (c.recentField === $fieldName) {
        tmp = $cb(c);
      }
      return Unit_instance;
    };
  }
  function KDController(context) {
    this.context = context;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.rf_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.sf_1 = ArrayList_init_$Create$();
    this.isProcessingQueue = false;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.tf_1 = ArrayList_init_$Create$();
  }
  protoOf(KDController).uf = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(KDController).vf = function () {
    return this.context;
  };
  protoOf(KDController).wf = function (_set____db54di) {
    this.rf_1 = _set____db54di;
  };
  protoOf(KDController).xf = function () {
    return this.rf_1;
  };
  protoOf(KDController).yf = function (_set____db54di) {
    this.sf_1 = _set____db54di;
  };
  protoOf(KDController).zf = function () {
    return this.sf_1;
  };
  protoOf(KDController).ag = function (_set____db54di) {
    this.isProcessingQueue = _set____db54di;
  };
  protoOf(KDController).bg = function () {
    return this.isProcessingQueue;
  };
  protoOf(KDController).cg = function (_set____db54di) {
    this.tf_1 = _set____db54di;
  };
  protoOf(KDController).dg = function () {
    return this.tf_1;
  };
  protoOf(KDController).executeFunctions = function () {
    var c = this.tf_1.n2(0);
    this.context.ud(c.recentField);
    this.context.setField(c.recentField, c.fieldAny(c.recentField));
    var _iterator__ex2g4s = this.sf_1.g();
    while (_iterator__ex2g4s.h()) {
      var f = _iterator__ex2g4s.i();
      var ctx = f(this.context.selfCopy());
      if (!(ctx.recentField === KD_FIELD_NONE)) {
        this.tf_1.f(ctx);
      }
    }
    this.reportContext();
  };
  protoOf(KDController).processQueue = function () {
    if (this.isProcessingQueue) {
      return Unit_instance;
    }
    this.isProcessingQueue = true;
    while (this.tf_1.j() > 0) {
      this.executeFunctions();
    }
    this.isProcessingQueue = false;
  };
  protoOf(KDController).registerCallback = function (cb) {
    this.rf_1.f(cb);
  };
  protoOf(KDController).registerFieldCallback = function (fieldName, cb) {
    var tmp = this.rf_1;
    tmp.f(KDController$registerFieldCallback$lambda(fieldName, cb));
  };
  protoOf(KDController).registerFunction = function (f) {
    this.sf_1.f(f);
  };
  protoOf(KDController).reportContext = function () {
    var _iterator__ex2g4s = this.rf_1.g();
    while (_iterator__ex2g4s.h()) {
      var cb = _iterator__ex2g4s.i();
      cb(this.context);
    }
  };
  protoOf(KDController).set = function (fieldName, value) {
    var c = this.context.selfCopy();
    c.setField(fieldName, value);
    c.ud(fieldName);
    this.tf_1.f(c);
    this.processQueue();
  };
  function registerOneliners(ctrl, items) {
    var halfCount = items.length / 2 | 0;
    var inductionVariable = 0;
    if (inductionVariable < halfCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = items[imul(i, 2)];
        var field = typeof tmp === 'string' ? tmp : THROW_CCE();
        var tmp_0 = items[imul(i, 2) + 1 | 0];
        var callback = typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE();
        ctrl.registerFieldCallback(field, callback);
      }
       while (inductionVariable < halfCount);
  }
  function F() {
    this.arguments = 'arguments';
    this.consoleOutput = 'consoleOutput';
    this.cppAPIHeader = 'cppAPIHeader';
    this.cppAPISource = 'cppAPISource';
    this.cppContextsHeader = 'cppContextsHeader';
    this.cppContextsSource = 'cppContextsSource';
    this.cppEffectsHeader = 'cppEffectsHeader';
    this.cppEffectsSource = 'cppEffectsSource';
    this.cppSetHeader = 'cppSetHeader';
    this.cppSetSource = 'cppSetSource';
    this.currentOutputPathId = 'currentOutputPathId';
    this.didLaunch = 'didLaunch';
    this.didWriteOutputFile = 'didWriteOutputFile';
    this.entityComments = 'entityComments';
    this.entityFieldComments = 'entityFieldComments';
    this.entityFields = 'entityFields';
    this.entityNames = 'entityNames';
    this.entityPrefixesKotlin = 'entityPrefixesKotlin';
    this.entityTypes = 'entityTypes';
    this.fobjCPPHeader = 'fobjCPPHeader';
    this.fobjCPPSource = 'fobjCPPSource';
    this.fobjKotlin = 'fobjKotlin';
    this.fobjSwift = 'fobjSwift';
    this.inputFile = 'inputFile';
    this.inputFileDir = 'inputFileDir';
    this.inputFileLines = 'inputFileLines';
    this.isDbg = 'isDbg';
    this.none = 'none';
    this.outputCPPHeader = 'outputCPPHeader';
    this.outputCPPSDK = 'outputCPPSDK';
    this.outputCPPSource = 'outputCPPSource';
    this.outputEntityContents = 'outputEntityContents';
    this.outputFile = 'outputFile';
    this.outputFileContents = 'outputFileContents';
    this.outputJSExport = 'outputJSExport';
    this.outputKotlin = 'outputKotlin';
    this.outputPaths = 'outputPaths';
    this.outputSwift = 'outputSwift';
    this.rawCPPSDK = 'rawCPPSDK';
    this.rawKotlin = 'rawKotlin';
    this.rawSwift = 'rawSwift';
    this.srcKotlin = 'srcKotlin';
    this.srcSwift = 'srcSwift';
  }
  protoOf(F).pa = function () {
    return this.arguments;
  };
  protoOf(F).ra = function () {
    return this.consoleOutput;
  };
  protoOf(F).ta = function () {
    return this.cppAPIHeader;
  };
  protoOf(F).va = function () {
    return this.cppAPISource;
  };
  protoOf(F).xa = function () {
    return this.cppContextsHeader;
  };
  protoOf(F).za = function () {
    return this.cppContextsSource;
  };
  protoOf(F).bb = function () {
    return this.cppEffectsHeader;
  };
  protoOf(F).db = function () {
    return this.cppEffectsSource;
  };
  protoOf(F).fb = function () {
    return this.cppSetHeader;
  };
  protoOf(F).hb = function () {
    return this.cppSetSource;
  };
  protoOf(F).jb = function () {
    return this.currentOutputPathId;
  };
  protoOf(F).lb = function () {
    return this.didLaunch;
  };
  protoOf(F).nb = function () {
    return this.didWriteOutputFile;
  };
  protoOf(F).pb = function () {
    return this.entityComments;
  };
  protoOf(F).rb = function () {
    return this.entityFieldComments;
  };
  protoOf(F).tb = function () {
    return this.entityFields;
  };
  protoOf(F).vb = function () {
    return this.entityNames;
  };
  protoOf(F).xb = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(F).zb = function () {
    return this.entityTypes;
  };
  protoOf(F).bc = function () {
    return this.fobjCPPHeader;
  };
  protoOf(F).dc = function () {
    return this.fobjCPPSource;
  };
  protoOf(F).fc = function () {
    return this.fobjKotlin;
  };
  protoOf(F).hc = function () {
    return this.fobjSwift;
  };
  protoOf(F).jc = function () {
    return this.inputFile;
  };
  protoOf(F).lc = function () {
    return this.inputFileDir;
  };
  protoOf(F).nc = function () {
    return this.inputFileLines;
  };
  protoOf(F).pc = function () {
    return this.isDbg;
  };
  protoOf(F).eg = function () {
    return this.none;
  };
  protoOf(F).rc = function () {
    return this.outputCPPHeader;
  };
  protoOf(F).tc = function () {
    return this.outputCPPSDK;
  };
  protoOf(F).vc = function () {
    return this.outputCPPSource;
  };
  protoOf(F).xc = function () {
    return this.outputEntityContents;
  };
  protoOf(F).zc = function () {
    return this.outputFile;
  };
  protoOf(F).bd = function () {
    return this.outputFileContents;
  };
  protoOf(F).dd = function () {
    return this.outputJSExport;
  };
  protoOf(F).fd = function () {
    return this.outputKotlin;
  };
  protoOf(F).hd = function () {
    return this.outputPaths;
  };
  protoOf(F).jd = function () {
    return this.outputSwift;
  };
  protoOf(F).ld = function () {
    return this.rawCPPSDK;
  };
  protoOf(F).nd = function () {
    return this.rawKotlin;
  };
  protoOf(F).pd = function () {
    return this.rawSwift;
  };
  protoOf(F).rd = function () {
    return this.srcKotlin;
  };
  protoOf(F).td = function () {
    return this.srcSwift;
  };
  var F_instance;
  function F_getInstance() {
    return F_instance;
  }
  function base64ToString(b64) {
    return decodeToString(Default_getInstance().m9(b64));
  }
  function cliArgumentValue(args, argument) {
    var inductionVariable = 0;
    var last = args.length;
    while (inductionVariable < last) {
      var item = args[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(item, argument)) {
        var prefix = argument + '=';
        var value = substring_0(item, prefix.length);
        return value;
      }
    }
    return '';
  }
  function contextIds(entityTypes) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var ids = [];
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = entityTypes.c1().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var id = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var type = _destruct__k2r9zo.w();
      if (type === 'context') {
        // Inline function 'kotlin.collections.plus' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = ids;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$9 = [id];
        ids = tmp$ret$6.concat(tmp$ret$9);
      }
    }
    return ids;
  }
  function contextNames(entityIds, entityNames) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var inductionVariable = 0;
    var last = entityIds.length;
    while (inductionVariable < last) {
      var id = entityIds[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var name = entityNames[id];
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = items;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [name];
      items = tmp$ret$3.concat(tmp$ret$6);
    }
    return items;
  }
  function debugShortString(v) {
    var str = debugString(v);
    return take(str, 100);
  }
  function debugString(v) {
    if (typeof v === 'string') {
      return 'S(' + v.length + ')' + v;
    }
    if (isArray(v)) {
      var out = '';
      var inductionVariable = 0;
      var last = v.length;
      while (inductionVariable < last) {
        var item = v[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = out;
        if (!(charSequenceLength(this_0) === 0)) {
          out = out + ',';
        }
        out = out + debugString(ensureNotNull(item));
      }
      return 'A(' + v.length + ')' + out;
    }
    if (isInterface(v, KtMap)) {
      var out_0 = '';
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = v.c1().g();
      while (_iterator__ex2g4s.h()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.i();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.v();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.w();
        // Inline function 'kotlin.text.isEmpty' call
        var this_1 = out_0;
        if (!(charSequenceLength(this_1) === 0)) {
          out_0 = out_0 + ',';
        }
        out_0 = out_0 + (debugString(ensureNotNull(key)) + ':' + debugString(ensureNotNull(value)));
      }
      return 'D(' + v.j() + ')' + out_0;
    }
    return toString(v);
  }
  function outputFileContents(outputCPPHeader, outputCPPSDK, outputCPPSource, outputJSExport, outputKotlin, outputSwift, type) {
    switch (type) {
      case 'jsexport':
        return outputJSExport;
      case 'kotlin':
        return outputKotlin;
      case 'swift':
        return outputSwift;
      case 'c++hdr':
        return outputCPPHeader;
      case 'c++sdk':
        return outputCPPSDK;
      case 'c++src':
        return outputCPPSource;
    }
    return 'outputFC-N/A';
  }
  function parseRawCPPSDK(lines) {
    var contents = '';
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, 'c++sdk: ')) {
        var prefixLen = 8;
        var code = substring_0(ln, prefixLen);
        contents = contents + (code + '\n');
      }
    }
    return contents;
  }
  function parseRawKotlin(lines) {
    var contents = '';
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, 'kotlin: ')) {
        var prefixLen = 8;
        var kotlinCode = substring_0(ln, prefixLen);
        contents = contents + (kotlinCode + '\n');
      }
    }
    return contents;
  }
  function parseRawSwift(lines) {
    var contents = '';
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, 'swift: ')) {
        var prefixLen = 7;
        var code = substring_0(ln, prefixLen);
        contents = contents + (code + '\n');
      }
    }
    return contents;
  }
  function setupComponentDebugging(ctrl, prefix) {
    ctrl.registerCallback(setupComponentDebugging$lambda(prefix));
  }
  function setupComponentDebugging$lambda($prefix) {
    return function (c) {
      var value = debugShortString(c.fieldAny(c.recentField));
      var tmp;
      if (c.field('isDbg')) {
        println('\u0418\u0413\u0420 ' + $prefix + " k/v: '" + c.recentField + "'/'" + value + "'");
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function parseEntityComments(lines) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var entityId = 0;
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, '# ')) {
        var prefixLen = 2;
        var comment = substring_0(ln, prefixLen);
        // Inline function 'kotlin.collections.set' call
        var key = entityId;
        d.c2(key, comment);
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = parseEntityName(ln);
        if (!(charSequenceLength(this_0) === 0)) {
          entityId = entityId + 1 | 0;
        }
      }
    }
    return d;
  }
  function parseEntityField(ln) {
    if (!startsWith(ln, '        ')) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [];
    }
    var prefixLen = 8;
    var nameAndValue = substring_0(ln, prefixLen);
    var parts = split(nameAndValue, [': '], VOID, 2);
    if (!(parts.j() === 2)) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return [];
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(parts);
  }
  function parseEntityFieldComments(lines) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var entityId = 0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var comments = LinkedHashMap_init_$Create$();
    var isParsingFields = false;
    var lastComment = '';
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var isSectionMarker = ln === '    fields:';
      var isComment = isParsingFields && startsWith(ln, '        # ');
      var tmp;
      if (isParsingFields) {
        // Inline function 'kotlin.collections.isEmpty' call
        tmp = !(parseEntityField(ln).length === 0);
      } else {
        tmp = false;
      }
      var isField = tmp;
      var tmp_0;
      if (isParsingFields) {
        // Inline function 'kotlin.text.isEmpty' call
        tmp_0 = charSequenceLength(ln) === 0;
      } else {
        tmp_0 = false;
      }
      var isEntityEndMarker = tmp_0;
      var isLastEntityEndMarker = isParsingFields && ln === last_0(lines);
      if (isSectionMarker) {
        isParsingFields = true;
      }
      if (isComment) {
        var prefixLen = 10;
        lastComment = substring_0(ln, prefixLen);
      }
      var tmp_1;
      if (isField) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = lastComment;
        tmp_1 = !(charSequenceLength(this_0) === 0);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var parts = parseEntityField(ln);
        var name = parts[0];
        var tmp0 = comments;
        // Inline function 'kotlin.collections.set' call
        var value = lastComment;
        tmp0.c2(name, value);
        lastComment = '';
      }
      if (isEntityEndMarker || isLastEntityEndMarker) {
        isParsingFields = false;
        var tmp2 = entityId;
        // Inline function 'kotlin.collections.set' call
        var value_0 = comments;
        d.c2(tmp2, value_0);
        entityId = entityId + 1 | 0;
        // Inline function 'kotlin.collections.mutableMapOf' call
        comments = LinkedHashMap_init_$Create$();
      }
    }
    return d;
  }
  function parseEntityFields(lines) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var entityId = 0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var fields = LinkedHashMap_init_$Create$();
    var isParsingFields = false;
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var i = inductionVariable;
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var isSectionMarker = ln === '    fields:';
      var tmp;
      if (isParsingFields) {
        // Inline function 'kotlin.collections.isEmpty' call
        tmp = !(parseEntityField(ln).length === 0);
      } else {
        tmp = false;
      }
      var isField = tmp;
      var tmp_0;
      if (isParsingFields) {
        // Inline function 'kotlin.text.isEmpty' call
        tmp_0 = charSequenceLength(ln) === 0;
      } else {
        tmp_0 = false;
      }
      var isEntityEndMarker = tmp_0;
      var isLastEntityEndMarker = isParsingFields && i === (lines.length - 1 | 0);
      if (isSectionMarker) {
        isParsingFields = true;
      }
      if (isField) {
        var parts = parseEntityField(ln);
        var name = parts[0];
        var type = parts[1];
        // Inline function 'kotlin.collections.set' call
        fields.c2(name, type);
      }
      if (isEntityEndMarker || isLastEntityEndMarker) {
        isParsingFields = false;
        var tmp2 = entityId;
        // Inline function 'kotlin.collections.set' call
        var value = fields;
        d.c2(tmp2, value);
        entityId = entityId + 1 | 0;
        // Inline function 'kotlin.collections.mutableMapOf' call
        fields = LinkedHashMap_init_$Create$();
      }
    }
    return d;
  }
  function parseEntityName(ln) {
    if (!startsWith(ln, ' ') && !startsWith(ln, '# ') && !(ln === '') && endsWith(ln, ':') && ln === capitalize(ln)) {
      var ending = 1;
      return dropLast_0(ln, ending);
    }
    return '';
  }
  function parseEntityNames(lines) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = parseEntityName(ln);
      if (!(charSequenceLength(this_0) === 0)) {
        var tmp0 = items;
        // Inline function 'kotlin.collections.plus' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$7 = [parseEntityName(ln)];
        items = tmp0.concat(tmp$ret$7);
      }
    }
    return items;
  }
  function parseEntityPrefixes(lines, pre) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var entityId = -1;
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, pre)) {
        var prefixLen = pre.length;
        var value = substring_0(ln, prefixLen);
        // Inline function 'kotlin.collections.set' call
        var key = entityId;
        d.c2(key, value);
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = parseEntityName(ln);
        if (!(charSequenceLength(this_0) === 0)) {
          entityId = entityId + 1 | 0;
        }
      }
    }
    return d;
  }
  function parseEntityTypes(lines) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var entityId = -1;
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, '    type: ')) {
        var prefixLen = 10;
        var type = substring_0(ln, prefixLen);
        // Inline function 'kotlin.collections.set' call
        var key = entityId;
        d.c2(key, type);
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = parseEntityName(ln);
        if (!(charSequenceLength(this_0) === 0)) {
          entityId = entityId + 1 | 0;
        }
      }
    }
    return d;
  }
  function parseOutputPaths(lines) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var isCollectingPaths = false;
    var lastPath = '';
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, 'output:')) {
        isCollectingPaths = true;
      } else if (!startsWith(ln, '    ')) {
        isCollectingPaths = false;
      } else if (isCollectingPaths && startsWith(ln, '        type: ')) {
        var prefixLen = 14;
        var type = substring_0(ln, prefixLen);
        var item = new OutputPath();
        item.path = lastPath;
        item.type = type;
        // Inline function 'kotlin.collections.plus' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = items;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = [item];
        items = tmp$ret$3.concat(tmp$ret$6);
      } else if (isCollectingPaths && startsWith(ln, '    ')) {
        var prefixLen_0 = 4;
        var totalLen = ln.length - 1 | 0;
        var path = substring(ln, prefixLen_0, totalLen);
        lastPath = path;
      }
    }
    return items;
  }
  //region block: post-declaration
  protoOf(AppContext).fieldAny = fieldAny;
  defineProp(protoOf(AppContext), 'recentField', function () {
    return this.vd();
  }, function (value) {
    this.ud(value);
  });
  //endregion
  //region block: init
  APP_KD_IMPORT = 'import kotlin.js.JsExport';
  APP_KD_JSEXPORT = '@JsExport';
  APP_KD_PACKAGE = 'package org.opengamestudio';
  embKotlin64 = 'LyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDIuMC4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCkBKc0V4cG9ydAppbnRlcmZhY2UgS0RDb250ZXh0IHsKICAgIC8qKgogICAgICogTmFtZSBvZiB0aGUgZmllbGQgdGhhdCBoYXMganVzdCBiZWVuIGNoYW5nZWQKICAgICAqCiAgICAgKiBBbGxvd3Mgc2hvdWxkLWZ1bmN0aW9ucyAocmVkdWNlcnMpIHRvIHJlYWN0IG9ubHkgdG8KICAgICAqIHJlbGV2YW50IGNoYW5nZXMgYW5kIGlnbm9yZSBvdGhlciBjaGFuZ2VzIG9mIEtEQ29udGV4dAogICAgICovCiAgICB2YXIgcmVjZW50RmllbGQ6IFN0cmluZwoKICAgIC8qKgogICAgICogR2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIDxUPiBmaWVsZChuYW1lOiBTdHJpbmcpOiBUCiAgICAvKioKICAgICAqIEVyYXNlIHR5cGUKICAgICAqCiAgICAgKiBVc2VkIGJ5IEtEQ29udHJvbGxlciB0byBhc3NpZ24gcmVjZW50IGZpZWxkJ3MgdmFsdWUKICAgICAqLwogICAgZnVuIGZpZWxkQW55KG5hbWU6IFN0cmluZyk6IEFueSB7CiAgICAgICAgcmV0dXJuIGZpZWxkKG5hbWUpCiAgICB9CiAgICAvKioKICAgICAqIENyZWF0ZSBhIGNvcHkgb2YgdGhlIEtEQ29udGV4dCBkZXJpdmF0aXZlCiAgICAgKgogICAgICogVXNlZCBieSBLRENvbnRyb2xsZXIgdG8gdHJlYXQgYWxsIGRlcml2ZWQgY29udGV4dHMgYXMgS0RDb250ZXh0CiAgICAgKi8KICAgIGZ1biBzZWxmQ29weSgpOiBLRENvbnRleHQKICAgIC8qKgogICAgICogU2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIHNldEZpZWxkKG5hbWU6IFN0cmluZywgdmFsdWU6IEFueT8pCn0KLyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDIuMC4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCnZhbCBLRF9GSUVMRF9OT05FID0gIm5vbmUiCgpASnNFeHBvcnQKY2xhc3MgS0RDb250cm9sbGVyKAogICAgdmFyIGNvbnRleHQ6IEtEQ29udGV4dAopIHsKICAgIGludGVybmFsIHZhciBjYWxsYmFja3MgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IFVuaXQ+KCkKICAgIGludGVybmFsIHZhciBmdW5jdGlvbnMgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IEtEQ29udGV4dD4oKQogICAgdmFyIGlzUHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2UKICAgIGludGVybmFsIHZhciBxdWV1ZSA9IG11dGFibGVMaXN0T2Y8S0RDb250ZXh0PigpCiAKICAgIGZ1biBleGVjdXRlRnVuY3Rpb25zKCkgewogICAgICAgIHZhbCBjID0gcXVldWUucmVtb3ZlQXQoMCkKICAgICAgICBjb250ZXh0LnJlY2VudEZpZWxkID0gYy5yZWNlbnRGaWVsZAogICAgICAgIGNvbnRleHQuc2V0RmllbGQoYy5yZWNlbnRGaWVsZCwgYy5maWVsZEFueShjLnJlY2VudEZpZWxkKSkKICAgICAgIAogICAgICAgIGZvciAoZiBpbiBmdW5jdGlvbnMpIHsKICAgICAgICAgICAgdmFsIGN0eCA9IGYoY29udGV4dC5zZWxmQ29weSgpKQogICAgICAgICAgICBpZiAoY3R4LnJlY2VudEZpZWxkICE9IEtEX0ZJRUxEX05PTkUpIHsKICAgICAgICAgICAgICAgIHF1ZXVlLmFkZChjdHgpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAKICAgICAgICByZXBvcnRDb250ZXh0KCkKICAgIH0KIAogICAgZnVuIHByb2Nlc3NRdWV1ZSgpIHsKICAgICAgICAvLyBQcmV2ZW50IHJlY3Vyc2lvbi4KICAgICAgICBpZiAoaXNQcm9jZXNzaW5nUXVldWUpIHsKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSB0cnVlCiAgICAgICAKICAgICAgICB3aGlsZSAocXVldWUuc2l6ZSA+IDApIHsKICAgICAgICAgICAgZXhlY3V0ZUZ1bmN0aW9ucygpCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSBmYWxzZQogICAgfQogCiAgICBmdW4gcmVnaXN0ZXJDYWxsYmFjayhjYjogKGM6IEtEQ29udGV4dCkgLT4gVW5pdCkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoY2IpCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZpZWxkQ2FsbGJhY2soCiAgICAgICAgZmllbGROYW1lOiBTdHJpbmcsCiAgICAgICAgY2I6IChLRENvbnRleHQpIC0+IFVuaXQKICAgICkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoeyBjIC0+CiAgICAgICAgICAgIGlmIChjLnJlY2VudEZpZWxkID09IGZpZWxkTmFtZSkgewogICAgICAgICAgICAgICAgY2IoYykKICAgICAgICAgICAgfQogICAgICAgIH0pCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZ1bmN0aW9uKGY6IChLRENvbnRleHQpIC0+IEtEQ29udGV4dCkgewogICAgICAgIGZ1bmN0aW9ucy5hZGQoZikKICAgIH0KIAogICAgZnVuIHJlcG9ydENvbnRleHQoKSB7CiAgICAgICAgZm9yIChjYiBpbiBjYWxsYmFja3MpIHsKICAgICAgICAgICAgY2IoY29udGV4dCkKICAgICAgICB9CiAgICB9CiAKICAgIGZ1biBzZXQoZmllbGROYW1lOiBTdHJpbmcsIHZhbHVlOiBBbnkpIHsKICAgICAgICB2YXIgYyA9IGNvbnRleHQuc2VsZkNvcHkoKQogICAgICAgIGMuc2V0RmllbGQoZmllbGROYW1lLCB2YWx1ZSkKICAgICAgICBjLnJlY2VudEZpZWxkID0gZmllbGROYW1lCiAgICAgICAgcXVldWUuYWRkKGMpCiAgICAgICAgcHJvY2Vzc1F1ZXVlKCkKICAgIH0KfQovKioKICogVGhpcyBmaWxlIGlzIGEgcGFydCBvZiBLb3RsaW4gZGlhbGVjdDoKICogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9PR1N0dWRpby9rb3RsaW4tZGlhbGVjdAogKiBMaWNlbnNlOiBDQzAKICogVmVyc2lvbjogMi4wLjAKICovCgpwYWNrYWdlIG9yZy5vcGVuZ2FtZXN0dWRpbwoKaW1wb3J0IGtvdGxpbi5qcy5Kc0V4cG9ydAoKLy8gUmVnaXN0ZXIgc2V2ZXJhbCBvbmVsaW5lciBjYWxsYmFja3MgdG8gYSBjb250cm9sbGVyCkBKc0V4cG9ydApmdW4gcmVnaXN0ZXJPbmVsaW5lcnMoCiAgICBjdHJsOiBLRENvbnRyb2xsZXIsCiAgICBpdGVtczogQXJyYXk8QW55PgopIHsKICAgIHZhbCBoYWxmQ291bnQgPSBpdGVtcy5zaXplIC8gMgogICAgZm9yIChpIGluIDAuLjxoYWxmQ291bnQpIHsKICAgICAgICB2YWwgZmllbGQgPSBpdGVtc1tpICogMl0gYXMgU3RyaW5nCiAgICAgICAgdmFsIGNhbGxiYWNrID0gaXRlbXNbaSAqIDIgKyAxXSBhcyAoYzogS0RDb250ZXh0KSAtPiBVbml0CiAgICAgICAgY3RybC5yZWdpc3RlckZpZWxkQ2FsbGJhY2soZmllbGQsIGNhbGxiYWNrKTsKICAgIH0KfQo=';
  embSwift64 = 'ZXh0ZW5zaW9uIEtEQ29udHJvbGxlciB7CiAgICAvLyBNYWtlIHJlZ2lzdGVyRmllbGRDYWxsYmFjaygpIGNhbGwgc2ltaWxhciB0byBBbmRyb2lkCiAgICBmdW5jIHJlZ2lzdGVyRmllbGRDYWxsYmFjayhfIGZpZWxkTmFtZTogU3RyaW5nLCBfIGNiOiBAZXNjYXBpbmcgKEtEQ29udGV4dCkgLT4gVm9pZCkgewogICAgICAgIHJlZ2lzdGVyRmllbGRDYWxsYmFjayhmaWVsZE5hbWU6IGZpZWxkTmFtZSkgeyBjYyBpbgogICAgICAgICAgICBjYihjYykKICAgICAgICB9CiAgICB9CgogICAgLy8gTWFrZSBzZXQoKSBjYWxsIHNpbWlsYXIgdG8gQW5kcm9pZAogICAgZnVuYyBzZXQoXyBrOiBTdHJpbmcsIF8gdjogQW55KSB7CiAgICAgICAgc2V0KGZpZWxkTmFtZTogaywgdmFsdWU6IHYpCiAgICB9Cn0KLy8gQmluZCBlZmZlY3RzIHRvIGEgQ29udGV4dCBjaGFuZ2VzCmZ1bmMgcmVnaXN0ZXJPbmVsaW5lcnM8VD4oCiAgICBfIGN0cmw6IEtEQ29udHJvbGxlciwKICAgIF8gaXRlbXM6IFtBbnldCikgLT4gVD8gewogICAgbGV0IGhhbGZDb3VudCA9IGl0ZW1zLmNvdW50IC8gMgogICAgZm9yIGkgaW4gMC4uPGhhbGZDb3VudCB7CiAgICAgICAgbGV0IGZpZWxkID0gaXRlbXNbaSAqIDJdIGFzISBTdHJpbmcKICAgICAgICBsZXQgY2FsbGJhY2sgPSBpdGVtc1tpICogMiArIDFdIGFzISAoVCkgLT4gVm9pZAogICAgICAgIGN0cmwucmVnaXN0ZXJGaWVsZENhbGxiYWNrKGZpZWxkTmFtZTogZmllbGQpIHsgY2MgaW4KICAgICAgICAgICAgbGV0IGMgPSBjYyBhcyEgVAogICAgICAgICAgICBjYWxsYmFjayhjKQogICAgICAgIH0KICAgIH0KCiAgICAvLyBBIGhhY2sgZm9yIGdlbmVyaWNzIHRvIG9wZXJhdGUKICAgIHJldHVybiBuaWwKfQo=';
  KD_FIELD_NONE = 'none';
  F_instance = new F();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$opengamestudio = $org.opengamestudio || ($org.opengamestudio = {});
    $org$opengamestudio.appCtrl = appCtrl;
    var $org = _.org || (_.org = {});
    var $org$opengamestudio = $org.opengamestudio || ($org.opengamestudio = {});
    $org$opengamestudio.AppContext = AppContext;
    $org$opengamestudio.OutputPath = OutputPath;
    $org$opengamestudio.KDController = KDController;
    $org$opengamestudio.registerOneliners = registerOneliners;
    defineProp($org$opengamestudio, 'F', F_getInstance);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=ver-nodejs-app.js.map
