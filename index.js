function keyInput(value) {
    document.getElementById("display").value += value;
    values = document.getElementById("display").value;
    if (value == 'AC') {
        document.getElementById("display").value = '';
    }
}

function cal() {
    let res = eval(document.getElementById("display").value);
    document.getElementById("display").value = res;
}
