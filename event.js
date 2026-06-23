import  * as event from 'events';
import http from 'node:http';


export class Mailevent extends event.EventEmitter
{

mailsent()
{
    //console.log('emailsent')
    this.emit('emailSent')
}
}