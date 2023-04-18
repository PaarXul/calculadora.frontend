const pantalla = document.getElementById("resultado");
const btn1 = document.querySelectorAll(".btn");

const btnArray = btn1.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    pantalla.value = pantalla.value + e.target.value;

  });
});