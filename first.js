const express = require('express');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/user/:id',(res,req)=>{

})

app.get('/dog',(req,res)=>{
    res.json({'sound':'멍멍'})
})

app.get('/cat',(req,res)=>{
    res.json({'sound':'야옹'})
})

app.listen(port, ()=>{
    console.log(`예제입니다!. 포트 ${port}`)
})