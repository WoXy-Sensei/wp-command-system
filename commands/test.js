
module.exports = {name : "command1",execute: async (message,args)=>{
    console.log(message);
    console.log(args);
    console.log(...args);
   await message.reply("this is command 1")
}}