const answers = Array.from (document.querySelectorAll('.tzuyuChoice-text'))
const quiz = document.querySelector('quiz');

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === '1999.06.14.') {
            console.log('You are correct!🎉')
            quiz.classList.remove('show')
        }
        else
            console.log('You are wrong, try again...😭')
    })
}
