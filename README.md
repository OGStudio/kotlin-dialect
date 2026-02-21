Kotlin dialect (**KD**) is a set of tools and rules to write
logic in Kotlin for several platforms.

The Kotlin dialect's core is an architecture inspired by Redux.

# Klin

Klin is a translator that converts YML to Kotlin.

$ `./util/run-klin-dbg`

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
