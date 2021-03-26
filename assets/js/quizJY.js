const answers = Array.from (document.querySelectorAll('.jeongyeonChoice-text'))

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === 'Cleaning')
            console.log('You are correct!🎉')
        else
            console.log('You are wrong, try again...😭')
    })
}
