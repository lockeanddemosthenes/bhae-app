const express = require('express'),
    mongodb = require('mongodb'),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const uri = 'mongodb+srv://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOSTER
//const uri = 'mongodb+srv://tester:tester3@cluster0.4clr3.mongodb.net/'
const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true, serverApi: ServerApiVersion.v1 })

let unitsColl = null;

// client.connect()
//     .then( () => {
//         return client.db( 'bhaestats' ).collection( 'units_aw' )
//     })
//     .then( __collection => {
//         unitsColl = __collection
//         return unitsColl.find({ }).toArray()
//     })

// app.get("/index", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });
//
// app.get("/characters", (req, res) => {
//     if( unitsColl !== null ) {
//         unitsColl.find({ }).toArray().then( result => res.json( result) );
//     }
// });
//
// app.post("/submit", bodyParser.json(), function(req,res) {
//     console.log('body: ', req.body)
//
//     req.body.username = user;
//     req.body.password = pw;
//
//     unitsColl.insertOne(req.body)
//         .then( insertResponse => unitsColl.findOne( insertResponse.insertedId ) )
//         .then( findResponse   => res.json( findResponse ))
// })
//
// //Add a route to update a document
// app.post( '/update', (req,res) => {
//     unitsColl
//         .updateOne({ _id:mongodb.ObjectId( req.body.id ) },
//             {$set:{
//                     participant1:req.body.participant1,
//                     participant2:req.body.participant2
//                 }}
//         )
//         .then( result => res.json( result ) )
// })

app.listen(process.env.PORT || 3000 )