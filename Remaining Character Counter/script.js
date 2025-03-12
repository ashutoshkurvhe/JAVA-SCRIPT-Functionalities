const inputField = document.getElementById('userInput');
const charCount = document.querySelector('.char-count')

let maxChar = 50;
inputField.addEventListener('input', (event) => {
    let inputChar = event.target.value;
    let remainingChar = eval(maxChar - inputChar.length);
    console.log(remainingChar)
    charCount.textContent = remainingChar;
    if (remainingChar === 0) {
        alert('You touch the maximum character limits')
    }
})