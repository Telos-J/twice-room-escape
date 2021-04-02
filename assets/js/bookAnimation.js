const book = document.querySelector('#book');
const books = Array.from(document.querySelectorAll('.book'));

let idx = 0;
book.addEventListener('click', () => {
    if (clickable) {
        window.setInterval(() => {
            book.src = books[idx].src;
            idx++;
            if (idx > 2) idx = 2;
        }, 50)


        quiz2.setup(book);
        quiz2.show();

        clickable = false;
    }
})
