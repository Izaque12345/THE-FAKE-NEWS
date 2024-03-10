function toggleCSS() {
  var screenWidth = window.innerWidth;
  var cssLink = document.getElementById('css-link');
  var tituloT = document.getElementById("tituloT");

  if (screenWidth <= 768) {
    cssLink.href = 'Apresentacao(CELL).css';
    tituloT.style.textAlign = "left"
    console.log("Mobile");
  } else {
    cssLink.href = 'Apresentacao(PC).css';
    tituloT.style.textAlign = "left"
    console.log("Desktop");
  }
}

// Chamar a função quando a página carregar e quando a tela for redimensionada
window.addEventListener('load', toggleCSS);
window.addEventListener('resize', toggleCSS);