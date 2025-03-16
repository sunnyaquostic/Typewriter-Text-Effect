const textDisplay = document.getElementById('text')
let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

const phrases = [
    'Hello, my name is Sunday Ige',
    'A web/software developer',
    'DevOps engineer.'
]

function loop() {
    isEnd = false
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('');  
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop()
            j--
            textDisplay.innerHTML = currentPhrase.join('');  
        }

        if (j == phrases[i].length) {
            isDeleting = true
            isEnd = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++

            if (i === phrases.length) {
                i = 0
            }
        }
    }


    const speedUp = Math.random() * 80
    const normalSpeed = Math.random() * 300
    const time = isEnd ? 2000 :isDeleting ? speedUp : normalSpeed
    setTimeout(loop, time)
}

loop()