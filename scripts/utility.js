// set inner text function
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
  const totalCost = parseInt(document.getElementById(id).innerText);
  const updatedTotalCost = totalCost + value;
  setInnerText(id, updatedTotalCost);
}

const discountedElement = document.getElementById(
  "discounted-amount-container"
).innerText;

const inputField = document.getElementById("input-field");

function grandTotalCost(category) {
  const totalCost = parseInt(document.getElementById("total-price").innerText);

  if (category == "NEW15") {
    setInnerText("grand-total", totalCost - totalCost * 0.15);
    setInnerText(
      "discounted-amount-container",
      totalCost - (totalCost - totalCost * 0.15)
    );
  } else if (category == "Couple 20") {
    setInnerText("grand-total", totalCost - totalCost * 0.2);
    setInnerText(
      "discounted-amount-container",
      totalCost - (totalCost - totalCost * 0.15)
    );
  } else {
    setInnerText("grand-total", totalCost);
  }
}

function seatSelectionRestriction() {
  const totalPrice = parseInt(document.getElementById("total-price").innerText);
  // console.log(totalPrice);

  for (let i = 0; i < allSeatBtn.length; i++) {
    if (totalPrice >= 2200) {
      allSeatBtn[i].disabled = true;
    } else {
      allSeatBtn[i].disabled = false;
    }
  }
}

// function dicountedAmount(elementId1, elementId2) {
//   const totalPrice = parseInt(document.getElementById(elementId1).innerText);
//   console.log(totalPrice);
//   const grandPrice = parseInt(document.getElementById(elementId2).innerText);
//   console.log(grandPrice);
//   let discountedAmount = totalPrice - grandPrice;
// }

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
