function createUser(name,pwd1,pwd2) {
    secret1 = pwd1.value;
    secret2 = pwd2.value;
    email = name.value
    
    if(emailCheck(email) && pwdOK(secret1, secret2)) {   
        // store email and password
        sessionStorage.setItem(email, secret1);
        return true;
    }
    
    pwd1.value = "";
    pwd2.value = "";
    return false;
}

function pwdOK(secret1, secret2) {
    if(secret1.length < 3) {
        alert("Password needs 3 characters or more");
        return false;
    }

    if(secret1 != secret2) {
        alert("Password not the same");
        return false;
    }
    return true;
}

function emailCheck(email) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
        if(sessionStorage.getItem(email) == null) {
            return true;
        }
        alert("An account exists under this email already")
        return false;
    }
    alert("Need to provide an email");
    return false;
}