const upperscreen = document.getElementById("upper-screen");
const lowerscreen = document.getElementById("lower-screen");
const numbers = document.querySelectorAll(".dark-grey");
numbers.forEach(element => {
    element.addEventListener("click", () => {
        let number = element.innerHTML;
        lowerscreen.innerHTML += number;
        // upperscreen.innerHTML += number;
    });
});
const ac = document.getElementById("button1");
ac.addEventListener("click", () => {
    lowerscreen.innerHTML = "";
    upperscreen.innerHTML = "";
});
const plusminus = document.getElementById("button2");
plusminus.addEventListener("click", () => {
    lowerscreen.innerHTML *= -1;
});
const arrow = document.getElementById("button3");
arrow.addEventListener("click", () => {
    let value = lowerscreen.innerHTML;
    lowerscreen.innerHTML = value.slice(0, -1);
});
const operands = document.querySelectorAll(".orange");
operands.forEach(element => {
    element.addEventListener("click", () => {
        let operand = element.innerHTML;
        let screen1 = lowerscreen.innerHTML;
        switch (operand) {
            case "+":
                lowerscreen.innerHTML += operand;
                break;
            case "-":
                lowerscreen.innerHTML += operand;
                break;
            case "X":
                lowerscreen.innerHTML += "*";
                break;
            case "%":
                lowerscreen.innerHTML += "/";
                break;
            case "=":
                let result = eval(screen1)
                upperscreen.innerHTML = result;
                break;
            default:
                break;
        }
    });
});