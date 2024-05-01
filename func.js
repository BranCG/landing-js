function holaMundo()
{
    if (confirm("Cambiamos el párrafo?"))
    {
        alert("DIJO QUE SI");
        document.querySelector("p").innerText = "Cambie el texto DEL PARRAFO";
    } 
    else
    {
        alert("No se generaran cambios");
    }
}
