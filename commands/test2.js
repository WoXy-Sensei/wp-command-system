
module.exports = {name : "command2",execute: async (message,args)=>{
   console.log(message);
   console.log(args);
   console.log(...args);
   await message.reply("this is command 2")
}}