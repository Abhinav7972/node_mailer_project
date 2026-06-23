import  * as event from 'events';
import http from 'node:http';


export class Mailevent extends event.EventEmitter
{

mailsent(mail)
{
    console.log(mail.email)
    this.emit('emailSent')
}
}