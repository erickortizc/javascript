let contador =0; 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        contador--;
      } else if (styles.contains("increase")) {
        contador++;
      } else {
        contador = 0;
      }
  
      if (contador > 0) {
        value.style.color = "black";
      }
      if (contador < 0) {
        value.style.color = "blue";
      }
      if (contador === 0) {
        value.style.color = "red";
      }
      value.textContent = contador;
    });
  }); 