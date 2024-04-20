let textocita = document.getElementById("cita");
let textoautor = document.getElementById("autor");
let botoncita = document.getElementById("boton-cambiar-cita");

//generar un numero aleatorio entre 0 y 52
function generarindicealeatorio(){
    return Math.floor(Math.random()*citas.length);
}

function generarcita(){
    let indicealeatorio=generarindicealeatorio();
    textocita.innerText= `"${citas[indicealeatorio].cita}"`;
    textoautor.innerText = citas[indicealeatorio].autor;
    //console.log(indicealeatorio);
}
  
generarcita();

botoncita.addEventListener('click', generarcita);



