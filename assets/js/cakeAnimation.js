const cake = document.querySelector("#cake")

cake.addEventListener('click', () => {
    if (clickable) {
        quiz4.setup(cake);
        quiz4.show();
        clickable = false;
    }
})
