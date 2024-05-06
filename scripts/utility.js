// set inner text function
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
  const totalCost = parseInt(document.getElementById(id).innerText);
  const updatedTotalCost = totalCost + value;
  setInnerText(id, updatedTotalCost);
}

const inputField = document.getElementById("input-field");

function grandTotalCost(category) {
  const totalCost = parseInt(document.getElementById("total-price").innerText);

  if (category == "NEW15") {
    setInnerText("grand-total", totalCost - totalCost * 0.15);
  } else if (category == "Couple 20") {
    setInnerText("grand-total", totalCost - totalCost * 0.2);
  } else {
    setInnerText("grand-total", totalCost);
  }
}

function seatSelectionRestriction() {
  const totalPrice = parseInt(document.getElementById("total-price").innerText);
  console.log(totalPrice);

  for (let i = 0; i < allSeatBtn.length; i++) {
    if (totalPrice >= 2200) {
      allSeatBtn[i].disabled = true;
    } else {
      allSeatBtn[i].disabled = false;
    }
  }
}
