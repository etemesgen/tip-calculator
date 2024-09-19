let fivePercent = document.getElementById("five-percent");
let tenPercent = document.getElementById("ten-percent");
let fifteenPercent = document.getElementById("fifteen-percent");
let twentyFivePercent = document.getElementById("twenty-five-percent");
let fiftyPercent = document.getElementById("fifty-percent");
let customValue = document.getElementById("customValue");
let tipAmount =  document.getElementById("tip-amount-num");
let totalAmount =  document.getElementById("total-amount");
let error = document.getElementById("error");

function getBill() {
    let tip = 0;
    billAmount = document.querySelector('#bill-amount').value;
    console.log(billAmount);


    if(billAmount){
        calculateTipFivePercent();
        calculateTipTenPercent();
        calculateTipFifteenPercent();
        calculateTipTwentyFivePercent();
        calculateTipFiftyPercent();
        calculateTipCustomPercent();
    } 
    

    function calculateTipFivePercent(){
        fivePercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * 5/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / +tip).toFixed(1);
        })
    }

    function calculateTipTenPercent(){
        tenPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * 10/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / tip).toFixed(1);
        })  
    }

    function calculateTipFifteenPercent(){
        fifteenPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * 15/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / tip).toFixed(1);
        })
    }

    function calculateTipTwentyFivePercent(){
        twentyFivePercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * 25/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / tip).toFixed(1);
        })
    }

    function calculateTipFiftyPercent(){
        fiftyPercent.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * 50/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / tip).toFixed(1);
        })
    }

    function calculateTipCustomPercent(){
        customValue.addEventListener("click", () => {
            tip = tipAmount.innerHTML = Number((billAmount * getCustomPercent()/100) / getPeople()).toFixed(1);
            totalAmount.innerHTML = (+billAmount / tip).toFixed(1);
        })
    }
}

function getPeople(){
    numberPeople = document.querySelector('#number-people-amount').value;
    console.log(numberPeople);

    if(numberPeople == 0){
        error.innerHTML = "Can't be zero";
        document.getElementById("number-people-amount").style.border = ".15rem solid rgb(221, 52, 52)";
    }

    return numberPeople;
}

function getCustomPercent(){
    customPercent = document.querySelector('#custom').value;
    console.log(customPercent);

    customHide = document.getElementById("customValue").innerHTML = customPercent + "%";
    
    if(customHide){
        customValue.style.color = "transparent";
    }

    return customPercent;
}

/* Calculation logic
tip amount = bill * percent / nbpeople  
total = bill / tip amount
*/