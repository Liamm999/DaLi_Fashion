const itemsSelect = document.querySelectorAll(".itemSelect");
const itemsData = document.querySelectorAll(".itemData");

const addItems = document.querySelectorAll(".addItem");
const cartQuantitys = document.querySelectorAll(".header-quantity");
const headerPrice = document.querySelectorAll(".header-price");

const colorSelects = document.querySelectorAll(".colorSelections");

const productsPrimary = document.querySelectorAll(".productPrimary");
const imageHoverIcons = document.querySelectorAll(".imageHoverIcon");

const productBtns = document.querySelectorAll(".productBtn");

const likeBtns = document.querySelectorAll(".likeItem");

const filterShoes = document.querySelector("#filterShoes");
const filterTop = document.querySelector("#filterTop");
const filterBottom = document.querySelector("#filterBottom");
const productShoes = document.querySelectorAll(".productShoes");
const productTop = document.querySelectorAll(".productTop");
const productBottom = document.querySelectorAll(".productBottom");

// open filter items
function openFilter(index) {
  if (itemsData[index].classList.contains("d-none")) {
    itemsData[index].classList.remove("d-none");
  } else {
    itemsData[index].classList.add("d-none");
  }
}

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

// Images hover icons
productsPrimary.forEach((product) => {
  product.addEventListener("mouseover", () => {
    const hoverIcon = product.children.item(0).children.item(1);
    if (hoverIcon.classList.contains("d-none")) {
      hoverIcon.classList.remove("d-none");
    }
  });

  product.addEventListener("mouseout", () => {
    const hoverIcon = product.children.item(0).children.item(1);
    hoverIcon.classList.add("d-none");
  });
});

// open product details when click a product
productBtns.forEach((product) => {
  product.addEventListener("click", () => {
    window.location.href = "productDetail.html";
  });
});

// add to cart
var quantity = 0;
var price = 0;

addItems.forEach((item) => {
  item.addEventListener("click", () => {
    quantity++;
    price = quantity * 67.24;

    cartQuantitys.forEach((cart) => {
      cart.innerText = quantity;
    });

    headerPrice.forEach((item) => {
      item.innerText = `$${price.toFixed(2)}`;
    });
  });
});

// like items
likeBtns.forEach((like) => {
  like.addEventListener("click", () => {
    const heart = like.childNodes[1].childNodes[0];
    if (heart.classList.contains("bi-heart")) {
      heart.classList.replace("bi-heart", "bi-heart-fill");
    } else {
      heart.classList.replace("bi-heart-fill", "bi-heart");
    }
  });
});

// reset first status of 3 kind of products
const resetProduct = () => {
  productBottom.forEach((product) => {
    product.classList.remove("d-none");
  });

  productTop.forEach((product) => {
    product.classList.remove("d-none");
  });

  productShoes.forEach((product) => {
    product.classList.remove("d-none");
  });
};

// filter products by category
filterShoes.addEventListener("click", () => {
  resetProduct();

  // hidden none filtered products
  productBottom.forEach((product) => {
    product.classList.add("d-none");
  });

  productTop.forEach((product) => {
    product.classList.add("d-none");
  });
});

filterTop.addEventListener("click", () => {
  resetProduct();

  // hidden none filtered products
  productShoes.forEach((product) => {
    product.classList.add("d-none");
  });

  productBottom.forEach((product) => {
    product.classList.add("d-none");
  });
});

filterBottom.addEventListener("click", () => {
  resetProduct();

  // hidden none filtered products
  productShoes.forEach((product) => {
    product.classList.add("d-none");
  });

  productTop.forEach((product) => {
    product.classList.add("d-none");
  });
});

// at first load -> if user not signin -> redirect to login/register page
const checkUserSignedIn = () => {
  if (!user) {
    if (window.location.pathname === "/signup.html") {
      return;
    }
    window.location.replace("./signin.html");
  }
};

window.addEventListener("loadstart", checkUserSignedIn());
