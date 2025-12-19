import path from 'node:path'
import fs from 'node:fs/promises'
export async function getData(){
    try{
     const dataPath=path.join('data','data.json')
    const readData=await fs.readFile(dataPath, 'utf8')
    const parsedData = JSON.parse(readData)
    return parsedData
    }
    catch(err){
     console.log(err)
     return[]
    }
    
}