let submit = document.getElementById("register");

let mail = document.getElementById("mail");
let pass = document.getElementById("pass");

let errorM = document.getElementById("erMail");
let errorP = document.getElementById("erPass");

let done = document.getElementById("check");


submit.addEventListener("click", function(event){

    event.preventDefault();
    let count = 0;

    if (mail.value.length < 1) {
        let errM = document.createElement("p");
        errM.style.color = "red";
        errM.innerHTML = mail.placeholder + " can't be empty";
        errorM.appendChild(errM);
        // console.log("EMPTY");
        count++;
        setTimeout(function() {
            errM.parentNode.removeChild(errM);
        }, 5000);
    }

    if (localStorage.getItem(mail.value) == undefined){
        let sub = document.createElement("p");
        sub.style.color = "red";
        sub.innerHTML = 'User is not found';
        done.appendChild(sub);
        setTimeout(function() {
            sub.parentNode.removeChild(sub);
        }, 5000);
    } else {
        let info = JSON.parse(localStorage.getItem(mail.value));
        if (info.password == pass.value) {
            // window.open('profile.html');
            nameSet.value = info.name;
            mailSet.value = info.mail;
            passSet.value = info.password;
            confPassSet.value = info.password;

            if (info.surname != undefined){
                surnameSet.value = info.surname;
            } else {
                surnameSet.value = "";
            }
            if (info.age != undefined){
                ageSet.value = info.age;
            } else {
                ageSet.value = "";
            }

        }
        else {
            let sub = document.createElement("p");
            sub.style.color = "red";
            sub.innerHTML = 'Incorrect Password';
            done.appendChild(sub);
            setTimeout(function() {
                sub.parentNode.removeChild(sub);
            }, 5000);
        }
    }

});

let submitSet = document.getElementById("registerSet");
let nameSet = document.getElementById("nameSet");
let surnameSet = document.getElementById("surnameSet");
let mailSet = document.getElementById("mailSet");
let ageSet = document.getElementById("ageSet");
let passSet = document.getElementById("passSet");
let confPassSet = document.getElementById("conf_passSet");
let errorNSet = document.getElementById("erNameSet");
let errorMSet = document.getElementById("erMailSet");
let errorPSet = document.getElementById("erPassSet");
let errorCPSet = document.getElementById("erConfPassSet");
let doneSet = document.getElementById("checkSet");

let count = 0;




submitSet.addEventListener("click", function(event){

    event.preventDefault();
    count = 0;

    let user = {};

    if (nameSet.value.length < 1) {
        let errNSet = document.createElement("p");
        errNSet.style.color = "red";
        errNSet.innerHTML = nameSet.placeholder + " can't be empty";
        errorNSet.appendChild(errNSet);
        // console.log("EMPTY");

        setTimeout(function() {
            errNSet.parentNode.removeChild(errNSet);
        }, 5000);
    } else {
        count++;
        user['name'] = nameSet.value;
        // console.log(user);
    }

    if (surnameSet.value.length > 0) {
        user['surname'] = surnameSet.value;
    }

    if (ageSet.value.length > 0) {
        user['age'] = ageSet.value;
    }

    if (mailSet.value.length < 1) {
        let errMSet = document.createElement("p");
        errMSet.style.color = "red";
        errMSet.innerHTML = mailSet.placeholder + " can't be empty";
        errorMSet.appendChild(errMSet);
        // console.log("EMPTY");

        setTimeout(function() {
            errMSet.parentNode.removeChild(errMSet);
        }, 5000);
    } else {
        count++;
        user['mail'] = mailSet.value
    }

    if (passSet.value.length < 8) {
        let errPSet = document.createElement("p");
        errPSet.style.color = "red";
        errPSet.innerHTML = passSet.placeholder + " can't be less than 8 symbols";
        errorPSet.appendChild(errPSet);
        // console.log("EMPTY");

        setTimeout(function() {
            errPSet.parentNode.removeChild(errPSet);
        }, 5000);
    } else {
        count++;
    }

    if (confPassSet.value.length < 8) {
        let errCPSet = document.createElement("p");
        errCPSet.style.color = "red";
        errCPSet.innerHTML = passSet.placeholder + " can't be less than 8 symbols";
        errorCPSet.appendChild(errCPSet);
        // console.log("EMPTY");

        setTimeout(function() {
            errCPSet.parentNode.removeChild(errCPSet);
        }, 5000);
    } else {
        count++;
    }

    if (confPassSet.value != passSet.value) {
        let errCPSet = document.createElement("p");
        errCPSet.style.color = "red";
        errCPSet.innerHTML = confPassSet.placeholder + " must be the same";
        errorCPSet.appendChild(errCPSet);

        setTimeout(function() {
            errCPSet.parentNode.removeChild(errCPSet);
        }, 5000);
    } else {
        count++;
        user['password'] = passSet.value;
    }

    if (count == 5) {
        localStorage.setItem(mailSet.value, JSON.stringify(user));

        let subSet = document.createElement("p");
        subSet.style.color = "green";
        subSet.innerHTML = "Changes are saved ";
        doneSet.appendChild(subSet);

        setTimeout(function() {
            subSet.parentNode.removeChild(subSet);
        }, 5000);
    }

});
