//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

document.querySelector("#bubble-tea").addEventListener("click",() => {
gsap.to("#bubble1", {
  duration: 2, 
  ease: "power1.inOut",
  motionPath:{
    path: "#bubble-path",
    align: "#bubble-path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
  });
})


