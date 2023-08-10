const client = require("../index")

module.exports = {event:"message_create",execute: async (message)=>{
    if (message.body[0] != client.prefix) return

    const command = message.body.split(" ");
    const args = command.slice(1)
    const commandName = command[0].slice(1)

    if(!client.commands.has(commandName) ||  message.body.length < 2){
        message.reply("Please enter a valid command")
        return
    }

    try{
        const execute = client.commands.get(commandName)
        await execute(message,args)
    }catch (error){
        console.log(error);
        await message.reply("Error, please contact the developer")
    }


}}