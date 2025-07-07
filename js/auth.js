// REGISTRO DE USUARIO
document.getElementById('formRegistro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('registroNombre').value;
  const email = document.getElementById('registroEmail').value;
  const contrasena = document.getElementById('registroContrasena').value;
  const numero_telefono = document.getElementById('registroTelefono').value;

  try {
    const res = await fetch('http://3.148.186.173:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, contrasena, numero_telefono })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      document.getElementById('formRegistro').reset();
    } else {
      alert(data.error || 'Error en el registro');
    }
  } catch (err) {
    console.error('Error en el registro:', err);
  }
});

// LOGIN DE USUARIO
document.getElementById('formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const contrasena = document.getElementById('loginContrasena').value;

  try {
    const res = await fetch('http://3.148.186.173:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, contrasena })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      window.location.href = '/Logeado/index.html'; 
    } else {
      alert(data.error || 'Error en el login');
    }
  } catch (err) {
    console.error('Error en el login:', err);
  }
});
