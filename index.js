function enter(inputs) {
    document.getElementById('output').value += inputs;
}

function clean() {
    document.getElementById('output').value = " ";
}

function calculate() {

    var output = document.getElementById('output').value;
    var result = eval(output);
    document.getElementById('output').value = result;
}
