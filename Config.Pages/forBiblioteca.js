function toggleCSS() {
  var screenWidth = window.innerWidth;
  var cssLink = document.getElementById('css-link');
  var tituloT = document.getElementById("tituloT");

  if (screenWidth <= 768) {
    cssLink.href = '/docs/Biblioteca/BibliotecaCELL!!.css';
    tituloT.style.textAlign = "left"
    console.log("Mobile");
  } else {
    cssLink.href = '/docs/Biblioteca/BibliotecaPC!!.css';
    tituloT.style.textAlign = "left"
    console.log("Desktop");
  }
}

// Chamar a função quando a página carregar e quando a tela for redimensionada
window.addEventListener('load', toggleCSS);
window.addEventListener('resize', toggleCSS);

// Back Page
function BackPage() {
window.history.back();
}

window.addEventListener('scroll', function() {
var button = document.getElementById('button-home');
var scrollPosition = window.scrollY + window.innerHeight;
var documentHeight = document.body.scrollHeight;

if (scrollPosition >= documentHeight) {
button.style.opacity = '0.5'; // 50% transparente
} else {
button.style.opacity = '1'; // Opacidade normal
}
});
