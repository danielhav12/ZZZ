function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function prvníVelké(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const akce = getParam('akce');
let images = null;


if (akce === "a") {
  images = [
    { src: '', name: 'babočka admirál' },
    { src: '', name: 'babočka kopřivová' },
    { src: '', name: 'babočka paví oko' },
    { src: '', name: 'bělásek' },
    { src: '', name: 'čmelák' },
    { src: '', name: 'hlemýžď' },
    { src: '', name: 'chrostík' },
    { src: '', name: 'klíště' },
    { src: '', name: 'kobylka' },
    { src: '', name: 'lýkožrout smrkový' },
    { src: '', name: 'pestřenka' },
    { src: '', name: 'pijavka' },
    { src: '', name: 'plzák' },
    { src: '', name: 'rak' },
    { src: '', name: 'ruměnice' },
    { src: '', name: 'sekáč' },
    { src: '', name: 'sršeň' },
    { src: '', name: 'stonožka' },
    { src: '', name: 'světluška' },
    { src: '', name: 'šídlo' },
    { src: '', name: 'včela' },
    { src: '', name: 'vosa' }
    ];
} else if (akce === "b") {
 images = [
  { src: '', name: 'babočka admirál' },
  { src: '', name: 'babočka kopřivová' },
  { src: '', name: 'babočka paví oko' },
  { src: '', name: 'bělásek' },
  { src: '', name: 'čmelák' },
  { src: '', name: 'hlemýžď' },
  { src: '', name: 'chrostík' },
  { src: '', name: 'klíště' },
  { src: '', name: 'kobylka' },
  { src: '', name: 'lýkožrout smrkový' },
  { src: '', name: 'pestřenka' },
  { src: '', name: 'pijavka' },
  { src: '', name: 'plzák' },
  { src: '', name: 'rak' },
  { src: '', name: 'ruměnice' },
  { src: '', name: 'sekáč' },
  { src: '', name: 'sršeň' },
  { src: '', name: 'stonožka' },
  { src: '', name: 'světluška' },
  { src: '', name: 'šídlo' },
  { src: '', name: 'včela' },
  { src: '', name: 'vosa' },
  { src: '', name: 'chrobák' },
  { src: '', name: 'chroust' },
  { src: '', name: 'křižák' },
  { src: '', name: 'mnohonožka' },
  { src: '', name: 'motýlice' },
  { src: '', name: 'pásovka' },
  { src: '', name: 'saranče' },
  { src: '', name: 'střevlík' },
  { src: '', name: 'škeble' },
  { src: '', name: 'škvor' }
  ];
}
  
  let currentImage = null;
  
  function showRandomImage() {
    if (images.length === 0) {
      document.getElementById('image').style.display = 'none';
      document.getElementById('feedback').style.color = 'rgb(7, 80, 0)';
      document.getElementById('feedback').style.marginTop = '4rem';
      document.getElementById('feedback').textContent = 'Šikulka už víš všechno!\u{1F92B}\u{1F9CF}';
      return;
    }

    document.getElementById("guessInput").value = "";
    document.getElementById("další").style.marginLeft = "2rem";
    document.getElementById("feedback").textContent = "";
    document.getElementById("guessInput").style.display = "block";
    document.getElementById("kontrola").style.display = "inline";
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage = images[randomIndex];
    document.getElementById('image').src = currentImage.src;
  }
  
  document.getElementById('guessForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userGuess = document.getElementById('guessInput').value.trim().toLowerCase();
  
    if (userGuess === currentImage.name.toLowerCase()) {
      const indexToRemove = images.findIndex(img => img.name === currentImage.name);
      images.splice(indexToRemove, 1);
      document.getElementById("guessInput").style.display = "none";
      document.getElementById("kontrola").style.display = "none";
      document.getElementById("další").style.marginLeft = "5rem";
      document.getElementById('feedback').style.color = 'rgb(7, 80, 0)';
      document.getElementById('feedback').textContent = 'Správně!';
      document.getElementById('guessInput').value = '';
    } else {
      document.getElementById('feedback').textContent = `Špatně je to ${prvníVelké(currentImage.name)}`;
      document.getElementById('feedback').style.color = 'rgb(255, 0, 0)';
      document.getElementById("guessInput").style.display = "none";
      document.getElementById("kontrola").style.display = "none";
      document.getElementById("další").style.marginLeft = "5rem";
    }
  });

showRandomImage();
  