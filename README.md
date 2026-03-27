Kotlin dialect (**KD**) is a set of tools and rules to write
logic in Kotlin for several platforms.

If you know what Kotlin Multiplatfrom is, you probably wonder what's the fuss.
However, if you **tried** Kotlin Multiplatform you surely know how hard it
is to set up correctly for multiple platforms. This project dictates one
particular way to have your code organized to be able to have single logic
in Kotlin across platforms in **native** apps.

Key concepts:

* Redux-like architecture
* Klin, a translator to convert YML to target languages: Kotlin, Swift

## Usage

`dist/` directory contains the latest Klin version

First, install prerequisites to run Klin:

| № | Prerequisite | Linux | macOS | Windows (MSYS2) |
| --- | --- | --- | --- | --- |
| 1 | Node.js | ? | `brew install node` | `pacman -S mingw-w64-x86_64-nodejs` |

Second, run Klin to generate source code out of YML:

$ `node dist/app.js --file=/path/to/kd.yml`

## Building

First, install prerequisites to build Klin from source:

| № | Prerequisite | Linux | macOS | Windows (MSYS2) |
| --- | --- | --- | --- | --- |
| 1 | Gradle | ?? | `brew install gradle` | ?? |

Second, build the application:

$ `./util/build-klin`

Third, distribute the application into `dist/` directory:

$ `./util/dist-klin`

## Generation of entity fields

| № | YML type | Kotlin type | Default value | YML example | Kotlin example |
|---|---       |---          |---            |---          |---             |
| 1 | `Bool`   | `Boolean`   | `false`       | `didLaunch: Bool` | `var didLaunch: Boolean = false` |
| 2 | `Double`   | `Double`   | `0`       | `angle: Double` | `var angle: Double = 0` |
| 3 | `Int`   | `Int`   | `0`       | `selectedItemId: Int` | `var selectedItemId: Int = 0` |
| 4 | `Long`   | `Long`   | `0`       | `timestamp: Long` | `var timestamp: Long = 0` |
| 5 | `String` | `String`    | `""`          | `method: String`  | `var method: String = ""` |
| 6 | `Type` | `Type`    | `Type()`          | `request: NetRequest`  | `var request: NetRequest = NetRequest()` |
| 7 | `[Type]` | `Array<Type>` | `arrayOf()` | `arguments: [String]` | `var arguments: Array<String> = arrayOf()` |
| 8 | `[TypeA: TypeB]` | `Map<TypeA, TypeB>` | `mapOf()` | `templates: [String: String]` | `var templates: Map<String, String> = mapOf()` |

## Example

[Hello world video demonstation](https://kornerr.ru/vid/kd-android-hw_2026-03-27.mp4")

You can find a small "Hello World" application in `example/helloworld`

First, generate KD:

* $ `cd example/helloworld`
* $ `./util/gen-kd`

Second, open and run `example/helloworld/ver-android` with Android Studio
