const previewImgBtn = document.querySelectorAll(".previewImgBtn");

const previewImg = document.querySelector(".previewImg");

const addItem = document.querySelector(".addItem");
const cartQuantitys = document.querySelectorAll(".header-quantity");
const headerPrice = document.querySelectorAll(".header-price");
const itemQuantity = document.getElementById("itemQuantity");

const inforBtns = document.querySelectorAll(".infoBtn");
const inforBorders = document.querySelectorAll(".inforBorder");

const colorSelects = document.querySelectorAll(".colorSelections");

const like = document.querySelector(".likeItem");
const liked = document.querySelector(".likedItem");

// switch big preview image
previewImgBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn === previewImgBtn[index]) {
      previewImg.setAttribute(
        "src",
        `assets/img/shop-details/product-big-${index + 1}.png`
      );
    }
  });
});

// border the active infor
inforBtns.forEach((btn, index) => {
  // remove all the border before tracking the active one
  btn.addEventListener("click", () => {
    inforBorders.forEach((border) => {
      border.classList.remove("border-bottom");
    });

    if (btn.children[1] === inforBorders[index]) {
      inforBorders[index].classList.add("border-bottom");
    }
  });
});

// color choosing
colorSelects.forEach((color) => {
  color.addEventListener("click", () => {
    if (color.classList.contains("opacity-25")) {
      color.classList.remove("opacity-25");
    } else {
      color.classList.add("opacity-25");
    }
  });
});

// add item
var quantityInput = Number(itemQuantity.value);
var quantity = 0;
var price = 0;

addItem.addEventListener("click", () => {
  quantity += quantityInput;
  price = quantity * 67.24;

  cartQuantitys.forEach((cart) => {
    cart.innerText = quantity;
  });

  headerPrice.forEach((item) => {
    item.innerText = `$${price.toFixed(2)}`;
  });
});

// add to wishlist
like.addEventListener("click", () => {
  like.classList.add("d-none");
  liked.classList.remove("d-none");
});

liked.addEventListener("click", () => {
  liked.classList.add("d-none");
  like.classList.remove("d-none");
});
