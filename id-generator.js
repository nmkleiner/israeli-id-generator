export function setupIdGenerator(element) {
    element.querySelector('#id-button').addEventListener('click', () => {
        element.querySelector('#id-input').value = generateIsraeliId()
    })

    element.querySelector('#id-input').value = generateIsraeliId()
}


function generateRandom8Digits() {
    const id = Math.floor(Math.random() * 100000000);
    return String(id).padStart(8, '0');
}

function calculateCheckDigit(digits) {
    // Split the digits into an array
    const digitsArray = digits.split('');
    // Define the weights
    const weights = [1, 2, 1, 2, 1, 2, 1, 2];
    // Calculate the sum
    const sum = digitsArray.reduce((acc, digit, index) => {
        // Multiply the digit by the weight
        const product = digit * weights[index];
        // If the product is greater than 9, subtract 9
        return acc + (product > 9 ? product - 9 : product);
    }, 0);
    // Return the check digit
    return (sum * 9) % 10;
}

function generateIsraeliId() {
    const random8Digits = generateRandom8Digits();
    const checkDigit = calculateCheckDigit(random8Digits);

    return random8Digits + checkDigit;
}
