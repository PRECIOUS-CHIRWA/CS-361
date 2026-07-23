export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    withTax() {
        return this.price * 1.16;
    }
}

function renderProducts() {
    const products = [
        new Product("Apple", 2.30),
        new Product("Watermelon", 25.00),
        new Product("Zuchinni", 20.00)
    ];

    const container0 = document.querySelector(".product-container");
    container0.innerHTML = products.map(p => {
        return `<div>
    <h2> Name: ${p.name}</h2>
    <h2> ZMK: ${p.withTax().toFixed(2)}</h2>
    </div>`
    }).join("");
}

export { renderProducts };