const {app, BrowserWindow} = require('electron')  

function createWindow () {     
    
    win = new BrowserWindow({width: 800, height: 600});
    win.loadFile('src/pages/login.html');
    win.webContents.openDevTools();

}

app.on('ready', createWindow)