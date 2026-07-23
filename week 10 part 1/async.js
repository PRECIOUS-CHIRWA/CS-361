// Task 1: Fetch and Display
async function loadUsers() {
    //grab
    const container = document.querySelector(".user-container");

    //render
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        container.innerHTML = users.map(user => {
            return `<div>
            <h2> ${user.name}</h2>
            <h2> ${user.email}</h2> 
            </div>`
        }).join("");
    } catch (err) {
        container.innerHTML = `<p class="error">Error loading users: ${rr.message}</p>`;
    }
}

//loadUsers();


// Task 2:  Loading & Error States
async function loadUsersWithStates() {
    //grab
    const container = document.querySelector(".user-container");

    //render
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error("Error loading users");
        }
        const users = await res.json();
        container.innerHTML = users.map(user => {
            return `<div>
            <h2> ${user.name}</h2>
            <h2> ${user.email}</h2> 
            </div>`
        }).join("");
    } catch (err) {
        container.innerHTML = `<p class="error">Error loading users: ${rr.message}</p>`;
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
    new Product("Zuchinni", 20.00)
];

function renderProducts() {
    //grab
    const container0 = document.querySelector(".product-container");

    //render
    container0.innerHTML = products.map(p => {
        return `<div>
    <h2> Name: ${p.name}</h2>
    <h2> ZMK: ${p.withTax().toFixed(2)}</h2>
    </div>`
    }).join("");
}

renderProducts();