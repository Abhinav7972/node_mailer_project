import { Servercl } from "./server.js";
import { Mailevent } from "./event.js";
import { event } from "./mail.js";

const server = new Servercl()
server.serverfn()


//const event = new Mailevent();
event.on('emailSent',()=>{
    console.log('email sent successfully')
})

//event.mailsent()