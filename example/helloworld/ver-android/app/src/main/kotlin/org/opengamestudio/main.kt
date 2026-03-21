
//<!-- Component -->

typealias MC = MainContext

object MainComponent {
    init {
        val vm = VM
        val oneliners = arrayOf(
            F.isVisible, { c: MC -> vm.isVisible = c.isVisible },
            F.greetingText, { c: MC -> vm.greetingText = c.greetingText },
        )
        registerOneliners(mainCtrl(), oneliners)
    }
}
