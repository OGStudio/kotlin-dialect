/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */

package org.opengamestudio

import kotlin.io.encoding.*

// Convert Base64 string to a decoded string
@OptIn(ExperimentalEncodingApi::class)
fun base64ToString(b64: String): String {
    return Base64.Default.decode(b64).decodeToString()
}

// Extract command line argument value
fun cliArgumentValue(
    args: Array<String>,
    argument: String
): String {
    for (item in args) {
        if (item.startsWith(argument)) {
            val prefix = argument + "="
            val value = item.substring(prefix.length)
            return value
        }
    }
    return ""
}

// Detect command line argument presence
fun cliHasArgument(
    args: Array<String>,
    argument: String
): Boolean {
    for (arg in args) {
        if (arg == argument) {
            return true
        }
    }
    return false
}

// Collect fields of all contexts
fun collectFields(
    entityFields: Map<Int, Map<String, String>>
): Array<String> {
    var items = arrayOf<String>()
    for (fields in entityFields.values) {
        for (fieldName in fields.keys) {
            items += fieldName
        }
    }
    return items
}

// Debug representation of a value
fun debugString(v: Any): String {
    // Prepend a string with its length
    if (v is String) {
        return "S(${v.length})$v"
    }

    // Prepend an array with its size
    if (v is Array<*>) {
        var out = ""
        for (item in v) {
            if (!out.isEmpty()) {
                out += ","
            }
            out += debugString(item!!)
        }
        return "A(${v.size})$out"
    }

    // Prepend a dictionary with its size
    if (v is Map<*, *>) {
        var out = ""
        for ((key, value) in v) {
            if (!out.isEmpty()) {
                out += ","
            }
            out += debugString(key!!) + ":" + debugString(value!!)
        }
        return "D(${v.size})$out"
    }

    // For other types return whatever Kotlin returns by default
    return "$v"
}

// Generate F object
fun genFObject(fieldNames: Array<String>): String {
    // Items
    var itemContents = ""
    for (name in fieldNames) {
        itemContents += TEMPLATE_F_OBJECT_ITEM
            .replace("%NAME%", name)
    }

    // F Object
    return TEMPLATE_F_OBJECT
        .replace("%ITEMS%", itemContents)
}

// Collect raw Kotlin source code
fun parseRawKotlin(lines: Array<String>): String {
    var contents = ""
    for (ln in lines) {
        if (ln.startsWith(PREFIX_RAW_KOTLIN)) {
            val prefixLen = PREFIX_RAW_KOTLIN.length
            val kotlinCode = ln.substring(prefixLen)
            contents += kotlinCode + NEWLINE
        }
    }

    return contents
}

fun setupComponentDebugging(
    ctrl: KDController,
    prefix: String
) {
    ctrl.registerCallback { c ->
        val value = debugString(c.fieldAny(c.recentField))
        if (c.field("isDbg")) {
            println("ИГР $prefix k/v: '${c.recentField}'/'$value'")
        }
    }
}

// Convert string to Base64 string
@OptIn(ExperimentalEncodingApi::class)
fun stringToBase64(txt: String): String {
    val arr = txt.encodeToByteArray()
    return Base64.Default.encode(arr)
}
