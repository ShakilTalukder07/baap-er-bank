// step-1  addclick evevnt handlar with the submit button.
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 get the email address inside the email input feild
    // always remember to use .value to get text from an input feild
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    console.log(email);

    // step-3 get password
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    console.log(email,password);

    // Danger : Do not the email and password on the clint side
    // step - 4 varify email and password

    if(email === 'shontan@baap.com'  && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vhule gesos!!! Ber ho ghor theke.');
    }
})