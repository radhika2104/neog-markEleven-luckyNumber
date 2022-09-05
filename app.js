var birthdayInput = document.querySelector('#input-birthday')
var NumberInput = document.querySelector('#input-lucky-no')
var checkButton = document.querySelector('#btn-check')
var outputDiv = document.querySelector('#div-output')
var emotionDiv = document.querySelector('#div-gif')
var emotion = document.createElement("img");
emotion.setAttribute("height", "200");

var bdaySum = 0;

// function hideElement(element){
//     element.style.display = 'none';
// }

// function showElement(element){
//     element.style.display = 'block';
// }

function calculateSum(birthday){
    
    var birthdayNum = Number(birthday);
    for (var i = 0; i < birthday.length; i++){
        bdaySum += birthdayNum % 10
        birthdayNum = Math.trunc(birthdayNum / 10)
        
    }
    
};

function checkLucky(luckyNumber){
    // If a user changes values on existing rendered page, initialize values to null
    // Since images are being appended, it will show previous image as well
    emotionDiv.innerHTML = ""
    outputDiv.innerText = ""
    
    var remainder = bdaySum % luckyNumber;
    
    if (remainder === 0){
        var message = 'Wow! Its a lucky birth date!'
        emotion.setAttribute('src','lucky.gif')
    } else{
        var message = 'Uh oh! It\'s not a lucky date.'
        emotion.setAttribute('src','notlucky.gif')
    }
    outputDiv.innerText = message;
    emotionDiv.appendChild(emotion);
  

};

function checkValidNumber(luckyNumber,birthday){
    if (birthday.length === 0) {
        var message = 'Hey! You can\'t be lucky if you are not born yet. Please enter a date!'
    } else if (luckyNumber < 0){
        var message = 'Hey! Lucky is always positive. Consider a different number'
    } else if (luckyNumber === 0){
        var message = 'Hey! Your fate is not defined if lucky number is 0 or strings!'
    } else if (isNaN(luckyNumber) === true){
        var message = 'Hey! Strings are not lucky enough. Consider a number only!'
    } else{
        return true;
    }
    outputDiv.innerText = message;
    emotion.setAttribute('src','error.gif');
    emotionDiv.appendChild(emotion);
    return false;
};

checkButton.addEventListener("click",function(){
    var birthday = birthdayInput.value;
    var luckyNumber = Number(NumberInput.value)
    var valid = checkValidNumber(luckyNumber,birthday)
    if (valid === true) {
        // calculate sum of digits of bday
        birthday = birthday.replaceAll("-","");
        calculateSum(birthday);
        
        // modulus sum of digits with lucky number , the result should be 0
        checkLucky(luckyNumber);
    }
    
});