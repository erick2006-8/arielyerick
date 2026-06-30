 function objecto() { 

    const objetoSeleccionado = document.getElementById("objeto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const total = cantidad * precio;
    document.getElementById("total").value = total.toFixed(2);

}
