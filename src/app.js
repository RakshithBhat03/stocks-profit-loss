function calculateProfitAndLoss() {
  var currentPriceValue = Number(currentPrice.value);
  var initialPriceValue = Number(initialPrice.value);
  var quantityValue = Number(quantity.value);
  if (
    currentPriceValue !== 0 &&
    initialPriceValue !== 0 &&
    quantityValue !== 0
  ) {
    if (currentPriceValue > initialPriceValue) {
      var profit = (currentPriceValue - initialPriceValue) * quantityValue;

      var profitPercentage = (profit / initialPriceValue) * 100;
      setMessage(
        `Yay you made a profit of ${profit} and percentage is ${profitPercentage.toFixed(
          2
        )}%.`
      );
    } else if (initialPriceValue > currentPriceValue) {
      var loss = (initialPriceValue - currentPriceValue) * quantityValue;
      var lossPercentage = (loss / currentPriceValue) * 100;
      setMessage(
        `You lost ${loss} and percentage is ${lossPercentage.toFixed(2)}%.`
      );
    } else {
      setMessage("No pain No gain!");
    }
  } else {
    setMessage("Please enter all the fields!");
  }
}
function setMessage(message) {
  output.innerText = message;
}
var currentPrice = document.querySelector("#current-price");
var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", calculateProfitAndLoss);
