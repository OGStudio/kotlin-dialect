Kotlin dialect (**KD**) is a set of tools and rules to write
logic in Kotlin for several platforms.

If you know what Kotlin Multiplatfrom is, you probably wonder what's the fuss.
If you tried Kotlin Multiplatform you surely know how hard it is to set up
correctly for multiple platforms. This project dictates one particular way
to have your code organized to be able to easily have logic in Kotlin
across platforms in **native** apps.

Key concepts:

* Redux-like architecture
* Klin, a translator to convert YML to C++, Kotlin, Swift

## Build

First, install prerequisites:

| Linux | macOS | Windows |
| --- | --- | --- |
| ?? | `brew install gradle` | ?? |

Second, build the application:

$ `./util/build-klin`

## Distribute

$ `./util/dist-klin`

## Run

$ `node dist/app.js --file=/path/to/kd.yml`

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
