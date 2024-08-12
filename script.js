// Smooth scroll al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Mostrar mensaje emergente al hacer clic en el botón "LEER MÁS"
document.querySelector('.btn').addEventListener('click', function() {
    alert('Gracias por tu interés en conocer más sobre nuestra historia!');
});

// Cambiar el color del fondo del header cuando se hace scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0b3d91';
    } else {
        header.style.backgroundColor = '#18468a';
    }
});
