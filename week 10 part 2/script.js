// Task 5: A Persistent Cart

const cart = [];

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
    return localStorage.getItem("shoppingCart");
}

export { saveCart, loadCart };