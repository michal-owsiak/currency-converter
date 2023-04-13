{
    const calculateCurrency = (currencyFrom, amount) => {

        const ratePLN = 1.00;
        const rateEUR = 4.68;
        const rateUSD = 4.40;
        const rateCHF = 4.78;
        const rateGBP = 5.29;
        const rateJPY = 0.033;

        switch (currencyFrom) {
            case "PLN":
                return amount * ratePLN;

            case "EUR":
                return amount * rateEUR;

            case "USD":
                return amount * rateUSD;

            case "CHF":
                return amount * rateCHF;

            case "GBP":
                return amount * rateGBP;

            case "JPY":
                return amount * rateJPY;
        }
    };

    const calculateResult = (currencyTo, currencyFrom, amount) => {

        const ratePLN = 1.00;
        const rateEUR = 4.68;
        const rateUSD = 4.40;
        const rateCHF = 4.78;
        const rateGBP = 5.29;
        const rateJPY = 0.033;

        const calculatedCurrency = calculateCurrency(currencyFrom, amount);

        switch (currencyTo) {
            case "PLN":
                return calculatedCurrency / ratePLN;

            case "EUR":
                return calculatedCurrency / rateEUR;

            case "USD":
                return calculatedCurrency / rateUSD;

            case "CHF":
                return calculatedCurrency / rateCHF;

            case "GBP":
                return calculatedCurrency / rateGBP;

            case "JPY":
                return calculatedCurrency / rateJPY;
        }
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

        calculateCurrency(currencyTo, currencyFrom, amount);
        const result = calculateResult(currencyTo, currencyFrom, amount);

        updateResultText(amount, result, currencyFrom, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}