var countDisplay = document.getElementById('countDisplay')
var resultDisplay = document.getElementById('resDisplay')
const buttonClick = document.querySelectorAll(`input[type="button"]`)

let save = 0;
let res = 0;

//Gotta make the calculate logic

    buttonClick.forEach(element => {
        element.addEventListener('click',function() {
            if(this.classList.value == "operator") {
                //add on text value
                countDisplay.value += this.value
            }else {
                    if(this.value === "AC") {
                        countDisplay.value = ''
                    }
                    else if(this.value === "C") {
                        countDisplay.value = countDisplay.value.toString().slice(0,-1)
                        // if(!last.length == 0) {
                        //     last = last.slice(0,-1)
                        // }
                    }else {
                        countDisplay.value += this.value
                    }
                }
            
            
        })
    })




// inp.forEach(element => {
//     //addEventListener ga bisa untuk input type=button ?
//     element.addEventListener('onclick', function () {
//         console.log(`${element.value} is clicked`)
//     })
//     //onclick function untuk input type button
//     element.onclick = function () {
        
//     }
// })

//var equalBtn = document.getElementsByClassName('equal')





