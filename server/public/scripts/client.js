
$(document).ready(onReady)

function onReady(){
    //make click handlers
    $( '#sendMessageButton' ).on( 'click', sendMessage );
    //initialization
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
}//end getMessages

function sendMessage(){
    //get user input & place it in an object
    let objectToSend = {
        author: $( '#nameIn' ).val(),
        body: $( '#messageIn' ).val()
    }//end objectToSend
    console.log( 'sending message:', objectToSend);
    //send the object to the server via AJAX POST
    //if successful, update DOM
    //catch any errors
    // empty the messageIn element
    $( '#messageIn' ).val( '' );
}//end sendMessage