let hours = document.getElementById("hour");
let min = document.getElementById("minutes");
let sec = document.getElementById("second");
let ampm = document.getElementById("AMPM");

let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

function updateClock() {
  let d = new Date().getDate();
  let mon = new Date().getMonth();
  let y = new Date().getFullYear();

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";

  if (h > 12) {
    h = h - 12;
    a = "PM";
  }

  date.innerText = d;
  month.innerText = mon + 1; //0=jan - 11=dec
  year.innerText = y;

  hours.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampm.innerText = a;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
