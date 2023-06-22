const { app, BrowserWindow } = require('electron');
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, "../build/index.html")}`)
}

app.whenReady()
    .then(() => createWindow())