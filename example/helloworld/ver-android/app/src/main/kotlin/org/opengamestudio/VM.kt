package org.opengamestudio
import android.content.Context
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf

object VM {
    var androidContext: Context? = null

    val mainViewIsVisible = mutableStateOf(false)
    val greetingText = mutableStateOf("TODO-Text")
}
