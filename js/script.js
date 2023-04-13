{
    const rateFrom = (currencyFrom) => {

        switch (currencyFrom) {
            case "PLN":
                return 1.00;

            case "EUR":
                return 4.68;

            case "USD":
                return 4.40;

            case "CHF":
                return 4.78;

            case "GBP":
                return 5.29;

            case "JPY":
                return 0.033;
        }
    };

    const rateTo = (currencyTo) => {

        switch (currencyTo) {
            case "PLN":
                return 1.00;

            case "EUR":
                return 4.68;

            case "USD":
                return 4.40;

            case "CHF":
                return 4.78;

            case "GBP":
                return 5.29;

            case "JPY":
                return 0.033;
        }
    };

    const calculateCurrency = (amount, currencyFrom) => {
        
        const rateFromValue = rateFrom(currencyFrom)

        return amount * rateFromValue;
    };

    const calculateResult = (currencyFrom, currencyTo, amount) => {

        const calculatedCurrency = calculateCurrency(amount, currencyFrom);
        const rateToValue = rateTo(currencyTo);

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

        const amountElement = document.querySelector(".js-form__amountField");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");

        const amount = amountElement.value;
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;

        rateFrom(currencyFrom);
        rateTo(currencyTo);
        calculateCurrency(amount, currencyFrom);
        const result = calculateResult(currencyFrom, currencyTo, amount);

        updateResultText(amount, result, currencyFrom, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}