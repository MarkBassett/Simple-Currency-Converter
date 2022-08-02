const input = require('sync-input');

function getCurrency(prompt, isFrom) {
    while (true) {
        if (isFrom) {console.log('What do you want to convert?')}
        let currency = input(prompt).toUpperCase();
        if (!rates.hasOwnProperty(currency)) {
            console.log('Unknown currency');
        } else {
            return currency;
        }
    }
}

function getAmount() {
    while (true) {
        let amount = Number(input('Amount: '));
        if (amount < 1) {
            console.log('The amount cannot be less than 1');
        } else if (isNaN(amount)) {
            console.log('The amount has to be a number')
        } else {
            return amount;
        }
    }
}

console.log('Welcome to Currency Converter!');

const rates = {'USD': 1, 'JPY': 113.5, 'EUR': 0.89, 'RUB': 74.36, 'GBP': 0.75};

for (const [key, value] of Object.entries(rates)) {
    console.log(`1 USD equals ${value} ${key}`)
}

while (true) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    let convertCurrency = input();
    if (convertCurrency === '2') {
        console.log('Have a nice day!')
        break;
    } else if (convertCurrency === '1') {
        let from = getCurrency('From: ', true);
        let to = getCurrency('To: ', false);
        let amount = getAmount();
        let result = amount / rates[from] * rates[to];
        console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`);
    } else {
        console.log('Unknown input');
    }
}
