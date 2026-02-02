// First Screen Start 
let number = document.getElementById("number")
let pin = document.getElementById("pin")
let loginBtn = document.getElementById("loginBtn")
let error = document.getElementById("error")
let firstScreen = document.getElementById("firstScreen")
let secondScreen = document.getElementById("secondScreen")



loginBtn.addEventListener("click", function () {
    if (number.value=="1234" && pin.value=="1234") {
        firstScreen.style.display="none"
        secondScreen.style.display="block"
    }
 else if (number.value=="" || pin.value=="") {
    error.style.display="block"
 }
 else{
    error.style.display="block"
 }
})
// First Screen End 

// Second Screen Start 
let logOutBtn = document.getElementById("logOutBtn")
let addMoneytBtn = document.getElementById("addMoneytBtn")
let cashOutBtn = document.getElementById("cashOutBtn")
let thirdScreen = document.getElementById("thirdScreen")


logOutBtn.addEventListener("click", function name(params) {
    secondScreen.style.display ="none"
    firstScreen.style.display = "block"
})

addMoneytBtn.addEventListener("click", function name(params) {
    secondScreen.style.display ="none"
    thirdScreen.style.display = "block"
})

cashOutBtn.addEventListener("click", function name(params) {
    secondScreen.style.display ="none"
    fourthScreen.style.display = "block"
})

// Second Screen End 

// Third Screen Start 
let addBtn = document.getElementById("addBtn")
let addAmmount = document.getElementById("addAmmount")
let addPin = document.getElementById("addPin")
let addError = document.getElementById("addError")
let addSuccess = document.getElementById("addSuccess")
let successBack = document.getElementById("successBack")
let balance = document.getElementById("balance")



successBack.addEventListener("click", function name(params) {
    thirdScreen.style.display = "none"
    secondScreen.style.display ="block"
})



let currentBalance = 100


addBtn.addEventListener("click", function name(params) {
    if (addAmmount.value >=0 && addPin.value=="1234") {
        currentBalance = currentBalance + parseInt(addAmmount.value)
     balance.innerHTML ="Current Balance:" +currentBalance +"BDT"
        addSuccess.style.display="block"
        successBack.style.display="block"
        addError.style.display="none"

    }
    else if (addAmmount.value === "" || addPin.value ==="") {
        addError.style.display="block"
        successBack.style.display="none"
    }
else{
    addError.style.display="block"
    successBack.style.display="none"
}
})



// Third Screen End 

// Fourth Screen Start 
let outBtn = document.getElementById("outBtn")
let outAmmount = document.getElementById("outAmmount")
let outPin = document.getElementById("outPin")
let outError = document.getElementById("outError")
let outSuccess = document.getElementById("outSuccess")
let outBack = document.getElementById("outBack")

outBack.addEventListener("click", function name(params) {
    fourthScreen.style.display = "none"
    secondScreen.style.display ="block"
})





outBtn.addEventListener("click", function name(params) {
    if (outAmmount.value >=0 && outPin.value=="1234") {
        currentBalance = currentBalance - parseInt(outAmmount.value)
     balance.innerHTML ="Current Balance:" +currentBalance +"BDT"
        outSuccess.style.display="block"
        outBack.style.display="block"
        outError.style.display="none"

    }
    else if (outAmmount.value === "" || outPin.value ==="") {
        outError.style.display="block"
        outBack.style.display="none"
    }
else{
    outError.style.display="block"
    outBack.style.display="none"
}
})
// Fourth Screen End