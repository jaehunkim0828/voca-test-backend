const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const cookieparser = require('cookie-parser');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const vocabulary = [];
const user = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('build'));
app.use(cookieparser());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get('/', function(req, res, next) {
  res.send('hello')
});

app.route('/voca')
  .get((req, res) => {
    res.send(vocabulary);
  })
  .post((req, res) => {
    const { user_id, voca } =req.body;
    let userVoca = [];

    if (!voca) {
      for (let i = 0; i < vocabulary.length; i += 1) {
        if (vocabulary[i]['user_id'] === user_id) {
          userVoca.push(vocabulary[i]);
        }
      }
      res.send(userVoca);
      return;
    }

    vocabulary.push(req.body);
    res.send(req.body);
  })

app.route('/user')
  .get((_, res) => {
    res.send(user);
  })
  .post((req, res) => {
    user.push(req.body);
    res.send(req.body);
  })

app.route('/login')
  .get((_, res) => {
    res.clearCookie('user');
    res.send('로그아웃');
  })
  .post((req, res) => {
    const { code, password } = req.body;
    let userCookie = req.cookies["user"];
    if(userCookie){
      //
      res.send(true);
      return;
    } 
    if (!code) {
      res.send(false);
      return;
    }
    for (let i = 0; i < user.length; i += 1) {
      if (user[i]['code'] === code && user[i]['password'] === password) {
        const token = { userId : i };
        res.cookie('user', i);
        res.send(token);
        return;
      } 
    }
    res.status(404).send('로그인 실패');  
  })

app.listen(port, () => console.log("Listening on", port));