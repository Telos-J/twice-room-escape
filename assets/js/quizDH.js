const answers = Array.from (document.querySelectorAll('.dahyunChoice-text'))
const quiz = document.querySelector('#quiz');
const bubbleTea = document.querySelector('#bubble-tea');

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === 'Tofu') {
            console.log('You are correct!🎉')
            quiz.classList.remove('show')
            gsap.to(bubbleTea,{opacity:0,duration:1});
        }
        else {
            console.log('You are wrong, try again...😭')
            gsap.to(quiz,{x:10,repeat:3,yoyo:true, duration:0.1});
    }
    })
}
