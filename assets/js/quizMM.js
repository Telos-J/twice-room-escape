const answers = Array.from (document.querySelectorAll('.momoChoice-text'))

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === 'Jokbal')
            console.log('You are correct!🎉')
        else
            console.log('You are wrong, try again...😭')
    })
}
