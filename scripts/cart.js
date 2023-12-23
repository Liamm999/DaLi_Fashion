const addItems = document.querySelectorAll(".addItem");
const subtractItems = document.querySelectorAll(".subtractItem");
const itemsCount = document.querySelectorAll(".itemCount");

// total price of each item
const totalItemPrice = document.querySelectorAll(".totalItemPrice");

// total price of the whole cart
const totalPrice = document.querySelector(".totalPrice");

const deleteItem = document.querySelectorAll(".deleteItem");
const deleteAll = document.querySelector("#deleteAll");
const items = document.querySelectorAll(".item");

// get the price total at the first load
var priceTotal = 0;

const priceOfEachItem = 30;

totalItemPrice.forEach((item) => {
  priceTotal += Number(item.innerText.replace("$", ""));
});

// set total price at first load
totalPrice.innerText = `$${priceTotal.toFixed(2)}`;

// add item
addItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // set total price for each item
    let count = Number(itemsCount[index].innerText);
    count++;
    itemsCount[index].innerText = count;
    totalItemPrice[index].innerText = `$${(count * priceOfEachItem).toFixed(
      2
    )}`;

    // set total price for the whole cart
    priceTotal += priceOfEachItem;
    totalPrice.innerText = `$${priceTotal.toFixed(2)}`;
  });
});

// subtract item
subtractItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // set total price for each item
    let count = Number(itemsCount[index].innerText);
    if (count > 1) {
      count--;
      itemsCount[index].innerText = count;
      totalItemPrice[index].innerText = `$${(count * priceOfEachItem).toFixed(
        2
      )}`;

      // set total price for the whole cart
      priceTotal -= priceOfEachItem;
      totalPrice.innerText = `$${priceTotal.toFixed(2)}`;
    }
  });
});

// delete each item
deleteItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    let count = Number(itemsCount[index].innerText);
    items[index].classList.add("d-none");

    // set total price for the whole cart
    priceTotal -= priceOfEachItem * count;
    totalPrice.innerText = `$${priceTotal.toFixed(2)}`;
  });
});

// delete all items
deleteAll.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.add("d-none");
  });
  // set total price = 0
  priceTotal = 0;
  totalPrice.innerText = `$${priceTotal.toFixed(2)}`;
});
