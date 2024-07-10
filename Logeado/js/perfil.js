document.getElementById('btn-cursos').addEventListener('click', function() {
    document.getElementById('cursos').style.display = 'block';
    document.getElementById('compras').style.display = 'none';
});

document.getElementById('btn-compras').addEventListener('click', function() {
    document.getElementById('cursos').style.display = 'none';
    document.getElementById('compras').style.display = 'block';
});

document.getElementById('cursos').style.display = 'block';
document.getElementById('compras').style.display = 'none';
