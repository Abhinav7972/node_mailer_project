import http from 'http';
import fs from 'fs'
import { File } from './file.js';

const file = new File();

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
        file.appendFile(body)
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





