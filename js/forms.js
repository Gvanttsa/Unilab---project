function emailValidation() {
    // let formEmail = document.getElementById('subscribtion');
    let emailfiled = document.getElementById('myEmail').value;
    let spanText = document.getElementById('emailtext');
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailfiled.match(emailStructure)) {
        spanText.innerHTML = 'Your Email is Valid';
        spanText.style.color = 'green';
    } else {
        spanText.innerHTML = 'Your Email is not Valid';
        spanText.style.color = 'red';
    }
}
