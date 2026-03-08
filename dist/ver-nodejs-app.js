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
  var replace = kotlin_kotlin.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.l1;
  var Unit_instance = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.y;
  var initMetadataForObject = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.m1;
  var sorted = kotlin_kotlin.$_$.l;
  var copyToArray = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.n;
  var emptyMap = kotlin_kotlin.$_$.h;
  var startsWith = kotlin_kotlin.$_$.h1;
  var endsWith = kotlin_kotlin.$_$.e1;
  var contains = kotlin_kotlin.$_$.b1;
  var substring = kotlin_kotlin.$_$.j1;
  var VOID = kotlin_kotlin.$_$.a;
  var split = kotlin_kotlin.$_$.g1;
  var first = kotlin_kotlin.$_$.i;
  var last = kotlin_kotlin.$_$.j;
  var isArray = kotlin_kotlin.$_$.w;
  var KtMap = kotlin_kotlin.$_$.f;
  var isInterface = kotlin_kotlin.$_$.x;
  var toString = kotlin_kotlin.$_$.z;
  var hashCode = kotlin_kotlin.$_$.s;
  var getStringHashCode = kotlin_kotlin.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.p;
  var defineProp = kotlin_kotlin.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.t;
  var initMetadataForInterface = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.c1;
  var substring_0 = kotlin_kotlin.$_$.i1;
  var take = kotlin_kotlin.$_$.k1;
  var println = kotlin_kotlin.$_$.m;
  var last_0 = kotlin_kotlin.$_$.k;
  var dropLast = kotlin_kotlin.$_$.d1;
  var capitalize = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(AppProto, 'AppProto');
  function fieldAny(name) {
    return this.field(name);
  }
  initMetadataForInterface(KDContext, 'KDContext');
  initMetadataForClass(AppContext, 'AppContext', AppContext, VOID, [KDContext]);
  initMetadataForClass(KDController, 'KDController');
  //endregion
  var APP_KD_IMPORT;
  var APP_KD_PACKAGE;
  function appCtrl() {
    return AppProto_getInstance().e9_1;
  }
  function appShouldCollectEntityComments(c) {
    if (c.f9_1 === 'entityNames') {
      c.entityComments = parseEntityComments(c.inputFileLines);
      c.f9_1 = 'entityComments';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFieldComments(c) {
    if (c.f9_1 === 'entityFields') {
      c.entityFieldComments = parseEntityFieldComments(c.inputFileLines);
      c.f9_1 = 'entityFieldComments';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectEntityFields(c) {
    if (c.f9_1 === 'entityTypes') {
      c.entityFields = parseEntityFields(c.inputFileLines);
      c.f9_1 = 'entityFields';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectEntityNames(c) {
    if (c.f9_1 === 'inputFileLines') {
      c.entityNames = parseEntityNames(c.inputFileLines);
      c.f9_1 = 'entityNames';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectEntityPrefixesKotlin(c) {
    if (c.f9_1 === 'entityComments') {
      c.entityPrefixesKotlin = parseEntityPrefixes(c.inputFileLines, '    prefix-kotlin: ');
      c.f9_1 = 'entityPrefixesKotlin';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectEntityTypes(c) {
    if (c.f9_1 === 'entityComments') {
      c.entityTypes = parseEntityTypes(c.inputFileLines);
      c.f9_1 = 'entityTypes';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectOutputPaths(c) {
    if (c.f9_1 === 'inputFileLines') {
      c.outputPaths = parseOutputPaths(c.inputFileLines);
      c.f9_1 = 'outputPaths';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldCollectRawKotlin(c) {
    if (c.f9_1 === 'inputFileLines') {
      c.rawKotlin = parseRawKotlin(c.inputFileLines);
      c.f9_1 = 'rawKotlin';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldGenerateKotlinEntities(c) {
    if (c.f9_1 === 'entityFieldComments') {
      c.outputEntityContents = genKotlinEntitiesFile(c.entityComments, c.entityFieldComments, c.entityFields, c.entityNames, c.entityPrefixesKotlin, c.entityTypes, c.rawKotlin);
      c.f9_1 = 'outputEntityContents';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldParseInputFilePath(c) {
    if (c.f9_1 === 'didLaunch' && cliArgumentValue(c.arguments, '--file').length > 0) {
      c.inputFile = cliArgumentValue(c.arguments, '--file');
      c.f9_1 = 'inputFile';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldParseOutputFilePath(c) {
    if (c.f9_1 === 'didLaunch' && cliArgumentValue(c.arguments, '--out').length > 0) {
      c.outputFile = cliArgumentValue(c.arguments, '--out');
      c.f9_1 = 'outputFile';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldPrintToConsole(c) {
    var tmp;
    if (c.f9_1 === 'didLaunch') {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = c.arguments.length === 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      c.consoleOutput = 'Usage: {bin} --file=/path/to/file.yml --out=/path/to/file.kt';
      c.f9_1 = 'consoleOutput';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldResetFObjContents(c) {
    if (c.f9_1 === 'outputKDContents') {
      var ids = fobjContexts(c.entityTypes);
      var fields = fobjFields(c.entityFields, ids);
      c.fobjContents = fobjJVM(fields);
      c.f9_1 = 'fobjContents';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldResetOutputFileContents(c) {
    if (c.f9_1 === 'fobjContents') {
      c.outputFileContents = c.outputEntityContents + c.outputKDContents + c.fobjContents;
      c.f9_1 = 'outputFileContents';
      return c;
    }
    c.f9_1 = 'none';
    return c;
  }
  function appShouldResetOutputKDContents(c) {
    if (c.f9_1 === 'outputEntityContents') {
      var contents = base64ToString(get_emb64());
      c.outputKDContents = replace(replace(contents, APP_KD_IMPORT, ''), APP_KD_PACKAGE, '');
      c.f9_1 = 'outputKDContents';
      return c;
    }
    c.f9_1 = 'none';
    return c;
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
  function appShouldCollectOutputPaths$ref() {
    var l = function (p0) {
      return appShouldCollectOutputPaths(p0);
    };
    l.callableName = 'appShouldCollectOutputPaths';
    return l;
  }
  function appShouldCollectRawKotlin$ref() {
    var l = function (p0) {
      return appShouldCollectRawKotlin(p0);
    };
    l.callableName = 'appShouldCollectRawKotlin';
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
  function appShouldPrintToConsole$ref() {
    var l = function (p0) {
      return appShouldPrintToConsole(p0);
    };
    l.callableName = 'appShouldPrintToConsole';
    return l;
  }
  function appShouldParseOutputFilePath$ref() {
    var l = function (p0) {
      return appShouldParseOutputFilePath(p0);
    };
    l.callableName = 'appShouldParseOutputFilePath';
    return l;
  }
  function appShouldResetFObjContents$ref() {
    var l = function (p0) {
      return appShouldResetFObjContents(p0);
    };
    l.callableName = 'appShouldResetFObjContents';
    return l;
  }
  function appShouldResetOutputFileContents$ref() {
    var l = function (p0) {
      return appShouldResetOutputFileContents(p0);
    };
    l.callableName = 'appShouldResetOutputFileContents';
    return l;
  }
  function appShouldResetOutputKDContents$ref() {
    var l = function (p0) {
      return appShouldResetOutputKDContents(p0);
    };
    l.callableName = 'appShouldResetOutputKDContents';
    return l;
  }
  function AppProto$lambda($f) {
    return function (c) {
      return $f(c instanceof AppContext ? c : THROW_CCE());
    };
  }
  function AppProto() {
    AppProto_instance = this;
    this.e9_1 = new KDController(new AppContext());
    setupComponentDebugging(this.e9_1, 'App');
    var tmp = appShouldCollectEntityComments$ref();
    var tmp_0 = appShouldCollectEntityFieldComments$ref();
    var tmp_1 = appShouldCollectEntityFields$ref();
    var tmp_2 = appShouldCollectEntityNames$ref();
    var tmp_3 = appShouldCollectEntityPrefixesKotlin$ref();
    var tmp_4 = appShouldCollectEntityTypes$ref();
    var tmp_5 = appShouldCollectOutputPaths$ref();
    var tmp_6 = appShouldCollectRawKotlin$ref();
    var tmp_7 = appShouldGenerateKotlinEntities$ref();
    var tmp_8 = appShouldParseInputFilePath$ref();
    var tmp_9 = appShouldPrintToConsole$ref();
    var tmp_10 = appShouldParseOutputFilePath$ref();
    var tmp_11 = appShouldResetFObjContents$ref();
    var tmp_12 = appShouldResetOutputFileContents$ref();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, appShouldResetOutputKDContents$ref()];
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.e9_1.registerFunction(AppProto$lambda(element));
    }
  }
  var AppProto_instance;
  function AppProto_getInstance() {
    if (AppProto_instance == null)
      new AppProto();
    return AppProto_instance;
  }
  function get_emb64() {
    return emb64;
  }
  var emb64;
  function fobjContexts(entityTypes) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var ids = [];
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = entityTypes.y().f();
    while (_iterator__ex2g4s.g()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.h();
      // Inline function 'kotlin.collections.component1' call
      var id = _destruct__k2r9zo.r();
      // Inline function 'kotlin.collections.component2' call
      var type = _destruct__k2r9zo.s();
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
  function fobjFields(entityFields, ids) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.set' call
    d.y1('none', true);
    var inductionVariable = 0;
    var last = ids.length;
    while (inductionVariable < last) {
      var id = ids[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var fieldTypes = ensureNotNull(entityFields.v(id));
      var _iterator__ex2g4s = fieldTypes.w().f();
      while (_iterator__ex2g4s.g()) {
        var fieldName = _iterator__ex2g4s.h();
        // Inline function 'kotlin.collections.set' call
        d.y1(fieldName, true);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = sorted(d.w());
    return copyToArray(this_0);
  }
  function fobjJVM(fieldNames) {
    var itemContents = '';
    var inductionVariable = 0;
    var last = fieldNames.length;
    while (inductionVariable < last) {
      var name = fieldNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      itemContents = itemContents + replace('    const val %NAME% = "%NAME%"\n', '%NAME%', name);
    }
    return replace('\n// Special object to reference context fields with a compile time validation\nobject F {\n%ITEMS%\n}\n', '%ITEMS%', itemContents);
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
      var tmp0_elvis_lhs = entityComments.v(id);
      var comment = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = entityPrefixes.v(id);
      var prefix = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = entityTypes.v(id);
      var type = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
      var tmp3_elvis_lhs = entityFieldComments.v(id);
      var tmp;
      if (tmp3_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mapOf' call
        tmp = emptyMap();
      } else {
        tmp = tmp3_elvis_lhs;
      }
      var fieldComments = tmp;
      var tmp4_elvis_lhs = entityFields.v(id);
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
    var sortedFieldNames = sorted(fields.w());
    var _iterator__ex2g4s = sortedFieldNames.f();
    while (_iterator__ex2g4s.g()) {
      var name = _iterator__ex2g4s.h();
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = contents;
      if (!(charSequenceLength(this_0) === 0)) {
        contents = contents + '\n';
      }
      var tmp0_elvis_lhs = fieldComments.v(name);
      var comment = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = fields.v(name);
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
    var sortedFieldNames = sorted(fields.w());
    var _iterator__ex2g4s = sortedFieldNames.f();
    while (_iterator__ex2g4s.g()) {
      var name = _iterator__ex2g4s.h();
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
    var sortedFieldNames = sorted(fields.w());
    var _iterator__ex2g4s = sortedFieldNames.f();
    while (_iterator__ex2g4s.g()) {
      var name = _iterator__ex2g4s.h();
      var tmp0_elvis_lhs = fields.v(name);
      var type = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      contents = contents + genKotlinSetter(isFirst, name, type);
      isFirst = false;
    }
    return contents;
  }
  var KD_FIELD_NONE;
  function AppContext(arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField) {
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
    fobjContents = fobjContents === VOID ? '' : fobjContents;
    inputFile = inputFile === VOID ? '' : inputFile;
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
    outputEntityContents = outputEntityContents === VOID ? '' : outputEntityContents;
    outputFile = outputFile === VOID ? '' : outputFile;
    outputFileContents = outputFileContents === VOID ? '' : outputFileContents;
    outputKDContents = outputKDContents === VOID ? '' : outputKDContents;
    var tmp_7;
    if (outputPaths === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_7 = emptyMap();
    } else {
      tmp_7 = outputPaths;
    }
    outputPaths = tmp_7;
    rawKotlin = rawKotlin === VOID ? '' : rawKotlin;
    recentField = recentField === VOID ? '' : recentField;
    this.arguments = arguments_0;
    this.consoleOutput = consoleOutput;
    this.didLaunch = didLaunch;
    this.didWriteOutputFile = didWriteOutputFile;
    this.entityComments = entityComments;
    this.entityFieldComments = entityFieldComments;
    this.entityFields = entityFields;
    this.entityNames = entityNames;
    this.entityPrefixesKotlin = entityPrefixesKotlin;
    this.entityTypes = entityTypes;
    this.fobjContents = fobjContents;
    this.inputFile = inputFile;
    this.inputFileLines = inputFileLines;
    this.isDbg = isDbg;
    this.outputEntityContents = outputEntityContents;
    this.outputFile = outputFile;
    this.outputFileContents = outputFileContents;
    this.outputKDContents = outputKDContents;
    this.outputPaths = outputPaths;
    this.rawKotlin = rawKotlin;
    this.f9_1 = recentField;
  }
  protoOf(AppContext).g9 = function (_set____db54di) {
    this.arguments = _set____db54di;
  };
  protoOf(AppContext).h9 = function () {
    return this.arguments;
  };
  protoOf(AppContext).i9 = function (_set____db54di) {
    this.consoleOutput = _set____db54di;
  };
  protoOf(AppContext).j9 = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).k9 = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(AppContext).l9 = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).m9 = function (_set____db54di) {
    this.didWriteOutputFile = _set____db54di;
  };
  protoOf(AppContext).n9 = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).o9 = function (_set____db54di) {
    this.entityComments = _set____db54di;
  };
  protoOf(AppContext).p9 = function () {
    return this.entityComments;
  };
  protoOf(AppContext).q9 = function (_set____db54di) {
    this.entityFieldComments = _set____db54di;
  };
  protoOf(AppContext).r9 = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).s9 = function (_set____db54di) {
    this.entityFields = _set____db54di;
  };
  protoOf(AppContext).t9 = function () {
    return this.entityFields;
  };
  protoOf(AppContext).u9 = function (_set____db54di) {
    this.entityNames = _set____db54di;
  };
  protoOf(AppContext).v9 = function () {
    return this.entityNames;
  };
  protoOf(AppContext).w9 = function (_set____db54di) {
    this.entityPrefixesKotlin = _set____db54di;
  };
  protoOf(AppContext).x9 = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).y9 = function (_set____db54di) {
    this.entityTypes = _set____db54di;
  };
  protoOf(AppContext).z9 = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).aa = function (_set____db54di) {
    this.fobjContents = _set____db54di;
  };
  protoOf(AppContext).ba = function () {
    return this.fobjContents;
  };
  protoOf(AppContext).ca = function (_set____db54di) {
    this.inputFile = _set____db54di;
  };
  protoOf(AppContext).da = function () {
    return this.inputFile;
  };
  protoOf(AppContext).ea = function (_set____db54di) {
    this.inputFileLines = _set____db54di;
  };
  protoOf(AppContext).fa = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).ga = function (_set____db54di) {
    this.isDbg = _set____db54di;
  };
  protoOf(AppContext).ha = function () {
    return this.isDbg;
  };
  protoOf(AppContext).ia = function (_set____db54di) {
    this.outputEntityContents = _set____db54di;
  };
  protoOf(AppContext).ja = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).ka = function (_set____db54di) {
    this.outputFile = _set____db54di;
  };
  protoOf(AppContext).la = function () {
    return this.outputFile;
  };
  protoOf(AppContext).ma = function (_set____db54di) {
    this.outputFileContents = _set____db54di;
  };
  protoOf(AppContext).na = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).oa = function (_set____db54di) {
    this.outputKDContents = _set____db54di;
  };
  protoOf(AppContext).pa = function () {
    return this.outputKDContents;
  };
  protoOf(AppContext).qa = function (_set____db54di) {
    this.outputPaths = _set____db54di;
  };
  protoOf(AppContext).ra = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).sa = function (_set____db54di) {
    this.rawKotlin = _set____db54di;
  };
  protoOf(AppContext).ta = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).ua = function (_set____db54di) {
    this.f9_1 = _set____db54di;
  };
  protoOf(AppContext).va = function () {
    return this.f9_1;
  };
  protoOf(AppContext).field = function (name) {
    switch (name) {
      case 'arguments':
        var tmp = this.arguments;
        return !(tmp == null) ? tmp : THROW_CCE();
      case 'consoleOutput':
        var tmp_0 = this.consoleOutput;
        return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      case 'didLaunch':
        var tmp_1 = this.didLaunch;
        return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
      case 'didWriteOutputFile':
        var tmp_2 = this.didWriteOutputFile;
        return !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      case 'entityComments':
        var tmp_3 = this.entityComments;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'entityFieldComments':
        var tmp_4 = this.entityFieldComments;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'entityFields':
        var tmp_5 = this.entityFields;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      case 'entityNames':
        var tmp_6 = this.entityNames;
        return !(tmp_6 == null) ? tmp_6 : THROW_CCE();
      case 'entityPrefixesKotlin':
        var tmp_7 = this.entityPrefixesKotlin;
        return !(tmp_7 == null) ? tmp_7 : THROW_CCE();
      case 'entityTypes':
        var tmp_8 = this.entityTypes;
        return !(tmp_8 == null) ? tmp_8 : THROW_CCE();
      case 'fobjContents':
        var tmp_9 = this.fobjContents;
        return !(tmp_9 == null) ? tmp_9 : THROW_CCE();
      case 'inputFile':
        var tmp_10 = this.inputFile;
        return !(tmp_10 == null) ? tmp_10 : THROW_CCE();
      case 'inputFileLines':
        var tmp_11 = this.inputFileLines;
        return !(tmp_11 == null) ? tmp_11 : THROW_CCE();
      case 'isDbg':
        var tmp_12 = this.isDbg;
        return !(tmp_12 == null) ? tmp_12 : THROW_CCE();
      case 'outputEntityContents':
        var tmp_13 = this.outputEntityContents;
        return !(tmp_13 == null) ? tmp_13 : THROW_CCE();
      case 'outputFile':
        var tmp_14 = this.outputFile;
        return !(tmp_14 == null) ? tmp_14 : THROW_CCE();
      case 'outputFileContents':
        var tmp_15 = this.outputFileContents;
        return !(tmp_15 == null) ? tmp_15 : THROW_CCE();
      case 'outputKDContents':
        var tmp_16 = this.outputKDContents;
        return !(tmp_16 == null) ? tmp_16 : THROW_CCE();
      case 'outputPaths':
        var tmp_17 = this.outputPaths;
        return !(tmp_17 == null) ? tmp_17 : THROW_CCE();
      case 'rawKotlin':
        var tmp_18 = this.rawKotlin;
        return !(tmp_18 == null) ? tmp_18 : THROW_CCE();
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
      case 'didLaunch':
        var tmp_1 = this;
        tmp_1.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didWriteOutputFile':
        var tmp_2 = this;
        tmp_2.didWriteOutputFile = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'entityComments':
        var tmp_3 = this;
        tmp_3.entityComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFieldComments':
        var tmp_4 = this;
        tmp_4.entityFieldComments = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityFields':
        var tmp_5 = this;
        tmp_5.entityFields = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityNames':
        var tmp_6 = this;
        tmp_6.entityNames = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'entityPrefixesKotlin':
        var tmp_7 = this;
        tmp_7.entityPrefixesKotlin = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'entityTypes':
        var tmp_8 = this;
        tmp_8.entityTypes = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'fobjContents':
        var tmp_9 = this;
        tmp_9.fobjContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFile':
        var tmp_10 = this;
        tmp_10.inputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputFileLines':
        var tmp_11 = this;
        tmp_11.inputFileLines = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'isDbg':
        var tmp_12 = this;
        tmp_12.isDbg = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'outputEntityContents':
        var tmp_13 = this;
        tmp_13.outputEntityContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFile':
        var tmp_14 = this;
        tmp_14.outputFile = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputFileContents':
        var tmp_15 = this;
        tmp_15.outputFileContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputKDContents':
        var tmp_16 = this;
        tmp_16.outputKDContents = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'outputPaths':
        var tmp_17 = this;
        tmp_17.outputPaths = (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE();
        break;
      case 'rawKotlin':
        var tmp_18 = this;
        tmp_18.rawKotlin = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
    }
  };
  protoOf(AppContext).c9 = function () {
    return this.arguments;
  };
  protoOf(AppContext).d9 = function () {
    return this.consoleOutput;
  };
  protoOf(AppContext).wa = function () {
    return this.didLaunch;
  };
  protoOf(AppContext).xa = function () {
    return this.didWriteOutputFile;
  };
  protoOf(AppContext).ya = function () {
    return this.entityComments;
  };
  protoOf(AppContext).za = function () {
    return this.entityFieldComments;
  };
  protoOf(AppContext).ab = function () {
    return this.entityFields;
  };
  protoOf(AppContext).bb = function () {
    return this.entityNames;
  };
  protoOf(AppContext).cb = function () {
    return this.entityPrefixesKotlin;
  };
  protoOf(AppContext).db = function () {
    return this.entityTypes;
  };
  protoOf(AppContext).eb = function () {
    return this.fobjContents;
  };
  protoOf(AppContext).fb = function () {
    return this.inputFile;
  };
  protoOf(AppContext).gb = function () {
    return this.inputFileLines;
  };
  protoOf(AppContext).hb = function () {
    return this.isDbg;
  };
  protoOf(AppContext).ib = function () {
    return this.outputEntityContents;
  };
  protoOf(AppContext).jb = function () {
    return this.outputFile;
  };
  protoOf(AppContext).kb = function () {
    return this.outputFileContents;
  };
  protoOf(AppContext).lb = function () {
    return this.outputKDContents;
  };
  protoOf(AppContext).mb = function () {
    return this.outputPaths;
  };
  protoOf(AppContext).nb = function () {
    return this.rawKotlin;
  };
  protoOf(AppContext).ob = function () {
    return this.f9_1;
  };
  protoOf(AppContext).pb = function (arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField) {
    return new AppContext(arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField);
  };
  protoOf(AppContext).copy = function (arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField, $super) {
    arguments_0 = arguments_0 === VOID ? this.arguments : arguments_0;
    consoleOutput = consoleOutput === VOID ? this.consoleOutput : consoleOutput;
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    didWriteOutputFile = didWriteOutputFile === VOID ? this.didWriteOutputFile : didWriteOutputFile;
    entityComments = entityComments === VOID ? this.entityComments : entityComments;
    entityFieldComments = entityFieldComments === VOID ? this.entityFieldComments : entityFieldComments;
    entityFields = entityFields === VOID ? this.entityFields : entityFields;
    entityNames = entityNames === VOID ? this.entityNames : entityNames;
    entityPrefixesKotlin = entityPrefixesKotlin === VOID ? this.entityPrefixesKotlin : entityPrefixesKotlin;
    entityTypes = entityTypes === VOID ? this.entityTypes : entityTypes;
    fobjContents = fobjContents === VOID ? this.fobjContents : fobjContents;
    inputFile = inputFile === VOID ? this.inputFile : inputFile;
    inputFileLines = inputFileLines === VOID ? this.inputFileLines : inputFileLines;
    isDbg = isDbg === VOID ? this.isDbg : isDbg;
    outputEntityContents = outputEntityContents === VOID ? this.outputEntityContents : outputEntityContents;
    outputFile = outputFile === VOID ? this.outputFile : outputFile;
    outputFileContents = outputFileContents === VOID ? this.outputFileContents : outputFileContents;
    outputKDContents = outputKDContents === VOID ? this.outputKDContents : outputKDContents;
    outputPaths = outputPaths === VOID ? this.outputPaths : outputPaths;
    rawKotlin = rawKotlin === VOID ? this.rawKotlin : rawKotlin;
    recentField = recentField === VOID ? this.f9_1 : recentField;
    return $super === VOID ? this.pb(arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField) : $super.pb.call(this, arguments_0, consoleOutput, didLaunch, didWriteOutputFile, entityComments, entityFieldComments, entityFields, entityNames, entityPrefixesKotlin, entityTypes, fobjContents, inputFile, inputFileLines, isDbg, outputEntityContents, outputFile, outputFileContents, outputKDContents, outputPaths, rawKotlin, recentField);
  };
  protoOf(AppContext).toString = function () {
    return 'AppContext(arguments=' + toString(this.arguments) + ', consoleOutput=' + this.consoleOutput + ', didLaunch=' + this.didLaunch + ', didWriteOutputFile=' + this.didWriteOutputFile + ', entityComments=' + toString(this.entityComments) + ', entityFieldComments=' + toString(this.entityFieldComments) + ', entityFields=' + toString(this.entityFields) + ', entityNames=' + toString(this.entityNames) + ', entityPrefixesKotlin=' + toString(this.entityPrefixesKotlin) + ', entityTypes=' + toString(this.entityTypes) + ', fobjContents=' + this.fobjContents + ', inputFile=' + this.inputFile + ', inputFileLines=' + toString(this.inputFileLines) + ', isDbg=' + this.isDbg + ', outputEntityContents=' + this.outputEntityContents + ', outputFile=' + this.outputFile + ', outputFileContents=' + this.outputFileContents + ', outputKDContents=' + this.outputKDContents + ', outputPaths=' + toString(this.outputPaths) + ', rawKotlin=' + this.rawKotlin + ', recentField=' + this.f9_1 + ')';
  };
  protoOf(AppContext).hashCode = function () {
    var result = hashCode(this.arguments);
    result = imul(result, 31) + getStringHashCode(this.consoleOutput) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didLaunch) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didWriteOutputFile) | 0;
    result = imul(result, 31) + hashCode(this.entityComments) | 0;
    result = imul(result, 31) + hashCode(this.entityFieldComments) | 0;
    result = imul(result, 31) + hashCode(this.entityFields) | 0;
    result = imul(result, 31) + hashCode(this.entityNames) | 0;
    result = imul(result, 31) + hashCode(this.entityPrefixesKotlin) | 0;
    result = imul(result, 31) + hashCode(this.entityTypes) | 0;
    result = imul(result, 31) + getStringHashCode(this.fobjContents) | 0;
    result = imul(result, 31) + getStringHashCode(this.inputFile) | 0;
    result = imul(result, 31) + hashCode(this.inputFileLines) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isDbg) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputEntityContents) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputFile) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputFileContents) | 0;
    result = imul(result, 31) + getStringHashCode(this.outputKDContents) | 0;
    result = imul(result, 31) + hashCode(this.outputPaths) | 0;
    result = imul(result, 31) + getStringHashCode(this.rawKotlin) | 0;
    result = imul(result, 31) + getStringHashCode(this.f9_1) | 0;
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
    if (!(this.fobjContents === tmp0_other_with_cast.fobjContents))
      return false;
    if (!(this.inputFile === tmp0_other_with_cast.inputFile))
      return false;
    if (!equals(this.inputFileLines, tmp0_other_with_cast.inputFileLines))
      return false;
    if (!(this.isDbg === tmp0_other_with_cast.isDbg))
      return false;
    if (!(this.outputEntityContents === tmp0_other_with_cast.outputEntityContents))
      return false;
    if (!(this.outputFile === tmp0_other_with_cast.outputFile))
      return false;
    if (!(this.outputFileContents === tmp0_other_with_cast.outputFileContents))
      return false;
    if (!(this.outputKDContents === tmp0_other_with_cast.outputKDContents))
      return false;
    if (!equals(this.outputPaths, tmp0_other_with_cast.outputPaths))
      return false;
    if (!(this.rawKotlin === tmp0_other_with_cast.rawKotlin))
      return false;
    if (!(this.f9_1 === tmp0_other_with_cast.f9_1))
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
    tmp.qb_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.rb_1 = ArrayList_init_$Create$();
    this.isProcessingQueue = false;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.sb_1 = ArrayList_init_$Create$();
  }
  protoOf(KDController).tb = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(KDController).ub = function () {
    return this.context;
  };
  protoOf(KDController).vb = function (_set____db54di) {
    this.qb_1 = _set____db54di;
  };
  protoOf(KDController).wb = function () {
    return this.qb_1;
  };
  protoOf(KDController).xb = function (_set____db54di) {
    this.rb_1 = _set____db54di;
  };
  protoOf(KDController).yb = function () {
    return this.rb_1;
  };
  protoOf(KDController).zb = function (_set____db54di) {
    this.isProcessingQueue = _set____db54di;
  };
  protoOf(KDController).ac = function () {
    return this.isProcessingQueue;
  };
  protoOf(KDController).bc = function (_set____db54di) {
    this.sb_1 = _set____db54di;
  };
  protoOf(KDController).cc = function () {
    return this.sb_1;
  };
  protoOf(KDController).executeFunctions = function () {
    var c = this.sb_1.i2(0);
    this.context.ua(c.recentField);
    this.context.setField(c.recentField, c.fieldAny(c.recentField));
    var _iterator__ex2g4s = this.rb_1.f();
    while (_iterator__ex2g4s.g()) {
      var f = _iterator__ex2g4s.h();
      var ctx = f(this.context.selfCopy());
      if (!(ctx.recentField === KD_FIELD_NONE)) {
        this.sb_1.l(ctx);
      }
    }
    this.reportContext();
  };
  protoOf(KDController).processQueue = function () {
    if (this.isProcessingQueue) {
      return Unit_instance;
    }
    this.isProcessingQueue = true;
    while (this.sb_1.i() > 0) {
      this.executeFunctions();
    }
    this.isProcessingQueue = false;
  };
  protoOf(KDController).registerCallback = function (cb) {
    this.qb_1.l(cb);
  };
  protoOf(KDController).registerFieldCallback = function (fieldName, cb) {
    var tmp = this.qb_1;
    tmp.l(KDController$registerFieldCallback$lambda(fieldName, cb));
  };
  protoOf(KDController).registerFunction = function (f) {
    this.rb_1.l(f);
  };
  protoOf(KDController).reportContext = function () {
    var _iterator__ex2g4s = this.qb_1.f();
    while (_iterator__ex2g4s.g()) {
      var cb = _iterator__ex2g4s.h();
      cb(this.context);
    }
  };
  protoOf(KDController).set = function (fieldName, value) {
    var c = this.context.selfCopy();
    c.setField(fieldName, value);
    c.ua(fieldName);
    this.sb_1.l(c);
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
  function base64ToString(b64) {
    return decodeToString(Default_getInstance().z7(b64));
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
  function debugString(v) {
    if (typeof v === 'string') {
      var limv = take(v, 50);
      return 'S(' + v.length + ')' + limv;
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
      var _iterator__ex2g4s = v.y().f();
      while (_iterator__ex2g4s.g()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.h();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.r();
        // Inline function 'kotlin.collections.component2' call
        var value = _destruct__k2r9zo.s();
        // Inline function 'kotlin.text.isEmpty' call
        var this_1 = out_0;
        if (!(charSequenceLength(this_1) === 0)) {
          out_0 = out_0 + ',';
        }
        out_0 = out_0 + (debugString(ensureNotNull(key)) + ':' + debugString(ensureNotNull(value)));
      }
      return 'D(' + v.i() + ')' + out_0;
    }
    return toString(v);
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
  function setupComponentDebugging(ctrl, prefix) {
    ctrl.registerCallback(setupComponentDebugging$lambda(prefix));
  }
  function setupComponentDebugging$lambda($prefix) {
    return function (c) {
      var value = debugString(c.fieldAny(c.recentField));
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
        d.y1(key, comment);
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
    if (!(parts.i() === 2)) {
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
        tmp0.y1(name, value);
        lastComment = '';
      }
      if (isEntityEndMarker || isLastEntityEndMarker) {
        isParsingFields = false;
        var tmp2 = entityId;
        // Inline function 'kotlin.collections.set' call
        var value_0 = comments;
        d.y1(tmp2, value_0);
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
        fields.y1(name, type);
      }
      if (isEntityEndMarker || isLastEntityEndMarker) {
        isParsingFields = false;
        var tmp2 = entityId;
        // Inline function 'kotlin.collections.set' call
        var value = fields;
        d.y1(tmp2, value);
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
      return dropLast(ln, ending);
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
        d.y1(key, value);
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
        d.y1(key, type);
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
    // Inline function 'kotlin.collections.mutableMapOf' call
    var d = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = lines.length;
    while (inductionVariable < last) {
      var ln = lines[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (startsWith(ln, '    js: ')) {
        var prefixLen = 8;
        var path = substring_0(ln, prefixLen);
        // Inline function 'kotlin.collections.set' call
        d.y1('js', path);
      } else if (startsWith(ln, '    jvm: ')) {
        var prefixLen_0 = 9;
        var path_0 = substring_0(ln, prefixLen_0);
        // Inline function 'kotlin.collections.set' call
        d.y1('jvm', path_0);
      } else if (startsWith(ln, '    ios: ')) {
        var prefixLen_1 = 9;
        var path_1 = substring_0(ln, prefixLen_1);
        // Inline function 'kotlin.collections.set' call
        d.y1('ios', path_1);
      } else if (startsWith(ln, '    iossdk: ')) {
        var prefixLen_2 = 12;
        var path_2 = substring_0(ln, prefixLen_2);
        // Inline function 'kotlin.collections.set' call
        d.y1('iossdk', path_2);
      }
    }
    return d;
  }
  //region block: post-declaration
  protoOf(AppContext).fieldAny = fieldAny;
  defineProp(protoOf(AppContext), 'recentField', function () {
    return this.va();
  }, function (value) {
    this.ua(value);
  });
  //endregion
  //region block: init
  APP_KD_IMPORT = 'import kotlin.js.JsExport';
  APP_KD_PACKAGE = 'package org.opengamestudio';
  emb64 = 'LyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDIuMC4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCkBKc0V4cG9ydAppbnRlcmZhY2UgS0RDb250ZXh0IHsKICAgIC8qKgogICAgICogTmFtZSBvZiB0aGUgZmllbGQgdGhhdCBoYXMganVzdCBiZWVuIGNoYW5nZWQKICAgICAqCiAgICAgKiBBbGxvd3Mgc2hvdWxkLWZ1bmN0aW9ucyAocmVkdWNlcnMpIHRvIHJlYWN0IG9ubHkgdG8KICAgICAqIHJlbGV2YW50IGNoYW5nZXMgYW5kIGlnbm9yZSBvdGhlciBjaGFuZ2VzIG9mIEtEQ29udGV4dAogICAgICovCiAgICB2YXIgcmVjZW50RmllbGQ6IFN0cmluZwoKICAgIC8qKgogICAgICogR2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIDxUPiBmaWVsZChuYW1lOiBTdHJpbmcpOiBUCiAgICAvKioKICAgICAqIEVyYXNlIHR5cGUKICAgICAqCiAgICAgKiBVc2VkIGJ5IEtEQ29udHJvbGxlciB0byBhc3NpZ24gcmVjZW50IGZpZWxkJ3MgdmFsdWUKICAgICAqLwogICAgZnVuIGZpZWxkQW55KG5hbWU6IFN0cmluZyk6IEFueSB7CiAgICAgICAgcmV0dXJuIGZpZWxkKG5hbWUpCiAgICB9CiAgICAvKioKICAgICAqIENyZWF0ZSBhIGNvcHkgb2YgdGhlIEtEQ29udGV4dCBkZXJpdmF0aXZlCiAgICAgKgogICAgICogVXNlZCBieSBLRENvbnRyb2xsZXIgdG8gdHJlYXQgYWxsIGRlcml2ZWQgY29udGV4dHMgYXMgS0RDb250ZXh0CiAgICAgKi8KICAgIGZ1biBzZWxmQ29weSgpOiBLRENvbnRleHQKICAgIC8qKgogICAgICogU2V0IGZpZWxkJ3MgdmFsdWUgYnkgaXRzIG5hbWUKICAgICAqLwogICAgZnVuIHNldEZpZWxkKG5hbWU6IFN0cmluZywgdmFsdWU6IEFueT8pCn0KLyoqCiAqIFRoaXMgZmlsZSBpcyBhIHBhcnQgb2YgS290bGluIGRpYWxlY3Q6CiAqICAgICBodHRwczovL2dpdGh1Yi5jb20vT0dTdHVkaW8va290bGluLWRpYWxlY3QKICogTGljZW5zZTogQ0MwCiAqIFZlcnNpb246IDIuMC4wCiAqLwoKcGFja2FnZSBvcmcub3BlbmdhbWVzdHVkaW8KCmltcG9ydCBrb3RsaW4uanMuSnNFeHBvcnQKCnZhbCBLRF9GSUVMRF9OT05FID0gIm5vbmUiCgpASnNFeHBvcnQKY2xhc3MgS0RDb250cm9sbGVyKAogICAgdmFyIGNvbnRleHQ6IEtEQ29udGV4dAopIHsKICAgIGludGVybmFsIHZhciBjYWxsYmFja3MgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IFVuaXQ+KCkKICAgIGludGVybmFsIHZhciBmdW5jdGlvbnMgPSBtdXRhYmxlTGlzdE9mPChjOiBLRENvbnRleHQpIC0+IEtEQ29udGV4dD4oKQogICAgdmFyIGlzUHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2UKICAgIGludGVybmFsIHZhciBxdWV1ZSA9IG11dGFibGVMaXN0T2Y8S0RDb250ZXh0PigpCiAKICAgIGZ1biBleGVjdXRlRnVuY3Rpb25zKCkgewogICAgICAgIHZhbCBjID0gcXVldWUucmVtb3ZlQXQoMCkKICAgICAgICBjb250ZXh0LnJlY2VudEZpZWxkID0gYy5yZWNlbnRGaWVsZAogICAgICAgIGNvbnRleHQuc2V0RmllbGQoYy5yZWNlbnRGaWVsZCwgYy5maWVsZEFueShjLnJlY2VudEZpZWxkKSkKICAgICAgIAogICAgICAgIGZvciAoZiBpbiBmdW5jdGlvbnMpIHsKICAgICAgICAgICAgdmFsIGN0eCA9IGYoY29udGV4dC5zZWxmQ29weSgpKQogICAgICAgICAgICBpZiAoY3R4LnJlY2VudEZpZWxkICE9IEtEX0ZJRUxEX05PTkUpIHsKICAgICAgICAgICAgICAgIHF1ZXVlLmFkZChjdHgpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAKICAgICAgICByZXBvcnRDb250ZXh0KCkKICAgIH0KIAogICAgZnVuIHByb2Nlc3NRdWV1ZSgpIHsKICAgICAgICAvLyBQcmV2ZW50IHJlY3Vyc2lvbi4KICAgICAgICBpZiAoaXNQcm9jZXNzaW5nUXVldWUpIHsKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSB0cnVlCiAgICAgICAKICAgICAgICB3aGlsZSAocXVldWUuc2l6ZSA+IDApIHsKICAgICAgICAgICAgZXhlY3V0ZUZ1bmN0aW9ucygpCiAgICAgICAgfQogICAgICAgCiAgICAgICAgaXNQcm9jZXNzaW5nUXVldWUgPSBmYWxzZQogICAgfQogCiAgICBmdW4gcmVnaXN0ZXJDYWxsYmFjayhjYjogKGM6IEtEQ29udGV4dCkgLT4gVW5pdCkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoY2IpCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZpZWxkQ2FsbGJhY2soCiAgICAgICAgZmllbGROYW1lOiBTdHJpbmcsCiAgICAgICAgY2I6IChLRENvbnRleHQpIC0+IFVuaXQKICAgICkgewogICAgICAgIGNhbGxiYWNrcy5hZGQoeyBjIC0+CiAgICAgICAgICAgIGlmIChjLnJlY2VudEZpZWxkID09IGZpZWxkTmFtZSkgewogICAgICAgICAgICAgICAgY2IoYykKICAgICAgICAgICAgfQogICAgICAgIH0pCiAgICB9CiAKICAgIGZ1biByZWdpc3RlckZ1bmN0aW9uKGY6IChLRENvbnRleHQpIC0+IEtEQ29udGV4dCkgewogICAgICAgIGZ1bmN0aW9ucy5hZGQoZikKICAgIH0KIAogICAgZnVuIHJlcG9ydENvbnRleHQoKSB7CiAgICAgICAgZm9yIChjYiBpbiBjYWxsYmFja3MpIHsKICAgICAgICAgICAgY2IoY29udGV4dCkKICAgICAgICB9CiAgICB9CiAKICAgIGZ1biBzZXQoZmllbGROYW1lOiBTdHJpbmcsIHZhbHVlOiBBbnkpIHsKICAgICAgICB2YXIgYyA9IGNvbnRleHQuc2VsZkNvcHkoKQogICAgICAgIGMuc2V0RmllbGQoZmllbGROYW1lLCB2YWx1ZSkKICAgICAgICBjLnJlY2VudEZpZWxkID0gZmllbGROYW1lCiAgICAgICAgcXVldWUuYWRkKGMpCiAgICAgICAgcHJvY2Vzc1F1ZXVlKCkKICAgIH0KfQovKioKICogVGhpcyBmaWxlIGlzIGEgcGFydCBvZiBLb3RsaW4gZGlhbGVjdDoKICogICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9PR1N0dWRpby9rb3RsaW4tZGlhbGVjdAogKiBMaWNlbnNlOiBDQzAKICogVmVyc2lvbjogMi4wLjAKICovCgpwYWNrYWdlIG9yZy5vcGVuZ2FtZXN0dWRpbwoKaW1wb3J0IGtvdGxpbi5qcy5Kc0V4cG9ydAoKLy8gUmVnaXN0ZXIgc2V2ZXJhbCBvbmVsaW5lciBjYWxsYmFja3MgdG8gYSBjb250cm9sbGVyCkBKc0V4cG9ydApmdW4gcmVnaXN0ZXJPbmVsaW5lcnMoCiAgICBjdHJsOiBLRENvbnRyb2xsZXIsCiAgICBpdGVtczogQXJyYXk8QW55PgopIHsKICAgIHZhbCBoYWxmQ291bnQgPSBpdGVtcy5zaXplIC8gMgogICAgZm9yIChpIGluIDAuLjxoYWxmQ291bnQpIHsKICAgICAgICB2YWwgZmllbGQgPSBpdGVtc1tpICogMl0gYXMgU3RyaW5nCiAgICAgICAgdmFsIGNhbGxiYWNrID0gaXRlbXNbaSAqIDIgKyAxXSBhcyAoYzogS0RDb250ZXh0KSAtPiBVbml0CiAgICAgICAgY3RybC5yZWdpc3RlckZpZWxkQ2FsbGJhY2soZmllbGQsIGNhbGxiYWNrKTsKICAgIH0KfQo=';
  KD_FIELD_NONE = 'none';
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$opengamestudio = $org.opengamestudio || ($org.opengamestudio = {});
    $org$opengamestudio.appCtrl = appCtrl;
    var $org = _.org || (_.org = {});
    var $org$opengamestudio = $org.opengamestudio || ($org.opengamestudio = {});
    $org$opengamestudio.AppContext = AppContext;
    $org$opengamestudio.KDController = KDController;
    $org$opengamestudio.registerOneliners = registerOneliners;
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=ver-nodejs-app.js.map
