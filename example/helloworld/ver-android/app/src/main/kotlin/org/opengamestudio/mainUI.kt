package org.opengamestudio

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

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
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier.fillMaxSize()
        ) {
            Text(vm.greetingText.value)
        }
    }
}
