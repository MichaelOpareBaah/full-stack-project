import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'


const PORT=3000
const server= http.createServer(async (req,res)=>{
if(req.url==='/' && req.method==='GET'){
    
    const __dirname=import.meta.dirname
    serveStatic(res,__dirname)
    

}
})
server.listen(PORT,()=>{console.log(`${PORT} Server running on port 5000`);})