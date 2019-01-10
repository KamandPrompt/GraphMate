const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', function() {
	mainWindow = new BrowserWindow({});
	console.log(path.join(__dirname, 'app', 'index.html'));
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	
	mainWindow.on('closed', function() {
		app.quit();
	});
});

//Create Menu template
const mainMenuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'ctrl+Q',
				click() {
					app.quit();
				}
			}
		]
	}
];

//Create menu
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(mainMenu);

//Give option for dev tools if not in production mode
if(process.env.NODE_ENV !== 'production') {
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu: [
			{
				label: 'Toggle Devtools',
				accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
				click(item, focusedWindow) {
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}