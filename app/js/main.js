const selects = document.querySelectorAll('.select');


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
