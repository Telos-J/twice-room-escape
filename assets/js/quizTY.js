const answers = Array.from (document.querySelectorAll('.tzuyuChoice-text'))

for (let answer of answers) {
    answer.addEventListener('click',()=> {
        if (answer.innerHTML === '1999.06.14.')
            console.log('You are correct!🎉')
        else
            console.log('You are wrong, try again...😭')
    })
}
