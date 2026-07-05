/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 3.2.0
 */

package org.opengamestudio

fun cppAPIHeader(prefixes: Array<String>): String {
    var itemsText = ""
    for (i in prefixes.indices) {
        val name = prefixes[i]
        itemsText += TEMPLATE_CPP_API_ITEM_HEADER
            .replace("%PREFIX%", name.lowercase())
    }
    return TEMPLATE_CPP_API_HEADER.replace("%ITEMS%", itemsText)
}

fun cppAPISource(prefixes: Array<String>): String {
    var o = ""
    for (i in prefixes.indices) {
        val name = prefixes[i]
        o += TEMPLATE_CPP_API_ITEM_SOURCE
            .replace("%PREFIX%", name.lowercase())
    }
    return o
}

fun cppArrayElementFieldDeclarations(
    fields: Map<String, String>
): String {
    var o = ""
    val sortedFieldNames = fields.keys.sorted()
    for (name in sortedFieldNames) {
        val type = fields[name] ?: ""
        val cppType = cppElementType(type)
        o += TEMPLATE_CPP_ARRAY_ELEMENT_FIELD_DECLARATION
            .replace("%TYPE%", cppType)
            .replace("%NAME%", name)
    }
    return o
}

fun cppArrayElementFieldImpl(
    entityName: String,
    fieldName: String,
    type: String
): String {
    var template = ""
    // Bool
    if (type == "Bool") {
        template = TEMPLATE_CPP_FIELD_IMPL_BOOL
    }
    // Int
    else if (type == "Int") {
        template = TEMPLATE_CPP_FIELD_IMPL_INT
    }
    // String
    else if (type == "String") {
        template = TEMPLATE_CPP_FIELD_IMPL_STRING
    }
    // [Type]
    else if (
        type.startsWith("[") &&
        type.endsWith("]") &&
        !type.contains(DICTIONARY_DELIMITER)
    ) {
        val innerString = type.substring(1, type.length - 1)
        template = TEMPLATE_CPP_FIELD_IMPL_ARRAY
            .replace("%TYPE%", innerString)
    }
    return template
        .replace("%NAME%", entityName)
        .replace("%FIELD%", fieldName)
}

fun cppArrayElementHeader(
    name: String,
    fields: Map<String, String>
): String {
    val propertyDeclarations = cppArrayElementPropertyDeclarations(fields)
    val fieldDeclarations = cppArrayElementFieldDeclarations(fields)
    return TEMPLATE_CPP_ARRAY_ELEMENT_HEADER
        .replace("%NAME%", name)
        .replace("%PROPERTY_DECLARATIONS%", propertyDeclarations)
        .replace("%FIELD_DECLARATIONS%", fieldDeclarations)
}

fun cppArrayElementPropertyDeclarations(
    fields: Map<String, String>
): String {
    var o = ""
    val sortedFieldNames = fields.keys.sorted()
    for (name in sortedFieldNames) {
        val type = fields[name] ?: ""
        val cppType = cppElementType(type)
        o += TEMPLATE_CPP_ARRAY_ELEMENT_PROPERTY_DECLARATION
            .replace("%TYPE%", cppType)
            .replace("%NAME%", name)
    }
    return o
}

fun cppArrayElementsHeader(
    arrayElements: Map<String, Boolean>,
    entityFields: Map<Int, Map<String, String>>,
    entityNames: Array<String>
): String {
    var o = ""
    for (id in entityNames.indices) {
        val name = entityNames[id]
        if (arrayElements[name] == true) {
            val fields = entityFields[id] ?: mapOf<String, String>()
            o += cppArrayElementHeader(name, fields)
        }
    }
    return o
}

fun cppArrayElementsSource(
    arrayElements: Map<String, Boolean>,
    entityFields: Map<Int, Map<String, String>>,
    entityNames: Array<String>
): String {
    var o = ""
    for (id in entityNames.indices) {
        val name = entityNames[id]
        if (arrayElements[name] == true) {
            val fields = entityFields[id] ?: mapOf<String, String>()
            val sortedFieldNames = fields.keys.sorted()
            for (fieldName in sortedFieldNames) {
                val type = fields[fieldName] ?: ""
                o += cppArrayElementFieldImpl(name, fieldName, type)
            }
        }
    }
    return o
}

fun cppArrayTypesHeader(types: Map<String, Boolean>): String {
    var o = ""
    val sortedItems = types.keys.sorted()
    for (item in sortedItems) {
        o += TEMPLATE_CPP_ARRAY_TYPE_HEADER
            .replace("%TYPE%", item)
    }
    return o
}

fun cppContextArrayTypes(
    contextIds: Array<Int>,
    entityFields: Map<Int, Map<String, String>>,
    arrayTypeExtractor: (String) -> String
): Map<String, Boolean> {
    var types = mapOf<String, Boolean>()
    for (id in contextIds) {
        val fields = entityFields[id] ?: mapOf<String, String>()
        for ((_, type) in fields) {
            val extracted = arrayTypeExtractor(type)
            if (extracted.isNotEmpty()) {
                types += mapOf(extracted to true)
            }
        }
    }
    return types
}

fun cppContextFieldExtractArrayType(
    type: String
): String {
    if (
        type.startsWith("[") &&
        type.endsWith("]") &&
        !type.contains(DICTIONARY_DELIMITER)
    ) {
        return type.substring(1, type.length - 1)
    }
    return ""
}

