
    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "modernxofcuser@gmail.com",
            Password : "modernxofcuser@modernx.co.in/.io/.xyz",
            To : 'officialmodernxmagazines@gmail.com',
            From : document.getElementById("mail").value,
            Subject : "ModernX User Message",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
