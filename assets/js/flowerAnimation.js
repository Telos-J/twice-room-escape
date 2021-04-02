const flower = document.querySelector("#flower")

flower.addEventListener('click', () => {
    if (clickable) {
        quiz3.setup(flower);
        quiz3.show();
        clickable = false;
    }
})
