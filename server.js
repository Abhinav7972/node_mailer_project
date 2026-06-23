import http from 'http';
import fs from 'fs'
import { File } from './file.js';
import { Emailcl } from './mail.js';

const file = new File();
const mail = new Emailcl()
export class  Servercl
{
serverfn()
{
const server = http.createServer((req,res)=>{

    if(req.method=='POST')
    {
        let body = ''
        req.on('data',(chunks)=>{
            body +=chunks;
        })
           

      req.on('end',()=>{
        file.writeFile(body)
        mail.mailer()
        res.end('data sent')
      })

    }
    else
    {
        res.end('get req')
    }
})

server.listen(5000,()=>console.log('server began'))

}
}
