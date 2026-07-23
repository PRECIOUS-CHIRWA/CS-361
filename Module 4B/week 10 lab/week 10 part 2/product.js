export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    withTax() {
        return this.price * 1.16;
    }
}

export const products = [
    new Product("Apple", 2.30),
    new Product("Watermelon", 25.00),
    new Product("Zucchini", 20.00)
];

export function renderProducts() {
    const container = document.querySelector(".product-container");
    container.innerHTML = products.map((p, i) => `<div>
    <h2>Name: ${p.name}</h2>
    <h2>ZMK: ${p.withTax().toFixed(2)}</h2>
    <button class="add-btn" data-index="${i}">Add to Cart</button>
    </div>`).join("");
}