const questions = document.querySelectorAll('.question')
const btnNxt = document.querySelector('#nxt')
let op4 = document.querySelector('#op4')
let op5 = document.querySelector('#op5')
let op11 = document.querySelector('#op11')
let op15 = document.querySelector('#op15')
let op19 = document.querySelector('#op19')
const ops = document.querySelectorAll('.op')
let btnRestart = document.querySelector('#reiniciar')
let corrects = [op4, op5, op11, op15, op19]


let currentIndex = 1
let correct = 0

btnNxt.disabled = true


if (currentIndex == 1) {
    questions.forEach((el, index) => {
        el.className = 'question hidden'
    });
    questions[currentIndex - 1].className = 'question active'

}

function showQuestion() {
    questions[currentIndex].className = 'question active'
    currentIndex++
    btnNxt.disabled = true
}

function buttonactive() {
    btnNxt.disabled = false
}
function show(event) {
    event.preventDefault()

    console.log(ops)
    let checked = 0


    ops.forEach(element => {
        if (element.checked) {
            checked++
        }
    });
    if (checked == 0) {
        return console.log('Nenhuma opção selecionada')
    }



    if (currentIndex < questions.length) {
        corrects.forEach(el => {
            if (el.checked) {
                correct++


            }
        })
        questions.forEach(el => {
            el.className = 'question hidden'

        });
        showQuestion()
        if (currentIndex == 5) {
            btnNxt.innerText = 'Gerar Resultado'
        }




    }
    else {
        let resultado = document.querySelector('#resultado')
        let score = document.querySelector('#score')
        btnNxt.className = 'hidden'
        corrects.forEach(el => {
            if (el.checked) {
                correct++


            }
        })
        console.log(correct)
        questions.forEach(el => {
            el.className = 'question hidden'

        });
        resultado.style.display = 'flex'
        score.innerText = `Você acertou ${correct} de 5 questões`
    }
}



btnNxt.addEventListener('click', show)

ops.forEach(element => {
    element.addEventListener('change', buttonactive)
});

btnRestart.addEventListener('click', () => {
    location.reload()
})