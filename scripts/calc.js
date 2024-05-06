// const buyTicketBtnElement = document.getElementById("buy-ticket");
// const buyTicketPressed = buyTicketBtnElement.addEventListener(
//   "click",
//   function () {
//     console.log("Buttonn Pressed!");
//   }
// );

// clicking the buy ticket button
// function buyTicket() {
//   console.log("Button Pressed!");
// }

const allSeatBtn = document.getElementsByClassName("w-24");
// console.log(allSeatBtn);
let seatsLeft = 39;
let selectedSeats = 1;

for (let btn of allSeatBtn) {
  btn.addEventListener("click", function (event) {
    console.log("Seat Selected!");
    updatedSeatsLeft = seatsLeft--;
    updatedSelectedSeats = selectedSeats++;
    setInnerText("seats-left", updatedSeatsLeft);
    setInnerText("selected-seats", updatedSelectedSeats);

    // seat names
    const seatName = event.target.innerText;

    // seat price
    const seatPrice = parseInt(
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.childNodes[3].childNodes[7].childNodes[5].childNodes[3]
        .childNodes[1].innerText
    );

    const selectedSeatContainer = document.getElementById(
      "selected-seat-container"
    );

    // updating the list of the seat and price
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seatName;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    const p3 = document.createElement("p");
    p3.innerText = seatPrice;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedSeatContainer.appendChild(li);

    // total price part
    // const totalPrice = parseInt(
    //   document.getElementById("total-price").innerText
    // );
    // const updatedTotalPrice = totalPrice + seatPrice;
    // setInnerText("total-price", updatedTotalPrice);

    totalCost("total-price", seatPrice);

    // grand price part
    // const grandPrice = parseInt(
    //   document.getElementById("grand-total").innerText
    // );
    // const updatedGrandPrice = grandPrice + seatPrice;

    // seatSelectionRestriction();
    seatSelectionRestriction();


    totalCost("grand-total", seatPrice);

    event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "#1DD100";

    // restriction in selecting the seats
  });
}
