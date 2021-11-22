'use strict'

const path = require("path");
const {app, ipcMain} = require("electron");

const Window = require("./Window");

// allows hot reload.
require("electron-reload")(__dirname);

function main() {
    let mainWindow = new Window({
        file: path.join(__dirname, "renderer", 'index.html')
    });
}

// executes the application
app.on("ready", main);


app.on("window-all-closed", () => {
    app.quit();  
})