Kotlin dialect (**KD**) is a set of tools and rules to write
logic in Kotlin for several platforms.

If you know what Kotlin Multiplatfrom is, you probably wonder what's the fuss.
However, if you **tried** Kotlin Multiplatform you surely know how hard it
is to set up correctly for multiple platforms. This project dictates one
particular way to have your code organized to be able to have single logic
in Kotlin across platforms in **native** apps.

Key features:

* Redux-like architecture with Controller/Context (aka Store), Shoulds (aka Reducers), and Effects
* Klin, a translator to convert YML to target languages: Kotlin, Swift, C++

## Usage

`dist/` directory contains the latest Klin version

Klin is a small Node.js application (generated out of Kotlin Dialect source code, of course).

Install prerequisites to run Klin:

| № | Prerequisite | Linux | macOS | Windows (MSYS2) |
| --- | --- | --- | --- | --- |
| 1 | Node.js | ? | `brew install node` | `pacman -S mingw-w64-x86_64-nodejs` |

Second, run Klin to generate source code out of YML:

$ `node dist/app.js --file=/path/to/kd.yml`

## Building Klin from source

As a user, you don't need it. However, if you feel adventurous,
first install dependencies:

| № | Prerequisite | Linux | macOS | Windows (MSYS2) |
| --- | --- | --- | --- | --- |
| 1 | Gradle | ?? | `brew install gradle` | ?? |

Second, build the application:

$ `./util/build-klin`

Third, distribute the application into `dist/` directory:

$ `./util/dist-klin`

## Generation of Kotlin entity fields

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

## Supported C++ entity field types

Since Kotlin Native only generate C code out of Kotlin, Klin also generates
C++ wrappers to achieve almost the same look&feel in a C++ Qt app.

| № | YML type | C++ type |
|---|---       |---       |
| 1 | `Bool`   | `bool`   |
| 2 | `Int`    | `int`    |
| 3 | `String` | `QString`|

Why Qt? Because Qt has QML, a declarative UI unlike other popular frameworks.
