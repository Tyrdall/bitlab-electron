# Electron test project

This is a project to test out Electron.

# Test your Electron app

    electron src
    
You can use the Chromium dev tools to debug.

# How it was created

## Create a basic app

- mkdir src
- cd src
- npm init

Answer all questions and wait for the package.json to be created.
Use main.js as your main application.

## Add basic functionality to your app

Paste the following code into your main.js:

    'use strict'

    // Mod of Electron
    const electron = require('electron')
    
    // Module that controls the application
    const app = electron.app
    
    // Module to create window
    const BrowserWindow = electron.BrowserWindow
    
    // Global declaration so that main window is not GC
    var mainWindow
    
    // Close all windows closed
    app.on('window-all-closed', function() {
      if (process.platform != 'darwin') {
        app.quit()
      }
    })
    
    // Execute after completion of initialization of Electron
    app.on('ready', function() {
      // Main screen display. You can specify the width and height of the window
      mainWindow = new BrowserWindow({ width: 800, height: 600 })
      mainWindow.loadURL('file://' + __dirname + '/app/index.html')
    
      // Close the application when the window is closed
      mainWindow.on('closed', function() {
        mainWindow = null
      })
    })

## Add your html/css/js code

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
