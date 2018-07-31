const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios')
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// DO NOT REMOVE THIS LINE :)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/currency', function(req, res){
  axios("https://api.hitbtc.com/api/2/public/ticker", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })
  .then((resp)=>{
    var newArr = resp.data.map(({symbol, timestamp, volume})=> (
      {symbol, timestamp, volume}
    ))
  //  console.log(newArr)
      // this.setState({
      //   arr: resp
      // })
      res.json(newArr)
  }).catch(function(err) {
    console.log('ERROR:', err)
  });
})

app.listen(process.env.PORT || 1337);
