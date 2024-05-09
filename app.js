const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_-+=?<>{}[]"

// Selectors

const passBox = document.getElementById('pass-box')
const totalChar = document.getElementById('total-char')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('Lower-case')
const numberInput = document.getElementById('numbers')
const symbolInpout = document.getElementById('symbols')

const getRandomData = (dataSet) =>{
  return dataSet[Math.floor(Math.random() * dataSet.length)]

}

const generatePassword = (password = "") => {
  if(upperInput.checked){
    password += getRandomData(upperSet)
    
  }
  if(lowerInput.checked){
    password += getRandomData(lowerSet)
    
  }
  if(numberInput.checked){
    password += getRandomData(numberSet)
    
  }
  if(symbolInpout.checked){
    password += getRandomData(symbolSet)
    
  }
  if(password.length < totalChar.value) {
    return generatePassword(password) // recirisve
  }

  passBox.innerText = trucateString(password,totalChar.value); 
}
document.getElementById('btn').addEventListener('click', function() {
  generatePassword();
})




// Truncate Password
function trucateString(str, num){
  if(str.length > num){
    let substr = str.substr(0, num);
    return substr;
  }
  else{
    return str;
  }
}