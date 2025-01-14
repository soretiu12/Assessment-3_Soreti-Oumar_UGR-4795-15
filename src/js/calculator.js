let input = '';

function calculate(value) {
    // Allow a negative sign at the start or after an operator
    if (value === '-' && (input === '' || isOperator(input[input.length - 1]))) {
        input += value;
    } 
    // If the value is an operator and the last character in input is also an operator, replace it
    else if (isOperator(value) && input !== '' && !isOperator(input[input.length - 1])) {
        input += value;
    } 
    // Append numbers directly
    else if (!isOperator(value) || value === '0') {
        input += value;
    }
    
    updateDisplay();
}

function Result() {
    try {
        // Evaluate the expression and convert it back to string
        const result = eval(input);
        input = result.toString();
    } catch (error) {
        input = 'Error';
        
    }
    updateDisplay();
}

function clr() {
    // Clear the input
    input = '';
    updateDisplay();
}

function updateDisplay() {
    // Update the display with the current input or '0' if empty
    document.getElementById('intext').value = input || '0';
}

function isOperator(value) {
    // Check if the value is one of the operators
    return ['+', '-', '*', '/'].includes(value);
}