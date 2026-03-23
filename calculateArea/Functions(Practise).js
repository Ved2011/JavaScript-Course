let Item1;
let Item2;
let Item3;
let Discount;

function CalculateTotal() {
    Item1 = parseFloat(document.getElementById('Item1').value);
    Item2 = parseFloat(document.getElementById('Item2').value);
    Item3 = parseFloat(document.getElementById('Item3').value);
    Discount = parseFloat(document.getElementById('Discount').value);
    let ItemT = Item1+Item2+Item3;

    let discountAmount = (Item1+Item2+Item3)*(Discount/100);
    let Total = ItemT-discountAmount;
    document.getElementById('result').innerText = (`Your total is:  ${Total}`);
}