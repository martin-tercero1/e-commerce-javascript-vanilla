const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburguerMenu = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".my-order");
const detailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");

navbarEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleShoppingCart);
detailCloseIcon.addEventListener("click", closeProductDetails);

function toggleDesktopMenu() {
  if (!shoppingCart.classList.contains("inactive")) {
    shoppingCart.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!shoppingCart.classList.contains("inactive")) {
    shoppingCart.classList.toggle("inactive");
  }

  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  } else if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  } else if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
  shoppingCart.classList.toggle("inactive");
}

function openProductDetails() {
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  } else if (!shoppingCart.classList.contains("inactive")) {
    shoppingCart.classList.add("inactive");
  }

  productDetail.classList.remove("inactive");
}

function closeProductDetails() {
  productDetail.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Laptop",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
  name: "Phone",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

function renderProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const image = document.createElement("img");
    image.classList.add("product-img");
    image.setAttribute("src", product.image);
    image.addEventListener("click", openProductDetails);

    productCard.appendChild(image);

    const productInfoContainer = document.createElement("div");
    productInfoContainer.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    productInfoDiv.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productName);

    productInfoContainer.appendChild(productInfoDiv);

    const figure = document.createElement("figure");

    const productCartIcon = document.createElement("img");
    productCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.appendChild(productCartIcon);

    productInfoContainer.appendChild(figure);

    productCard.appendChild(productInfoContainer);

    cardsContainer.appendChild(productCard);
  });
}

renderProducts(productList);
