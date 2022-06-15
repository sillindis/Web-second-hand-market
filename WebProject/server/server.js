const express = require('express')
const app = express()
const path =require('path')
var mysql = require('mysql');
var bodyParser = require('body-parser');
const session = require('express-session');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'second_hand_market_db'
});

//db.getConnection();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
var cors = require('cors');
app.use(cors());

//app.use(express.static(path.join(__dirname, 'React/build'))); // 특정 폴더의 파일들 전송 가능

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'React/build/index.html'));
})

/* DB에 있는 상품명을 보여주기 위함 . 리액트 파일에서 상품 데이터가 필요하면 /product로 GET을 쏴주면 됨
app.get('/product', function(req, res) {
    res.json({name: 'black shoes'})
})
*/
app.use(express.json());
app.get('/login', function(req, res) {
    res.render('login');
});

app.post("/check", (req, res) => {    
    const body = req.body;
    var id = body.Id;
    var passwd = body.Passwrd;
    var passwd2 = body.Passwd2;
    if (id && passwd) {
        db.query('select * from user where User_id=? and user_id=?', [id, passwd], function(err, results, fields0){
        if (err) throw err;
        if (results.length <= 0 && passwd == passwd2) {
            db.query('insert into user (User_id, user_pw) values(?,?)', [id, passwd], function(err, data) {
                if (err) console.log(err);
                else console.log(data);
            });
            console.log("회원가입이 완료되었습니다.");

            res.send('<script type="text/javascript">alert("회원가입이 완료되었습니다."); document.location.href="/";</script>');
        }
        else {
            res.send('<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); document.location.href="/register";</script>');
        }
        }) 
    }
});

app.post("/Login", (req, res) => {
    const body = req.body;
    const id = body.Id;
    const passwd = body.Passwrd;
    
    if (id && passwd) {
        db.query('select * from user where User_id = ? and user_pw = ?', [id, passwd], function(err, results, fields){
            if (err) throw err;
            if (results.length > 0) {
                console.log("로그인");
            }
            else {
                console.log("로그인 실패");
            }
        });
    }
    
})
    

app.get('*', function(req, res) { // * = 모든 경로
    res.sendFile(path.join(__dirname, 'React/build/index.html'));
})

app.listen(3001, function() {
    //console.log('listening on 3001')
})

module.exports = db;