const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./api/controller/users.controller');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());

const authM = (req, res, next) => {
  if (req.headers['x-key'] && req.headers['x-key'] === "1234") {
    req.name="Hello";
    next();
  } else {
    res.status(401).end("Unauth");
  }
};

// app.use(authM);



// app.get('/', function (req, res) {
//   res.sendFile(`${__dirname}/public/index.html`);
//   // res.send('Hello World')
// });

// app.get('/script.js', function (req, res) {
//   res.sendFile(`${__dirname}/public/script.js`);
//   // res.send('Hello World')
// });

app.use('/user', userController);

// app.post('/user/*',authM, (req, res, next) => {
//   res.json({ name: 'I m POST', reqBody: { ...req.body } })
// })

app.listen(process.env.PORT || 3500)