import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import path from 'path'
import url from 'url'

// 定义窗口配置接口
interface WindowConfig {
  width: number
  height: number
  webPreferences: {
    nodeIntegration: boolean
    contextIsolation: boolean
    preload: string
  }
}

// 定义Electron配置类
class ElectronConfig {
  private mainWindow: BrowserWindow | null

  constructor() {
    this.mainWindow = null
    this.setupAppEvents()
  }

  // 设置应用事件
  private setupAppEvents(): void {
    app.on('ready', this.createWindow.bind(this))
    app.on('window-all-closed', this.onWindowAllClosed.bind(this))
    app.on('activate', this.onActivate.bind(this))
  }

  // 创建主窗口
  private createWindow(): void {
    // 窗口配置
    const windowConfig: WindowConfig = {
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, 'preload.js'),
      },
    }

    // 创建浏览器窗口
    this.mainWindow = new BrowserWindow(windowConfig)

    // 加载URL
    const startUrl =
      process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      })

    this.mainWindow.loadURL(startUrl)

    // 安装React开发者工具
    this.installDevTools()

    // 窗口关闭事件
    this.mainWindow.on('closed', () => {
      this.mainWindow = null
    })
  }

  // 安装开发者工具
  private async installDevTools(): Promise<void> {
    try {
      await installExtension(REACT_DEVELOPER_TOOLS)
      console.log('React Developer Tools installed')
    } catch (error) {
      console.error('Error installing React Developer Tools:', error)
    }
  }

  // 所有窗口关闭事件
  private onWindowAllClosed(): void {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  }

  // 应用激活事件
  private onActivate(): void {
    if (this.mainWindow === null) {
      this.createWindow()
    }
  }
}

// 初始化Electron配置
export default new ElectronConfig()