fun cppContextFieldFormatterHeader(
    name: String,
    type: String
): String {
    // Quietly ignore unknown types
    var template = ""
    // Bool
    if (type == "Bool") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_BOOL_HEADER
    }
    // Int
    else if (type == "Int") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_INT_HEADER
    }
    // String
    else if (type == "String") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_STRING_HEADER
    }
    // [Type]
    else if (
        type.startsWith("[") &&
        type.endsWith("]") &&
        !type.contains(DICTIONARY_DELIMITER) // Exclude dictionary
    ) {
        val innerString = type.substring(1, type.length - 1)
        template = TEMPLATE_CPP_CONTEXT_ITEM_ARRAY_HEADER
            .replace("%TYPE%", innerString)
    }
    else {
        println("ИГР hdr Uknown type: '$type'")
    }
    return template.replace("%FIELD%", name)
}

fun cppContextFieldFormatterSource(
    entityName: String,
    fieldName: String,
    type: String
): String {
    // Quietly ignore unknown types
    var template = ""
    // Bool
    if (type == "Bool") {
        template = TEMPLATE_CPP_FIELD_IMPL_BOOL
    }
    // Int
    else if (type == "Int") {
        template = TEMPLATE_CPP_FIELD_IMPL_INT
    }
    // String
    else if (type == "String") {
        template = TEMPLATE_CPP_FIELD_IMPL_STRING
    }
    // [Type]
    else if (
        type.startsWith("[") &&
        type.endsWith("]") &&
        !type.contains(DICTIONARY_DELIMITER) // Exclude dictionary
    ) {
        val innerString = type.substring(1, type.length - 1)
        template = TEMPLATE_CPP_FIELD_IMPL_ARRAY
            .replace("%TYPE%", innerString)
    }
    else {
        println("ИГР src Uknown type: '$type'")
    }
    return template
        .replace("%NAME%", entityName)
        .replace("%FIELD%", fieldName)
}

fun cppContextFieldsHeader(
    contextIds: Array<Int>,
    entityFields: Map<Int, Map<String, String>>,
    fieldFormatter: (String, String) -> String
): Array<String> {
    var contexts = arrayOf<String>()
    for (id in contextIds) {
        val fields = entityFields[id] ?: mapOf<String, String>()
        val sortedFieldNames = fields.keys.sorted()
        var fieldsText = ""
        for (name in sortedFieldNames) {
            val type = fields[name] ?: ""
            fieldsText += fieldFormatter(name, type)
        }
        contexts += fieldsText
    }
    return contexts
}

fun cppContextFieldsSource(
    contextIds: Array<Int>,
    entityFields: Map<Int, Map<String, String>>,
    entityNames: Array<String>,
    fieldFormatter: (String, String, String) -> String
): Array<String> {
    var items = arrayOf<String>()
    for (id in contextIds) {
        val entityName = entityNames[id] ?: ""
        val fields = entityFields[id] ?: mapOf<String, String>()
        val sortedFieldNames = fields.keys.sorted()
        var text = ""
        for (fieldName in sortedFieldNames) {
            val type = fields[fieldName] ?: ""
            text += fieldFormatter(entityName, fieldName, type)
        }
        items += text
    }
    return items
}

fun cppContextsHeader(
    contextFields: Array<String>,
    contextPrefixes: Array<String>
): String {
    var o = ""
    for (i in contextPrefixes.indices) {
        val fieldsText = contextFields[i]
        val name = contextPrefixes[i]
        o += TEMPLATE_CPP_CONTEXT_HEADER
            .replace("%ITEMS%", fieldsText)
            .replace("%NAME%", name)
    }
    return o
}

fun cppEffectsHeader(entityPrefixes: Array<String>): String {
    var o = ""
    for (name in entityPrefixes) {
        o += TEMPLATE_CPP_EFFECTS_HEADER.replace("%NAME%", name)
    }
    return o
}

fun cppEffectsSource(entityPrefixes: Array<String>): String {
    var o = ""
    for (name in entityPrefixes) {
        o += TEMPLATE_CPP_EFFECTS_SOURCE
            .replace("%NAME%", name)
            .replace("%PREFIX%", name.lowercase())
    }
    return o
}

fun cppElementType(type: String): String {
    if (type == "Bool") {
        return "bool"
    }
    else if (type == "Int") {
        return "int"
    }
    else if (type == "String") {
        return "QString"
    }

    return ""
}

fun cppEntityPrefixes(entityNames: Array<String>): Array<String> {
    var items = arrayOf<String>()
    for (fullName in entityNames) {
        val nameLen = fullName.length
        val suffixLen = CONTEXT_SUFFIX.length
        val name = fullName.substring(0, nameLen - suffixLen)
        items += name
    }
    return items
}

fun cppSetHeader(entityPrefixes: Array<String>): String {
    var o = ""
    for (prefix in entityPrefixes) {
        o += TEMPLATE_CPP_SET_HEADER.replace("%PREFIX%", prefix.lowercase())
    }
    return o
}

fun cppSetSource(entityPrefixes: Array<String>): String {
    var o = ""
    for (prefix in entityPrefixes) {
        o += TEMPLATE_CPP_SET_SOURCE.replace("%PREFIX%", prefix.lowercase())
    }
    return o
}
