const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static('../front'));
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.get('/movies',(req,res)=>{
    res.json({
        data: [
            'RRR',
            'Kantara',
            'Ram Setu',
            'Predator',
            'Three idiots'
        ]
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})