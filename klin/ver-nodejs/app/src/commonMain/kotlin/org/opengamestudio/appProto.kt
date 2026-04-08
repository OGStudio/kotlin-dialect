/**
 * This file is a part of Kotlin dialect:
 *     https://github.com/OGStudio/kotlin-dialect
 * License: CC0
 * Version: 3.1.0
 */

package org.opengamestudio

object AppProto {
    val ctrl: KDController

    init {
        ctrl = KDController(AppContext())
        setupComponentDebugging(ctrl, "App")
        arrayOf(
            ::appShouldCollectEntityComments,
            ::appShouldCollectEntityFieldComments,
            ::appShouldCollectEntityFields,
            ::appShouldCollectEntityNames,
            ::appShouldCollectEntityPrefixesKotlin,
            ::appShouldCollectEntityTypes,
            ::appShouldCollectRawCPPSDK,
            ::appShouldCollectRawKotlin,
            ::appShouldCollectRawSwift,
            ::appShouldGenerateKotlinEntities,
            ::appShouldParseInputFilePath,
            ::appShouldParseOutputPaths,
            ::appShouldPrintToConsole,
            ::appShouldResetCPPAPIHeader,
            ::appShouldResetCPPAPISource,
            ::appShouldResetCPPContextsHeader,
            ::appShouldResetCPPContextsSource,
            ::appShouldResetCPPEffectsHeader,
            ::appShouldResetCPPEffectsSource,
            ::appShouldResetCPPSetHeader,
            ::appShouldResetCPPSetSource,
            ::appShouldResetCurrentOutputPathId,
            ::appShouldResetFObjCPPHeader,
            ::appShouldResetFObjKotlin,
            ::appShouldResetFObjSwift,
            ::appShouldResetInputFileDir,
            ::appShouldResetOutputCPPHeader,
            ::appShouldResetOutputCPPSDK,
            ::appShouldResetOutputCPPSource,
            ::appShouldResetOutputFile,
            ::appShouldResetOutputFileContents,
            ::appShouldResetOutputJSExport,
            ::appShouldResetOutputKotlin,
            ::appShouldResetOutputSwift,
            ::appShouldResetSrcKotlin,
            ::appShouldResetSrcSwift,
        ).forEach { f ->
            ctrl.registerFunction { c -> f(c as AppContext) }
        }
    }
}
