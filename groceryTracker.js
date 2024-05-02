let bill1;
let bill2;
let bill3;

function calculateTotal() {
    bill1 = parseFloat(document.getElementById('bill1').value) || 0;
    bill2 = parseFloat(document.getElementById('bill2').value) || 0;
    bill3 = parseFloat(document.getElementById('bill3').value) || 0;

    let total = (bill1 + bill2 + bill3).toFixed(2);

    document.getElementById('result').innerText = `The total amount spend on groceries is: $${total}`;
}
