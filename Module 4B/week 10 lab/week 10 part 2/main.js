import { renderProducts, products } from "./product.js";
import { addToCart, renderCartTotal } from "./script.js";

renderProducts();
renderCartTotal(); // shows saved total immediately, proving it survived reload

document.querySelector(".product-container").addEventListener("click", (e) => {
    if (e.target.matches(".add-btn")) {
        const index = e.target.dataset.index;
        addToCart(products[index]);
    }
});