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
  
  let prize = inputItemPrize * inputItemNumber;
  let budget = inputBudgetAmount - prize;

  // Display the calculated values in the HTML elements
  totalsElement.innerText = `Total:${prize.toFixed(2)}`;
  budgetRemainderElement.innerText = `Remaining: ${budget.toFixed(2)}`;

  //Display the remarks.
  displayItm.innerText = inputItemName
  displayTc.innerText = prize
  displayRm.innerText = budget
}