// Get entered values.
function getValues() {
    // Get values from form.
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let errorStartGreaterThanEnd = '<tr class="table-danger"><td>Starting interger must be smaller than ending integer.</td></tr>';
    let errorFieldBlank = '<tr class="table-danger"><td>Please enter a number in both fields.</td></tr>';
    let errorNumOutOfBounds = '<tr class="table-danger"><td>Numbers are out of bounds. Please enter numbers from 1 to 100.</td></tr>';
    let tableHeader = document.getElementById("tableHeader");
    // Convert input to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate input and make sure they are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        if(startValue > endValue) {
            tableHeader.classList.add('d-none');
            document.getElementById("resultsTable").innerHTML = errorStartGreaterThanEnd;
        } else if (startValue < 1 || endValue > 100) {
            tableHeader.classList.add('d-none');
            document.getElementById("resultsTable").innerHTML = errorNumOutOfBounds;
        } else {
            // Call processValues()
            processValues(startValue, endValue);
        }
        
    } else {
        tableHeader.classList.add('d-none');
        document.getElementById("resultsTable").innerHTML = errorFieldBlank;
    }
}

function processValues(startingValue, endingValue) {
    let valueRange = [];
    for (let index = startingValue; index < endingValue + 1; index++) {
        valueRange.push(parseInt(index));
    }
    displayResults(valueRange);
}

function displayResults(results) {
    let tableHeader = document.getElementById("tableHeader");
    let templateRows = "";

    let numRows = results.length/5;
    console.log(`Number of rows: ${numRows}.`);

    for (let row = 0; row < numRows; row++) {
        console.log(`Currently on row: ${row}.`);
        
    }

    for (let index = 0; index < results.length; index++) {
        let number = results[index];
        if(number%3 == 0 && number%5 == 0) {
            templateRows += `<tr><td><strong>FizzBuzz!</strong></td></tr>`;
        }else if (number%3 == 0) {
            templateRows += `<tr><td><strong>Fizz!</strong></td></tr>`;
        }else if (number%5 == 0) {
            templateRows += `<tr><td><strong>Buzz!</strong></td></tr>`;
        }else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }
    }

    tableHeader.classList.remove("invisible");
    tableHeader.classList.remove("d-none");
    document.getElementById("resultsTable").innerHTML=templateRows;
}