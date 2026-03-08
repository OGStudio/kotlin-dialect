/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */

package org.opengamestudio

// Collect entity ids of contexts only
fun fobjContexts(entityTypes: Map<Int, String>): Array<Int> {
    var ids = arrayOf<Int>()
    for ((id, type) in entityTypes) {
        if (type == TYPE_CONTEXT) {
            ids += id
        }
    }
    return ids
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

// Generate F(ields) object for JVM (plain Kotlin) target
fun fobjJVM(fieldNames: Array<String>): String {
    // Collect items
    var itemContents = ""
    for (name in fieldNames) {
        itemContents += TEMPLATE_FOBJ_ITEM
            .replace("%NAME%", name)
    }
    // Combine
    return TEMPLATE_FOBJ
        .replace("%ITEMS%", itemContents)
}

