// Task 1: Fetch and Display
async function loadUsers() {
    const container = document.querySelector(".user-container");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        container.innerHTML = users.map(user => {
            return `<div>
            <h2>${user.name}</h2>
            <h2>${user.email}</h2>
            </div>`;
        }).join("");
    } catch (err) {
        container.innerHTML = `<p class="error">Error loading users: ${err.message}</p>`;
    }
}

// Task 2: Loading & Error States
async function loadUsersWithStates() {
    const container = document.querySelector(".user-container");
    container.innerHTML = "<p>Loading...</p>"; // shown before data arrives
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Error loading users");
        const users = await res.json();
        container.innerHTML = users.map(user => {
            return `<div>
            <h2>${user.name}</h2>
            <h2>${user.email}</h2>
            </div>`;
        }).join("");
    } catch (err) {
        container.innerHTML = `<p class="error">Error loading users: ${err.message}</p>`;
    }
}

loadUsersWithStates();

// Task 3: A Product Class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    withTax() {
        return this.price * 1.16;
    }
}

const products = [
    new Product("Apple", 2.30),
    new Product("Watermelon", 25.00),
    new Product("Zucchini", 20.00)
];

function renderProducts() {
    const container = document.querySelector(".product-container");
    container.innerHTML = products.map(p => `<div>
    <h2>Name: ${p.name}</h2>
    <h2>ZMK: ${p.withTax().toFixed(2)}</h2>
    </div>`).join("");
}

renderProducts();