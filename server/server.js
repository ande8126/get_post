//requires

const express = require( 'express' );
//create web app
const app = express();

//uses
//this tells the app where to look for "index.html" (sets the default folder
app.use( express.static( 'server/public' ) )
//global
const port = 5000;

//spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

// routes