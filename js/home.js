const validPin = 1234;
const transactionData = [];
// gobal function code section

function accountNumber(id) {
    const number = document.getElementById(id)
    const numberValue = number.value
    return numberValue;
}
function getInputValueNumber(id) {
    const inputField = parseInt(document.getElementById(id).value)
    return inputField;

};

function getInnerText(id) {
    const element = parseInt(document.getElementById(id).innerText)
    return element;
}

function setInnerText(value) {
    const setInnerTextElement = document.getElementById('available-balance').innerText = value;
    return setInnerTextElement;
}

// add money section
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const bank = document.getElementById("bank").value;
    const bankAccountNumber = accountNumber("bank-account-number")
    const amount = getInputValueNumber('add-amount');
    const pinNumber = getInputValueNumber('pin-number');
    const avalableBalance = getInnerText('available-balance');

    if (bankAccountNumber.length < 11) {
        alert('Ivalid account number')
        return;
    }
    if (pinNumber !== validPin) {
        alert('Invalid Pin Number')
        return;
    }
    alert('Add Amount' + ' ' + amount);

    const totalNewAvalableBalance = avalableBalance + amount;

    setInnerText(totalNewAvalableBalance);
    const data = {
        name: "Add Mony",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
// cash out section

document.getElementById('cash-out-btn1').addEventListener('click', function (event) {
    event.preventDefault()
    const agentNumber = accountNumber("agent-number");
    const amount = getInputValueNumber('cash-out-amount');
    const pinNumber = getInputValueNumber('cash-out-pin');
    const avalableBalance = getInnerText('available-balance');

    alert('Cash Out Amount:' + ' ' + amount);

    const totalNewAvalableBalance = avalableBalance - amount;

    setInnerText(totalNewAvalableBalance);
    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
// transfer money section

document.getElementById('transfar-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const transferAccountNumber = accountNumber("trafer-money-account");
    const amount = getInputValueNumber('transfer-amount');
    const pinNumber = getInputValueNumber('transfer-pin');
    const avalableBalance = getInnerText('available-balance');

    alert('Transfer successfully:' + ' ' + amount);

    const totalNewAvalableBalance = avalableBalance - amount;

    setInnerText(totalNewAvalableBalance);
    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})

// Get bonus section


document.getElementById('get-bonus-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const getBonusCardNumber = accountNumber("get-bonus-card-number");
    const cardCode = "shamim01";
    const amount = 2000;
    const avalableBalance = getInnerText('available-balance');
    if (getBonusCardNumber !== cardCode) {
        alert('Bonus Card is not valid')
        return;
    }
    if (getBonusCardNumber === cardCode) {
        alert('Get bonus: 2000')
    }
    const totalNewAvalableBalance = avalableBalance + amount;

    setInnerText(totalNewAvalableBalance);


})

// pay bill section

document.getElementById('pay-now-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const bank = document.getElementById("bank").value;
    const payBillAccountNumber = accountNumber("pay-bill-account");
    const amount = getInputValueNumber('pay-amount');
    const pinNumber = getInputValueNumber('pay-pin');
    const avalableBalance = getInnerText('available-balance');

    if (payBillAccountNumber.length < 11) {
        alert('Ivalid account number')
        return;
    }
    if (pinNumber !== validPin) {
        alert('Invalid Pin Number')
        return;
    }
    alert('Pay bill Successfully:' + ' ' + amount);
    const totalNewAvalableBalance = avalableBalance - amount;

    setInnerText(totalNewAvalableBalance);
    const data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

// Transactions section

document.getElementById('transaction-btn0').addEventListener('click', function () {
    const transactionContainner = document.getElementById('transaction-container')
    transactionContainner.innerText = "";
    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="max-w-lg mx-auto bg-white flex justify-between items-center rounded-xl p-1">
                    <div class="flex items-center">
                        <div>
                            <img src="./assets/wallet1.png" alt="" class="border-none p-2 rounded-full bg-gray-100">
                        </div>
                        <div class="ml-2">
                            <h2 class="font-medium text-lg">${data.name}</h2>
                            <p class="text-gray-400">${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            `
        transactionContainner.appendChild(div)
    }


})







// toggle section

function handeToggle(id) {
    const froms = document.getElementsByClassName('froms');
    for (const from of froms) {
        from.style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
}

function handeToggleButton(id) {
    const fromBtn = document.getElementsByClassName('from-btn');
    for (const btn of fromBtn) {
        btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]", "text-[#06099E]")
        btn.classList.add("border-gray-300", "text-gray-500")
    }
    document.getElementById(id).classList.remove("border-gray-300", "text-gray-500")
    document.getElementById(id).classList.add("border-[#0874F2]", "bg-[#0874f20d]", "text-[#06099E]")
}


document.getElementById('add-btn0').addEventListener('click', function () {

    const addMoney = handeToggle('add-money-parent');
    handeToggleButton('add-btn0');


});

document.getElementById('cash-out-btn0').addEventListener('click', function () {

    const cashOut = handeToggle('cash-out-parent')
    handeToggleButton('cash-out-btn0');

});
document.getElementById('transfer-money-btn0').addEventListener('click', function () {

    const transferMoney = handeToggle('transer-money-parent');
    handeToggleButton('transfer-money-btn0');

});
document.getElementById('get-bonus-btn0').addEventListener('click', function () {

    const getBonus = handeToggle('get-bonus-parent');
    handeToggleButton('get-bonus-btn0');


});
document.getElementById('pay-bill-btn0').addEventListener('click', function () {

    const payBill = handeToggle('pay-bill-parent');
    handeToggleButton('pay-bill-btn0');

});
document.getElementById('transaction-btn0').addEventListener('click', function () {

    const Transactions = handeToggle('transaction-parent');
    handeToggleButton('transaction-btn0');


});

// log out button section

document.getElementById('log-out-btn').addEventListener('click', function () {
    window.location.href = './index.html';
})