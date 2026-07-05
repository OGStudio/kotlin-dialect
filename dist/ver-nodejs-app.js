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
  var split = kotlin_kotlin.$_$.m1;
  var dropLast = kotlin_kotlin.$_$.i;
  var joinToString_0 = kotlin_kotlin.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d;
  var replace = kotlin_kotlin.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.r1;
  var Unit_instance = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.e1;
  var initMetadataForObject = kotlin_kotlin.$_$.b1;
  var sorted = kotlin_kotlin.$_$.r;
  var substring = kotlin_kotlin.$_$.p1;
  var startsWith = kotlin_kotlin.$_$.n1;
  var endsWith = kotlin_kotlin.$_$.k1;
  var contains = kotlin_kotlin.$_$.h1;
  var emptyMap = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.t;
  var to = kotlin_kotlin.$_$.t1;
  var mapOf = kotlin_kotlin.$_$.p;
  var plus = kotlin_kotlin.$_$.q;
  var println = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.s1;
  var copyToArray = kotlin_kotlin.$_$.h;
  var VOID = kotlin_kotlin.$_$.a;
  var first = kotlin_kotlin.$_$.k;
  var last = kotlin_kotlin.$_$.n;
  var isArray = kotlin_kotlin.$_$.c1;
  var KtMap = kotlin_kotlin.$_$.g;
  var isInterface = kotlin_kotlin.$_$.d1;
  var toString = kotlin_kotlin.$_$.f1;
  var hashCode = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.x;
  var getBooleanHashCode = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.v;
  var defineProp = kotlin_kotlin.$_$.u;
  var initMetadataForClass = kotlin_kotlin.$_$.z;
  var initMetadataForInterface = kotlin_kotlin.$_$.a1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.e;
  var decodeToString = kotlin_kotlin.$_$.i1;
  var substring_0 = kotlin_kotlin.$_$.o1;
  var take = kotlin_kotlin.$_$.q1;
  var last_0 = kotlin_kotlin.$_$.o;
  var dropLast_0 = kotlin_kotlin.$_$.j1;
  var capitalize = kotlin_kotlin.$_$.g1;
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
    return AppProto_getInstance().na_1;
  }
  function appShouldCollectEntityComments(c) {
    if (c.oa_1 === 'entityNames') {
      c.entityComments = parseEntityComments(c.inputFileLines);
      c.oa_1 = 'entityComments';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFieldComments(c) {
    if (c.oa_1 === 'entityFields') {
      c.entityFieldComments = parseEntityFieldComments(c.inputFileLines);
      c.oa_1 = 'entityFieldComments';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFields(c) {
    if (c.oa_1 === 'entityTypes') {
      c.entityFields = parseEntityFields(c.inputFileLines);
      c.oa_1 = 'entityFields';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectEntityNames(c) {
    if (c.oa_1 === 'inputFileLines') {
      c.entityNames = parseEntityNames(c.inputFileLines);
      c.oa_1 = 'entityNames';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectEntityPrefixesKotlin(c) {
    if (c.oa_1 === 'entityComments') {
      c.entityPrefixesKotlin = parseEntityPrefixes(c.inputFileLines, '    prefix-kotlin: ');
      c.oa_1 = 'entityPrefixesKotlin';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectEntityTypes(c) {
    if (c.oa_1 === 'entityComments') {
      c.entityTypes = parseEntityTypes(c.inputFileLines);
      c.oa_1 = 'entityTypes';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectRawCPPSDK(c) {
    if (c.oa_1 === 'inputFileLines') {
      c.rawCPPSDK = parseRawCPPSDK(c.inputFileLines);
      c.oa_1 = 'rawCPPSDK';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectRawKotlin(c) {
    if (c.oa_1 === 'inputFileLines') {
      c.rawKotlin = parseRawKotlin(c.inputFileLines);
      c.oa_1 = 'rawKotlin';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldCollectRawSwift(c) {
    if (c.oa_1 === 'inputFileLines') {
      c.rawSwift = parseRawSwift(c.inputFileLines);
      c.oa_1 = 'rawSwift';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldGenerateKotlinEntities(c) {
    if (c.oa_1 === 'entityFieldComments') {
      c.outputEntityContents = genKotlinEntitiesFile(c.entityComments, c.entityFieldComments, c.entityFields, c.entityNames, c.entityPrefixesKotlin, c.entityTypes, c.rawKotlin);
      c.oa_1 = 'outputEntityContents';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldParseInputFilePath(c) {
    if (c.oa_1 === 'didLaunch' && cliArgumentValue(c.arguments, '--file').length > 0) {
      c.inputFile = cliArgumentValue(c.arguments, '--file');
      c.oa_1 = 'inputFile';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldParseOutputPaths(c) {
    if (c.oa_1 === 'inputFileLines') {
      c.outputPaths = parseOutputPaths(c.inputFileLines);
      c.oa_1 = 'outputPaths';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldPrintToConsole(c) {
    var tmp;
    if (c.oa_1 === 'didLaunch') {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = c.arguments.length === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      c.consoleOutput = 'Usage: {bin} --file=/path/to/file.yml';
      c.oa_1 = 'consoleOutput';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPAPIHeader(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppAPIHeader = cppAPIHeader(prefixes);
      c.oa_1 = 'cppAPIHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPAPISource(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppAPISource = cppAPISource(prefixes);
      c.oa_1 = 'cppAPISource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPArrayTypes(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var tmp = c.entityFields;
      var types = cppContextArrayTypes(ids, tmp, cppContextFieldExtractArrayType$ref());
      c.cppArrayTypes = types;
      c.oa_1 = 'cppArrayTypes';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPArrayTypesHeader(c) {
    if (c.oa_1 === 'cppArrayTypes') {
      c.cppArrayTypesHeader = cppArrayTypesHeader(c.cppArrayTypes);
      c.oa_1 = 'cppArrayTypesHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPArrayElementsHeader(c) {
    if (c.oa_1 === 'cppArrayTypes') {
      c.cppArrayElementsHeader = cppArrayElementsHeader(c.cppArrayTypes, c.entityFields, c.entityNames);
      c.oa_1 = 'cppArrayElementsHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPArrayElementsSource(c) {
    if (c.oa_1 === 'cppArrayTypes') {
      c.cppArrayElementsSource = cppArrayElementsSource(c.cppArrayTypes, c.entityFields, c.entityNames);
      c.oa_1 = 'cppArrayElementsSource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPContextsHeader(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      var tmp = c.entityFields;
      var fields = cppContextFieldsHeader(ids, tmp, cppContextFieldFormatterHeader$ref());
      c.cppContextsHeader = cppContextsHeader(fields, prefixes);
      c.oa_1 = 'cppContextsHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPContextsSource(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var tmp = c.entityFields;
      var tmp_0 = c.entityNames;
      var fields = cppContextFieldsSource(ids, tmp, tmp_0, cppContextFieldFormatterSource$ref());
      c.cppContextsSource = joinToString(fields, '\n');
      c.oa_1 = 'cppContextsSource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPEffectsHeader(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppEffectsHeader = cppEffectsHeader(prefixes);
      c.oa_1 = 'cppEffectsHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPEffectsSource(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppEffectsSource = cppEffectsSource(prefixes);
      c.oa_1 = 'cppEffectsSource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPSetHeader(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppSetHeader = cppSetHeader(prefixes);
      c.oa_1 = 'cppSetHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCPPSetSource(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var names = contextNames(ids, c.entityNames);
      var prefixes = cppEntityPrefixes(names);
      c.cppSetSource = cppSetSource(prefixes);
      c.oa_1 = 'cppSetSource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetCurrentOutputPathId(c) {
    if (c.oa_1 === 'outputSwift') {
      c.currentOutputPathId = 0;
      c.oa_1 = 'currentOutputPathId';
      return c;
    }
    if (c.oa_1 === 'didWriteOutputFile' && (c.currentOutputPathId + 1 | 0) < c.outputPaths.length) {
      c.currentOutputPathId = c.currentOutputPathId + 1 | 0;
      c.oa_1 = 'currentOutputPathId';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetFObjCPPHeader(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjCPPHeader = fobjCPPHeader(fields);
      c.oa_1 = 'fobjCPPHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetFObjKotlin(c) {
    if (c.oa_1 === 'outputEntityContents') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjKotlin = fobjKotlin(fields);
      c.oa_1 = 'fobjKotlin';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetFObjSwift(c) {
    if (c.oa_1 === 'fobjKotlin') {
      var ids = contextIds(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjSwift = fobjSwift(fields);
      c.oa_1 = 'fobjSwift';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetInputFileDir(c) {
    if (c.oa_1 === 'inputFile') {
      var parts = split(c.inputFile, ['/']);
      var dirParts = dropLast(parts, 1);
      c.inputFileDir = joinToString_0(dirParts, '/');
      c.oa_1 = 'inputFileDir';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPHeader(c) {
    if (c.oa_1 === 'outputKotlin') {
      c.outputCPPHeader = '\n#ifndef KLIN_AUTOGENERATED_CPP_HEADER_H\n#define KLIN_AUTOGENERATED_CPP_HEADER_H\n\n#include <any>\n#include <string>\n#include <QObject>\n#include <QString>\n#include <QVariant>\n#include "KT.h"\n' + c.cppSetHeader + c.cppAPIHeader + c.cppArrayElementsHeader + c.cppArrayTypesHeader + c.cppContextsHeader + c.cppEffectsHeader + c.fobjCPPHeader + '\n#endif // KLIN_AUTOGENERATED_CPP_HEADER_H\n';
      c.oa_1 = 'outputCPPHeader';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPSDK(c) {
    if (c.oa_1 === 'outputKotlin') {
      var tmp0 = c.outputKotlin;
      // Inline function 'kotlin.text.replace' call
      var outk = Regex_init_$Create$('package.*').z6(tmp0, '');
      c.outputCPPSDK = c.rawCPPSDK + outk + '\n// Convert Bool to Any (for SDK)\nfun boolToAny(item: Boolean): Any {\n    return item as Any\n}\n\n// Convert String to Any (for SDK)\nfun strToAny(item: String): Any {\n    return item as Any\n}\n' + '\n// Register C callback into KDController\n@OptIn(ExperimentalForeignApi::class)\nfun KDController.registerCallbackC(cb: CPointer<CFunction<() -> Unit>>) {\n    callbacks.add({ c -> cb() })\n}\n';
      c.oa_1 = 'outputCPPSDK';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputCPPSource(c) {
    if (c.oa_1 === 'outputKotlin') {
      c.outputCPPSource = '\n#include "ignore.kd.h"\n#include "KT.h"\n' + c.cppSetSource + c.cppAPISource + c.cppArrayElementsSource + c.cppContextsSource + c.cppEffectsSource;
      c.oa_1 = 'outputCPPSource';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputFile(c) {
    if (c.oa_1 === 'currentOutputPathId') {
      var item = c.outputPaths[c.currentOutputPathId];
      c.outputFile = c.inputFileDir + '/' + item.path;
      c.oa_1 = 'outputFile';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputFileContents(c) {
    if (c.oa_1 === 'outputFile') {
      var item = c.outputPaths[c.currentOutputPathId];
      c.outputFileContents = outputFileContents(c.outputCPPHeader, c.outputCPPSDK, c.outputCPPSource, c.outputJSExport, c.outputKotlin, c.outputSwift, item.type);
      c.oa_1 = 'outputFileContents';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputJSExport(c) {
    if (c.oa_1 === 'srcKotlin') {
      c.outputJSExport = c.outputEntityContents + c.srcKotlin + c.fobjKotlin;
      c.oa_1 = 'outputJSExport';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputKotlin(c) {
    if (c.oa_1 === 'outputJSExport') {
      c.outputKotlin = replace(replace(c.outputJSExport, APP_KD_IMPORT, ''), APP_KD_JSEXPORT, '') + '\n// Get an item of an array by id\n// Purpose: For C++\nfun arrElement(a: Array<Any?>, id: Int) = a.get(id)\n\n// Get array length\n// Purpose: For C++\nfun arrSize(a: Array<Any?>) = a.size\n';
      c.oa_1 = 'outputKotlin';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetOutputSwift(c) {
    if (c.oa_1 === 'outputKotlin') {
      c.outputSwift = c.rawSwift + c.srcSwift + c.fobjSwift;
      c.oa_1 = 'outputSwift';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetSrcKotlin(c) {
    if (c.oa_1 === 'outputEntityContents') {
      var contents = base64ToString(get_embKotlin64());
      c.srcKotlin = replace(replace(contents, APP_KD_IMPORT, ''), APP_KD_PACKAGE, '');
      c.oa_1 = 'srcKotlin';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function appShouldResetSrcSwift(c) {
    if (c.oa_1 === 'srcKotlin') {
      c.srcSwift = base64ToString(get_embSwift64());
      c.oa_1 = 'srcSwift';
      return c;
    }
    c.oa_1 = 'none';
    return c;
  }
  function cppContextFieldExtractArrayType$ref() {
    var l = function (p0) {
      return cppContextFieldExtractArrayType(p0);
    };
    l.callableName = 'cppContextFieldExtractArrayType';
    return l;
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
  function appShouldResetCPPArrayElementsHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPArrayElementsHeader(p0);
    };
    l.callableName = 'appShouldResetCPPArrayElementsHeader';
    return l;
  }
  function appShouldResetCPPArrayElementsSource$ref() {
    var l = function (p0) {
      return appShouldResetCPPArrayElementsSource(p0);
    };
    l.callableName = 'appShouldResetCPPArrayElementsSource';
    return l;
  }
  function appShouldResetCPPArrayTypes$ref() {
    var l = function (p0) {
      return appShouldResetCPPArrayTypes(p0);
    };
    l.callableName = 'appShouldResetCPPArrayTypes';
    return l;
  }
  function appShouldResetCPPArrayTypesHeader$ref() {
    var l = function (p0) {
      return appShouldResetCPPArrayTypesHeader(p0);
    };
    l.callableName = 'appShouldResetCPPArrayTypesHeader';
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
    this.na_1 = new KDController(new AppContext());
    setupComponentDebugging(this.na_1, 'App');
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
    var tmp_14 = appShouldResetCPPArrayElementsHeader$ref();
    var tmp_15 = appShouldResetCPPArrayElementsSource$ref();
    var tmp_16 = appShouldResetCPPArrayTypes$ref();
    var tmp_17 = appShouldResetCPPArrayTypesHeader$ref();
    var tmp_18 = appShouldResetCPPContextsHeader$ref();
    var tmp_19 = appShouldResetCPPContextsSource$ref();
    var tmp_20 = appShouldResetCPPEffectsHeader$ref();
    var tmp_21 = appShouldResetCPPEffectsSource$ref();
    var tmp_22 = appShouldResetCPPSetHeader$ref();
    var tmp_23 = appShouldResetCPPSetSource$ref();
    var tmp_24 = appShouldResetCurrentOutputPathId$ref();
    var tmp_25 = appShouldResetFObjCPPHeader$ref();
    var tmp_26 = appShouldResetFObjKotlin$ref();
    var tmp_27 = appShouldResetFObjSwift$ref();
    var tmp_28 = appShouldResetInputFileDir$ref();
    var tmp_29 = appShouldResetOutputCPPHeader$ref();
    var tmp_30 = appShouldResetOutputCPPSDK$ref();
    var tmp_31 = appShouldResetOutputCPPSource$ref();
    var tmp_32 = appShouldResetOutputFile$ref();
    var tmp_33 = appShouldResetOutputFileContents$ref();
    var tmp_34 = appShouldResetOutputJSExport$ref();
    var tmp_35 = appShouldResetOutputKotlin$ref();
    var tmp_36 = appShouldResetOutputSwift$ref();
    var tmp_37 = appShouldResetSrcKotlin$ref();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, appShouldResetSrcSwift$ref()];
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.na_1.registerFunction(AppProto$lambda(element));
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
  function cppArrayElementFieldDeclarations(fields) {
    var o = '';
    var sortedFieldNames = sorted(fields.a1());
    var _iterator__ex2g4s = sortedFieldNames.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = fields.z(name);
      var type = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var cppType = cppElementType(type);
      o = o + replace(replace('\n        %TYPE% %NAME%() const;\n', '%TYPE%', cppType), '%NAME%', name);
    }
    return o;
  }
  function cppArrayElementFieldImpl(entityName, fieldName, type) {
    var template = '';
    if (type === 'Bool') {
      template = '\nbool %NAME%::%FIELD%() const {\n    return KT.%NAME%.get_%FIELD%(handle);\n}\n';
    } else if (type === 'Int') {
      template = '\nint %NAME%::%FIELD%() const {\n    return KT.%NAME%.get_%FIELD%(handle);\n}\n';
    } else if (type === 'String') {
      template = '\nQString %NAME%::%FIELD%() const {\n    const char *s = KT.%NAME%.get_%FIELD%(handle);\n    QString str(s);\n    KTSym->DisposeString(s);\n    return str;\n}\n';
    } else if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      var innerString = substring(type, 1, type.length - 1 | 0);
      template = replace('\n%TYPE%s %NAME%::%FIELD%() const {\n    return %TYPE%s(KT.%NAME%.get_%FIELD%(handle));\n}\n', '%TYPE%', innerString);
    }
    return replace(replace(template, '%NAME%', entityName), '%FIELD%', fieldName);
  }
  function cppArrayElementHeader(name, fields) {
    var propertyDeclarations = cppArrayElementPropertyDeclarations(fields);
    var fieldDeclarations = cppArrayElementFieldDeclarations(fields);
    return replace(replace(replace('\nclass %NAME% : public QObject {\n    Q_OBJECT\n%PROPERTY_DECLARATIONS%\n\n    public:\n        %NAME%(KTRef(%NAME%) handle, QObject *parent = nullptr) : QObject(parent), handle(handle) { }\n\n%FIELD_DECLARATIONS%\n\n    private:\n        KTRef(%NAME%) handle;\n};\n', '%NAME%', name), '%PROPERTY_DECLARATIONS%', propertyDeclarations), '%FIELD_DECLARATIONS%', fieldDeclarations);
  }
  function cppArrayElementPropertyDeclarations(fields) {
    var o = '';
    var sortedFieldNames = sorted(fields.a1());
    var _iterator__ex2g4s = sortedFieldNames.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = fields.z(name);
      var type = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var cppType = cppElementType(type);
      o = o + replace(replace('\n    Q_PROPERTY(%TYPE% %NAME% READ %NAME% CONSTANT)\n', '%TYPE%', cppType), '%NAME%', name);
    }
    return o;
  }
  function cppArrayElementsHeader(arrayElements, entityFields, entityNames) {
    var o = '';
    var inductionVariable = 0;
    var last = entityNames.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var id = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = entityNames[id];
        if (arrayElements.z(name) === true) {
          var tmp0_elvis_lhs = entityFields.z(id);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.collections.mapOf' call
            tmp = emptyMap();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var fields = tmp;
          o = o + cppArrayElementHeader(name, fields);
        }
      }
       while (inductionVariable <= last);
    return o;
  }
  function cppArrayElementsSource(arrayElements, entityFields, entityNames) {
    var o = '';
    var inductionVariable = 0;
    var last = entityNames.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var id = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = entityNames[id];
        if (arrayElements.z(name) === true) {
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
          var _iterator__ex2g4s = sortedFieldNames.g();
          while (_iterator__ex2g4s.h()) {
            var fieldName = _iterator__ex2g4s.i();
            var tmp1_elvis_lhs = fields.z(fieldName);
            var type = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
            o = o + cppArrayElementFieldImpl(name, fieldName, type);
          }
        }
      }
       while (inductionVariable <= last);
    return o;
  }
  function cppArrayTypesHeader(types) {
    var o = '';
    var sortedItems = sorted(types.a1());
    var _iterator__ex2g4s = sortedItems.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      o = o + replace('\nclass %TYPE%s : public QList<%TYPE%*> {\n    public:\n        %TYPE%s(KTLibRef(Array) kref) {\n            int n = KT.arrSize(kref);\n            for (int i = 0; i < n; ++i) {\n                append(new %TYPE%(KT.anyAs%TYPE%(KT.arrElement(kref, i))));\n            }\n        }\n};\n', '%TYPE%', item);
    }
    return o;
  }
  function cppContextArrayTypes(contextIds, entityFields, arrayTypeExtractor) {
    // Inline function 'kotlin.collections.mapOf' call
    var types = emptyMap();
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
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = fields.c1().g();
      while (_iterator__ex2g4s.h()) {
        // Inline function 'kotlin.collections.component2' call
        var type = _iterator__ex2g4s.i().w();
        var extracted = arrayTypeExtractor(type);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(extracted) > 0) {
          types = plus(types, mapOf(to(extracted, true)));
        }
      }
    }
    return types;
  }
  function cppContextFieldExtractArrayType(type) {
    if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      return substring(type, 1, type.length - 1 | 0);
    }
    return '';
  }
  function cppContextFieldFormatterHeader(name, type) {
    var template = '';
    if (type === 'Bool') {
      template = '\n        bool %FIELD%();\n';
    } else if (type === 'Int') {
      template = '\n        int %FIELD%();\n';
    } else if (type === 'String') {
      template = '\n        QString %FIELD%() const &;\n';
    } else if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      var innerString = substring(type, 1, type.length - 1 | 0);
      template = replace('\n        %TYPE%s %FIELD%();\n', '%TYPE%', innerString);
    } else {
      println("\u0418\u0413\u0420 hdr Uknown type: '" + type + "'");
    }
    return replace(template, '%FIELD%', name);
  }
  function cppContextFieldFormatterSource(entityName, fieldName, type) {
    var template = '';
    if (type === 'Bool') {
      template = '\nbool %NAME%::%FIELD%() const {\n    return KT.%NAME%.get_%FIELD%(handle);\n}\n';
    } else if (type === 'Int') {
      template = '\nint %NAME%::%FIELD%() const {\n    return KT.%NAME%.get_%FIELD%(handle);\n}\n';
    } else if (type === 'String') {
      template = '\nQString %NAME%::%FIELD%() const {\n    const char *s = KT.%NAME%.get_%FIELD%(handle);\n    QString str(s);\n    KTSym->DisposeString(s);\n    return str;\n}\n';
    } else if (startsWith(type, '[') && endsWith(type, ']') && !contains(type, ': ')) {
      var innerString = substring(type, 1, type.length - 1 | 0);
      template = replace('\n%TYPE%s %NAME%::%FIELD%() const {\n    return %TYPE%s(KT.%NAME%.get_%FIELD%(handle));\n}\n', '%TYPE%', innerString);
    } else {
      println("\u0418\u0413\u0420 src Uknown type: '" + type + "'");
    }
    return replace(replace(template, '%NAME%', entityName), '%FIELD%', fieldName);
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
        o = o + replace(replace('\nclass %NAME%Context {\n    public:\n        %NAME%Context(KTRef(%NAME%Context) handle): handle(handle) { }\n\n%ITEMS%\n\n    private:\n        KTRef(%NAME%Context) handle;\n};\n', '%ITEMS%', fieldsText), '%NAME%', name);
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
  function cppElementType(type) {
    switch (type) {
      case 'Bool':
        return 'bool';
      case 'Int':
        return 'int';
      case 'String':
        return 'QString';
    }
    return '';
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
      template = '\n%COMMENT%\n%PREFIX%\n@Suppress("UNCHECKED_CAST")\ndata class %NAME%(\n%FIELDS%\n    override var recentField: String = "",\n): KDContext {\n    override fun <T> field(name: String): T {\n%GETTERS%        }\n        return "unknown-field-name" as T\n    }\n\n    override fun selfCopy(): KDContext {\n        return this.copy()\n    }\n\n    override fun setField(\n        name: String,\n        value: Any?\n    ) {\n%SETTERS%        }\n    }\n}\n';
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
      return '0.0';
    }
    if (type === 'Float') {
      return '0f';
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
    if (type === 'Float') {
      return 'Float';
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
  function AppContext(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) {
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
    cppArrayElementsHeader = cppArrayElementsHeader === VOID ? '' : cppArrayElementsHeader;
    cppArrayElementsSource = cppArrayElementsSource === VOID ? '' : cppArrayElementsSource;
    var tmp_0;
    if (cppArrayTypes === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_0 = emptyMap();
    } else {
      tmp_0 = cppArrayTypes;
    }
    cppArrayTypes = tmp_0;
    cppArrayTypesHeader = cppArrayTypesHeader === VOID ? '' : cppArrayTypesHeader;
    cppContextsHeader = cppContextsHeader === VOID ? '' : cppContextsHeader;
    cppContextsSource = cppContextsSource === VOID ? '' : cppContextsSource;
    cppEffectsHeader = cppEffectsHeader === VOID ? '' : cppEffectsHeader;
    cppEffectsSource = cppEffectsSource === VOID ? '' : cppEffectsSource;
    cppSetHeader = cppSetHeader === VOID ? '' : cppSetHeader;
    cppSetSource = cppSetSource === VOID ? '' : cppSetSource;
    currentOutputPathId = currentOutputPathId === VOID ? 0 : currentOutputPathId;
    didLaunch = didLaunch === VOID ? false : didLaunch;
    didWriteOutputFile = didWriteOutputFile === VOID ? false : didWriteOutputFile;
    var tmp_1;
    if (entityComments === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = entityComments;
    }
    entityComments = tmp_1;
    var tmp_2;
    if (entityFieldComments === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_2 = emptyMap();
    } else {
      tmp_2 = entityFieldComments;
    }
    entityFieldComments = tmp_2;
    var tmp_3;
    if (entityFields === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_3 = emptyMap();
    } else {
      tmp_3 = entityFields;
    }
    entityFields = tmp_3;
    var tmp_4;
    if (entityNames === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = [];
    } else {
      tmp_4 = entityNames;
    }
    entityNames = tmp_4;
    var tmp_5;
    if (entityPrefixesKotlin === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_5 = emptyMap();
    } else {
      tmp_5 = entityPrefixesKotlin;
    }
    entityPrefixesKotlin = tmp_5;
    var tmp_6;
    if (entityTypes === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_6 = emptyMap();
    } else {
      tmp_6 = entityTypes;
    }
    entityTypes = tmp_6;
    fobjCPPHeader = fobjCPPHeader === VOID ? '' : fobjCPPHeader;
    fobjCPPSource = fobjCPPSource === VOID ? '' : fobjCPPSource;
    fobjKotlin = fobjKotlin === VOID ? '' : fobjKotlin;
    fobjSwift = fobjSwift === VOID ? '' : fobjSwift;
    inputFile = inputFile === VOID ? '' : inputFile;
    inputFileDir = inputFileDir === VOID ? '' : inputFileDir;
    var tmp_7;
    if (inputFileLines === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_7 = [];
    } else {
      tmp_7 = inputFileLines;
    }
    inputFileLines = tmp_7;
    isDbg = isDbg === VOID ? false : isDbg;
    outputCPPHeader = outputCPPHeader === VOID ? '' : outputCPPHeader;
    outputCPPSDK = outputCPPSDK === VOID ? '' : outputCPPSDK;
    outputCPPSource = outputCPPSource === VOID ? '' : outputCPPSource;
    outputEntityContents = outputEntityContents === VOID ? '' : outputEntityContents;
    outputFile = outputFile === VOID ? '' : outputFile;
    outputFileContents = outputFileContents === VOID ? '' : outputFileContents;
    outputJSExport = outputJSExport === VOID ? '' : outputJSExport;
    outputKotlin = outputKotlin === VOID ? '' : outputKotlin;
    var tmp_8;
    if (outputPaths === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = [];
    } else {
      tmp_8 = outputPaths;
    }
    outputPaths = tmp_8;
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
    this.cppArrayElementsHeader = cppArrayElementsHeader;
    this.cppArrayElementsSource = cppArrayElementsSource;
    this.cppArrayTypes = cppArrayTypes;
    this.cppArrayTypesHeader = cppArrayTypesHeader;
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
    this.oa_1 = recentField;
  }
  protoOf(AppContext).pa = function (_set____db54di) {
    this.arguments = _set____db54di;
  };
  protoOf(AppContext).qa = function () {
    return this.arguments;
  };
  protoOf(AppContext).ra = function (_set____db54di) {
    this.consoleOutput = _set____db54di;
  };
  protoOf(AppContext).sa = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).ta = function (_set____db54di) {
    this.cppAPIHeader = _set____db54di;
  };
  protoOf(AppContext).ua = function () {
    return this.cppAPIHeader;
  };
  protoOf(AppContext).va = function (_set____db54di) {
    this.cppAPISource = _set____db54di;
  };
  protoOf(AppContext).wa = function () {
    return this.cppAPISource;
  };
  protoOf(AppContext).xa = function (_set____db54di) {
    this.cppArrayElementsHeader = _set____db54di;
  };
  protoOf(AppContext).ya = function () {
    return this.cppArrayElementsHeader;
  };
  protoOf(AppContext).za = function (_set____db54di) {
    this.cppArrayElementsSource = _set____db54di;
  };
  protoOf(AppContext).ab = function () {
    return this.cppArrayElementsSource;
  };
  protoOf(AppContext).bb = function (_set____db54di) {
    this.cppArrayTypes = _set____db54di;
  };
  protoOf(AppContext).cb = function () {
    return this.cppArrayTypes;
  };
  protoOf(AppContext).db = function (_set____db54di) {
    this.cppArrayTypesHeader = _set____db54di;
  };
  protoOf(AppContext).eb = function () {
    return this.cppArrayTypesHeader;
  };
  protoOf(AppContext).fb = function (_set____db54di) {
    this.cppContextsHeader = _set____db54di;
  };
  protoOf(AppContext).gb = function () {
    return this.cppContextsHeader;
  };
  protoOf(AppContext).hb = function (_set____db54di) {
    this.cppContextsSource = _set____db54di;
  };
  protoOf(AppContext).ib = function () {
    return this.cppContextsSource;
  };
  protoOf(AppContext).jb = function (_set____db54di) {
    this.cppEffectsHeader = _set____db54di;
  };
  protoOf(AppContext).kb = function () {
    return this.cppEffectsHeader;
  };
  protoOf(AppContext).lb = function (_set____db54di) {
    this.cppEffectsSource = _set____db54di;
  };
  protoOf(AppContext).mb = function () {
    return this.cppEffectsSource;
  };
  protoOf(AppContext).nb = function (_set____db54di) {
    this.cppSetHeader = _set____db54di;
  };
  protoOf(AppContext).ob = function () {
    return this.cppSetHeader;
  };
  protoOf(AppContext).pb = function (_set____db54di) {
    this.cppSetSource = _set____db54di;
  };
  protoOf(AppContext).qb = function () {
    return this.cppSetSource;
  };
  protoOf(AppContext).rb = function (_set____db54di) {
    this.currentOutputPathId = _set____db54di;
  };
  protoOf(AppContext).sb = function () {
    return this.currentOutputPathId;
  };
  protoOf(AppContext).tb = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(AppContext).ub = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).vb = function (_set____db54di) {
    this.didWriteOutputFile = _set____db54di;
  };
  protoOf(AppContext).wb = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).xb = function (_set____db54di) {
    this.entityComments = _set____db54di;
  };
  protoOf(AppContext).yb = function () {
    return this.entityComments;
  };
  protoOf(AppContext).zb = function (_set____db54di) {
    this.entityFieldComments = _set____db54di;
  };
  protoOf(AppContext).ac = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).bc = function (_set____db54di) {
    this.entityFields = _set____db54di;
  };
  protoOf(AppContext).cc = function () {
    return this.entityFields;
  };
  protoOf(AppContext).dc = function (_set____db54di) {
    this.entityNames = _set____db54di;
  };
  protoOf(AppContext).ec = function () {
    return this.entityNames;
  };
  protoOf(AppContext).fc = function (_set____db54di) {
    this.entityPrefixesKotlin = _set____db54di;
  };
  protoOf(AppContext).gc = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).hc = function (_set____db54di) {
    this.entityTypes = _set____db54di;
  };
  protoOf(AppContext).ic = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).jc = function (_set____db54di) {
    this.fobjCPPHeader = _set____db54di;
  };
  protoOf(AppContext).kc = function () {
    return this.fobjCPPHeader;
  };
  protoOf(AppContext).lc = function (_set____db54di) {
    this.fobjCPPSource = _set____db54di;
  };
  protoOf(AppContext).mc = function () {
    return this.fobjCPPSource;
  };
  protoOf(AppContext).nc = function (_set____db54di) {
    this.fobjKotlin = _set____db54di;
  };
  protoOf(AppContext).oc = function () {
    return this.fobjKotlin;
  };
  protoOf(AppContext).pc = function (_set____db54di) {
    this.fobjSwift = _set____db54di;
  };
  protoOf(AppContext).qc = function () {
    return this.fobjSwift;
  };
  protoOf(AppContext).rc = function (_set____db54di) {
    this.inputFile = _set____db54di;
  };
  protoOf(AppContext).sc = function () {
    return this.inputFile;
  };
  protoOf(AppContext).tc = function (_set____db54di) {
    this.inputFileDir = _set____db54di;
  };
  protoOf(AppContext).uc = function () {
    return this.inputFileDir;
  };
  protoOf(AppContext).vc = function (_set____db54di) {
    this.inputFileLines = _set____db54di;
  };
  protoOf(AppContext).wc = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).xc = function (_set____db54di) {
    this.isDbg = _set____db54di;
  };
  protoOf(AppContext).yc = function () {
    return this.isDbg;
  };
  protoOf(AppContext).zc = function (_set____db54di) {
    this.outputCPPHeader = _set____db54di;
  };
  protoOf(AppContext).ad = function () {
    return this.outputCPPHeader;
  };
  protoOf(AppContext).bd = function (_set____db54di) {
    this.outputCPPSDK = _set____db54di;
  };
  protoOf(AppContext).cd = function () {
    return this.outputCPPSDK;
  };
  protoOf(AppContext).dd = function (_set____db54di) {
    this.outputCPPSource = _set____db54di;
  };
  protoOf(AppContext).ed = function () {
    return this.outputCPPSource;
  };
  protoOf(AppContext).fd = function (_set____db54di) {
    this.outputEntityContents = _set____db54di;
  };
  protoOf(AppContext).gd = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).hd = function (_set____db54di) {
    this.outputFile = _set____db54di;
  };
  protoOf(AppContext).id = function () {
    return this.outputFile;
  };
  protoOf(AppContext).jd = function (_set____db54di) {
    this.outputFileContents = _set____db54di;
  };
  protoOf(AppContext).kd = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).ld = function (_set____db54di) {
    this.outputJSExport = _set____db54di;
  };
  protoOf(AppContext).md = function () {
    return this.outputJSExport;
  };
  protoOf(AppContext).nd = function (_set____db54di) {
    this.outputKotlin = _set____db54di;
  };
  protoOf(AppContext).od = function () {
    return this.outputKotlin;
  };
  protoOf(AppContext).pd = function (_set____db54di) {
    this.outputPaths = _set____db54di;
  };
  protoOf(AppContext).qd = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).rd = function (_set____db54di) {
    this.outputSwift = _set____db54di;
  };
  protoOf(AppContext).sd = function () {
    return this.outputSwift;
  };
  protoOf(AppContext).td = function (_set____db54di) {
    this.rawCPPSDK = _set____db54di;
  };
  protoOf(AppContext).ud = function () {
    return this.rawCPPSDK;
  };
  protoOf(AppContext).vd = function (_set____db54di) {
    this.rawKotlin = _set____db54di;
  };
  protoOf(AppContext).wd = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).xd = function (_set____db54di) {
    this.rawSwift = _set____db54di;
  };
  protoOf(AppContext).yd = function () {
    return this.rawSwift;
  };
  protoOf(AppContext).zd = function (_set____db54di) {
    this.srcKotlin = _set____db54di;
  };
  protoOf(AppContext).ae = function () {
    return this.srcKotlin;
  };
  protoOf(AppContext).be = function (_set____db54di) {
    this.srcSwift = _set____db54di;
  };
  protoOf(AppContext).ce = function () {
    return this.srcSwift;
  };
  protoOf(AppContext).de = function (_set____db54di) {
    this.oa_1 = _set____db54di;
  };
  protoOf(AppContext).ee = function () {
    return this.oa_1;
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
      case 'cppArrayElementsHeader':
        var tmp_3 = this.cppArrayElementsHeader;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'cppArrayElementsSource':
        var tmp_4 = this.cppArrayElementsSource;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'cppArrayTypes':
        var tmp_5 = this.cppArrayTypes;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      case 'cppArrayTypesHeader':
        var tmp_6 = this.cppArrayTypesHeader;
        return !(tmp_6 == null) ? tmp_6 : THROW_CCE();
      case 'cppContextsHeader':
        var tmp_7 = this.cppContextsHeader;
        return !(tmp_7 == null) ? tmp_7 : THROW_CCE();
      case 'cppContextsSource':
        var tmp_8 = this.cppContextsSource;
        return !(tmp_8 == null) ? tmp_8 : THROW_CCE();
      case 'cppEffectsHeader':
        var tmp_9 = this.cppEffectsHeader;
        return !(tmp_9 == null) ? tmp_9 : THROW_CCE();
      case 'cppEffectsSource':
        var tmp_10 = this.cppEffectsSource;
        return !(tmp_10 == null) ? tmp_10 : THROW_CCE();
      case 'cppSetHeader':
        var tmp_11 = this.cppSetHeader;
        return !(tmp_11 == null) ? tmp_11 : THROW_CCE();
      case 'cppSetSource':
        var tmp_12 = this.cppSetSource;
        return !(tmp_12 == null) ? tmp_12 : THROW_CCE();
      case 'currentOutputPathId':
        var tmp_13 = this.currentOutputPathId;
        return !(tmp_13 == null) ? tmp_13 : THROW_CCE();
      case 'didLaunch':
        var tmp_14 = this.didLaunch;
        return !(tmp_14 == null) ? tmp_14 : THROW_CCE();
      case 'didWriteOutputFile':
        var tmp_15 = this.didWriteOutputFile;
        return !(tmp_15 == null) ? tmp_15 : THROW_CCE();
      case 'entityComments':
        var tmp_16 = this.entityComments;
        return !(tmp_16 == null) ? tmp_16 : THROW_CCE();
      case 'entityFieldComments':
        var tmp_17 = this.entityFieldComments;
        return !(tmp_17 == null) ? tmp_17 : THROW_CCE();
      case 'entityFields':
        var tmp_18 = this.entityFields;
        return !(tmp_18 == null) ? tmp_18 : THROW_CCE();
      case 'entityNames':
        var tmp_19 = this.entityNames;
        return !(tmp_19 == null) ? tmp_19 : THROW_CCE();
      case 'entityPrefixesKotlin':
        var tmp_20 = this.entityPrefixesKotlin;
        return !(tmp_20 == null) ? tmp_20 : THROW_CCE();
      case 'entityTypes':
        var tmp_21 = this.entityTypes;
        return !(tmp_21 == null) ? tmp_21 : THROW_CCE();
      case 'fobjCPPHeader':
        var tmp_22 = this.fobjCPPHeader;
        return !(tmp_22 == null) ? tmp_22 : THROW_CCE();
      case 'fobjCPPSource':
        var tmp_23 = this.fobjCPPSource;
        return !(tmp_23 == null) ? tmp_23 : THROW_CCE();
      case 'fobjKotlin':
        var tmp_24 = this.fobjKotlin;
        return !(tmp_24 == null) ? tmp_24 : THROW_CCE();
      case 'fobjSwift':
        var tmp_25 = this.fobjSwift;
        return !(tmp_25 == null) ? tmp_25 : THROW_CCE();
      case 'inputFile':
        var tmp_26 = this.inputFile;
        return !(tmp_26 == null) ? tmp_26 : THROW_CCE();
      case 'inputFileDir':
        var tmp_27 = this.inputFileDir;
        return !(tmp_27 == null) ? tmp_27 : THROW_CCE();
      case 'inputFileLines':
        var tmp_28 = this.inputFileLines;
        return !(tmp_28 == null) ? tmp_28 : THROW_CCE();
      case 'isDbg':
        var tmp_29 = this.isDbg;
        return !(tmp_29 == null) ? tmp_29 : THROW_CCE();
      case 'outputCPPHeader':
        var tmp_30 = this.outputCPPHeader;
        return !(tmp_30 == null) ? tmp_30 : THROW_CCE();
      case 'outputCPPSDK':
        var tmp_31 = this.outputCPPSDK;
        return !(tmp_31 == null) ? tmp_31 : THROW_CCE();
      case 'outputCPPSource':
        var tmp_32 = this.outputCPPSource;
        return !(tmp_32 == null) ? tmp_32 : THROW_CCE();
      case 'outputEntityContents':
        var tmp_33 = this.outputEntityContents;
        return !(tmp_33 == null) ? tmp_33 : THROW_CCE();
      case 'outputFile':
        var tmp_34 = this.outputFile;
        return !(tmp_34 == null) ? tmp_34 : THROW_CCE();
      case 'outputFileContents':
        var tmp_35 = this.outputFileContents;
        return !(tmp_35 == null) ? tmp_35 : THROW_CCE();
      case 'outputJSExport':
        var tmp_36 = this.outputJSExport;
        return !(tmp_36 == null) ? tmp_36 : THROW_CCE();
      case 'outputKotlin':
        var tmp_37 = this.outputKotlin;
        return !(tmp_37 == null) ? tmp_37 : THROW_CCE();
      case 'outputPaths':
        var tmp_38 = this.outputPaths;
        return !(tmp_38 == null) ? tmp_38 : THROW_CCE();
      case 'outputSwift':
        var tmp_39 = this.outputSwift;
        return !(tmp_39 == null) ? tmp_39 : THROW_CCE();
      case 'rawCPPSDK':
        var tmp_40 = this.rawCPPSDK;
        return !(tmp_40 == null) ? tmp_40 : THROW_CCE();
      case 'rawKotlin':
        var tmp_41 = this.rawKotlin;
        return !(tmp_41 == null) ? tmp_41 : THROW_CCE();
      case 'rawSwift':
        var tmp_42 = this.rawSwift;
        return !(tmp_42 == null) ? tmp_42 : THROW_CCE();
      case 'srcKotlin':
        var tmp_43 = this.srcKotlin;
        return !(tmp_43 == null) ? tmp_43 : THROW_CCE();
      case 'srcSwift':
        var tmp_44 = this.srcSwift;
        return !(tmp_44 == null) ? tmp_44 : THROW_CCE();
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
      case 'cppArrayElementsHeader':
        var tmp_3 = this;
        tmp_3.cppArrayElementsHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppArrayElementsSource':
        var tmp_4 = this;
        tmp_4.cppArrayElementsSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppArrayTypes':
        var tmp_5 = this;
        tmp_5.cppArrayTypes = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'cppArrayTypesHeader':
        var tmp_6 = this;
        tmp_6.cppArrayTypesHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppContextsHeader':
        var tmp_7 = this;
        tmp_7.cppContextsHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppContextsSource':
        var tmp_8 = this;
        tmp_8.cppContextsSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppEffectsHeader':
        var tmp_9 = this;
        tmp_9.cppEffectsHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppEffectsSource':
        var tmp_10 = this;
        tmp_10.cppEffectsSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppSetHeader':
        var tmp_11 = this;
        tmp_11.cppSetHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'cppSetSource':
        var tmp_12 = this;
        tmp_12.cppSetSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'currentOutputPathId':
        var tmp_13 = this;
        tmp_13.currentOutputPathId = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'didLaunch':
        var tmp_14 = this;
        tmp_14.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didWriteOutputFile':
        var tmp_15 = this;
        tmp_15.didWriteOutputFile = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'entityComments':
        var tmp_16 = this;
        tmp_16.entityComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFieldComments':
        var tmp_17 = this;
        tmp_17.entityFieldComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFields':
        var tmp_18 = this;
        tmp_18.entityFields = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityNames':
        var tmp_19 = this;
        tmp_19.entityNames = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'entityPrefixesKotlin':
        var tmp_20 = this;
        tmp_20.entityPrefixesKotlin = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityTypes':
        var tmp_21 = this;
        tmp_21.entityTypes = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'fobjCPPHeader':
        var tmp_22 = this;
        tmp_22.fobjCPPHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjCPPSource':
        var tmp_23 = this;
        tmp_23.fobjCPPSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjKotlin':
        var tmp_24 = this;
        tmp_24.fobjKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'fobjSwift':
        var tmp_25 = this;
        tmp_25.fobjSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFile':
        var tmp_26 = this;
        tmp_26.inputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFileDir':
        var tmp_27 = this;
        tmp_27.inputFileDir = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFileLines':
        var tmp_28 = this;
        tmp_28.inputFileLines = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'isDbg':
        var tmp_29 = this;
        tmp_29.isDbg = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPHeader':
        var tmp_30 = this;
        tmp_30.outputCPPHeader = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPSDK':
        var tmp_31 = this;
        tmp_31.outputCPPSDK = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputCPPSource':
        var tmp_32 = this;
        tmp_32.outputCPPSource = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputEntityContents':
        var tmp_33 = this;
        tmp_33.outputEntityContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFile':
        var tmp_34 = this;
        tmp_34.outputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFileContents':
        var tmp_35 = this;
        tmp_35.outputFileContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputJSExport':
        var tmp_36 = this;
        tmp_36.outputJSExport = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputKotlin':
        var tmp_37 = this;
        tmp_37.outputKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputPaths':
        var tmp_38 = this;
        tmp_38.outputPaths = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'outputSwift':
        var tmp_39 = this;
        tmp_39.outputSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawCPPSDK':
        var tmp_40 = this;
        tmp_40.rawCPPSDK = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawKotlin':
        var tmp_41 = this;
        tmp_41.rawKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'rawSwift':
        var tmp_42 = this;
        tmp_42.rawSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'srcKotlin':
        var tmp_43 = this;
        tmp_43.srcKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'srcSwift':
        var tmp_44 = this;
        tmp_44.srcSwift = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
    }
  };
  protoOf(AppContext).j8 = function () {
    return this.arguments;
  };
  protoOf(AppContext).k8 = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).fe = function () {
    return this.cppAPIHeader;
  };
  protoOf(AppContext).ge = function () {
    return this.cppAPISource;
  };
  protoOf(AppContext).he = function () {
    return this.cppArrayElementsHeader;
  };
  protoOf(AppContext).ie = function () {
    return this.cppArrayElementsSource;
  };
  protoOf(AppContext).je = function () {
    return this.cppArrayTypes;
  };
  protoOf(AppContext).ke = function () {
    return this.cppArrayTypesHeader;
  };
  protoOf(AppContext).le = function () {
    return this.cppContextsHeader;
  };
  protoOf(AppContext).me = function () {
    return this.cppContextsSource;
  };
  protoOf(AppContext).ne = function () {
    return this.cppEffectsHeader;
  };
  protoOf(AppContext).oe = function () {
    return this.cppEffectsSource;
  };
  protoOf(AppContext).pe = function () {
    return this.cppSetHeader;
  };
  protoOf(AppContext).qe = function () {
    return this.cppSetSource;
  };
  protoOf(AppContext).re = function () {
    return this.currentOutputPathId;
  };
  protoOf(AppContext).se = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).te = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).ue = function () {
    return this.entityComments;
  };
  protoOf(AppContext).ve = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).we = function () {
    return this.entityFields;
  };
  protoOf(AppContext).xe = function () {
    return this.entityNames;
  };
  protoOf(AppContext).ye = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).ze = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).af = function () {
    return this.fobjCPPHeader;
  };
  protoOf(AppContext).bf = function () {
    return this.fobjCPPSource;
  };
  protoOf(AppContext).cf = function () {
    return this.fobjKotlin;
  };
  protoOf(AppContext).df = function () {
    return this.fobjSwift;
  };
  protoOf(AppContext).ef = function () {
    return this.inputFile;
  };
  protoOf(AppContext).ff = function () {
    return this.inputFileDir;
  };
  protoOf(AppContext).gf = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).hf = function () {
    return this.isDbg;
  };
  protoOf(AppContext).if = function () {
    return this.outputCPPHeader;
  };
  protoOf(AppContext).jf = function () {
    return this.outputCPPSDK;
  };
  protoOf(AppContext).kf = function () {
    return this.outputCPPSource;
  };
  protoOf(AppContext).lf = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).mf = function () {
    return this.outputFile;
  };
  protoOf(AppContext).nf = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).of = function () {
    return this.outputJSExport;
  };
  protoOf(AppContext).pf = function () {
    return this.outputKotlin;
  };
  protoOf(AppContext).qf = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).rf = function () {
    return this.outputSwift;
  };
  protoOf(AppContext).sf = function () {
    return this.rawCPPSDK;
  };
  protoOf(AppContext).tf = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).uf = function () {
    return this.rawSwift;
  };
  protoOf(AppContext).vf = function () {
    return this.srcKotlin;
  };
  protoOf(AppContext).wf = function () {
    return this.srcSwift;
  };
  protoOf(AppContext).xf = function () {
    return this.oa_1;
  };
  protoOf(AppContext).yf = function (arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) {
    return new AppContext(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField);
  };
  protoOf(AppContext).copy = function (arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField, $super) {
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    consoleOutput = consoleOutput === VOID ? this.consoleOutput : consoleOutput;
    cppAPIHeader = cppAPIHeader === VOID ? this.cppAPIHeader : cppAPIHeader;
    cppAPISource = cppAPISource === VOID ? this.cppAPISource : cppAPISource;
    cppArrayElementsHeader = cppArrayElementsHeader === VOID ? this.cppArrayElementsHeader : cppArrayElementsHeader;
    cppArrayElementsSource = cppArrayElementsSource === VOID ? this.cppArrayElementsSource : cppArrayElementsSource;
    cppArrayTypes = cppArrayTypes === VOID ? this.cppArrayTypes : cppArrayTypes;
    cppArrayTypesHeader = cppArrayTypesHeader === VOID ? this.cppArrayTypesHeader : cppArrayTypesHeader;
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
    recentField = recentField === VOID ? this.oa_1 : recentField;
    return $super === VOID ? this.yf(arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField) : $super.yf.call(this, arguments_0, consoleOutput, cppAPIHeader, cppAPISource, cppArrayElementsHeader, cppArrayElementsSource, cppArrayTypes, cppArrayTypesHeader, cppContextsHeader, cppContextsSource, cppEffectsHeader, cppEffectsSource, cppSetHeader, cppSetSource, currentOutputPathId, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjCPPHeader, fobjCPPSource, fobjKotlin, fobjSwift, inputFile, inputFileDir, inputFileLines, isDbg, outputCPPHeader, outputCPPSDK, outputCPPSource, outputEntityContents, outputFile, outputFileContents, outputJSExport, outputKotlin, outputPaths, outputSwift, rawCPPSDK, rawKotlin, rawSwift, srcKotlin, srcSwift, recentField);
  };
  protoOf(AppContext).toString = function () {
    return 'AppContext(arguments=' + toString(this.arguments) + ', consoleOutput=' + this.consoleOutput + ', cppAPIHeader=' + this.cppAPIHeader + ', cppAPISource=' + this.cppAPISource + ', cppArrayElementsHeader=' + this.cppArrayElementsHeader + ', cppArrayElementsSource=' + this.cppArrayElementsSource + ', cppArrayTypes=' + toString(this.cppArrayTypes) + ', cppArrayTypesHeader=' + this.cppArrayTypesHeader + ', cppContextsHeader=' + this.cppContextsHeader + ', cppContextsSource=' + this.cppContextsSource + ', cppEffectsHeader=' + this.cppEffectsHeader + ', cppEffectsSource=' + this.cppEffectsSource + ', cppSetHeader=' + this.cppSetHeader + ', cppSetSource=' + this.cppSetSource + ', currentOutputPathId=' + this.currentOutputPathId + ', didLaunch=' + this.didLaunch + ', didWriteOutputFile=' + this.didWriteOutputFile + ', entityComments=' + toString(this.entityComments) + ', entityFieldComments=' + toString(this.entityFieldComments) + ', entityFields=' + toString(this.entityFields) + ', entityNames=' + toString(this.entityNames) + ', entityPrefixesKotlin=' + toString(this.entityPrefixesKotlin) + ', entityTypes=' + toString(this.entityTypes) + ', fobjCPPHeader=' + this.fobjCPPHeader + ', fobjCPPSource=' + this.fobjCPPSource + ', fobjKotlin=' + this.fobjKotlin + ', fobjSwift=' + this.fobjSwift + ', inputFile=' + this.inputFile + ', inputFileDir=' + this.inputFileDir + ', inputFileLines=' + toString(this.inputFileLines) + ', isDbg=' + this.isDbg + ', outputCPPHeader=' + this.outputCPPHeader + ', outputCPPSDK=' + this.outputCPPSDK + ', outputCPPSource=' + this.outputCPPSource + ', outputEntityContents=' + this.outputEntityContents + ', outputFile=' + this.outputFile + ', outputFileContents=' + this.outputFileContents + ', outputJSExport=' + this.outputJSExport + ', outputKotlin=' + this.outputKotlin + ', outputPaths=' + toString(this.outputPaths) + ', outputSwift=' + this.outputSwift + ', rawCPPSDK=' + this.rawCPPSDK + ', rawKotlin=' + this.rawKotlin + ', rawSwift=' + this.rawSwift + ', srcKotlin=' + this.srcKotlin + ', srcSwift=' + this.srcSwift + ', recentField=' + this.oa_1 + ')';
  };
  protoOf(AppContext).hashCode = function () {
    var result = hashCode(this.arguments);
    result = imul(result, 31) + getStringHashCode(this.consoleOutput) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppAPIHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppAPISource) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppArrayElementsHeader) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppArrayElementsSource) | 0;
    result = imul(result, 31) + hashCode(this.cppArrayTypes) | 0;
    result = imul(result, 31) + getStringHashCode(this.cppArrayTypesHeader) | 0;
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
    result = imul(result, 31) + getStringHashCode(this.oa_1) | 0;
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
    if (!(this.cppArrayElementsHeader === tmp0_other_with_cast.cppArrayElementsHeader))
      return false;
    if (!(this.cppArrayElementsSource === tmp0_other_with_cast.cppArrayElementsSource))
      return false;
    if (!equals(this.cppArrayTypes, tmp0_other_with_cast.cppArrayTypes))
      return false;
    if (!(this.cppArrayTypesHeader === tmp0_other_with_cast.cppArrayTypesHeader))
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
    if (!(this.oa_1 === tmp0_other_with_cast.oa_1))
      return false;
    return true;
  };
  function OutputPath(path, type) {
    path = path === VOID ? '' : path;
    type = type === VOID ? '' : type;
    this.path = path;
    this.type = type;
  }
  protoOf(OutputPath).zf = function (_set____db54di) {
    this.path = _set____db54di;
  };
  protoOf(OutputPath).ag = function () {
    return this.path;
  };
  protoOf(OutputPath).bg = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(OutputPath).cg = function () {
    return this.type;
  };
  protoOf(OutputPath).j8 = function () {
    return this.path;
  };
  protoOf(OutputPath).k8 = function () {
    return this.type;
  };
  protoOf(OutputPath).dg = function (path, type) {
    return new OutputPath(path, type);
  };
  protoOf(OutputPath).copy = function (path, type, $super) {
    path = path === VOID ? this.path : path;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.dg(path, type) : $super.dg.call(this, path, type);
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
    tmp.eg_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.fg_1 = ArrayList_init_$Create$();
    this.isProcessingQueue = false;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.gg_1 = ArrayList_init_$Create$();
  }
  protoOf(KDController).hg = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(KDController).ig = function () {
    return this.context;
  };
  protoOf(KDController).jg = function (_set____db54di) {
    this.eg_1 = _set____db54di;
  };
  protoOf(KDController).kg = function () {
    return this.eg_1;
  };
  protoOf(KDController).lg = function (_set____db54di) {
    this.fg_1 = _set____db54di;
  };
  protoOf(KDController).mg = function () {
    return this.fg_1;
  };
  protoOf(KDController).ng = function (_set____db54di) {
    this.isProcessingQueue = _set____db54di;
  };
  protoOf(KDController).og = function () {
    return this.isProcessingQueue;
  };
  protoOf(KDController).pg = function (_set____db54di) {
    this.gg_1 = _set____db54di;
  };
  protoOf(KDController).qg = function () {
    return this.gg_1;
  };
  protoOf(KDController).executeFunctions = function () {
    var c = this.gg_1.n2(0);
    this.context.de(c.recentField);
    this.context.setField(c.recentField, c.fieldAny(c.recentField));
    var _iterator__ex2g4s = this.fg_1.g();
    while (_iterator__ex2g4s.h()) {
      var f = _iterator__ex2g4s.i();
      var ctx = f(this.context.selfCopy());
      if (!(ctx.recentField === KD_FIELD_NONE)) {
        this.gg_1.f(ctx);
      }
    }
    this.reportContext();
  };
  protoOf(KDController).processQueue = function () {
    if (this.isProcessingQueue) {
      return Unit_instance;
    }
    this.isProcessingQueue = true;
    while (this.gg_1.j() > 0) {
      this.executeFunctions();
    }
    this.isProcessingQueue = false;
  };
  protoOf(KDController).registerCallback = function (cb) {
    this.eg_1.f(cb);
  };
  protoOf(KDController).registerFieldCallback = function (fieldName, cb) {
    var tmp = this.eg_1;
    tmp.f(KDController$registerFieldCallback$lambda(fieldName, cb));
  };
  protoOf(KDController).registerFunction = function (f) {
    this.fg_1.f(f);
  };
  protoOf(KDController).reportContext = function () {
    var _iterator__ex2g4s = this.eg_1.g();
    while (_iterator__ex2g4s.h()) {
      var cb = _iterator__ex2g4s.i();
      cb(this.context);
    }
  };
  protoOf(KDController).set = function (fieldName, value) {
    var c = this.context.selfCopy();
    c.setField(fieldName, value);
    c.de(fieldName);
    this.gg_1.f(c);
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
    this.cppArrayElementsHeader = 'cppArrayElementsHeader';
    this.cppArrayElementsSource = 'cppArrayElementsSource';
    this.cppArrayTypes = 'cppArrayTypes';
    this.cppArrayTypesHeader = 'cppArrayTypesHeader';
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
  protoOf(F).qa = function () {
    return this.arguments;
  };
  protoOf(F).sa = function () {
    return this.consoleOutput;
  };
  protoOf(F).ua = function () {
    return this.cppAPIHeader;
  };
  protoOf(F).wa = function () {
    return this.cppAPISource;
  };
  protoOf(F).ya = function () {
    return this.cppArrayElementsHeader;
  };
  protoOf(F).ab = function () {
    return this.cppArrayElementsSource;
  };
  protoOf(F).cb = function () {
    return this.cppArrayTypes;
  };
  protoOf(F).eb = function () {
    return this.cppArrayTypesHeader;
  };
  protoOf(F).gb = function () {
    return this.cppContextsHeader;
  };
  protoOf(F).ib = function () {
    return this.cppContextsSource;
  };
  protoOf(F).kb = function () {
    return this.cppEffectsHeader;
  };
  protoOf(F).mb = function () {
    return this.cppEffectsSource;
  };
  protoOf(F).ob = function () {
    return this.cppSetHeader;
  };
  protoOf(F).qb = function () {
    return this.cppSetSource;
  };
  protoOf(F).sb = function () {
    return this.currentOutputPathId;
  };
  protoOf(F).ub = function () {
    return this.didLaunch;
  };
  protoOf(F).wb = function () {
    return this.didWriteOutputFile;
  };
  protoOf(F).yb = function () {
    return this.entityComments;
  };
  protoOf(F).ac = function () {
    return this.entityFieldComments;
  };
  protoOf(F).cc = function () {
    return this.entityFields;
  };
  protoOf(F).ec = function () {
    return this.entityNames;
  };
  protoOf(F).gc = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(F).ic = function () {
    return this.entityTypes;
  };
  protoOf(F).kc = function () {
    return this.fobjCPPHeader;
  };
  protoOf(F).mc = function () {
    return this.fobjCPPSource;
  };
  protoOf(F).oc = function () {
    return this.fobjKotlin;
  };
  protoOf(F).qc = function () {
    return this.fobjSwift;
  };
  protoOf(F).sc = function () {
    return this.inputFile;
  };
  protoOf(F).uc = function () {
    return this.inputFileDir;
  };
  protoOf(F).wc = function () {
    return this.inputFileLines;
  };
  protoOf(F).yc = function () {
    return this.isDbg;
  };
  protoOf(F).rg = function () {
    return this.none;
  };
  protoOf(F).ad = function () {
    return this.outputCPPHeader;
  };
  protoOf(F).cd = function () {
    return this.outputCPPSDK;
  };
  protoOf(F).ed = function () {
    return this.outputCPPSource;
  };
  protoOf(F).gd = function () {
    return this.outputEntityContents;
  };
  protoOf(F).id = function () {
    return this.outputFile;
  };
  protoOf(F).kd = function () {
    return this.outputFileContents;
  };
  protoOf(F).md = function () {
    return this.outputJSExport;
  };
  protoOf(F).od = function () {
    return this.outputKotlin;
  };
  protoOf(F).qd = function () {
    return this.outputPaths;
  };
  protoOf(F).sd = function () {
    return this.outputSwift;
  };
  protoOf(F).ud = function () {
    return this.rawCPPSDK;
  };
  protoOf(F).wd = function () {
    return this.rawKotlin;
  };
  protoOf(F).yd = function () {
    return this.rawSwift;
  };
  protoOf(F).ae = function () {
    return this.srcKotlin;
  };
  protoOf(F).ce = function () {
    return this.srcSwift;
  };
  var F_instance;
  function F_getInstance() {
    return F_instance;
  }
  function base64ToString(b64) {
    return decodeToString(Default_getInstance().r9(b64));
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
    return this.ee();
  }, function (value) {
    this.de(value);
  });
  //endregion
  //region block: init
  APP_KD_IMPORT = 'import kotlin.js.JsExport';
  APP_KD_JSEXPORT = '@JsExport';
  APP_KD_PACKAGE = 'package org.opengamestudio';
  embKotlin64 = 'LyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDMuMi4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCkBKc0V4cG9ydAppbnRlcmZhY2UgS0RDb250ZXh0IHsKICAgIC8qKgogICAgICogTmFtZSBvZiB0aGUgZmllbGQgdGhhdCBoYXMganVzdCBiZWVuIGNoYW5nZWQKICAgICAqCiAgICAgKiBBbGxvd3Mgc2hvdWxkLWZ1bmN0aW9ucyAocmVkdWNlcnMpIHRvIHJlYWN0IG9ubHkgdG8KICAgICAqIHJlbGV2YW50IGNoYW5nZXMgYW5kIGlnbm9yZSBvdGhlciBjaGFuZ2VzIG9mIEtEQ29udGV4dAogICAgICovCiAgICB2YXIgcmVjZW50RmllbGQ6IFN0cmluZwoKICAgIC8qKgogICAgICogR2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIDxUPiBmaWVsZChuYW1lOiBTdHJpbmcpOiBUCiAgICAvKioKICAgICAqIEVyYXNlIHR5cGUKICAgICAqCiAgICAgKiBVc2VkIGJ5IEtEQ29udHJvbGxlciB0byBhc3NpZ24gcmVjZW50IGZpZWxkJ3MgdmFsdWUKICAgICAqLwogICAgZnVuIGZpZWxkQW55KG5hbWU6IFN0cmluZyk6IEFueSB7CiAgICAgICAgcmV0dXJuIGZpZWxkKG5hbWUpCiAgICB9CiAgICAvKioKICAgICAqIENyZWF0ZSBhIGNvcHkgb2YgdGhlIEtEQ29udGV4dCBkZXJpdmF0aXZlCiAgICAgKgogICAgICogVXNlZCBieSBLRENvbnRyb2xsZXIgdG8gdHJlYXQgYWxsIGRlcml2ZWQgY29udGV4dHMgYXMgS0RDb250ZXh0CiAgICAgKi8KICAgIGZ1biBzZWxmQ29weSgpOiBLRENvbnRleHQKICAgIC8qKgogICAgICogU2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIHNldEZpZWxkKG5hbWU6IFN0cmluZywgdmFsdWU6IEFueT8pCn0KLyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDMuMi4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCnZhbCBLRF9GSUVMRF9OT05FID0gIm5vbmUiCgpASnNFeHBvcnQKY2xhc3MgS0RDb250cm9sbGVyKAogICAgdmFyIGNvbnRleHQ6IEtEQ29udGV4dAopIHsKICAgIGludGVybmFsIHZhciBjYWxsYmFja3MgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IFVuaXQ+KCkKICAgIGludGVybmFsIHZhciBmdW5jdGlvbnMgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IEtEQ29udGV4dD4oKQogICAgdmFyIGlzUHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2UKICAgIGludGVybmFsIHZhciBxdWV1ZSA9IG11dGFibGVMaXN0T2Y8S0RDb250ZXh0PigpCiAKICAgIGZ1biBleGVjdXRlRnVuY3Rpb25zKCkgewogICAgICAgIHZhbCBjID0gcXVldWUucmVtb3ZlQXQoMCkKICAgICAgICBjb250ZXh0LnJlY2VudEZpZWxkID0gYy5yZWNlbnRGaWVsZAogICAgICAgIGNvbnRleHQuc2V0RmllbGQoYy5yZWNlbnRGaWVsZCwgYy5maWVsZEFueShjLnJlY2VudEZpZWxkKSkKICAgICAgIAogICAgICAgIGZvciAoZiBpbiBmdW5jdGlvbnMpIHsKICAgICAgICAgICAgdmFsIGN0eCA9IGYoY29udGV4dC5zZWxmQ29weSgpKQogICAgICAgICAgICBpZiAoY3R4LnJlY2VudEZpZWxkICE9IEtEX0ZJRUxEX05PTkUpIHsKICAgICAgICAgICAgICAgIHF1ZXVlLmFkZChjdHgpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAKICAgICAgICByZXBvcnRDb250ZXh0KCkKICAgIH0KIAogICAgZnVuIHByb2Nlc3NRdWV1ZSgpIHsKICAgICAgICAvLyBQcmV2ZW50IHJlY3Vyc2lvbi4KICAgICAgICBpZiAoaXNQcm9jZXNzaW5nUXVldWUpIHsKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSB0cnVlCiAgICAgICAKICAgICAgICB3aGlsZSAocXVldWUuc2l6ZSA+IDApIHsKICAgICAgICAgICAgZXhlY3V0ZUZ1bmN0aW9ucygpCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSBmYWxzZQogICAgfQogCiAgICBmdW4gcmVnaXN0ZXJDYWxsYmFjayhjYjogKGM6IEtEQ29udGV4dCkgLT4gVW5pdCkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoY2IpCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZpZWxkQ2FsbGJhY2soCiAgICAgICAgZmllbGROYW1lOiBTdHJpbmcsCiAgICAgICAgY2I6IChLRENvbnRleHQpIC0+IFVuaXQKICAgICkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoeyBjIC0+CiAgICAgICAgICAgIGlmIChjLnJlY2VudEZpZWxkID09IGZpZWxkTmFtZSkgewogICAgICAgICAgICAgICAgY2IoYykKICAgICAgICAgICAgfQogICAgICAgIH0pCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZ1bmN0aW9uKGY6IChLRENvbnRleHQpIC0+IEtEQ29udGV4dCkgewogICAgICAgIGZ1bmN0aW9ucy5hZGQoZikKICAgIH0KIAogICAgZnVuIHJlcG9ydENvbnRleHQoKSB7CiAgICAgICAgZm9yIChjYiBpbiBjYWxsYmFja3MpIHsKICAgICAgICAgICAgY2IoY29udGV4dCkKICAgICAgICB9CiAgICB9CiAKICAgIGZ1biBzZXQoZmllbGROYW1lOiBTdHJpbmcsIHZhbHVlOiBBbnkpIHsKICAgICAgICB2YXIgYyA9IGNvbnRleHQuc2VsZkNvcHkoKQogICAgICAgIGMuc2V0RmllbGQoZmllbGROYW1lLCB2YWx1ZSkKICAgICAgICBjLnJlY2VudEZpZWxkID0gZmllbGROYW1lCiAgICAgICAgcXVldWUuYWRkKGMpCiAgICAgICAgcHJvY2Vzc1F1ZXVlKCkKICAgIH0KfQovKioKICogVGhpcyBmaWxlIGlzIGEgcGFydCBvZiBLb3RsaW4gZGlhbGVjdDoKICogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9PR1N0dWRpby9rb3RsaW4tZGlhbGVjdAogKiBMaWNlbnNlOiBDQzAKICogVmVyc2lvbjogMy4yLjAKICovCgpwYWNrYWdlIG9yZy5vcGVuZ2FtZXN0dWRpbwoKaW1wb3J0IGtvdGxpbi5qcy5Kc0V4cG9ydAoKLy8gUmVnaXN0ZXIgc2V2ZXJhbCBvbmVsaW5lciBjYWxsYmFja3MgdG8gYSBjb250cm9sbGVyCkBKc0V4cG9ydApmdW4gcmVnaXN0ZXJPbmVsaW5lcnMoCiAgICBjdHJsOiBLRENvbnRyb2xsZXIsCiAgICBpdGVtczogQXJyYXk8QW55PgopIHsKICAgIHZhbCBoYWxmQ291bnQgPSBpdGVtcy5zaXplIC8gMgogICAgZm9yIChpIGluIDAuLjxoYWxmQ291bnQpIHsKICAgICAgICB2YWwgZmllbGQgPSBpdGVtc1tpICogMl0gYXMgU3RyaW5nCiAgICAgICAgdmFsIGNhbGxiYWNrID0gaXRlbXNbaSAqIDIgKyAxXSBhcyAoYzogS0RDb250ZXh0KSAtPiBVbml0CiAgICAgICAgY3RybC5yZWdpc3RlckZpZWxkQ2FsbGJhY2soZmllbGQsIGNhbGxiYWNrKTsKICAgIH0KfQo=';
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
