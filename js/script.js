{
    const PLNRateFrom = (currencyFrom) => {

        switch (currencyFrom) {
            case "PLN":
                return 1.00;

            case "EUR":
                return 4.64;

            case "USD":
                return 4.20;

            case "CHF":
                return 4.72;

            case "GBP":
                return 5.26;

            case "JPY":
                return 0.032;
        }
    };

    const PLNRateTo = (currencyTo) => {

        switch (currencyTo) {
            case "PLN":
                return 1.00;

            case "EUR":
                return 4.64;

            case "USD":
                return 4.20;

            case "CHF":
                return 4.72;

            case "GBP":
                return 5.26;

            case "JPY":
                return 0.032;
        }
    };

    const calculateCurrencyRate = (currencyFrom, currencyTo) => {

        const rateFromValue = PLNRateFrom(currencyFrom);
        const rateToValue = PLNRateTo(currencyTo);

        return rateFromValue / rateToValue;
    };

    const updateCurrencyRateText = (currencyRate, currencyFrom, currencyTo) => {

        const currencyFixedElement = document.querySelector(".js-form__currencyRate--from");
        const currencyExchangedElement = document.querySelector(".js-form__currencyRate--to");

        currencyFixedElement.innerText = `1 ${currencyFrom}`;
        currencyExchangedElement.innerText = `${currencyRate.toFixed(2)} ${currencyTo}`;
    };

    const onCurrenciesInput = () => {

        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");
    
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;
        
        const currencyRate = calculateCurrencyRate(currencyFrom, currencyTo);
        updateCurrencyRateText(currencyRate, currencyFrom, currencyTo);
    };

    const calculatePLN = (amount, currencyFrom) => {

        const PLNRateFromValue = PLNRateFrom(currencyFrom)

        return amount * PLNRateFromValue;
    };

    const calculateResult = (currencyFrom, currencyTo, amount) => {

        const calculatedPLN = calculatePLN(amount, currencyFrom);
        const PLNRateToValue = PLNRateTo(currencyTo);

        return calculatedPLN / PLNRateToValue;
    };

    const updateResultText = (amount, result, currencyFrom, currencyTo) => {

        const resultFromElement = document.querySelector(".js-form__result--from");
        const resultToElement = document.querySelector(".js-form__result--to");

        resultFromElement.innerText = `${amount} ${currencyFrom} = `;
        resultToElement.innerText = `${result.toFixed(2)} ${currencyTo}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__amountField");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");

        const amount = amountElement.value;
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;
        
        const result = calculateResult(currencyFrom, currencyTo, amount);
        
        updateResultText(amount, result, currencyFrom, currencyTo);
    };

    const reset = () => {

        const currencyFixedElement = document.querySelector(".js-form__currencyRate--from");
        const currencyExchangedElement = document.querySelector(".js-form__currencyRate--to");

        const resultFromElement = document.querySelector(".js-form__result--from");
        const resultToElement = document.querySelector(".js-form__result--to");

        resultFromElement.innerText = "0.00";
        resultToElement.innerText = "";
        currencyFixedElement.innerText = "1 PLN";
        currencyExchangedElement.innerText = "0.22 EUR";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        
        formElement.addEventListener("input", onCurrenciesInput);
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", reset);
    };

    init();
}