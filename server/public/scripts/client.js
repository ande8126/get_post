
$(document).ready(onReady)

function onReady(){
    getMessages();
}//end onReady

function getMessages(){
    //make an AJAX GET request to server for messages
    //try-then-catch chain:
    $.ajax({
        type: 'GET',
        url:'/messages'
    }).then( function( response ){
        //if successful, show on dom
        console.log( 'back from the server with:', response );
    }).catch( function( err ){
        //catch any errors
        //display erroors in consle
        alert( 'nope' );
        console.log( err );
    })//end AJAX
    //if successful, show on the DOM
    //catch any errors
    //display errors in the console
}