const express = require('express'),
    mongodb = require('mongodb'),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const uri = 'mongodb+srv://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST
const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true })

let characterColl = null;
let user = null;
let pw = null;
let userInfo = null;

client.connect()
    .then( () => {
        return client.db( 'a3database' ).collection( 'surveyData' )
    })
    .then( __collection => {
        characterColl = __collection
        return characterColl.find({ }).toArray()
    })
    .then( console.log )

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log("Cookies: ", req.cookies);
});

app.get("/characters", (req, res) => {
    if( characterColl !== null ) {
        characterColl.find({ }).toArray().then( result => res.json( result) );
    }
});

app.post("/submit", bodyParser.json(), function(req,res) {
    console.log('body: ', req.body)

    req.body.username = user;
    req.body.password = pw;

    characterColl.insertOne(req.body)
        .then( insertResponse => characterColl.findOne( insertResponse.insertedId ) )
        .then( findResponse   => res.json( findResponse ))
})

//Add a route to delete
app.post( '/delete', (req,res) => {
    characterColl
        .deleteOne({ _id:mongodb.ObjectId( req.body.idElement) })
        .then(result => res.json(result))
})

//Add a route to update a document
app.post( '/update', (req,res) => {
    characterColl
        .updateOne({ _id:mongodb.ObjectId( req.body.id ) },
            {$set:{
                    cname:req.body.cname,
                    house:req.body.house
                }}
        )
        .then( result => res.json( result ) )
})

// client.connect().then(() => {
//     userInfo = client.db("a3database").collection("userData");
// });

app.post("/signup", bodyParser.json(), function (req, res) {
    userInfo.find({ username: req.body.username, password: req.body.password }).toArray()
        .then(result => res.json(result));
    user = req.body.username;
    pw = req.body.password;
});

app.post('/logout', bodyParser.json(), function(req,res){
    user = null;
    pw = null;
});

app.post('/signin', bodyParser.json(), function(req, res) {
    userInfo.insertOne(req.body)
        .then( insertResponse => userInfo.findOne( insertResponse.insertedId))
        .then( findResponse   => res.json(findResponse))
    user = req.body.username
    pw = req.body.username
});

app.listen(process.env.PORT || 3000 )