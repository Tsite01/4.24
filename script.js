function checkNumber() {
    var input = document.getElementById('numberInput').value;
    var number = parseInt(input);
    var digit1 = Math.floor(number / 10);
    var digit2 = number % 10;
    var sumOfCubes = Math.pow(digit1, 3) + Math.pow(digit2, 3);
    var square = Math.pow(number, 2);
    var result = (square === 4 * sumOfCubes);
    var output = document.getElementById('output');
    output.innerHTML = result ? 'Положительный ответ' : 'Отрицательный ответ';
}
