const electron = require('electron')
const { ipcMain } = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
let path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let infoWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1281,
    height: 800,
    minWidth: 1281,
    minHeight: 800,
    // frame: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#333333',
    show: false,
    icon: path.join(__dirname, 'app/assets/img/64x64.png')
  })

  ipcMain.on('open-info-window', (e)=> {
    infoWindow.show()
  })

  ipcMain.on('close-info-window', (e)=> {
    infoWindow.hide()
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  // Init second window
  infoWindow = new BrowserWindow({
    width: 400,
    height: 400,
    minWidth: 400,
    minHeight: 400,
    frame: false,
    backgroundColor: '#333333',
    show: false,
    parent: mainWindow,
    icon: path.join(__dirname, 'app/assets/img/64x64.png')
  })
  infoWindow.loadURL(`file://${__dirname}/app/windows/info.html`)

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    infoWindow = null
  })

  require(path.join(__dirname, 'app/assets/js/mainmenu.js'))
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
