const pantalla = document.getElementById("resultado");
const btn1 = document.querySelectorAll(".btn");
let isResult = false
  const btnArray = btn1.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if(isResult) {
        pantalla.value = btn.value
        isResult = false
      } else {
        if (btn.id === "btnc"){
          pantalla.value = ""
          return
        }
        if (btn.id === "btnigual"){
          try{
            pantalla.value = eval(pantalla.value)
            isResult = true
          }catch{
            alert('Operacion no valida')
            pantalla.value = ''
          }
          return
        }
        pantalla.value += e.target.value;
      }
    });
  });
