function aInput(val) {
    document.getElementById("input").value += val
}

function calculate() {
    input = document.getElementById("input").value;

    try {
        document.getElementById("output").value = eval(input);

    }
    catch (error) {
        document.getElementById("output").value = "Error";
    }

}

function aclear() {
    document.getElementById("input").value = '';
    document.getElementById("output").value = '';


}