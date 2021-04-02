//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

let clickable = true;
document.querySelector('#book').addEventListener('click', () => {
    if (clickable) {
    gsap.to("#book", {
    duration: 1, 

    onComplete() {
        document.querySelector('#bookflipMM').style.display = 'block';
    }
    });
    }
    clickable = false;
})