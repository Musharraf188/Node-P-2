const express =require('express');
const bodyParser=require('body-parser');

const app =express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    var userIput=Number (req.body.uInput);
    if(userIput%2===0){
        res.send(userIput + "The number is Prime");
    }else{
        res.send(userIput + "   The number is not Prime");
    }
  
})

app.listen(3000,()=>{
    console.log('Server Srated');
})

