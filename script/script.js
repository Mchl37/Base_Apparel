function validateEmail(mail) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(mail.value);
}

function validate() {
    let alert = document.getElementById("p_alert");
    let icon_alert = document.getElementById("icon_alert");
    let mail =  document.getElementById("input_mail");
    let btn = document.getElementById("bt_mail");

    if (validateEmail(mail)) {
        alert.style.display = "hidden";
        console.log("Valid")
    } else {
        mail.style.border = "2px solid red";
        alert.style.display = "block";
        btn.style.border = "none";
        icon_alert.style.display = "flex";
        icon_alert.style.justifyContent = "center";
        icon_alert.style.alignItems = "center";
        console.log("Not valid")

    }
    return false;
}

document.getElementById("bt_mail").addEventListener("click", validate);