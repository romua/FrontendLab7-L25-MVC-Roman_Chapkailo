export function interfaceBuilder() {
    let inputA = document.createElement('INPUT');
    inputA.setAttribute('TYPE', 'number');
    inputA.setAttribute('id','a');

    document.body.appendChild(inputA);
    let br = document.createElement('br');
    document.body.appendChild(br);

    let inputB = document.createElement('INPUT');
    inputB.setAttribute('TYPE', 'number');
    inputB.setAttribute('id','b');
    document.body.appendChild(inputB);

    let br1 = document.createElement('br');
    document.body.appendChild(br1);
    document.body.appendChild(br1);

    let buttonPlus = document.createElement('INPUT');
    buttonPlus.setAttribute('TYPE', 'button');
    buttonPlus.setAttribute('value', '+');
    buttonPlus.setAttribute('id','buttonPlus');
    document.body.appendChild(buttonPlus);

    let buttonMinus = document.createElement('INPUT');
    buttonMinus.setAttribute('TYPE', 'button');
    buttonMinus.setAttribute('value', '-');
    buttonMinus.setAttribute('id','buttonMinus');
    document.body.appendChild(buttonMinus);

    let buttonMultiply = document.createElement('INPUT');
    buttonMultiply.setAttribute('TYPE', 'button');
    buttonMultiply.setAttribute('value', '*');
    buttonMultiply.setAttribute('id','buttonMultiply');
    document.body.appendChild(buttonMultiply);

    let buttonDivide = document.createElement('INPUT');
    buttonDivide.setAttribute('TYPE', 'button');
    buttonDivide.setAttribute('value', ':');
    buttonDivide.setAttribute('id','buttonDivide');
    document.body.appendChild(buttonDivide);

    let resultDiv = document.createElement('div');
    resultDiv.setAttribute('id','result');
    document.body.appendChild(resultDiv);
}