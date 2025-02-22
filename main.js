const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")

const port = 8000

const htmlPath = path.join(__dirname,"public","index.html")
const readHtml = fs.readFileSync(htmlPath,"utf-8")


const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html")
    res.write(readHtml)
    res.end()
})

server.listen(port, () => {
    console.log("server listening on port",port)
})
