import fs from 'fs'


export class File
{
constructor()
{
this.file = fs.readFileSync('./queries.txt').toString();
}

appendFile(content) 
{
this.file = fs.appendFileSync('./queries.txt',content)
}

}