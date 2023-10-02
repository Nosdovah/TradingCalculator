class Calculator {
    constructor(preOperandText , postOperandText) {
        this.preOperandText= preOperandText
        this.postOperandText = postOperandText
        this.clear()

    }

    clear() {
        this.preOperand = ""
        this.postOperand = ""
        this.operator = undefined
        
    }
     
    delete() {

    }


    addNumber(number) {
        this.preOperand = number
    }

    displayUpdate() {
        this.preOperandText.textContent = this.preOperand
    }
}

const numbers = document.querySelectorAll(['numbers']);
const operand = document.querySelectorAll(['operand']);
const equal = document.querySelector(['equal'])
const del = document.querySelector(['delete'])
const clear = document.querySelector(['clear'])

const preOperandText = document.querySelector(['pre-number'])
const postOperandText = document.querySelector(['post-number'])

const calculator = new Calculator(preOperandText ,postOperandText);

numbers.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.addNumber(button.textContent)
        calculator.displayUpdate()
    })
})

