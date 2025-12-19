import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

 
export async function getHandle(res){
try{
     const data = await getData()
    const content=JSON.stringify(data)
    sendResponse(res,200,'application/json',content)
}
catch(err){
    console.log(err)
    
    
}
}