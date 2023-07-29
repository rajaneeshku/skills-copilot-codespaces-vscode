function skillNumber() {
    var skillNumber = document.getElementById("skillNumber").value;
    var skillNumber = parseInt(skillNumber);
    if (skillNumber < 0) {
        document.getElementById("skillNumber").value = 0;
    }
    if (skillNumber > 100) {
        document.getElementById("skillNumber").value = 100;
    }
}