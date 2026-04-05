/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */

package org.opengamestudio

// Generate F(ields) for C++ (.h) type of output path
fun fobjCPPHeader(fieldNames: Array<String>): String {
    // Collect items for FStruct
    var fstructContents = ""
    for (name in fieldNames) {
        fstructContents += TEMPLATE_FOBJ_CPP_FSTRUCT_ITEM
            .replace("%NAME%", name)
    }

    // Collect property items for FObj
    var fobjPropertyContents = ""
    for (name in fieldNames) {
        fobjPropertyContents += TEMPLATE_FOBJ_CPP_PROPERTY_ITEM
            .replace("%NAME%", name)
    }

    // Collect implementation items for FObj
    var fobjImplContents = ""
    for (name in fieldNames) {
        fobjImplContents += TEMPLATE_FOBJ_CPP_IMPL_ITEM
            .replace("%NAME%", name)
    }

    // Combine
    return TEMPLATE_FOBJ_CPP
        .replace("%FSTRUCT_ITEMS%", fstructContents)
        .replace("%IMPL_ITEMS%", fobjImplContents)
        .replace("%PROPERTY_ITEMS%", fobjPropertyContents)
}

// Collect field names
fun fobjFields(
    entityFields: Map<Int, Map<String, String>>,
    ids: Array<Int>
): Array<String> {
    var d = mutableMapOf<String, Boolean>()

    // Always add special field name
    d["none"] = true

    // Collect fields
    for (id in ids) {
        val fieldTypes = entityFields[id]!!
        for (fieldName in fieldTypes.keys) {
            d[fieldName] = true
        }
    }

    // Return sorted fields
    return d.keys.sorted().toTypedArray()
}

// Generate F(ields) object for Kotlin type of output path
fun fobjKotlin(fieldNames: Array<String>): String {
    // Collect items
    var itemContents = ""
    for (name in fieldNames) {
        itemContents += TEMPLATE_FOBJ_KOTLIN_ITEM
            .replace("%NAME%", name)
    }
    // Combine
    return TEMPLATE_FOBJ_KOTLIN
        .replace("%ITEMS%", itemContents)
}

// Generate F(ields) struct for Swift type of output path
fun fobjSwift(fieldNames: Array<String>): String {
    // Collect items
    var itemContents = ""
    for (name in fieldNames) {
        itemContents += TEMPLATE_FOBJ_SWIFT_ITEM
            .replace("%NAME%", name)
    }
    // Combine
    return TEMPLATE_FOBJ_SWIFT
        .replace("%ITEMS%", itemContents)
}
