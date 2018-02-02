# Electron test project

This is a project to test out Electron.

## Test your Electron app

    electron .
    
You can use the Chromium dev tools to debug.

## Distribution

### OSX

    npm run asar-osx
    npm run dmg

## How it was created

### Create a basic app

- mkdir src
- cd src
- npm init

Answer all questions and wait for the package.json to be created.
Use main.js as your main application.

### Add basic functionality to your app

Paste the following code into your main.js:

    const electron = require('electron')
    // Module to control application life.
    const app = electron.app
    // Module to create native browser window.
    const BrowserWindow = electron.BrowserWindow
    
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow
    
    function createWindow() {
      // Create the browser window.
      mainWindow = new BrowserWindow({ width: 800, height: 600 })
    
      // and load the index.html of the app.
      mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    
      // Open the DevTools.
      mainWindow.webContents.openDevTools()
    
      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      })
    }
    
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow)
    
    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    
    app.on('activate', function() {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) {
        createWindow()
      }
    })

### Add your html/css/js code

- mkdir static
- cd static
- touch index.html

Add some basic html code:

    <html>
    <head>
      <title>Test</title>
    </head>
    <body class="layout-switch">
    <h1>Hello world.</h1>
    </div>
    </body>
    </html>
