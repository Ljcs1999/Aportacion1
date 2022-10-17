var nota = parseInt(prompt("Ingrese la nota del alumno:"));

if(nota>=70){
    var mensaje = "Usted ha aprobado.";
}
else{
    mensaje = "Usted esta aplazado.";
}

alert(mensaje);