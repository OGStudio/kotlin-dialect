package org.opengamestudio

object MainProto {
    val ctrl: KDController

    init {
        ctrl = KDController(AppContext())
        setupComponentDebugging(ctrl, "Main")
        arrayOf(
            ::mainShouldResetText,
            ::mainShouldResetVisibility,
        ).forEach { f ->
            ctrl.registerFunction { c -> f(c as MainContext) }
        }
    }
}
