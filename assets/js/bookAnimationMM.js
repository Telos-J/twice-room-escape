const book = document.querySelector('#book');
const momoBookArray = ["../assets/img/Momo/momobook1.png", "../assets/img/Momo/momobook2.png", "../assets/img/Momo/momobook3.png", "../assets/img/Momo/momobook4.png"]
let idx = 0;

book.addEventListener('click', () => {
    window.setInterval(() => {
        book.src = momoBookArray[idx]
        idx++;
        if (idx > 3) idx = 3;
    }, 50)


    quiz1.setup(book);
    quiz1.show();
})
