function addTask() {
    const sno = document.getElementById('sno-box').value;
    const itemName = document.getElementById('itemname-box').value;
    const price = document.getElementById('price-box').value;
    const qty = document.getElementById('qty-box').value;
    const units = document.getElementById('units-box').value;
    const categories = document.getElementById('categories-box').value;
    const bestLocation = document.getElementById('Bestlocation-box').value;

    if (sno && itemName && price && qty && units && categories && bestLocation) {
        const table = document.getElementById('list-container').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);

        cell1.textContent = sno;
        cell2.textContent = itemName;
        cell3.textContent = price;
        cell4.textContent = qty;
        cell5.textContent = units;
        cell6.textContent = categories;
        cell7.textContent = bestLocation;

        document.getElementById('sno-box').value = '';
        document.getElementById('itemname-box').value = '';
        document.getElementById('price-box').value = '';
        document.getElementById('qty-box').value = '';
        document.getElementById('units-box').value = '';
        document.getElementById('categories-box').value = '';
        document.getElementById('Bestlocation-box').value = '';
    } else {
        alert('Please fill all the fields');
    }
}
