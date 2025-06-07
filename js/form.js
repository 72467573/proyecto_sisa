document.getElementById('formularioInfo').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        nombre: document.getElementById('nombre_completo').value,
        correo: document.getElementById('correo').value,     
        telefono: document.getElementById('telefono').value,
        consulta: document.getElementById('consulta').value   
    };


    try {
        const response = await fetch('http://3.149.37.34:3000/formulario/enviar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Formulario enviado correctamente.');
            document.getElementById('formularioInfo').reset();
        } else {
            alert('Error al enviar el formulario.');
        }
    } catch (error) {
        console.error('Error al enviar:', error);
        alert('Error de conexión con el servidor.');
    }
});
