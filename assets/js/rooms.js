const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

for (let key of urlParams.keys()) {
    console.log(key)
    if (key === 'nayeon') {
        gsap.to('#nayeonRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }
}
