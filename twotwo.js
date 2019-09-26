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
function insertoperation(num) {
    num1 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    document.form.textview.value =
    document.form.textview.value + num;
    sign=document.form.textview.value
    document.form.textview.value = "";
}

function ravno() {
    num2 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    num3=eval(`${num1}${sign}${num2}`)
    document.form.textview.value=num3

}