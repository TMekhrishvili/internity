const selects = document.querySelectorAll('.select');
const positions = document.querySelectorAll('.position-item');
const choosenPosition = document.querySelector('#choosen-position');
const other = document.querySelector('#other');
const otherPosition = document.querySelector('#other-position-container');

const regions = document.querySelectorAll('.region-item');
const choosenRegion = document.querySelector('#choosen-region');

// toggle dropdown
selects.forEach(element => {
    element.addEventListener("click", () => {
        if (!element.classList.contains("open-select")) {
            element.classList.remove('close-dropdown');
            element.classList.add('open-select');
            element.classList.add('show-dropdown');
        } else {
            element.classList.remove('open-select');
            element.classList.remove('show-dropdown');
            element.classList.add('close-dropdown');
        }
    });
});

// choose position
positions.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.textContent;
        choosenPosition.innerText = value;
        choosenPosition.classList.add("choosen");

        otherPosition.classList.add("hide");
    });
});

other.addEventListener("click", () => {
    choosenPosition.classList.remove("choosen");
    choosenPosition.innerText = other.textContent;
    otherPosition.classList.remove("hide");
    const el = document.querySelector('#other-position');
    el.focus();
});

// choose region
regions.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.textContent;
        choosenRegion.innerText = value;
        choosenRegion.classList.add("choosen");
    });
});