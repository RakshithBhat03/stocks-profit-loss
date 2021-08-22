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

      var profitPercentage =
        ((currentPriceValue - initialPriceValue) / initialPriceValue) * 100;
      var toFixed = profitPercentage.toFixed(2);
      var message =
        "Yay! you made a profit of <span style= color:var(--profit-color)>" +
        profit +
        "</span > and percentage is<span style= color:var(--profit-color)> " +
        toFixed +
        "%</span>.";
      setMessage(message);
    } else if (initialPriceValue > currentPriceValue) {
      var loss = (initialPriceValue - currentPriceValue) * quantityValue;
      var lossPercentage =
        ((initialPriceValue - currentPriceValue) / currentPriceValue) * 100;
      var toFixed = lossPercentage.toFixed(2);
      var message =
        "You lost <span style= color:var(--alert-color)>" +
        loss +
        "</span > and percentage is <span style= color:var(--alert-color)>" +
        lossPercentage +
        "%</span>.";
      setMessage(message);
    } else {
      setMessage(
        `No <span style=color:var(--alert-color);> pain</span> No <span style=color:var(--profit-color);>gain</span>!`
      );
    }
  } else {
    var message =
      "<span style=color:var(--alert-color);>Please enter all the fields!</span>";
    setMessage(message);
  }
}
function setMessage(message) {
  output.innerHTML = message;
}
var currentPrice = document.querySelector("#current-price");
var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", calculateProfitAndLoss);
