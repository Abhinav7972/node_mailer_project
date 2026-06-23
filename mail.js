import  dotenv from 'dotenv'
dotenv.config({ path: './pass.env' });
import nodemailer from 'nodemailer'
import { File } from './file.js';
import { json } from 'stream/consumers';
import { Mailevent } from './event.js';


const file = new File();
export const event = new Mailevent();
export class Emailcl
{
 async mailer() {
    const email = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim();
const fdata =  JSON.parse(file.readFile())
    
    if (!email || !pass) {
        console.error('Error: EMAIL_USER or EMAIL_PASS is missing from .env');
        return;
    }
    const  tr = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: email,
        pass: pass
    }
});


try {
    const mail = await tr.sendMail({
        from: `${fdata.from} <${email}>`,
        to: fdata.to,
        subject: 'test',
        text: fdata.message
    });
    event.emit('emailSent')
    //event.mailsent()
    
    console.log(file.readFile())
    
} catch (err) {
    console.log('something wrong!', err);
}
}

}






