import { data } from "../data/data.js";
import path from 'node:path'
import fs from 'node:fs/promises'
export async function getData(){
    try{
     const dataPath=path.join('data','data.js')
    const readData=await fs.readFile(dataPath, 'utf8')
    return JSON.parse(readData)
    }
    catch(err){
     console.log(err)
     return[]
    }
    
}