function mathPlus(a,b) {

    return parseInt(a,10)+parseInt(b,10);
}
function mathMinus(a,b) {
    return parseInt(a,10)-parseInt(b,10);
}
function mathMultiply(a,b) {
    return parseInt(a,10)*parseInt(b,10);
}
function mathDivide(a,b) {
    return parseInt(a,10)/parseInt(b,10);
}



export default {
    mathPlus: mathPlus,
    mathMinus: mathMinus,
    mathMultiply: mathMultiply,
    mathDivide: mathDivide

}