//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

document.querySelector('#bubble-tea').addEventListener('click', () => {
    gsap.to("#bubble1", {
    duration: 1, 
    ease: CustomEase.create("custom", "M0,0 C0.196,0.322 0.348,0.463 0.54,0.546 0.768,0.644 0.838,0.812 1,1 "),
    motionPath:{
        path: "#bubble-path",
        align: "#bubble-path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    onComplete() {
        document.querySelector('#firework').style.display = 'block';
        document.querySelector('#bubble1').style.display = 'none';
    }
    });
})
