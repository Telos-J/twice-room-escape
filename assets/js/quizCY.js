const answers = Array.from (document.querySelectorAll('.nayeonChoice-text'))

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === 'Khaki')
            console.log('You are correct!🎉')
        else
            console.log('You are wrong, try again...😭')
    })
}
