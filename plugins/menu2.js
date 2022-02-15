let fetch = require('node-fetch')
let fs = require('fs')
let text = 'cobain'
let handler  = async (m, { conn }) => {

let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const thumb = fs.readFileSync('./src/elaina.jpeg')
function clockString(ms) {
  
}
let text = `
*Hii* 👋 ${conn.getName(m.sender)}

• 📢 _*SUPPORT*_
╭─
││• *SCRIPT BOT*
││ github.com/Nurutomo
╰─
 • 🥇 *MY GROUPS*
      *Link*: -
 • 📮 *NOTE*
 Spam vc/call mungkin tidak akan direspon oleh bot dan -9999 score kredit
 Gunakan bot sebaik mungkin banh

`.trim()
conn.send3ButtonImg(m.chat, thumb, text, 'HamzzX', 'MENU ALL', '#nyong', 'OWNER', '.owner', 'DONASI', '.donasi', fkon)
}

handler.help = ['main']
handler.command = handler.command = /^(menu)$/i

handler.fail = null

module.exports = handler
