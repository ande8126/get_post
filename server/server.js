//requires

const express = require( 'express' );
//create web app
//NECESSARY FOR POSTS TO WORK pt1
const bodyParser = require( 'body-parser' );

//create app
const app = express();

//uses
//this tells the app where to look for "index.html" (sets the default folder
app.use( express.static( 'server/public' ) );
//NECESSARY FOR POSTS TO WORK pt2
app.use( bodyParser.urlencoded( {extended: true} ) );//pushing down on the brake pedal


//global
const port = 5000;
let messages = [];

//spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

// routes
app.get( '/messages', ( req, res )=>{
    console.log('/messages get');
    res.send( messages );
})//end messages get

app.post( '/messages', ( req, res )=>{
    console.log( '/messages post', req.body );
    messages.push( req.body );
    res.sendStatus( 201 ); //CREATED
})//end /messages post