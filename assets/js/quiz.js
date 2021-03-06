const quizzes = [];
const quiz = document.querySelector('#quiz');
const question = quiz.querySelector('#question');
let choices = Array.from(quiz.querySelectorAll('.choice-text'));

function resetChoices() {
    const newChoices = [];
    for (let choice of choices) {
        const newChoice = choice.cloneNode(true);
        choice.parentNode.replaceChild(newChoice, choice);
        newChoices.push(newChoice);
    }

    choices = newChoices;
}

class Quiz {
    constructor(member, question, choices, answer) {
        this.member = member;
        this.question = question;
        this.choices = choices;
        this.answer = choices[answer];
        this.callBacks = [];
        this.answered = false;
        quizzes.push(this);
    }

    callback(object, choice) {
        if (choice === this.answer) {
            console.log('You are correct!🎉')
            gsap.to(object, { opacity: 0, display: 'none', duration: 1 });
            gsap.to(quiz, { opacity: 0, display: 'none', duration: 1 });
            clickable = true;
            this.answered = true;
            let allAnswered = true;
            for (let quiz of quizzes) {
                if (!quiz.answered) allAnswered = false;
            }
            if (allAnswered) {
                console.log('You have answered all questions correctly!')
                const url = "../pages/rooms.html";
                let queryString = window.location.search;
                let prefix = queryString ? '&' : '?';
                queryString = queryString + prefix + this.member;
                window.location.replace(url + queryString)
            }

        } else {
            console.log('You are wrong, try again...😭')
            gsap.to(quiz, { x: 10, repeat: 3, yoyo: true, duration: 0.1 });
        }
    }

    setup(object) {
        question.innerHTML = this.question;
        choices.forEach((choice, idx) => {
            choice.innerHTML = this.choices[idx];
        })

        resetChoices();
        for (let choice of choices) {
            const self = this;
            const callback = () => {
                self.callback(object, choice.innerHTML);
            };
            choice.addEventListener('click', callback);
            this.callBacks.push(callback);
        }
    }

    show() {
        gsap.fromTo(quiz, { opacity: 0 }, { display: "block", opacity: 1, duration: 1 })
    }
}
