qrcode = require("qrcode-terminal");

module.exports = {event : "qr",execute: async (qr)=>{
    qrcode.generate(qr, { small: true }, null);
}}