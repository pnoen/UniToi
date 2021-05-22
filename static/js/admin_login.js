function loginCheck(name,pwd)
{
    // check password
    secret = pwd.value;
    email = name.value;
    
    if(pwdOK(email, secret)) {
    	return true;
    }
    
    pwd.value = "";
    return false;
}

function pwdOK(email, secret) {
    if(secret.length<3) {
        alert("Password needs 3 characters or more");
        return false;
    }
    else {
        var storePwd = sessionStorage.getItem(email);
        if(secret != storePwd) {
            alert("Incorrect password");
            return false;
        }
    }
    return true;
}