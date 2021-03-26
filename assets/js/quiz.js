const answers = Array.from (document.querySelectorAll('.answer-text'))

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === '2015.10.20')
            console.log('You are correct!🎉')
        else
            console.log('You are wrong, try again...😭')
    })
}
