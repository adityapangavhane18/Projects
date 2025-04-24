let currentPrice = 0;

function openForm(productId, price) {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("quantity").value = "";
    document.getElementById("total_price").value = "";
    currentPrice = parseFloat(price);
}

function calculateTotal() {
    let quantity = document.getElementById("quantity").value;
    let total = currentPrice * quantity;
    document.getElementById("total_price").value = total.toFixed(2);
}

function closeForm() {
    document.getElementById("orderForm").style.display = "none";
}
