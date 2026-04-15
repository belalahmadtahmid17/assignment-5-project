// Card-1 Donation
document.getElementById('donate-btn-1').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalanceValue1 = getInnerTextById('available-balance');
    const cardBalanceValue1 = getInnerTextById('card-balance-1');
    const inputBalanceValue1 = getInputFieldValueById('amount-input-1');

    const availableBalanceNum1 = Number(availableBalanceValue1);
    const cardBalanceNum1 = Number(cardBalanceValue1);
    const inputBalanceNum1 = Number(inputBalanceValue1);
    if(isNaN(inputBalanceNum1) || inputBalanceNum1 <= 0 || inputBalanceNum1 > availableBalanceNum1 ){
        alert("wrong input value");
        return;
    }
        const newCardBalance1 = cardBalanceNum1 + inputBalanceNum1;
        const newAvailableBalance1 = availableBalanceNum1 - inputBalanceNum1;
        document.getElementById('card-balance-1').innerText = newCardBalance1;
        document.getElementById('available-balance').innerText = newAvailableBalance1;
        openPopup();
})
// Card-2 Donation
document.getElementById('donate-btn-2').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalanceValue2 = getInnerTextById('available-balance');
    const cardBalanceValue2 = getInnerTextById('card-balance-2');
    const inputBalanceValue2 = getInputFieldValueById('amount-input-2');

    const availableBalanceNum2 = Number(availableBalanceValue2)
    const cardBalanceNum2 = Number(cardBalanceValue2);
    const inputBalanceNum2 = Number(inputBalanceValue2);
    if(isNaN(inputBalanceNum2) || inputBalanceNum2 <= 0 || inputBalanceNum2 > availableBalanceNum2){
        alert('Wrong Input Value');
        return;
    }
    const newCardBalance2 = cardBalanceNum2 + inputBalanceNum2;
    const newAvailableBalance2 = availableBalanceNum2 - inputBalanceNum2;
    document.getElementById('card-balance-2').innerText = newCardBalance2;
    document.getElementById('available-balance').innerText = newAvailableBalance2;
    openPopup();
})
// Card-3 Donation
document.getElementById('donate-btn-3').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalanceValue3 = getInnerTextById('available-balance');
    const cardBalanceValue3 = getInnerTextById('card-balance-3');
    const inputBalanceValue3 = getInputFieldValueById('amount-input-3');

    const availableBalanceNum3 = Number(availableBalanceValue3)
    const cardBalanceNum3 = Number(cardBalanceValue3);
    const inputBalanceNum3 = Number(inputBalanceValue3);
    if(isNaN(inputBalanceNum3) || inputBalanceNum3 <= 0 || inputBalanceNum3 > availableBalanceNum3){
        alert('Wrong Input Value');
        return;
    }
    const newCardBalance3 = cardBalanceNum3 + inputBalanceNum3;
    const newAvailableBalance3 = availableBalanceNum3 - inputBalanceNum3;
    document.getElementById('card-balance-3').innerText = newCardBalance3;
    document.getElementById('available-balance').innerText = newAvailableBalance3;
    openPopup();
})