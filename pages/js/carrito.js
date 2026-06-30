function añadirAlCarrito() {
    // 1. Capturar el precio actual que muestra la calculadora
    let precioCalculado = parseFloat(document.getElementById('cajaResultado').innerText) || 0;
    
    // Validar que el usuario no agregue algo que vale $0
    if (precioCalculado <= 0) {
        alert("Por favor, introduce valores válidos primero.");
        return;
    }

    // 2. Crear el objeto con la estructura que necesita tu carrito
    let productoPersonalizado = {
        id: "calc_" + Date.now(), // ID único basado en el tiempo exacto
        nombre: "Servicio/Producto Personalizado",
        precio: precioCalculado,
        cantidad: 1
    };

    // 3. Obtener el carrito actual del navegador (o crear uno vacío si no existe)
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // 4. Empujar el nuevo producto al arreglo del carrito
    carrito.push(productoPersonalizado);

    // 5. Guardar el carrito actualizado de vuelta en el navegador
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert("¡Calculación agregada al carrito con éxito!");
}