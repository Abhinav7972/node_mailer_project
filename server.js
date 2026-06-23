import http from 'http';


export function serverfn()
{
const server = http.createServer((req,res)=>{
    res.end('welcome')
})

server.listen(5000,()=>console.log('server began'))

}

