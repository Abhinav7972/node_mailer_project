import  dotenv from 'dotenv'
dotenv.config({ path: './pass.env' });
import nodemailer from 'nodemailer'


export async function mailer() {
    const email = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim();
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
        from: 'abhinavsoni316@gmail.com',
        to: 'soniabhinav1996@gmail.com',
        subject: 'test',
        text: 'done'  
    });
    console.log('mail sent');
} catch (err) {
    console.log('something wrong!', err);
}
}



mailer()




