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

        PLNRateFrom(currencyFrom);
        PLNRateTo(currencyTo);
        calculatePLN(amount, currencyFrom);
        const result = calculateResult(currencyFrom, currencyTo, amount);
        updateResultText(amount, result, currencyFrom, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}