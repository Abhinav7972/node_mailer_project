import fs from 'fs'


export class File
{

writeFile(content) 
{
this.file = fs.writeFileSync('./queries.txt',content)
}

readFile()
{
    return  fs.readFileSync('./queries.txt','utf-8')
}

}