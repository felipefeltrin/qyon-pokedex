const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
//we are configuring dist to serve site files
app.use(express.static(__dirname + "/dist/"));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
 res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen(port)
console.log(`listening on port: ${port}`)