/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
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

fun cppContextFieldFormatterHeader(
    name: String,
    type: String
): String {
    // Quietly ignore unknown types
    var template = ""
    if (type == "Bool") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_BOOL_HEADER
    }
    else if (type == "Int") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_INT_HEADER
    }
    else if (type == "String") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_STRING_HEADER
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
    if (type == "Bool") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_BOOL_SOURCE
    }
    else if (type == "Int") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_INT_SOURCE
    }
    else if (type == "String") {
        template = TEMPLATE_CPP_CONTEXT_ITEM_STRING_SOURCE
    }
    return template
        .replace("%FIELD%", fieldName)
        .replace("%NAME%", entityName)
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
