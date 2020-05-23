const  {app, BrowserWindow } = require('electron');
// exe c/s b/s window
let win 

app.on('ready',()=>{
    win = new BrowserWindow({   // 内部封装了 chromium 当 new 了BrowserWindow 就会启动
        webPreferences:{
            nodeIntegration: true
        }
    })
    // win.loadFile("index.html");
    win.loadURL('http://localhost:3000');
})