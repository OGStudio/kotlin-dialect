package org.opengamestudio
import kotlinx.cinterop.*

// generate
fun boolToAny(item: Boolean): Any {
    return item as Any
}

// generate
@OptIn(kotlinx.cinterop.ExperimentalForeignApi::class)
fun KDController.registerCallbackC(cb: CPointer<CFunction<() -> Unit>>) {
    callbacks.add({ c -> cb() })
}
