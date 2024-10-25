document.addEventListener('DOMContentLoaded', function() {
    const imagens = [
        'img/slider1.jpg',
        'img/slider2.jpg',
        'img/slider3.jpg'

    ];

    const imagem = document.querySelector('.banner img');
    imagem.src = imagens[0];
    setInterval(trocarImagem, 3000);

    function trocarImagem(){
        
        const primeiro = imagens.shift(); // Remove a primeira imagem do array
        imagens.push(primeiro); // Coloca a imagem no final do array

        const novoPrimeiro = imagens[0];
        imagem.src = novoPrimeiro;
    }

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');

    });
});