package org.opengamestudio

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import org.opengamestudio.ui.theme.MyApplicationTheme

class MainActivity: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        VM.androidContext = this

        // Запускаем компоненты после задания androidContext
        //mainSet(F.didLaunch, true)

        setContent {
            MyApplicationTheme {
                MainView(vm = VM)
            }
        }
    }
}
