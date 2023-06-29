const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const User = require('./model/user')

const app = express()
app.use(express.json());
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, () => {
//     console.log("DB connected")
// })

mongoose.connect('mongodb://localhost:27017/demo');
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to DB');
    }
    else {
        console.log(err);
    }
});

app.post('/login', (req, res) =>{
    const {email, password} = req.body;
    User.findOne({email : email}).then( user => {
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                res.send('login successful');
            }
            else{
                res.send('Invalid password');
            }
        }
        else{
            res.send('user is not registered');
        }
    }).catch(err => console.log(err))
})


app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    User.findOne({email : email}).then(user =>{
        if(user){
            res.send("user already registered!");
        }
        else{
            const user = new User({
                name : name,
                email : email,
                password : bcrypt.hashSync(password, 10)
            })
            user.save().then(res.send('registration successful')).catch(err => res.send(err));
        }
    })
    .catch(err => console.log('error'))
})

app.listen(5000, () => console.log('server started at port 5000'))
