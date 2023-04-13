{
    const rateFrom = (currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY) => {

        switch (currencyFrom) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "CHF":
                return rateCHF;

            case "GBP":
                return rateGBP;

            case "JPY":
                return rateJPY;
        }
    };

    const rateTo = (currencyTo, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY) => {

        switch (currencyTo) {
            case "PLN":
                return ratePLN;

            case "EUR":
                return rateEUR;

            case "USD":
                return rateUSD;

            case "CHF":
                return rateCHF;

            case "GBP":
                return rateGBP;

            case "JPY":
                return rateJPY;
        }
    };

    const calculateCurrency = (amount, currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY) => {
        const rateFromValue = rateFrom(currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY)
     
        return amount * rateFromValue;
    };

    const calculateResult = (currencyFrom, amount, currencyTo, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY) => {

        const calculatedCurrency = calculateCurrency(amount, currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);
        const rateToValue = rateTo(currencyTo, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);

        return calculatedCurrency / rateToValue;
    };

    const updateResultText = (amount, result, currencyFrom, currencyTo) => {

        const resultFromElement = document.querySelector(".js-form__result--from");
        const resultToElement = document.querySelector(".js-form__result--to");

        resultFromElement.innerText = `${amount} ${currencyFrom} = `;
        resultToElement.innerText = `${result.toFixed(2)} ${currencyTo}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const ratePLN = 1.00;
        const rateEUR = 4.68;
        const rateUSD = 4.40;
        const rateCHF = 4.78;
        const rateGBP = 5.29;
        const rateJPY = 0.033;

        const amountElement = document.querySelector(".js-form__amountField");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");

        const amount = amountElement.value;
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;

        rateFrom(currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);
        rateTo(currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);
        calculateCurrency(amount, currencyFrom, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);
        const result = calculateResult(currencyFrom, amount, currencyTo, ratePLN, rateEUR, rateUSD, rateCHF, rateGBP, rateJPY);

        updateResultText(amount, result, currencyFrom, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}