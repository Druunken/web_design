const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")

const port = 8000
const publicDir = path.join(__dirname,"public")


const server = http.createServer((req,res) => {
    let filePath = path.join(publicDir,req.url === "/" ? "index.html": req.url)
    console.log(req.url)

    if(req.url === "/sign-in"){
        filePath = path.join(publicDir,"sign-in","sign-in.html")
        console.log("hit")
    }else if(req.url === "/login"){
        filePath = path.join(publicDir,"login","login.html")
    }
    const extName = path.extname(filePath)
    let contentType = "text/html"


    switch(extName){    
        case ".css":
            contentType = "text/css"
            break;
        case ".js":
            contentType = "text/javascript"
            break;
        default:
            contentType = "text/html"
    }

    fs.readFile(filePath, (err,content) => {
        if(err){
            res.writeHead(404,{ "Content-Type": "text/plain"})
            res.end("404 not found")
        }else{
            res.writeHead(200,{"Content-Type": contentType})
            res.end(content,"utf-8")
        }
    })
})

server.listen(port, () => {
    console.log("server listening on port",port)
})
