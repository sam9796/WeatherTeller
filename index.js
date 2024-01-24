const https=require("node:https")
const bodyParser=require('body-parser')
const axios=require('axios');
const express = require('express')
const { resolveSoa } = require('dns/promises')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/h1.html");
})
app.post("/",function(req,res){
    let dt;
    var alp1=req.body.place;
    const url= 'https://api.openweathermap.org/data/2.5/weather?q='+alp1+'&APPID=a03eda3f4870c8ae9afb3aae614a26c9&units=imperial'
    axios.get(url)
    .then(function (response) {
      // handle success
      dt=response.data.main.temp;
       let k1=response.data.weather[0].icon;
       const ul=`http://openweathermap.org/img/wn/${k1}@2x.png`
       res.write("<p>The temperature of "+alp1+" is "+dt+"Fahrenheit </p>")
       res.write("<h1>The weather condition is "+response.data.weather[0].description+"</h1>")
       res.write("<img src="+ ul +">")
       res.send()
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
})
app.listen(3000,function(){
    console.log("Server is running on port 3000")
})