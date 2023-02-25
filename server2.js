const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/",(req,res)=>{
    var Weight =Number( req.body.uWeight)
    var height =Number(req.body.uheight);
    var result =( Weight)/(height*height)
    res.send(`Your BMI is  ${result}` );
})
app.listen(3000,()=>{
    console.log('Server strated..');
})