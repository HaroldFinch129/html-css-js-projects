let myName = prompt("Adınızı giriniz");

let isim = document.querySelector("#myName");
isim.innerHTML = myName;

const weekday = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = weekday[today.getDay()];
  m = checkTime(m);
  s = checkTime(s);
  let tarih = (document.getElementById("myClock").innerHTML =
    h + ":" + m + ":" + s + " " + d);
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
