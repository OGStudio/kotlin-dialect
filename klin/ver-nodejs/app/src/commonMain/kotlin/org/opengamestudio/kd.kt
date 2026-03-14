package org.opengamestudio
import kotlin.js.JsExport


@JsExport
data class AppContext(
    // Command line arguments
    var arguments: Array<String> = arrayOf(),
    var consoleOutput: String = "",
    // Output path that is being saved at the moment
    var currentOutputPathId: Int = 0,
    var didLaunch: Boolean = false,
    var didWriteOutputFile: Boolean = false,
    // Entity comments with entities referenced by index
    var entityComments: Map<Int, String> = mapOf(),
    // Entity id -> Field name -> Field comment
    var entityFieldComments: Map<Int, Map<String, String>> = mapOf(),
    // Entity id -> Field name -> Field type
    var entityFields: Map<Int, Map<String, String>> = mapOf(),
    // Entity names in the order of appearance
    var entityNames: Array<String> = arrayOf(),
    var entityPrefixesKotlin: Map<Int, String> = mapOf(),
    var entityTypes: Map<Int, String> = mapOf(),
    var fobjContents: String = "",
    var inputFile: String = "",
    var inputFileDir: String = "",
    var inputFileLines: Array<String> = arrayOf(),
    var isDbg: Boolean = false,
    // Output of type `c++`
    var outputCPP: String = "",
    var outputEntityContents: String = "",
    var outputFile: String = "",
    // Contents to write to output file
    var outputFileContents: String = "",
    // Output of type `jsexport`
    var outputJSExport: String = "",
    // Output of type `kotlin`
    var outputKotlin: String = "",
    // Paths to save generated contents to
    var outputPaths: Array<OutputPath> = arrayOf(),
    // Output of type `swift`
    var outputSwift: String = "",
    // Kotlin code to insert as is at the beginning of the file
    var rawKotlin: String = "",
    // Swift code to insert as is at the beginning of the file
    var rawSwift: String = "",
    // Source code of src/*.kt
    var srcKotlin: String = "",
    // Source code of src/*.swift
    var srcSwift: String = "",
    override var recentField: String = "",
): KDContext {
    override fun <T> field(name: String): T {
        if (name == "arguments") {
            return arguments as T
        } else if (name == "consoleOutput") {
            return consoleOutput as T
        } else if (name == "currentOutputPathId") {
            return currentOutputPathId as T
        } else if (name == "didLaunch") {
            return didLaunch as T
        } else if (name == "didWriteOutputFile") {
            return didWriteOutputFile as T
        } else if (name == "entityComments") {
            return entityComments as T
        } else if (name == "entityFieldComments") {
            return entityFieldComments as T
        } else if (name == "entityFields") {
            return entityFields as T
        } else if (name == "entityNames") {
            return entityNames as T
        } else if (name == "entityPrefixesKotlin") {
            return entityPrefixesKotlin as T
        } else if (name == "entityTypes") {
            return entityTypes as T
        } else if (name == "fobjContents") {
            return fobjContents as T
        } else if (name == "inputFile") {
            return inputFile as T
        } else if (name == "inputFileDir") {
            return inputFileDir as T
        } else if (name == "inputFileLines") {
            return inputFileLines as T
        } else if (name == "isDbg") {
            return isDbg as T
        } else if (name == "outputCPP") {
            return outputCPP as T
        } else if (name == "outputEntityContents") {
            return outputEntityContents as T
        } else if (name == "outputFile") {
            return outputFile as T
        } else if (name == "outputFileContents") {
            return outputFileContents as T
        } else if (name == "outputJSExport") {
            return outputJSExport as T
        } else if (name == "outputKotlin") {
            return outputKotlin as T
        } else if (name == "outputPaths") {
            return outputPaths as T
        } else if (name == "outputSwift") {
            return outputSwift as T
        } else if (name == "rawKotlin") {
            return rawKotlin as T
        } else if (name == "rawSwift") {
            return rawSwift as T
        } else if (name == "srcKotlin") {
            return srcKotlin as T
        } else if (name == "srcSwift") {
            return srcSwift as T
        }
        return "unknown-field-name" as T
    }

    override fun selfCopy(): KDContext {
        return this.copy()
    }

    override fun setField(
        name: String,
        value: Any?
    ) {
        if (name == "arguments") {
            arguments = value as Array<String>
        } else if (name == "consoleOutput") {
            consoleOutput = value as String
        } else if (name == "currentOutputPathId") {
            currentOutputPathId = value as Int
        } else if (name == "didLaunch") {
            didLaunch = value as Boolean
        } else if (name == "didWriteOutputFile") {
            didWriteOutputFile = value as Boolean
        } else if (name == "entityComments") {
            entityComments = value as Map<Int, String>
        } else if (name == "entityFieldComments") {
            entityFieldComments = value as Map<Int, Map<String, String>>
        } else if (name == "entityFields") {
            entityFields = value as Map<Int, Map<String, String>>
        } else if (name == "entityNames") {
            entityNames = value as Array<String>
        } else if (name == "entityPrefixesKotlin") {
            entityPrefixesKotlin = value as Map<Int, String>
        } else if (name == "entityTypes") {
            entityTypes = value as Map<Int, String>
        } else if (name == "fobjContents") {
            fobjContents = value as String
        } else if (name == "inputFile") {
            inputFile = value as String
        } else if (name == "inputFileDir") {
            inputFileDir = value as String
        } else if (name == "inputFileLines") {
            inputFileLines = value as Array<String>
        } else if (name == "isDbg") {
            isDbg = value as Boolean
        } else if (name == "outputCPP") {
            outputCPP = value as String
        } else if (name == "outputEntityContents") {
            outputEntityContents = value as String
        } else if (name == "outputFile") {
            outputFile = value as String
        } else if (name == "outputFileContents") {
            outputFileContents = value as String
        } else if (name == "outputJSExport") {
            outputJSExport = value as String
        } else if (name == "outputKotlin") {
            outputKotlin = value as String
        } else if (name == "outputPaths") {
            outputPaths = value as Array<OutputPath>
        } else if (name == "outputSwift") {
            outputSwift = value as String
        } else if (name == "rawKotlin") {
            rawKotlin = value as String
        } else if (name == "rawSwift") {
            rawSwift = value as String
        } else if (name == "srcKotlin") {
            srcKotlin = value as String
        } else if (name == "srcSwift") {
            srcSwift = value as String
        }
    }
}


