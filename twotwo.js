function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
var num1 = ''
var num2 = ''
var num3 = ''
var sign = ''
function operationPlus() {
    num1 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    sign = 1
    
}

function operationMinus() {
    num1 = document.form.textview.value
    document.form.textview.value = "";
    sign = 2
}
function operationMult() {
    num1 = document.form.textview.value
    document.form.textview.value = "";
    sign = 3
}
function operationDivide() {
    num1 = document.form.textview.value
    document.form.textview.value = "";
    sign = 4
}
function ravno() {
    num2 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    if (sign = 1) {
        num3 = num1 + num2;
        document.form.textview.value = num3
        num3 = num1
    }
    else if (sign = 2) {
        num3 = num1 - num2;
        num3 = document.form.textview.value
        num3 = num1
    }
    else if (sign = 3) {
        num3 = num1 * num2;
        num3 = document.form.textview.value
        num3 = num1
    }
    else if (sign = 4) {
        num3 = num1 / num2;
        num3 = document.form.textview.value
        num3 = num1
    }
}
