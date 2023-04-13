const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-form__amountField");
const currencyFromElement = document.querySelector(".js-currencyFrom");
const currencyToElement = document.querySelector(".js-currencyTo");
const resultFromElement = document.querySelector(".js-form__result--from");
const resultToElement = document.querySelector(".js-form__result--to");
const currencyFixedElement = document.querySelector(".js-form__currencyRate--from");
const currencyExchangedElement = document.querySelector(".js-form__currencyRate--to");

const ratePLN = 1.00;
const rateEUR = 4.68;
const rateUSD = 4.40;
const rateCHF = 4.78;
const rateGBP = 5.29;
const rateJPY = 0.033;

const initialConversion = () => {

    const currencyFrom = currencyFromElement.value;
    const currencyTo = currencyToElement.value;

    switch (currencyFrom) {
        case "PLN":
            rate = ratePLN;
            break;

        case "EUR":
            rate = rateEUR;
            break;

        case "USD":
            rate = rateUSD;
            break;

        case "CHF":
            rate = rateCHF;
            break;

        case "GBP":
            rate = rateGBP;
            break;

        case "JPY":
            rate = rateJPY;
            break;

    }

    switch (currencyTo) {
        case "PLN":
            result = rate / ratePLN;
            break;

        case "EUR":
            result = rate / rateEUR;
            break;

        case "USD":
            result = rate / rateUSD;
            break;

        case "CHF":
            result = rate / rateCHF;
            break;

        case "GBP":
            result = rate / rateGBP;
            break;

        case "JPY":
            result = rate / rateJPY;
            break;

    }

    currencyFixedElement.innerText = `1 ${currencyFromElement.value}`;
    currencyExchangedElement.innerText = `${result.toFixed(2)} ${currencyToElement.value}`;

}

formElement.addEventListener("input", initialConversion);

const calculate = (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const currencyFrom = currencyFromElement.value;
    const currencyTo = currencyToElement.value;
    let result = resultToElement.value;

    switch (currencyFrom) {
        case "PLN":
            rate = amount * ratePLN;
            break;

        case "EUR":
            rate = amount * rateEUR;
            break;

        case "USD":
            rate = amount * rateUSD;
            break;

        case "CHF":
            rate = amount * rateCHF;
            break;

        case "GBP":
            rate = amount * rateGBP;
            break;

        case "JPY":
            rate = amount * rateJPY;
            break;

    }

    switch (currencyTo) {
        case "PLN":
            result = rate / ratePLN;
            break;

        case "EUR":
            result = rate / rateEUR;
            break;

        case "USD":
            result = rate / rateUSD;
            break;

        case "CHF":
            result = rate / rateCHF;
            break;

        case "GBP":
            result = rate / rateGBP;
            break;

        case "JPY":
            result = rate / rateJPY;
            break;

    }

    resultFromElement.innerText = `${amount} ${currencyFromElement.value} = `;
    resultToElement.innerText = `${result.toFixed(2)} ${currencyToElement.value}`;

}

formElement.addEventListener("submit", calculate);

const reset = () => {
    resultFromElement.innerText = "0.00";
    resultToElement.innerText = "";
    currencyFixedElement.innerText = "1 PLN";
    currencyExchangedElement.innerText = "0.21 EUR";
}

formElement.addEventListener("reset", reset);