@JsExport
data class OutputPath(
    var path: String = "",
    var type: String = "",
) {}
/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */





@JsExport
interface KDContext {
    /**
     * Name of the field that has just been changed
     *
     * Allows should-functions (reducers) to react only to
     * relevant changes and ignore other changes of KDContext
     */
    var recentField: String

    /**
     * Get field's value by its name
     */
    fun <T> field(name: String): T
    /**
     * Erase type
     *
     * Used by KDController to assign recent field's value
     */
    fun fieldAny(name: String): Any {
        return field(name)
    }
    /**
     * Create a copy of the KDContext derivative
     *
     * Used by KDController to treat all derived contexts as KDContext
     */
    fun selfCopy(): KDContext
    /**
     * Set field's value by its name
     */
    fun setField(name: String, value: Any?)
}
/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */





val KD_FIELD_NONE = "none"

@JsExport
class KDController(
    var context: KDContext
) {
    internal var callbacks = mutableListOf<(c: KDContext) -> Unit>()
    internal var functions = mutableListOf<(c: KDContext) -> KDContext>()
    var isProcessingQueue = false
    internal var queue = mutableListOf<KDContext>()
 
    fun executeFunctions() {
        val c = queue.removeAt(0)
        context.recentField = c.recentField
        context.setField(c.recentField, c.fieldAny(c.recentField))
       
        for (f in functions) {
            val ctx = f(context.selfCopy())
            if (ctx.recentField != KD_FIELD_NONE) {
                queue.add(ctx)
            }
        }
       
        reportContext()
    }
 
    fun processQueue() {
        // Prevent recursion.
        if (isProcessingQueue) {
            return
        }
       
        isProcessingQueue = true
       
        while (queue.size > 0) {
            executeFunctions()
        }
       
        isProcessingQueue = false
    }
 
    fun registerCallback(cb: (c: KDContext) -> Unit) {
        callbacks.add(cb)
    }
 
    fun registerFieldCallback(
        fieldName: String,
        cb: (KDContext) -> Unit
    ) {
        callbacks.add({ c ->
            if (c.recentField == fieldName) {
                cb(c)
            }
        })
    }
 
    fun registerFunction(f: (KDContext) -> KDContext) {
        functions.add(f)
    }
 
    fun reportContext() {
        for (cb in callbacks) {
            cb(context)
        }
    }
 
    fun set(fieldName: String, value: Any) {
        var c = context.selfCopy()
        c.setField(fieldName, value)
        c.recentField = fieldName
        queue.add(c)
        processQueue()
    }
}
/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */





// Register several oneliner callbacks to a controller
@JsExport
fun registerOneliners(
    ctrl: KDController,
    items: Array<Any>
) {
    val halfCount = items.size / 2
    for (i in 0..<halfCount) {
        val field = items[i * 2] as String
        val callback = items[i * 2 + 1] as (c: KDContext) -> Unit
        ctrl.registerFieldCallback(field, callback);
    }
}

// Special object to reference context fields with a compile time validation
@JsExport
object F {
    const val arguments = "arguments"
    const val consoleOutput = "consoleOutput"
    const val currentOutputPathId = "currentOutputPathId"
    const val didLaunch = "didLaunch"
    const val didWriteOutputFile = "didWriteOutputFile"
    const val entityComments = "entityComments"
    const val entityFieldComments = "entityFieldComments"
    const val entityFields = "entityFields"
    const val entityNames = "entityNames"
    const val entityPrefixesKotlin = "entityPrefixesKotlin"
    const val entityTypes = "entityTypes"
    const val fobjContents = "fobjContents"
    const val inputFile = "inputFile"
    const val inputFileDir = "inputFileDir"
    const val inputFileLines = "inputFileLines"
    const val isDbg = "isDbg"
    const val none = "none"
    const val outputCPP = "outputCPP"
    const val outputEntityContents = "outputEntityContents"
    const val outputFile = "outputFile"
    const val outputFileContents = "outputFileContents"
    const val outputJSExport = "outputJSExport"
    const val outputKotlin = "outputKotlin"
    const val outputPaths = "outputPaths"
    const val outputSwift = "outputSwift"
    const val rawKotlin = "rawKotlin"
    const val rawSwift = "rawSwift"
    const val srcKotlin = "srcKotlin"
    const val srcSwift = "srcSwift"

}
