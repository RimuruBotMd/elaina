const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = true //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="SabilOfc"
global.ownernumber = "6288980870067"
global.botname = "Siesta Md"
global.thumbnail = fs.readFileSync("./image/siesta.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'rafliofcheh' //ganti pakai apikey kalian
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
