function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
let num1 = ''
let num2 = ''
let num3 = ''
let sign = ''
function insertOperation(num) {
    num1 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    sign=num
}
function ravno() {
    num2 = parseFloat(document.form.textview.value)
    document.form.textview.value = "";
    num3=eval(`${num1}${sign}${num2}`)
    document.form.textview.value=num3

}