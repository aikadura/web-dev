let submit = document.getElementById("register");
let name = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let confPass = document.getElementById("conf_pass");
let errorN = document.getElementById("erName");
let errorM = document.getElementById("erMail");
let errorP = document.getElementById("erPass");
let errorCP = document.getElementById("erConfPass");
let done = document.getElementById("check");

let count = 0;

submit.addEventListener("click", function(event){

    event.preventDefault();
    count = 0;

    let user = {};

    if (name.value.length < 1) {
        let errN = document.createElement("p");
        errN.style.color = "red";
        errN.innerHTML = name.placeholder + " can't be empty";
        errorN.appendChild(errN);
        // console.log("EMPTY");

        setTimeout(function() {
            errN.parentNode.removeChild(errN);
        }, 5000);
    } else {
        count++;
        user['name'] = name.value;
        // console.log(user);
    }

    if (mail.value.length < 1) {
        let errM = document.createElement("p");
        errM.style.color = "red";
        errM.innerHTML = mail.placeholder + " can't be empty";
        errorM.appendChild(errM);
        // console.log("EMPTY");

        setTimeout(function() {
            errM.parentNode.removeChild(errM);
        }, 5000);
    } else {
        count++;
        user['mail'] = mail.value
    }

    if (pass.value.length < 8) {
        let errP = document.createElement("p");
        errP.style.color = "red";
        errP.innerHTML = pass.placeholder + " can't be less than 8 symbols";
        errorP.appendChild(errP);
        // console.log("EMPTY");

        setTimeout(function() {
            errP.parentNode.removeChild(errP);
        }, 5000);
    } else {
        count++;
    }

    if (confPass.value.length < 8) {
        let errCP = document.createElement("p");
        errCP.style.color = "red";
        errCP.innerHTML = pass.placeholder + " can't be less than 8 symbols";
        errorCP.appendChild(errCP);
        // console.log("EMPTY");

        setTimeout(function() {
            errCP.parentNode.removeChild(errCP);
        }, 5000);
    } else {
        count++;
    }

    if (confPass.value != pass.value) {
        let errCP = document.createElement("p");
        errCP.style.color = "red";
        errCP.innerHTML = confPass.placeholder + " must be the same";
        errorCP.appendChild(errCP);

        setTimeout(function() {
            errCP.parentNode.removeChild(errCP);
        }, 5000);
    } else {
        count++;
        user['password'] = pass.value;
    }

    if (count == 5) {
        localStorage.setItem(mail.value, JSON.stringify(user));

        let sub = document.createElement("p");
        sub.style.color = "green";
        sub.innerHTML = "Registration completed successfully";
        done.appendChild(sub);

        setTimeout(function() {
            sub.parentNode.removeChild(sub);
        }, 5000);
    }

});

