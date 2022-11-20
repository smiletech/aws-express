const express = require('express')
const app = express()

app.get('/', (req, res)=>{
res.send(`<h1>Hello World</h1>`)
})

app.listen(4000, ()=>{
    console.log(`Server Running on Port 4000`);
})