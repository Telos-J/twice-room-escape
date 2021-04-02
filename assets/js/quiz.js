const quiz = document.querySelector('#quiz');
const question = quiz.querySelector('#question');
const choices = Array.from(quiz.querySelectorAll('.choice-text'));
let answers = Array.from(document.querySelectorAll('.choice-text'))

function resetAnswers() {
    const newAnswers = [];
    for (let answer of answers) {
        const newAnswer = answer.cloneNode(true);
        answer.parentNode.replaceChild(newAnswer, answer);
        newAnswers.push(newAnswer);
    }

    answers = newAnswers;
}

class Quiz {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = choices[answer];
        this.callBacks = [];
    }

    callback(object, answer) {
        if (answer === this.answer) {
            console.log('You are correct!🎉')
            quiz.classList.remove('show');
            gsap.to(object, { opacity: 0, duration: 1 });
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

        resetAnswers();
        for (let answer of answers) {
            const self = this;
            const callback = () => {
                self.callback(object, answer.innerHTML);
            };
            answer.addEventListener('click', callback);
            this.callBacks.push(callback);
        }
    }

    show() {
        quiz.classList.add('show');
    }
}

const quiz1 = new Quiz("question1", ["choice1", "choice2", "choice3", "choice4"], 0);
const quiz2 = new Quiz("question2", ["choice1", "choice2", "choice3", "choice4"], 1);
const quiz3 = new Quiz("question3", ["choice1", "choice2", "choice3", "choice4"], 2);
const quiz4 = new Quiz("question4", ["choice1", "choice2", "choice3", "choice4"], 3);
