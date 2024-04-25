function holaMundo() 
{
    if (confirm("Cambiamos el párrafo?")) 
    {
        alert("DIJO QUE SI");
        document.getElementById("FUN").innerText = "Cambie el texto";
    } 
    else 
    {
        alert("DIJO QUE NO :(");
        document.getElementById("FUN").innerText = "TONZ no cambio naaaa";
    }
}
