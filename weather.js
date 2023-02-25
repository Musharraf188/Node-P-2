const express = require('express');
const bodyParser = require('body-parser');
const https =require('https');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/weather.html");
})

app.post("/",(req, res)=>{
    var userI=req.body.uInput
    var apiKey="9a8989848a1c22b6a973f9352c6aab36"
   var metric="units=metric"
    var url="https://api.openweathermap.org/data/2.5/weather?q="+userI +"&appid="+ apiKey+"&"+ metric+""
https.get(url, (responce)=>{
    responce.on("data", (data)=>{
        var weatherData = JSON.parse(data);
        var temp=weatherData.main.temp
        var discription=weatherData.weather[0].description
        res.write(` <p>Currenty weather is  ${discription}</p>`);
        res.write(` <h1>Currenty temp in ${userI}  is ${temp}</h1>`);
        res.send()
    })
   
})

})
app.listen(3000,()=>{
    console.log('sa');
})

