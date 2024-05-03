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
  } else if (category == "Couple20") {
    setInnerText("grand-total", totalCost - totalCost * 0.20);
  } else {
    setInnerText("grand-total", totalCost);
  }
}
