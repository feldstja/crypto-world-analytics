 const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const models = require('./models.js');

const User = models.User;
const self = this;

mongoose.connect(process.env.MONGODB_URI);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
    var newArr = resp.data.map(({symbol, timestamp, volumeQuote})=> (
      {symbol, timestamp, volumeQuote}
    ))
      res.json(newArr)
  }).catch(function(err) {
    console.log('ERROR:', err)
  });
})


io.on('connection', (socket) => {
  console.log('Connected to socket');

socket.on('register', (data) => {
    User.find({Username: data.Username}, function(err, res){
      if(err) {
        console.log('Error', err);
      } else if (res.length > 0) {
        console.log('User already exists');
      } else if ((data.Username && data.PhoneNumber && data.Password && data.PasswordRepeat)
      && (data.Password === data.PasswordRepeat)) {
        const newUser = new User({
          Username: data.Username,
          Password: data.Password,
          PhoneNumber: data.PhoneNumber
        });
        newUser.save((err, user) => {
          if (err) {
            console.log(err);
          } else {
            console.log('User Saved');
            socket.emit('registerSuccess', {success: true, data: user});
          }
        });
      }
    })
  });
  socket.on('login', async (data) => {
    console.log(data)
    var user = await User.findOne({Username : data.Username})
    if(!user){
      console.log("incorrect Username")
    }
    if(user.Password !== data.Password){
      console.log("Incorrect Password")
    }
    if(user){
      socket.user = user;
      console.log(socket.user)
      socket.emit('loginSuccess', socket.user);
    }
  //, (err, user) =>{
  //   if (err) {
  //     console.log(err);
  //   } else if (!user) {
  //     console.log('no such user')
  //   } else if(user.Password !== data.Password) {
  //     console.log(user.Password, data.Password);
  //     console.log('Incorrect Password');
  //   } else {
  //     console.log('Successful Login');
  //     socket.user = user;
  //     socket.emit('loginSuccess', user._id);
  //   }
  // });
});
socket.on('add', (data) => {
   if (socket.user.FocusedCurrencies.indexOf(data) === -1) {
    socket.user.FocusedCurrencies.push(data);
    socket.user.save(function(err, user){
      if(err) {
        console.log(err)
      } else {
        console.log(`User began tracking ${data}`);
        socket.emit('additionSuccess', socket.user.FocusedCurrencies)
      }
  })
} else {
    console.log("Error: You are already monitoring this currency.")
}
})

// socket.on('getCoins', (user)=>{
//   var user2 = User.findById(user.id)
//   if(user2){
//     console.log('hey2');
//     socket.emit('usersCoins', user2.FocusedCurrencies)
//   }
//  })

socket.on('remove', (data) => {
      let removedIndex = socket.user.FocusedCurrencies.indexOf(data)
      socket.user.FocusedCurrencies.splice(removedIndex, 1)
      socket.user.save(function(err, user) {
        if (err) {
          console.log("Error: " + err)
        } else {
          console.log(`User no longer tracking ${data}.`);
          socket.emit('removalSuccess', removedIndex)
        }
      })
    })
  });

  app.get('/ethtobtc', function(req, res){
    axios("https://api.hitbtc.com/api/2/public/trades/ETHBTC?sort=DESC", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
    .then((resp)=>{
      var ratio = resp.data[0].price
      res.send(ratio)
    }).catch(function(err) {
      console.log('ERROR:', err)
    });
  })

  app.get('/btctoeurs', function(req, res){
    axios("https://api.hitbtc.com/api/2/public/trades/BTCEURS?sort=DESC", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
    .then((resp)=>{
      var ratio = resp.data[0].price
      res.send(ratio)
    }).catch(function(err) {
      console.log('ERROR:', err)
    });
  })

  app.get('/btctodai', function(req, res){
    axios("https://api.hitbtc.com/api/2/public/trades/BTCDAI?sort=DESC", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
    .then((resp)=>{
      var ratio = resp.data[0].price
      res.send(ratio)
    }).catch(function(err) {
      console.log('ERROR:', err)
    });
  })


  app.get('/btctousd', function(req, res){
    axios("https://api.hitbtc.com/api/2/public/trades/BTCUSD?sort=DESC", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
    .then((resp)=>{
      var ratio = resp.data[0].price
      res.send(ratio)
    }).catch(function(err) {
      console.log('ERROR:', err)
    });
  })

server.listen(process.env.PORT || 3000)
