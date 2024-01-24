// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://api.openweathermap.org/data/2.5/weather',
//   params: {
//    "q":"London,uk",
//    "APPID":"a03eda3f4870c8ae9afb3aae614a26c9",
//    "units":"imperial"
//   }
// };

// axios.request(options).then(function (response) {
//     $("h1").text(`Temperature at London is:${response.data.main.temp}`)
// }).catch(function (error) {
// 	console.error(error);
// });
// https.get(url,function(response){
  //   console.log(response.statusCode)
  //   response.on("data",function(data){
  //   const weatherData=JSON.parse(data)
  //   const temp=weatherData.main.temp
  //   const weatherDescription=weatherData.weather[0].description
  //   const icon=weatherData.weather[0].icon
  //   const imageUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
  //   res.write("<p>The weather is currently "+weatherDescription+"</p>");
  //   res.write("<h1>The temperature in London is "+temp+"</h1>")
  //   res.write("<img src="+imageUrl+">")
  //   res.send()
  //   })
  // })
const axios=require('axios');
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a03eda3f4870c8ae9afb3aae614a26c9&units=imperial'
axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  