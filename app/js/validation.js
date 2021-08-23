// clear error style
const inputs = document.querySelectorAll('input');
inputs.forEach(element => {
    element.addEventListener('keydown', () => {
        clearError(element);
    })
});

const clearError = (element) => {
    element.previousElementSibling.style.color = "black";
    element.style.borderColor = 'rgb(114, 121, 255)';
    element.nextElementSibling.innerHTML = '';
}

const btnCloseSignout = document.querySelector("#close-signout");
const fadeSignout = document.querySelectorAll('.fade-signout');
const overleySignout = document.querySelector(".overley-signout");

//set values
const setValues = () => {
    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const region = document.querySelector('#choosen-region').textContent;
    let position = document.querySelector('#choosen-position').textContent;
    if (position === 'სხვა') position = document.querySelector('#other-position').value;
    const email = document.querySelector('#email').value;

    const firstnameValue = document.querySelector('#firstname-value');
    const lastnameValue = document.querySelector('#lastname-value');
    const regionValue = document.querySelector('#region-value');
    const positionValue = document.querySelector('#position-value');
    const emailValue = document.querySelector('#email-value');

    firstnameValue.innerHTML = firstname;
    lastnameValue.innerHTML = lastname;
    regionValue.innerHTML = region;
    positionValue.innerHTML = position;
    emailValue.innerHTML = email;
}

// submit
const submit = document.querySelector('#submit');
submit.addEventListener("click", () => {
    if (validation()) {
        setValues();
        body.classList.add('noscroll');
        fadeSignout.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

// clear error style from select
const containerReg = document.querySelector('#region-container');
const containerPos = document.querySelector('#position-container');

containerReg.addEventListener('click', () => {
    clearError(containerReg);
});

containerPos.addEventListener('click', () => {
    clearError(containerPos)
});

// email validation
const validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// set error style
const setError = (element, text) => {
    element.previousElementSibling.style.color = "red";
    element.style.borderColor = "red";
    element.nextElementSibling.innerHTML = text;
    element.focus();
    element.previousElementSibling.scrollIntoView();
}

function validation() {

    const choosenRegion = document.querySelector('#choosen-region');
    if (choosenRegion.textContent === 'აირჩიეთ რეგიონი') {
        const container = document.querySelector('#region-container');
        setError(container, "აირჩიეთ რეგიონი.");
        return false;
    }

    const choosenPosition = document.querySelector('#choosen-position');
    if (choosenPosition.textContent === 'აირჩიეთ პოზიცია') {
        const container = document.querySelector('#position-container');
        setError(container, "აირჩიეთ პოზიცია.");
        return false;
    }

    for (element of inputs) {
        if (element.id === 'other-position') {
            let parentEl = document.querySelector('#other-position-container');
            if (!parentEl.classList.contains('hide') && element.value === '') {
                setError(element, "შეიყვანეთ პოზიცია.");
                return false;
            }
        }
        if (element.id === 'email') {
            if (element.value === '') {
                setError(element, "შეიყვანეთ მეილი.");
                return false;
            }
            if (!validateEmail(element.value)) {
                setError(element, "არასწორი მეილის ფორმატი.");
                return false;
            }
        }
        if (element.id === 'firstname') {
            if (element.value === '') {
                setError(element, "შეიყვანეთ სახელი.");
                return false;
            }
        }
        if (element.id === 'lastname') {
            if (element.value === '') {
                setError(element, "შეიყვანეთ გვარი.");
                return false;
            }
        }
        if (element.id === 'password' || element.id === 'repeat') {
            if (element.value === '') {
                setError(element, "შეიყვანეთ პაროლი.");
                return false;
            }
        }
    }
    const passwords = document.querySelectorAll('.pass');
    let firstP = passwords[0].value;
    let secondP = passwords[1].value;
    if (firstP != secondP) {
        setError(passwords[0], "პაროლები არ ემთხვევა.");
        setError(passwords[1], "პაროლები არ ემთხვევა.");
        return false;
    }

    return true;
}

// close
const closeSignOut = () => {
    body.classList.remove('noscroll');
    fadeSignout.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
}
btnCloseSignout.addEventListener("click", closeSignOut);
overleySignout.addEventListener("click", closeSignOut);
