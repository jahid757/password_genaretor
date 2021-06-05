const startBtn = document.getElementById("startBtn");
const password = document.getElementById("password");

startBtn.addEventListener("click", () => {
  const passwordLength = document.getElementById("select");
  const passwordLengthValue = Number(passwordLength.value);
  const singlePassword = document.createElement('span');
  password.innerHTML = '';
if(passwordLengthValue > 5){
    alert('Are You Sure Start Generate Password')
}
  let passwordStop;

  if (passwordLength.value == 2){
    passwordStop = 99
  }else if(passwordLength.value == 3){
      passwordStop = 999;
  }else if(passwordLength.value == 4){
      passwordStop = 9999;
  }else if(passwordLength.value == 5){
      passwordStop = 99999;
  }else if(passwordLength.value == 6){
      passwordStop = 999999;
  }else if(passwordLength.value == 7){
      passwordStop = 9999999;
  }else if(passwordLength.value == 8){
      passwordStop = 99999999
  }

  let currentPassword;
  let generatePassword;
  let passwordBefore;

    for (let i = 0; i <= passwordStop; i++) {
        const passCode = i;
    
        currentPassword = String(i)
        // console.log(currentPassword.length, 'passwordLength')
    
        if (passwordLengthValue === 2){
            if(currentPassword.length === 1){
                passwordBefore = '0'
            }else{
                passwordBefore = ''
            }
        }
        if (passwordLengthValue === 3){
            if(currentPassword.length === 1){
                passwordBefore = '00'
            }else if (currentPassword.length === 2){
                passwordBefore = '0'
            }else{
                passwordBefore = ''
            }
        }
        if (passwordLengthValue === 4){
            if(currentPassword.length === 1){
                passwordBefore = '000'
            }else if (currentPassword.length === 2){
                passwordBefore = '00'
            }else if (currentPassword.length === 3){
                passwordBefore = '0'
            }else{
                passwordBefore =''
            }
        }
        if (passwordLengthValue === 5){
            if(currentPassword.length === 1){
                passwordBefore = '0000'
            }else if (currentPassword.length === 2){
                passwordBefore = '000'
            }else if (currentPassword.length === 3){
                passwordBefore = '00'
            }else if (currentPassword.length === 4){
                passwordBefore = '0'
            }else{
                passwordBefore =''
            }
        }
        if (passwordLengthValue === 6){
            if(currentPassword.length === 1){
                passwordBefore = '00000'
            }else if (currentPassword.length === 2){
                passwordBefore = '0000'
            }else if (currentPassword.length === 3){
                passwordBefore = '000'
            }else if (currentPassword.length === 4){
                passwordBefore = '00'
            }else if (currentPassword.length === 5){
                passwordBefore = '0'
            }else{
                passwordBefore =''
            }
        }
        if (passwordLengthValue === 7){
            if(currentPassword.length === 1){
                passwordBefore = '000000'
            }else if (currentPassword.length === 2){
                passwordBefore = '00000'
            }else if (currentPassword.length === 3){
                passwordBefore = '0000'
            }else if (currentPassword.length === 4){
                passwordBefore = '000'
            }else if (currentPassword.length === 5){
                passwordBefore = '00'
            }else if (currentPassword.length === 6){
                passwordBefore = '0'
            }else{
                passwordBefore =''
            }
        }
        if (passwordLengthValue === 8){
            if(currentPassword.length === 1){
                passwordBefore = '0000000'
            }else if (currentPassword.length === 2){
                passwordBefore = '000000'
            }else if (currentPassword.length === 3){
                passwordBefore = '00000'
            }else if (currentPassword.length === 4){
                passwordBefore = '0000'
            }else if (currentPassword.length === 5){
                passwordBefore = '000'
            }else if (currentPassword.length === 6){
                passwordBefore = '00'
            }else if (currentPassword.length === 7){
                passwordBefore = '0'
            }else{
                passwordBefore =''
            }
        }
    
        generatePassword = passwordBefore + passCode;
        // console.log(generatePassword)
    
        
        
        const singlePassword = document.createElement('span');
        singlePassword.innerText = generatePassword + ', ';
        password.appendChild(singlePassword)
        
    
      }

});
