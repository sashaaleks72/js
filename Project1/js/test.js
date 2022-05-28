let credentials = {
    "login": "sashaaleks72",
    "pass": "GamerGuy123"
};

function Auth(){
    let login = document.forms["sign-in"][0].value;
    let pass = document.forms["sign-in"][1].value;

    let html = document.querySelector("html");
    let successBlock = document.getElementsByClassName("success")[0];
    let failedBlock = document.getElementsByClassName("fail")[0];

    if (successBlock != null){
        html.removeChild(successBlock)
    }
    if (failedBlock != null){
        html.removeChild(failedBlock)
    }

    if (credentials.login == login && credentials.pass == pass){
        let successBlock = document.createElement("div");
        successBlock.textContent = "Signed in!";
        successBlock.setAttribute("style", "color: green;");
        successBlock.setAttribute("class", "success");
        html.appendChild(successBlock);
    }
    else {
        let failedBlock = document.createElement("div");
        failedBlock.textContent = "Login or pass is wrong";
        failedBlock.setAttribute("style", "color: red;");
        failedBlock.setAttribute("class", "fail");
        html.appendChild(failedBlock);
    }
}

