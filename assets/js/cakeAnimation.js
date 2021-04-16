const cake = document.querySelector("#cake")

cake.addEventListener('click', () => {
    if (clickable) {
        gsap.to(cake.querySelector('#decoration'), {
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0.102,0.2 0.364,0.406 0.5,0.5 0.639,0.596 0.9,0.8 1,1"),
            motionPath: {
                path: "#decoration-path",
                align: "#decoration-path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            },
            onComplete() {
                document.querySelector('#firework').src = '../assets/img/Common/firework.gif';
                document.querySelector('#firework').style.display = 'block';
                cake.querySelector('#decoration').style.display = 'none';

                quiz4.setup(cake);
                quiz4.show();
            }
        });

        clickable = false;
    }
})
