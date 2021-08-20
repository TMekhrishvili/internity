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

// submit
const submit = document.querySelector('#submit');
submit.addEventListener("click", () => {
    if (validation()) {
        const passwords = document.querySelectorAll('.pass');
        let firstP = passwords[0].value;
        let secondP = passwords[1].value;
        if (firstP != secondP) {
            setError(passwords[0], "პაროლები არ ემთხვევა.");
            setError(passwords[1], "პაროლები არ ემთხვევა.");
        } else {
            
        }
    }
});

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
}

function validation() {
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
    return true;
}

