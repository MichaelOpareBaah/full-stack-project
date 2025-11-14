export function sendResponse(res,statusCode,contentType,payload){
    res.setHeader('content-type',contentType)
    res.statusCode=statusCode
    res.end(payload)


}