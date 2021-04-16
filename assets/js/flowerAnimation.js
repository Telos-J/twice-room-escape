const flower = document.querySelector("#flower")

flower.addEventListener('click', () => {
    if (clickable) {
        gsap.to(flower, {
            duration: 1,
            scale: 1.5,
            onComplete() {
                quiz3.setup(flower);
                quiz3.show();
            }
        })
        
        clickable = false;
    }
})
