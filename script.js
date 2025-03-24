// Create and append the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class 'prices'
    let prices = document.querySelectorAll(".price");
    let total = 0;

    // Loop through the prices and add them
    prices.forEach(price => {
        let value = parseFloat(price.textContent.trim()) || 0; // Extract and parse number
        total += value;
    });

    console.log("Total Calculated:", total); // Debugging log

    // Check if total row already exists, remove it if it does
    let existingTotalRow = document.querySelector("#totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Find the table
    let table = document.querySelector("table");
    if (!table) {
        console.error("Table not found!"); // Debugging error
        return;
    }

    // Create a new row for total
    let newRow = document.createElement("tr");
    newRow.id = "totalRow";
    let newCell = document.createElement("td");
    newCell.colSpan = 2; // Adjust according to the number of columns in your table
    newCell.textContent = "Total Price: " + total.toFixed(2);
    newRow.appendChild(newCell);

    // Append the new row to the table
    table.appendChild(newRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
