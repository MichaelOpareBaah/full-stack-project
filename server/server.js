import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getHandle } from './handlers/routeHandler.js'
import 'dotenv/config';


const PORT=process.env.PORT || 3000
const server= http.createServer(async (req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === "OPTIONS") {
    res.writeHead(204)
    return res.end()
  }
if(req.url==='/blogs' && req.method==='GET'){
    return await getHandle(res)
}else if(req.url==='/contact' && req.method==='POST'){
   res.end(console.log('Received'))
}

else{
     const __dirname=import.meta.dirname
   return serveStatic(res,__dirname)

}
})
server.listen(PORT,()=>{console.log(` Server running on port ${PORT}`);})