# [3.0](https://github.com/OGStudio/kotlin-dialect/pull/3)

2026-03-15

1. Introduce output paths inside YML file (command line argument `--out` has been removed)
1. Generate kd.swift file for `swift` output path with KD files
1. Generate F struct for Swift to use exactly the same code for Context keys as is used in Kotlin

# [2.1](https://github.com/OGStudio/kotlin-dialect/pull/2)

2026-03-08

1. Introduce `dist/` directory with a prebuilt Node.js application so that you don't have to build anything with Gradle
1. Generate KD files into single file
1. Generate F object to reference Context keys with a compile time check

# [2.0](https://github.com/OGStudio/kotlin-dialect/pull/1)

2026-02-21

1. Replicate [Cross-language dialect](https://github.com/OGStudio/cross-language-dialect)'s functionality solely for Kotlin
1. Replace JVM translator with Node.js one (now called `klin`) for easier installation across platforms
