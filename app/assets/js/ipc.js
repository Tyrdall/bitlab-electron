const { ipcRenderer } = require('electron')

window.ipc = window.ipc || {},
function(n) {
  let ipc = {
    sendOpenInfoWindowEvent: function() {
      ipcRenderer.send('open-info-window')
    },

    sendCloseInfoWindowEvent: function() {
      ipcRenderer.send('close-info-window')
    },

    init: function() {
      $('#open-info-window').click( function () {
        ipc.sendOpenInfoWindowEvent()
      })
      $('#close-info-window').click( function () {
        ipc.sendCloseInfoWindowEvent()
      })
    }
 }

 n(function() {
   ipc.init()
 })
}(jQuery)
