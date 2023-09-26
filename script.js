var countDisplay = document.getElementById('countDisplay')
var resultDisplay = document.getElementById('resDisplay')
const buttonClick = document.querySelectorAll(`input[type="button"]`)

let Pre = ""
let Post = ""
let arithmetic = []
let Res = 0;

//Gotta make the calculate logic

buttonClick.forEach(element => {
    element.addEventListener('click', function () {
        if (this.classList.value == "equal operator") {
            //Logic
        }
        if (this.classList.value == "operator") {
            if (Pre !== null || Pre !== "") {
                //Add to display
                countDisplay.value += this.value
                //Add to Pre
                Pre += this.value

                //string to array for Pre
                let PreArr = Pre.split("")
                console.log(PreArr)

                //Check operand beforehand if there was an existent operand
                const checkOperand = PreArr.some(operand => operand == (this.classList.value == "operator"))
                checkOperand ? console.log("True") : console.log("false")
            } else {
                return
            }

        } else {
            if (this.value === "AC") {
                countDisplay.value = ''
                Pre = ""
                Post = ""
                // console.log(Pre)
            }
            else if (this.value === "C") {
                //add to display
                countDisplay.value = countDisplay.value.toString().slice(0, -1)

                //Arithmetic
                Pre = Pre.slice(0, -1)
                //console.log(Pre)
            } else {
                if (this.classList.value !== "operator" && this.classList.value !== "equal operator") {
                    //Display
                    countDisplay.value += this.value

                    //Append to Pre
                    Pre += this.value
                }
                // console.log(Pre)             
            }
        }


    })
})


//Case 1 : functional arithmetic function 