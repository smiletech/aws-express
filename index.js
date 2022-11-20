const https = require('https');
const express = require('express')
const app = express()
const fs = require('fs');

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}

const httpsServer = https.createServer(options, app);


app.get('/', (req, res) => {
    res.send('<h1>Hello world !</h1>')
})

httpsServer.listen(4000, () => {
    console.log('HTTPS Server running on port 4000');
});