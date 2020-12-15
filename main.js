function reser(){
    document.getElementById("product").selectedIndex = "0";
    document.getElementById("state").selectedIndex = "0";
    document.getElementById("method").selectedIndex = "0";
    document.getElementById("quantity").value = "";
    document.getElementById("total").value = "$0.00";
}


function calculateTotal(){
    //Fields
    let productSelect = document.getElementById("product");
    let quantityField = document.getElementById("quantity");
    let stateSelect = document.getElementById("state");
    let methodSelect = document.getElementById("method");
    let totalField = document.getElementById("total");

    //Values
    let product = parseFloat(productSelect.value);
    let quantity = parseInt(quantityField.value);
    let taxRate = parseFloat(stateSelect.value);
    let shippingCost = parseInt(methodSelect.value);

    let salesTotal = product * quantity;
    let tax = taxRate * salesTotal;
    
    //Calculate total
    let total = salesTotal + tax + shippingCost;
    let totalFormated = Math.round(total*100) / 100;

    console.log(totalFormated);

    if( !(Number.isNaN(totalFormated)) ){
        totalField.value = "$" + totalFormated
    }
}