// step - 1 add event listener to the diposit button
document.getElementById('btn-diposit').addEventListener('click',function(){
    // step - 2  get the diposit amount from the diposit input feild
    // for input feild used .value 
    const depositFeild = document.getElementById('diposit-field');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step - 3 get the current dipost total
    // for non input (element other than input, text area) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step - 4: add number to set the total deposit 

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step - 5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 

    const currentBalanceToatal = previousBalanceTotal + newDepositAmount;
    // set The Balance Total
    balanceTotalElement.innerText = currentBalanceToatal; 

    // step - 7  clear the deposit field
    depositFeild.value = '';
})