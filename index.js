const { Client,LocalAuth } = require("whatsapp-web.js");
const fs = require("fs");


class CommandClient extends Client{
    commands = new Map()
    prefix = "/"

}
const client = new CommandClient({
    authStrategy: new LocalAuth(),
  });

client.initialize()

let eventFolder = fs.readdirSync('events');
for (const eventFile of eventFolder) {
    eventFilExtension = eventFile.split(".").slice(-1)[0];
    if(eventFilExtension == "js"){
        const {event = null,execute = null} = require("./events/"+eventFile);
        if(!event || !execute){
            console.log(eventFile + " file does not contain event and execute" )
            continue
        }
        client.on(event, execute)
        console.log(event + " event is ready" )
    }
}

let commandFolder = fs.readdirSync('commands');
for(const commandFile of commandFolder){
    commandFilExtension = commandFile.split(".").slice(-1)[0];
    if(commandFilExtension == "js"){
        const {name = null,execute = null} = require("./commands/"+commandFile);
        if(!name || !execute){
            console.log(commandFile + " file does not contain name and execute" )
            continue
        }
        client.commands.set(name,execute)
        console.log(name + " command is ready" )
    }
}


exports.prefix = client.prefix
exports.commands = client.commands
