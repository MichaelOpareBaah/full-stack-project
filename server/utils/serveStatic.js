import { sendResponse } from "./sendResponse.js";
import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './getContentType.js'


export async function serveStatic(res,dirname){
    const homePath=path.join(dirname,"..",'frontend','index.html')
        const ext=path.extname(homePath)
        const contentType=getContentType(ext)
        const readHome= await fs.readFile(homePath)
        sendResponse(res,200,contentType,'Its working now check')

}