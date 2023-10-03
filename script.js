class Calculator {
    constructor(preOperandText, postOperandText) {
        this.preOperandText = preOperandText
        this.postOperandText = postOperandText
        this.clear()

    }

    clear() {
        this.preOperand = ''
        this.postOperand = '0'
        this.operator = undefined
    }

    delete() {
        //current operand ?
        this.postOperand = this.postOperand.toString().slice(0, -1)
        if(this.postOperand.length == 0) {
            this.postOperand = this.postOperand + "0"
        }
    }


    addNumber(number) {
        //if you click multiple dot (.)
        if (number === "." && this.preOperand.includes(".")) return
        this.postOperand += number.toString()
        //If you click zero first thing first
        if (this.postOperand[0] === "0")  {
           this.postOperand =  this.postOperand.replace("0","")
        }

    }


    operation(operand) {
        if (this.postOperand === '') return
        if (this.preOperand !== '') {
            this.compute()
        }
        this.operator = operand
        this.preOperand = this.postOperand
        this.postOperand = ''
    }

    displayUpdate() {
        this.postOperandText.textContent = this.postOperand
        this.preOperandText.textContent = this.preOperand

        if (this.operator !== undefined) {
            this.preOperandText.textContent = this.preOperand + " " + this.operator
        }

    }

    compute() {
        const prev = parseFloat(this.preOperand)
        // //Testing prev 
        // console.log(`prev ${prev}`)
        const current = parseFloat(this.postOperand)
        //testing current
        // console.log(`current ${current}`)

        let computation
        if (isNaN(prev) || isNaN(current)) return
        if (this.operation == null || this.operation == undefined) return
        // //test operator 
        // console.log(`operator ? ${this.operator}`)
        if (this.operator === "+") {
            computation = prev + current
        }
        if (this.operator == "-") {
            computation = prev - current
        }
        if (this.operator == "%") {
            computation = prev % current
        }
        if (this.operator == "x") {
            computation = prev * current
        }
        if (this.operator == ":") {
            computation = prev / current
        }
        this.postOperand = computation
        this.operator = undefined
        this.preOperand = ''
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


clear.addEventListener('click', () => {
    calculator.clear()
    calculator.displayUpdate()
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

equal.addEventListener('click', () => {
    calculator.compute()
    calculator.displayUpdate()
})

del.addEventListener('click', () => {
    calculator.delete()
    calculator.displayUpdate()
})
