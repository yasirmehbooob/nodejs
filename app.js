require('dotenv').config();
const os = require('os');
const fs = require('fs');
const desktop = `${os.homedir()}/Desktop/${process.env.FolderName}`;

const createFolder = async () => {
    console.log('creating folder...');
    fs.mkdirSync(`${desktop}`);
}

const saveOsInfo = async () => {
    if(!fs.existsSync(desktop)){
        console.log('folder not created. let me create first');
        await createFolder().then(() => {console.log('folder created successfully');});
    }
    fs.writeFileSync(`${desktop}/${process.env.FileName}`, 'SystemInfo:'+'\n'+os.version());
}

saveOsInfo().then(() => {console.log('os data save successfully.');});