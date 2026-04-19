// Card-1 Donation
document.getElementById('donate-btn-1').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalanceValue1 = getInnerTextById('available-balance');
    const cardBalanceValue1 = getInnerTextById('card-balance-1');
    const inputBalanceValue1 = getInputFieldValueById('amount-input-1');

    const availableBalanceNum1 = Number(availableBalanceValue1);
    const cardBalanceNum1 = Number(cardBalanceValue1);
    const inputBalanceNum1 = Number(inputBalanceValue1);
    if(isNaN(inputBalanceNum1)){
        alert("Please Enter A Valid Number!");
        return;
    }
    if(inputBalanceNum1 <= 0){
        alert("Donation Amount Cannot Be Negative!");
        return;
    }
    if(inputBalanceNum1 > availableBalanceNum1){
        alert("Not Enough Balance!");
        return;
    }
    const newCardBalance1 = cardBalanceNum1 + inputBalanceNum1;
    const newAvailableBalance1 = availableBalanceNum1 - inputBalanceNum1;
    document.getElementById('card-balance-1').innerText = newCardBalance1 + " ";
    document.getElementById('available-balance').innerText = newAvailableBalance1;
    openPopup();
    const timeAndDate = new Date()
    const tandD = timeAndDate.toLocaleString();
    const donationHistory1 = document.createElement("div");
    donationHistory1.classList.add('border-gray-300', 'border-[2px]', 'rounded-lg', 'h-[140px]', 'p-10')
    donationHistory1.innerHTML =`
    <p class="text-lg font-medium">${inputBalanceNum1} Taka is Donated for Donate For Flood At Noakhali, Bangladesh.</p>
    <p class="text-lg font-medium">Date: ${tandD} </p>
    `
    document.getElementById('history-section').appendChild(donationHistory1)
    
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
    if(isNaN(inputBalanceNum2)){
        alert("Please Enter A Valid Number!");
        return;
    }
    if(inputBalanceNum2 <= 0){
        alert("Donation Amount Cannot Be Negative!");
        return;
    }
    if(inputBalanceNum2 > availableBalanceNum2){
        alert("Not Enough Balance!");
        return;
    }
    const newCardBalance2 = cardBalanceNum2 + inputBalanceNum2;
    const newAvailableBalance2 = availableBalanceNum2 - inputBalanceNum2;
    document.getElementById('card-balance-2').innerText = newCardBalance2 + " ";
    document.getElementById('available-balance').innerText = newAvailableBalance2;
    openPopup();
    const timeAndDate = new Date()
    const tandD = timeAndDate.toLocaleString();
    const donationHistory2 = document.createElement("div");
    donationHistory2.classList.add('border-gray-300', 'border-[2px]', 'rounded-lg', 'h-[140px]', 'p-10')
    donationHistory2.innerHTML =`
    <p class="text-lg font-medium">${inputBalanceNum2} Taka is Donated for Donate for Flood Relief in Feni, Bangladesh.</p>
    <p class="text-lg font-medium">Date: ${tandD} </p>
    `
    document.getElementById('history-section').appendChild(donationHistory2)
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
   if(isNaN(inputBalanceNum3)){
        alert("Please Enter A Valid Number!");
        return;
    }
    if(inputBalanceNum3 <= 0){
        alert("Donation Amount Cannot Be Negative!");
        return;
    }
    if(inputBalanceNum3 > availableBalanceNum3){
        alert("Not Enough Balance!");
        return;
    }
    const newCardBalance3 = cardBalanceNum3 + inputBalanceNum3;
    const newAvailableBalance3 = availableBalanceNum3 - inputBalanceNum3;
    document.getElementById('card-balance-3').innerText = newCardBalance3 + " ";
    document.getElementById('available-balance').innerText = newAvailableBalance3;
    openPopup();
    const timeAndDate = new Date()
    const tandD = timeAndDate.toLocaleString();
    const donationHistory3 = document.createElement("div");
    donationHistory3.classList.add('border-gray-300', 'border-[2px]', 'rounded-lg', 'h-[140px]', 'p-10')
    donationHistory3.innerHTML =`
    <p class="text-lg font-medium">${inputBalanceNum3} Taka is Donated for Aid for Injured in the Quota Movement.</p>
    <p class="text-lg font-medium">Date: ${tandD} </p>
    `
    document.getElementById('history-section').appendChild(donationHistory3)
})