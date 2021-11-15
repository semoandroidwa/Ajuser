const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/YT0pW4x/Screenshot-2021-11-10-09-29-10-1-1.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `Ajuser

*bot making video* : _https://youtu.be/dm_kVZ0m2eY_



            




*owner id instagram* :_https://instagram.com/ajuz___001_.


*github* : _https://github.com/aju001/Ajuser_.


*audio commands* :_https://github.com/aju001/uploads/tree/main/bgm_.

*sticker commands* :_https://github.com/aju001/uploads/tree/main/stickers_.
■□■□■□■□■□■□■□■□■□■□
_𝘼𝙟𝙪𝙨𝙚𝙧 𝘽𝙤𝙩_
▣▣ created by Aju ▣▣

`}) 

}));
