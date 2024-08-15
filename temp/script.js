
document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputTemp) || inputTemp === '') {
        resultDiv.innerText = 'Please enter a valid number.';
        return;
    }

    const temp = parseFloat(inputTemp);
    let result;

    if (inputUnit === 'celsius') {
        result = `Fahrenheit: ${(temp * 9/5) + 32}°F, Kelvin: ${temp + 273.15}K`;
    } else if (inputUnit === 'fahrenheit') {
        result = `Celsius: ${(temp - 32) * 5/9}°C, Kelvin: ${(temp - 32) * 5/9 + 273.15}K`;
    } else if (inputUnit === 'kelvin') {
        result = `Celsius: ${temp - 273.15}°C, Fahrenheit: ${(temp - 273.15) * 9/5 + 32}°F`;
    }

    resultDiv.innerText = result;
});
