const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const keys = Array.from(urlParams.keys())
const rooms = Array.from(document.querySelectorAll('#roomContainer > img'));

for (let room of rooms) {
    if (!keys.includes(room.getAttribute('id').slice(0, -4)))
        room.addEventListener('click', () => {
            const url = '../pages/' + room.getAttribute('id') + '.html';
            window.location.replace(url + queryString)
        })
}

for (let key of urlParams.keys()) {
    if (key === 'nayeon') {
        gsap.to('#nayeonRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }
    else if (key === 'jeongyeon') {
        gsap.to('#jeongyeonRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }
    else if (key === 'momo') {
        gsap.to('#momoRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }
    else if (key === 'sana') {
        gsap.to('#sanaRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
     }     
    else if (key === 'jihyo') {
        gsap.to('#jihyoRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }
    else if (key === 'mina') {
        gsap.to('#minaRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    }      
    else if (key === 'dahyun') {
        gsap.to('#dahyunRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
    } 
    else if (key === 'chaeyoung') {
        gsap.to('#chaeyoungRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
     }  
    else if (key === 'tzuyu') {
        gsap.to('#tzuyuRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
     }   
    else if (key === 'twice') {
        gsap.to('#twiceRoom', { delay: 1, duration: 1, opacity: 0, display: 'none' })
     }      
}
