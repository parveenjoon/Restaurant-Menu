document.addEventListener("DOMContentLoaded", getMenu);

async function getMenu() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        const data = await response.json();

        const imgSrc = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const menuContainer = document.getElementById("menu");
        data.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <img src="${imgSrc}" alt="${item.name}">
                <div class="info">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <button class="add-button">+</button>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ["Cheeseburger", "Pizza", "Tacos", "Sushi", "Pasta", "Fried Chicken", "Grilled Cheese Sandwich", "Steak", "Caesar Salad", "Fish and Chips", "Ramen", "Burrito", "Pho", "Pad Thai", "Gyro"];
            const order = [];
            for (let i = 0; i < 3; i++) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                order.push(randomBurger);
            }
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankYouFnc() {
    alert("Thank you for eating with us today!");
}

async function handleOrder() {
    try {
        const order = await takeOrder();
        console.log("Order:", order);

        const orderStatus = await orderPrep();
        console.log("Order Status:", orderStatus);

        const paymentStatus = await payOrder();
        console.log("Payment Status:", paymentStatus);

        if (paymentStatus.paid) {
            thankYouFnc();
        }
    } catch (error) {
        console.error("Error handling the order:", error);
    }
}

// Uncomment the line below to simulate the order handling process
 handleOrder();
