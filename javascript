// script.js
const shoppingListView = document.getElementById("shopping-list-view");
const orderGroceriesButton = document.getElementById("order-groceries-button");

orderGroceriesButton.addEventListener("click", () => {
    // Call API to order groceries
    fetch("https://grocery-api.com/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            items: ["item1", "item2", "item3"]
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
