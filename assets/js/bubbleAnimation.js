gsap.registerPlugin(MotionPathPlugin);
const bubbleTea = document.querySelector('#bubble-tea');

let clickable = true;
bubbleTea.addEventListener('click', () => {
    if (clickable)
        gsap.to("#bubble1", {
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0.102,0.2 0.364,0.406 0.5,0.5 0.639,0.596 0.9,0.8 1,1"),
            motionPath: {
                path: "#bubble-path",
                align: "#bubble-path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            },
            onComplete() {
                document.querySelector('#firework').style.display = 'block';
                document.querySelector('#bubble1').style.display = 'none';

                quiz1.setup(bubbleTea);
                quiz1.show();
            }
        });

    clickable = false;
})

