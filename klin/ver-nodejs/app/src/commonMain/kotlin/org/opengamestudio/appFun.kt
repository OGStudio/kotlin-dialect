/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 2.0.0
 */

package org.opengamestudio

import kotlin.io.encoding.*
import kotlin.js.JsExport

//<!-- Constants -->

val APP_KD_IMPORT = "import kotlin.js.JsExport"
val APP_KD_JSEXPORT= "@JsExport"
val APP_KD_PACKAGE = "package org.opengamestudio"

//<!-- Shoulds -->

// Collect comments of the entities
//
// Conditions:
// 1. Entity names are available
fun appShouldCollectEntityComments(c: AppContext): AppContext {
    if (c.recentField == F.entityNames) {
        c.entityComments = parseEntityComments(c.inputFileLines)
        c.recentField = F.entityComments
        return c
    }

    c.recentField = F.none
    return c
}

// Collect field comments
//
// Conditions:
// 1. Entity fields are available
fun appShouldCollectEntityFieldComments(c: AppContext): AppContext {
    if (c.recentField == "entityFields") {
        c.entityFieldComments = parseEntityFieldComments(c.inputFileLines)
        c.recentField = "entityFieldComments"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect field names and values of the entities
//
// Conditions:
// 1. Entity types are available
fun appShouldCollectEntityFields(c: AppContext): AppContext {
    if (c.recentField == "entityTypes") {
        c.entityFields = parseEntityFields(c.inputFileLines)
        c.recentField = "entityFields"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect names of the declared entities
//
// Conditions:
// 1. Input file contents are available
fun appShouldCollectEntityNames(c: AppContext): AppContext {
    if (c.recentField == "inputFileLines") {
        c.entityNames = parseEntityNames(c.inputFileLines)
        c.recentField = "entityNames"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect prefixes of the entities for Kotlin
//
// Conditions:
// 1. Entity comments are available
fun appShouldCollectEntityPrefixesKotlin(c: AppContext): AppContext {
    if (c.recentField == "entityComments") {
        c.entityPrefixesKotlin =
            parseEntityPrefixes(
              c.inputFileLines,
              PREFIX_PREFIX_KOTLIN
            )
        c.recentField = "entityPrefixesKotlin"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect types of the entities
//
// Conditions:
// 1. Entity comments are available
fun appShouldCollectEntityTypes(c: AppContext): AppContext {
    if (c.recentField == "entityComments") {
        c.entityTypes = parseEntityTypes(c.inputFileLines)
        c.recentField = "entityTypes"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect raw C++ SDK source code
//
// Conditions:
// 1. Input file contents are available
fun appShouldCollectRawCPPSDK(c: AppContext): AppContext {
    if (c.recentField == "inputFileLines") {
        c.rawCPPSDK = parseRawCPPSDK(c.inputFileLines)
        c.recentField = "rawCPPSDK"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect raw Kotlin source code
//
// Conditions:
// 1. Input file contents are available
fun appShouldCollectRawKotlin(c: AppContext): AppContext {
    if (c.recentField == "inputFileLines") {
        c.rawKotlin = parseRawKotlin(c.inputFileLines)
        c.recentField = "rawKotlin"
        return c
    }

    c.recentField = "none"
    return c
}

// Collect raw Swift source code
//
// Conditions:
// 1. Input file contents are available
fun appShouldCollectRawSwift(c: AppContext): AppContext {
    if (c.recentField == "inputFileLines") {
        c.rawSwift = parseRawSwift(c.inputFileLines)
        c.recentField = "rawSwift"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate Kotlin version of the entities
//
// Conditions:
// 1. Entity field comments are available
fun appShouldGenerateKotlinEntities(c: AppContext): AppContext {
    if (c.recentField == "entityFieldComments") {
        c.outputEntityContents = genKotlinEntitiesFile(
            c.entityComments,
            c.entityFieldComments,
            c.entityFields,
            c.entityNames,
            c.entityPrefixesKotlin,
            c.entityTypes,
            c.rawKotlin
        )
        c.recentField = "outputEntityContents"
        return c
    }

    c.recentField = "none"
    return c
}

// Parse input file path
//
// Conditions:
// 1. At app launch input file was specified with command line argument
fun appShouldParseInputFilePath(c: AppContext): AppContext {
    if (
        c.recentField == "didLaunch" &&
        cliArgumentValue(c.arguments, ARGUMENT_FILE).length > 0
    ) {
        c.inputFile = cliArgumentValue(c.arguments, ARGUMENT_FILE)
        c.recentField = "inputFile"
        return c
    }

    c.recentField = "none"
    return c
}

// Parse output paths
//
// 1. Input file contents are available
fun appShouldParseOutputPaths(c: AppContext): AppContext {
    if (c.recentField == "inputFileLines") {
        c.outputPaths = parseOutputPaths(c.inputFileLines)
        c.recentField = "outputPaths"
        return c
    }

    c.recentField = "none"
    return c
}

// Print to console
//
// Conditions:
// 1. At app launch no command line arguments were provided
// 2. Line is parsed
fun appShouldPrintToConsole(c: AppContext): AppContext {
    if (
        c.recentField == "didLaunch" &&
        c.arguments.isEmpty()
    ) {
        c.consoleOutput = "Usage: {bin} --file=/path/to/file.yml"
        c.recentField = "consoleOutput"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate XYZEffectRegistry for C++ header
//
// Conditions:
// 1. F object for Kotlin is ready
fun appShouldResetCPPEffectsHeader(c: AppContext): AppContext {
    if (c.recentField == "fobjKotlin") {
        val ids = contextIds(c.entityTypes)
        val names = contextNames(ids, c.entityNames)
        val prefixes = cppEntityPrefixes(names)
        c.cppEffectsHeader = cppEffectsHeader(prefixes)
        c.recentField = "cppEffectsHeader"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate xyzSet() calls for C++ header
//
// Conditions:
// 1. F object for Kotlin is ready
fun appShouldResetCPPSetHeader(c: AppContext): AppContext {
    if (c.recentField == "fobjKotlin") {
        val ids = contextIds(c.entityTypes)
        val names = contextNames(ids, c.entityNames)
        val prefixes = cppEntityPrefixes(names)
        c.cppSetHeader = cppSetHeader(prefixes)
        c.recentField = "cppSetHeader"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate xyzSet() calls for C++ source
//
// Conditions:
// 1. F object for Kotlin is ready
fun appShouldResetCPPSetSource(c: AppContext): AppContext {
    if (c.recentField == "fobjKotlin") {
        val ids = contextIds(c.entityTypes)
        val names = contextNames(ids, c.entityNames)
        val prefixes = cppEntityPrefixes(names)
        c.cppSetSource = cppSetSource(prefixes)
        c.recentField = "cppSetSource"
        return c
    }

    c.recentField = "none"
    return c
}


// Cycle through output paths to try to save them all
//
// Conditions:
// 1. Output of the last currently supported type has been generated
// 2. Finished saving to an output path and there are paths left
fun appShouldResetCurrentOutputPathId(c: AppContext): AppContext {
    if (c.recentField == "outputSwift") {
        c.currentOutputPathId = 0
        c.recentField = "currentOutputPathId"
        return c
    }

    if (
        c.recentField == "didWriteOutputFile" &&
        c.currentOutputPathId + 1 < c.outputPaths.size
    ) {
        c.currentOutputPathId += 1
        c.recentField = "currentOutputPathId"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate a special structure (.h) to reference fields in C++
//
// Conditions:
// 1. F object for Kotlin is ready
fun appShouldResetFObjCPPHeader(c: AppContext): AppContext {
    if (c.recentField == "fobjKotlin") {
        val ids = contextIds(c.entityTypes)
        var fields = fobjFields(c.entityFields, ids)
        c.fobjCPPHeader = fobjCPPHeader(fields)
        c.recentField = "fobjCPPHeader"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate a special structure to reference fields in Kotlin
//
// Conditions:
// 1. Output of Kotlin entities' is available
fun appShouldResetFObjKotlin(c: AppContext): AppContext {
    if (c.recentField == "outputEntityContents") {
        val ids = contextIds(c.entityTypes)
        var fields = fobjFields(c.entityFields, ids)
        c.fobjKotlin = fobjKotlin(fields)
        c.recentField = "fobjKotlin"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate a special structure to reference fields in Swift
//
// Conditions:
// 1. F object for Kotlin is ready
fun appShouldResetFObjSwift(c: AppContext): AppContext {
    if (c.recentField == "fobjKotlin") {
        val ids = contextIds(c.entityTypes)
        var fields = fobjFields(c.entityFields, ids)
        c.fobjSwift = fobjSwift(fields)
        c.recentField = "fobjSwift"
        return c
    }

    c.recentField = "none"
    return c
}

// Extract input file directory
//
// Conditions:
// 1. Input file is ready
fun appShouldResetInputFileDir(c: AppContext): AppContext {
    if (c.recentField == "inputFile") {
        val parts = c.inputFile.split(PATH_DELIMITER)
        val dirParts = parts.dropLast(1)
        c.inputFileDir = dirParts.joinToString(separator = PATH_DELIMITER)
        c.recentField = "inputFileDir"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `c++hdr` type
//
// Conditions:
// 1. Output for `kotlin` is ready
fun appShouldResetOutputCPPHeader(c: AppContext): AppContext {
    if (c.recentField == "outputKotlin") {
        c.outputCPPHeader = TEMPLATE_CPP_HEADER_START +
            c.cppEffectsHeader + 
            c.cppSetHeader +
            c.fobjCPPHeader + 
            TEMPLATE_CPP_HEADER_END
        c.recentField = "outputCPPHeader"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `c++sdk` type
//
// Conditions:
// 1. Output for `kotlin` is ready
fun appShouldResetOutputCPPSDK(c: AppContext): AppContext {
    if (c.recentField == "outputKotlin") {
        val outk = c.outputKotlin.replace(Regex("package.*"), "")
        c.outputCPPSDK = c.rawCPPSDK + outk + TEMPLATE_CPP_CONVERSIONS + TEMPLATE_CPP_EXTENSIONS
        c.recentField = "outputCPPSDK"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `c++src` type
//
// Conditions:
// 1. Output for `kotlin` is ready
fun appShouldResetOutputCPPSource(c: AppContext): AppContext {
    if (c.recentField == "outputKotlin") {
        c.outputCPPSource = TEMPLATE_CPP_SOURCE_START +
            c.cppSetSource
        c.recentField = "outputCPPSource"
        return c
    }

    c.recentField = "none"
    return c
}

// Select the path to write to
//
// Conditions:
// 1. Current output path id was changed
fun appShouldResetOutputFile(c: AppContext): AppContext {
    if (c.recentField == "currentOutputPathId") {
        val item = c.outputPaths[c.currentOutputPathId]
        c.outputFile = c.inputFileDir + PATH_DELIMITER + item.path
        c.recentField = "outputFile"
        return c
    }

    c.recentField = "none"
    return c
}

// Select the text to save
//
// Conditions:
// 1. Output file was selected
fun appShouldResetOutputFileContents(c: AppContext): AppContext {
    if (c.recentField == "outputFile") {
        val item = c.outputPaths[c.currentOutputPathId]
        c.outputFileContents = outputFileContents(
            c.outputCPPHeader,
            c.outputCPPSDK,
            c.outputCPPSource,
            c.outputJSExport,
            c.outputKotlin,
            c.outputSwift,
            item.type
        )
        c.recentField = "outputFileContents"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `jsexport` type
//
// Conditions:
// 1. src/*.kt contents are ready
fun appShouldResetOutputJSExport(c: AppContext): AppContext {
    if (c.recentField == "srcKotlin") {
        c.outputJSExport = c.outputEntityContents + c.srcKotlin + c.fobjKotlin
        c.recentField = "outputJSExport"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `kotlin` type
//
// Conditions:
// 1. Output for `jsexport` is ready
fun appShouldResetOutputKotlin(c: AppContext): AppContext {
    if (c.recentField == "outputJSExport") {
        c.outputKotlin = c.outputJSExport
            .replace(APP_KD_IMPORT, "")
            .replace(APP_KD_JSEXPORT, "")
        c.recentField = "outputKotlin"
        return c
    }

    c.recentField = "none"
    return c
}

// Generate output for `swift` type
//
// Conditions:
// 1. Output for `kotlin` is ready
fun appShouldResetOutputSwift(c: AppContext): AppContext {
    if (c.recentField == "outputKotlin") {
        c.outputSwift = c.rawSwift + c.srcSwift + c.fobjSwift
        c.recentField = "outputSwift"
        return c
    }

    c.recentField = "none"
    return c
}

// Provide src/*.kt files' contents
//
// Conditions:
// 1. Output of Kotlin entities' is available
@OptIn(ExperimentalEncodingApi::class)
fun appShouldResetSrcKotlin(c: AppContext): AppContext {
    if (c.recentField == "outputEntityContents") {
        val contents = base64ToString(embKotlin64)
        // Remove duplicated import and package lines
        c.srcKotlin = contents
            .replace(APP_KD_IMPORT, "")
            .replace(APP_KD_PACKAGE, "")
        c.recentField = "srcKotlin"
        return c
    }

    c.recentField = "none"
    return c
}

// Provide src/*.kt files' contents
//
// Conditions:
// 1. src/*.kt contents are ready
@OptIn(ExperimentalEncodingApi::class)
fun appShouldResetSrcSwift(c: AppContext): AppContext {
    if (c.recentField == "srcKotlin") {
        c.srcSwift = base64ToString(embSwift64)
        c.recentField = "srcSwift"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Other functions -->

@JsExport
fun appCtrl(): KDController {
    return AppProto.ctrl
}
