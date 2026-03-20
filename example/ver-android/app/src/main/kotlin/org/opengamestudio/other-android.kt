package org.opengamestudio

import android.content.Context
import java.io.*
import java.net.*
import kotlinx.coroutines.*

// Load data over HTTP(s)
// https://johncodeos.com/post-get-put-delete-requests-with-httpurlconnection/
fun loadURL(
    p: NetRequest,
    onload: (NetResponse) -> Unit,
    onerror: (NetResponse) -> Unit,
) {
    // https://stackoverflow.com/a/71004286/3404710
    val exceptionHandler = CoroutineExceptionHandler { _, throwable ->
        throwable.printStackTrace()
        var err = NetResponse()
        err.req = p
        // https://stackoverflow.com/a/65437800/3404710
        GlobalScope.launch(Dispatchers.Main) {
            /**/println("ИГР loadU-1 exc onerror")
            onerror(err)
        }
    }

    GlobalScope.launch(Dispatchers.IO + exceptionHandler) {
        val url = URL(p.url)
        val cn = url.openConnection() as HttpURLConnection
        cn.requestMethod = p.method
        cn.setRequestProperty("Content-Type", "application/json; charset=utf-8")
        forKStringVString(p.headers, { k, v ->
            cn.setRequestProperty(k, v)
        })
        cn.doInput = true
        if (!p.body.isEmpty()) {
            cn.doOutput = true
            val body = OutputStreamWriter(cn.outputStream)
            body.write(p.body)
            body.flush()
        }

        var resp = NetResponse()
        resp.req = p
        if (cn.responseCode in 200..299) {
            resp.contents = runCatching {
                cn.inputStream.bufferedReader().use { it.readText() }
            }.getOrDefault("")
            withContext(Dispatchers.Main) {
                /**/println("ИГР loadU-2 onload")
                onload(resp)
            }
        } else {
            // https://stackoverflow.com/a/613484/3404710
            resp.contents = cn.errorStream?.bufferedReader()?.use { it.readText() } ?: ""
            withContext(Dispatchers.Main) {
                /**/println("ИГР loadU-3 onerror")
                onerror(resp)
            }
        }
    }
}
