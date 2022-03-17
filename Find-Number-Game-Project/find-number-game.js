const number = document.getElementById("input");
const screen = document.querySelector("#screen");
// console.log(number);
// console.log(screen);

const btn = document.querySelector("#button");
let num2 = Math.random() * 100
num2 = Math.round(num2);
btn.addEventListener("click", () => {
    let num1 = number.value;


    if (num1 >= 0 && num1 <= 100) {
        if (num1 == num2) {
            screen.innerHTML = "Tebrikler"
        } else if (num1 < num2) {
            screen.innerHTML = "Daha büyük bir sayı giriniz"
        } else {
            screen.innerHTML = "Daha küçük bir sayı giriniz"
        }

    } else {
        screen.innerHTML = "Hatalı Numara";
    }
});