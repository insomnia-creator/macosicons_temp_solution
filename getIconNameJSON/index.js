const fs = require('fs');

const filesJSON =[];
//this is my actual folder structure, however you can adjust however you want to.
///Users/it/Git/macOS_Big_Sur_icons_replacements/icons
const files = fs.readdirSync(`${require('os').homedir()}/Git/macOS_Big_Sur_icons_replacements/icons`);

files.forEach(file => {
    file = file.replaceAll('_', " ");
    filesJSON.push(file.substring(0, file.indexOf(".icns")))
});






fs.writeFileSync(require('path').join(__dirname, "icons.json"), JSON.stringify(filesJSON));
