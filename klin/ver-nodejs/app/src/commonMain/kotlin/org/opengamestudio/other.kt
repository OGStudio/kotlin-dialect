/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 3.1.0
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

// Collect context entity ids
fun contextIds(entityTypes: Map<Int, String>): Array<Int> {
    var ids = arrayOf<Int>()
    for ((id, type) in entityTypes) {
        if (type == TYPE_CONTEXT) {
            ids += id
        }
    }
    return ids
}

// Collect context entity names
fun contextNames(
    entityIds: Array<Int>,
    entityNames: Array<String>
): Array<String> {
    var items = arrayOf<String>()
    for (id in entityIds) {
        val name = entityNames[id]
        items += name
    }
    return items
}

// Shortened debug string
fun debugShortString(v: Any): String {
    val str = debugString(v)
    // Only return limited number of symbols
    return str.take(DBG_LEN)
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

// Provide output to save based on its type
fun outputFileContents(
    outputCPPHeader: String,
    outputCPPSDK: String,
    outputCPPSource: String,
    outputJSExport: String,
    outputKotlin: String,
    outputSwift: String,
    type: String
): String {
    if (type == OUTPUT_TYPE_JSEXPORT) {
        return outputJSExport
    }
    else if (type == OUTPUT_TYPE_KOTLIN) {
        return outputKotlin
    }
    else if (type == OUTPUT_TYPE_SWIFT) {
        return outputSwift
    }
    else if (type == OUTPUT_TYPE_CPP_HDR) {
        return outputCPPHeader
    }
    else if (type == OUTPUT_TYPE_CPP_SDK) {
        return outputCPPSDK
    }
    else if (type == OUTPUT_TYPE_CPP_SRC) {
        return outputCPPSource
    }

    return "outputFC-N/A"
}

// Collect raw C++ SDK source code
fun parseRawCPPSDK(lines: Array<String>): String {
    var contents = ""
    for (ln in lines) {
        if (ln.startsWith(PREFIX_RAW_CPPSDK)) {
            val prefixLen = PREFIX_RAW_CPPSDK.length
            val code = ln.substring(prefixLen)
            contents += code + NEWLINE
        }
    }

    return contents
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

// Collect raw Swift source code
fun parseRawSwift(lines: Array<String>): String {
    var contents = ""
    for (ln in lines) {
        if (ln.startsWith(PREFIX_RAW_SWIFT)) {
            val prefixLen = PREFIX_RAW_SWIFT.length
            val code = ln.substring(prefixLen)
            contents += code + NEWLINE
        }
    }

    return contents
}

fun setupComponentDebugging(
    ctrl: KDController,
    prefix: String
) {
    ctrl.registerCallback { c ->
        val value = debugShortString(c.fieldAny(c.recentField))
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
