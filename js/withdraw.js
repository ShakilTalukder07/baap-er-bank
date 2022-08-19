/*

1. add event handlar with the event button

2. get the wothdraw amount from the withdraw input feild
2.5. also make sure to convert the input into a number using parseFloat

3. get previous withdraw total

4. calculatte total withdraw ammount 
4.5. set total withdraw ammount

5. get the previous balance total

6. calculate the new total
6.5. set the new total

7. clear the input feild

*/

// step -1 :
const btnWithdraw = document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdarwAmountString = withdrawField.value;
    const newWithdarwAmmount = parseFloat(newWithdarwAmountString);

    // step - 3

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step - 4

    const currentWithdrawTotal = previousWithdrawTotal + newWithdarwAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step - 5

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step -6

    const newBalanceTotal = previousBalanceTotal - newWithdarwAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step - 7

    withdrawField.value = '';

})