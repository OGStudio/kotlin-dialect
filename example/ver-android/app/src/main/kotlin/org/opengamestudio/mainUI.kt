package org.opengamestudio

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut

@Composable
fun MainView(
    modifier: Modifier = Modifier,
    vm: VM,
) {
    AnimatedVisibility(
        enter = fadeIn(),
        exit = fadeOut(),
        modifier = modifier,
        visible = vm.mainViewIsVisible.value,
    ) {
        Text("TODO-Text")
    }
}
