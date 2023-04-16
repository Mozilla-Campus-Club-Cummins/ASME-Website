
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "XYZ@gmail.com",
        Password : "password",
        To : 'ABC@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Form Enquiry",
        Body : "Name: "+document.getElementById("name").value
                +"<br> Email: "+ document.getElementById("email").value
                +"<br> Message: "+ document.getElementById("message").value
    }).then(
    message => alert(message)
    );
}
