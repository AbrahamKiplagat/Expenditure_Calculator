function computeAll() {
  const inputItemPrize = parseFloat(document.getElementById("inputItemPrize").value);
  const inputItemNumber = parseInt(document.getElementById("inputItemNumber").value);
  const inputBudgetAmount = parseFloat(document.getElementById("inputBudgetAmount").value);
  const inputItemName = document.getElementById("inputItemName").value

  const totalsElement = document.querySelector(".totals");
  const budgetRemainderElement = document.querySelector(".budgetRemainder");
  const displayItm = document.getElementById("displayItm");
  const displayTc = document.getElementById("displayTc");
  const displayRm = document.getElementById("displayRm");
  
  if (inputItemNumber < 1 ) {
    alert("Please enter a valid item number greater than zero.");
    return;
  }
  if (inputItemPrize < 1 ) {
    alert("Please enter a valid item amount greater than zero.");
    return;
  }
  if (inputItemNumber > 50 ) {
    alert("Please enter a valid item amount Lover than 50.");
    return;
  }
  if (inputItemPrize > 100000 ) {
    alert("Please enter a valid item amount Lover than 100,000.");
    return;
  }
  if (inputBudgetAmount< 1 ) {
    alert("Please enter a valid item amount greater than zero.");
    return;
  }
  let prize = inputItemPrize * inputItemNumber;
  let budget = inputBudgetAmount - prize;

  // Display the calculated values in the HTML elements
  totalsElement.innerText = `Total:${prize.toFixed(2)}`;
  budgetRemainderElement.innerText = `Remaining: ${budget.toFixed(2)}`;

  // Display the remarks.
  displayItm.innerText = inputItemName;
  displayTc.innerText = prize.toFixed(2);
  displayRm.innerText = budget.toFixed(2);
  
  // If user input a trilion amount?
  // if (inputItemNumber > 50) {
  //   alert("Please enter a reasonable item number.");
  // }
}