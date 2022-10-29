const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static('../front'));
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.get('/movie/:name',(req,res)=>{
    var name = req.params.name;

    res.sendFile('movie.html')
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})