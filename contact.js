var messagesref = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit', submitform);
function submitform(e) {
    e.preventDefault();

    // get values
    var name = document.getElementById('input1').value;
    var email = document.getElementById('input2').value;
    var message = document.getElementById('message').value;

    savemessage(name, email, message);
}

function savemessage(name, email, message) {
    var newmessageref = messagesref.push();
    newmessageref.set({
        name: name,
        email: email,
        message: message,
    });
}