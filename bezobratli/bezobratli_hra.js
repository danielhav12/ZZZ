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
    { src: 'https://i.postimg.cc/cJMvC0YW/babo-ka-admiral.webp', name: 'babočka admirál' },
    { src: 'https://i.postimg.cc/dtpkSWvb/babo-ka-koprivova.webp', name: 'babočka kopřivová' },
    { src: 'https://i.postimg.cc/0QVrGncH/babocka-pavi-oko.webp', name: 'babočka paví oko' },
    { src: 'https://i.postimg.cc/V6fdbpBC/belasek.webp', name: 'bělásek' },
    { src: 'https://i.postimg.cc/BnFLWxnX/cmelak.webp', name: 'čmelák' },
    { src: 'https://i.postimg.cc/15fVBxx0/hlemyzd.webp', name: 'hlemýžď' },
    { src: 'https://i.postimg.cc/FzndvpSJ/chrostik.webp', name: 'chrostík' },
    { src: 'https://i.postimg.cc/k4sR1qXs/kliste.webp', name: 'klíště' },
    { src: 'https://i.postimg.cc/63tGfywT/kobylka.webp', name: 'kobylka' },
    { src: 'https://i.postimg.cc/P5vZtg2f/lykozrout-smrkovy.webp', name: 'lýkožrout smrkový' },
    { src: 'https://i.postimg.cc/HnS5xHqn/pestrenka.webp', name: 'pestřenka' },
    { src: 'https://i.postimg.cc/Gt3Gd9S6/pijavka.webp', name: 'pijavka' },
    { src: 'https://i.postimg.cc/nzGByqTv/plz-k.webp', name: 'plzák' },
    { src: 'https://i.postimg.cc/Pxj1VSbX/rak.webp', name: 'rak' },
    { src: 'https://i.postimg.cc/Mpg7V6vj/rumenice.webp', name: 'ruměnice' },
    { src: 'https://i.postimg.cc/vHBfKgnV/sekac.webp', name: 'sekáč' },
    { src: 'https://i.postimg.cc/Kjmrj04q/srsen.webp', name: 'sršeň' },
    { src: 'https://i.postimg.cc/FsWgFgvp/stonozka.webp', name: 'stonožka' },
    { src: 'https://i.postimg.cc/0220qXTr/svetluska.webp', name: 'světluška' },
    { src: 'https://i.postimg.cc/6p8V825X/sidlo.webp', name: 'šídlo' },
    { src: 'https://i.postimg.cc/B69C9S3G/vcela.webp', name: 'včela' },
    { src: 'https://i.postimg.cc/Gpsj5BZQ/vosa.webp', name: 'vosa' }
    ];
} else if (akce === "b") {
 images = [
  
  { src: 'https://i.postimg.cc/gcM63z7k/chrob-k.webp', name: 'chrobák' },
  { src: 'https://i.postimg.cc/8cCJx97S/chroust.webp', name: 'chroust' },
  { src: 'https://i.postimg.cc/43TKXmYw/krizak.webp', name: 'křižák' },
  { src: 'https://i.postimg.cc/pX6zMWQ1/mnohonozka.webp', name: 'mnohonožka' },
  { src: 'https://i.postimg.cc/zDpTpSyN/mot-lice.webp', name: 'motýlice' },
  { src: 'https://i.postimg.cc/tg067BM3/p-sovka.webp', name: 'pásovka' },
  { src: 'https://i.postimg.cc/s2SpJkhH/sarance.webp', name: 'saranče' },
  { src: 'https://i.postimg.cc/XJfknRNB/strevl-k.webp', name: 'střevlík' },
  { src: 'https://i.postimg.cc/kMyvzPhk/skeble.webp', name: 'škeble' },
  { src: 'https://i.postimg.cc/C5JCqbqF/skvor.webp', name: 'škvor' }
  ];
}
  
  let currentImage = null;
  
  function showRandomImage() {
    if (images.length === 0) {
      document.getElementById('image').style.display = 'none';
      document.getElementById('feedback').style.color = 'rgb(7, 80, 0)';
      document.getElementById('feedback').style.marginTop = '4rem';
      document.getElementById('feedback').textContent = 'Šikulka už víš všechno!\u{1F92B}\u{1F9CF}';
      document.getElementById("znovu").style.display = "block";
      document.getElementById("další").style.display = "none";
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
  