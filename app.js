const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 200;
window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice(event.target);
    } else {
      if (confirm("Has been the product in your cart removed???")) {
        event.target.closest(".product").remove();
        calculateCartPrice();
      } else {
        alert("You can continue your shopping");
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.classList.contains("remove-product")) {
    event.target.closest(".product").remove();
    calculateCartPrice();
  }
});
const calculateProductPrice = (button) => {
  const productInfoDiv = button.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const adet = productInfoDiv.querySelector(".quantity").innerText;
  const toplamÜrünFiyatı = productInfoDiv.querySelector(".product-line-price");
  toplamÜrünFiyatı.innerText = (ürünFiyatı * adet).toFixed(2);
};

const calculateCartPrice = () => {};
