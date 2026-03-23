let Item1;
let Item2;
let Item3;

function CalculateTotal() {
    Item1 = parseFloat(document.getElementById('Item1').value);
    Item2 = parseFloat(document.getElementById('Item2').value);
    Item3 = parseFloat(document.getElementById('Item3').value);
    Discount = parseFloat(document.getElementById('Discount').value);
    let ItemT = Item1+Item2+Item3

    let DiscountT = (Item1+Item2+Item3/100)*Discount
    let Total = ItemT-DiscountT
    document.getElementById('result').innerText = ("Your total is: ", Total)
}