const { app, BrowserWindow, screen } = require('electron');

/**
 * Build the main companion window as a strip near the bottom of the desktop.
 */
function createMainWindow() {
  const display = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight, x: screenX, y: screenY } = display.workArea;

  const windowHeight = 260;
  const windowWidth = Math.max(900, Math.floor(screenWidth * 0.75));
  const windowX = screenX + Math.floor((screenWidth - windowWidth) / 2);
  const windowY = screenY + screenHeight - windowHeight;

  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x: windowX,
    y: windowY,
    resizable: false,
    movable: true,
    frame: false,
    transparent: true,
    hasShadow: false,
    alwaysOnTop: true,
    skipTaskbar: false,
    backgroundColor: '#00000000',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      devTools: true,
    },
  });

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.loadFile('index.html');

  return mainWindow;
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
