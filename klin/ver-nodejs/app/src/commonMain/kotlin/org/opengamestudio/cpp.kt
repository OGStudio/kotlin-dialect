/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */

package org.opengamestudio

fun cppContextFieldsHeader(
    contextIds: Array<Int>,
    entityFields: Map<Int, Map<String, String>>
): Array<String> {
    var contexts = arrayOf<String>()
    for (id in contextIds) {
        val fields = entityFields[id] ?: mapOf<String, String>()
        val sortedFieldNames = fields.keys.sorted()
        var fieldsText = ""
        for (name in sortedFieldNames) {
            fieldsText += name + "\n"
        }
        contexts += fieldsText
    }
    return contexts
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
