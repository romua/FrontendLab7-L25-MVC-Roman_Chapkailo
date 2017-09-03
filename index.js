import operations from './operations';
import {interfaceBuilder} from './interfaceBuilder';
import {resultToPage} from './resultToPage';


interfaceBuilder();
document.body.addEventListener('click', (e)=>{
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let result = 0;
    switch (e.target.id) {
        case 'buttonPlus':
            result = operations.mathPlus(a,b);
            break;
        case 'buttonMinus':
            result = operations.mathMinus(a,b);
            break;
        case 'buttonMultiply':
            result = operations.mathMultiply(a,b);
            break;
        case 'buttonDivide':
            result = operations.mathDivide(a,b);
            break;
        default:
    }
    resultToPage(result);
});