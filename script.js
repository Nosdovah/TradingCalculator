class Calculator {
    constructor(preOperandText, postOperandText) {
        this.preOperandText = preOperandText
        this.postOperandText = postOperandText
        this.clear()

    }

    clear() {
        this.preOperand = ''
        this.postOperand = ''
        this.operator = undefined
    }

    delete() {

    }


    addNumber(number) {
        //If you click zero first thing first
        //if (this.preOperand[0] == "0") this.preOperand.slice(0,-1 )

        //if you click multiple dot (.)
        if (number === "." && this.preOperand.includes(".")) return
        this.postOperand += number.toString()
    }


    operation(operand) {
        if(this.postOperand === '') return
        if(this.preOperand !== '') {
            this.compute()
        }
        this.operator = operand
        this.preOperand = this.postOperand
        this.postOperand = ''
    }

    displayUpdate() {
        this.postOperandText.textContent = this.postOperand
        this.preOperandText.textContent = this.preOperand

    }

    compute() {
        if(isNaN(prev) || isNaN(current) ) return
        const prev = parseFloat(this.preOperand)
        const current = parseFloat(this.postOperand)
          
    }
}

const numbers = document.querySelectorAll('[numbers]');
const operand = document.querySelectorAll('[operand]');
const equal = document.querySelector('[equal]')
const del = document.querySelector('[delete]')
const clear = document.querySelector('[clear]')

const preOperandText = document.querySelector('[pre-number]')
const postOperandText = document.querySelector('[post-number]')

const calculator = new Calculator(preOperandText, postOperandText);

// numbers.forEach(button => {
//     button.addEventListener('click' , () => {
//         calculator.addNumber(button.textContent)
//         calculator.displayUpdate()
//     })
// })
clear.addEventListener('click', () => {
    calculator.clear()
    preOperandText.textContent = ""
    postOperandText.textContent = "0"
})


numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.textContent)
        calculator.displayUpdate()
    })
})

operand.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operation(button.textContent)
        calculator.displayUpdate()
    })
})


