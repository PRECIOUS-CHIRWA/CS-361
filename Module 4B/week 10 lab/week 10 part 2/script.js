import { Product } from "./product.js";

// rebuild real Product instances from the saved plain objects
export const cart = (JSON.parse(localStorage.getItem("shoppingCart")) || [])
    .map(item => new Product(item.name, item.price));

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

export function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCartTotal();
}

export function renderCartTotal() {
    const total = cart.reduce((sum, p) => sum + p.withTax(), 0);
    document.querySelector(".cart-total").textContent = `Cart Total: ZMK ${total.toFixed(2)}`;
}