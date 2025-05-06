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
    { src: 'https://i.postimg.cc/xTcgzQ8n/bedla-vysok.webp', name: 'Bedla' },
    { src: 'https://i.postimg.cc/sx0cN6nk/hadovka-smrdut.webp', name: 'Hadovka' },
    { src: 'https://i.postimg.cc/QdvzttJ2/hnojn-k-obecn.webp', name: 'Hnojník' },
    { src: 'https://i.postimg.cc/tgPMVjrY/holubinka-jahodov.webp', name: 'holubinka jahodová' },
    { src: 'https://i.postimg.cc/XJk1Qg6W/h-ib-kov.webp', name: 'hřib kovář' },
    { src: 'https://i.postimg.cc/zBrPCcMp/h-ib-satan.webp', name: 'hřib satan' },
    { src: 'https://i.postimg.cc/3NrS6D3v/h-ib-smrkov.webp', name: 'hřib smrkový' },
    { src: 'https://i.postimg.cc/nrdRtcLw/kluzek-sli-n.webp', name: 'klouzek' },
    { src: 'https://i.postimg.cc/28697vcp/kotr-kade-av.webp', name: 'kotrč' },
    { src: 'https://i.postimg.cc/59pkzpmq/koz-k-b-ezov.webp', name: 'kozák' },
    { src: 'https://i.postimg.cc/wjRWSzY0/k-emen-osikov.webp', name: 'křemenáč' },
    { src: 'https://i.postimg.cc/L6bCCXwJ/li-ka-obecn.webp', name: 'liška' },
    { src: 'https://i.postimg.cc/1zxWSd9P/mochom-rka-erven.webp', name: 'muchomůrka červená' },
    { src: 'https://i.postimg.cc/DzqxwcZG/mochom-rka-r-ovka.webp', name: 'muchomůrka růžovka' },
    { src: 'https://i.postimg.cc/hjcpz7z5/mochom-rka-zelen.webp', name: 'muchomůrka zelená' },
    { src: 'https://i.postimg.cc/j5cvzdyd/ryzec-kravsk.webp', name: 'ryzec kravský' },
    { src: 'https://i.postimg.cc/Rq53hwq3/ryzec-pravy.webp', name: 'ryzec pravý' },
    { src: 'https://i.postimg.cc/hvGsMW08/babka-h-ib-lutomas.webp', name: 'babka' },
    { src: 'https://i.postimg.cc/BZhMbbqm/v-clavka-obecn.webp', name: 'václavka' },
    { src: 'https://i.postimg.cc/02TGKJh0/ampion-pe-rka-poln.webp', name: 'žampion' }];
} else if (akce === "b") {
 images = [
    { src: 'https://i.postimg.cc/xTcgzQ8n/bedla-vysok.webp', name: 'Bedla' },
    { src: 'https://i.postimg.cc/sx0cN6nk/hadovka-smrdut.webp', name: 'Hadovka' },
    { src: 'https://i.postimg.cc/QdvzttJ2/hnojn-k-obecn.webp', name: 'Hnojník' },
    { src: 'https://i.postimg.cc/tgPMVjrY/holubinka-jahodov.webp', name: 'holubinka jahodová' },
    { src: 'https://i.postimg.cc/XJk1Qg6W/h-ib-kov.webp', name: 'hřib kovář' },
    { src: 'https://i.postimg.cc/zBrPCcMp/h-ib-satan.webp', name: 'hřib satan' },
    { src: 'https://i.postimg.cc/3NrS6D3v/h-ib-smrkov.webp', name: 'hřib smrkový' },
    { src: 'https://i.postimg.cc/nrdRtcLw/kluzek-sli-n.webp', name: 'klouzek' },
    { src: 'https://i.postimg.cc/28697vcp/kotr-kade-av.webp', name: 'kotrč' },
    { src: 'https://i.postimg.cc/59pkzpmq/koz-k-b-ezov.webp', name: 'kozák' },
    { src: 'https://i.postimg.cc/wjRWSzY0/k-emen-osikov.webp', name: 'křemenáč' },
    { src: 'https://i.postimg.cc/L6bCCXwJ/li-ka-obecn.webp', name: 'liška' },
    { src: 'https://i.postimg.cc/1zxWSd9P/mochom-rka-erven.webp', name: 'muchomůrka červená' },
    { src: 'https://i.postimg.cc/DzqxwcZG/mochom-rka-r-ovka.webp', name: 'muchomůrka růžovka' },
    { src: 'https://i.postimg.cc/hjcpz7z5/mochom-rka-zelen.webp', name: 'muchomůrka zelená' },
    { src: 'https://i.postimg.cc/j5cvzdyd/ryzec-kravsk.webp', name: 'ryzec kravský' },
    { src: 'https://i.postimg.cc/Rq53hwq3/ryzec-pravy.webp', name: 'ryzec pravý' },
    { src: 'https://i.postimg.cc/hvGsMW08/babka-h-ib-lutomas.webp', name: 'babka' },
    { src: 'https://i.postimg.cc/BZhMbbqm/v-clavka-obecn.webp', name: 'václavka' },
    { src: 'https://i.postimg.cc/02TGKJh0/ampion-pe-rka-poln.webp', name: 'žampion' },
    { src: 'https://i.postimg.cc/bNWg05Sb/echranka-podvinut.webp', name: 'čechratka' },
    { src: 'https://i.postimg.cc/vBYtHFCR/ir-vka-fialov.webp', name: 'čirůvka fialová' },
    { src: 'https://i.postimg.cc/TPqc6Y7q/ir-vka-m-jovka.webp', name: 'čirůvka májovka' },
    { src: 'https://i.postimg.cc/BnFgmC2z/hl-va-st-i-n.webp', name: 'hlíva' },
    { src: 'https://i.postimg.cc/W4P7CJn1/holubinka-hl-no-lut.webp', name: 'holubinka hlínožlutá' },
    { src: 'https://i.postimg.cc/MHX0V0Wd/holubinka-namodral.webp', name: 'holubinka namodralá' },
    { src: 'https://i.postimg.cc/JnpcsYWs/holubinka-nazelenal.webp', name: 'holubinka nazelenalá' },
    { src: 'https://i.postimg.cc/0j3Yf6jx/p-chavka-obecn.webp', name: 'pýchavka' },
    { src: 'https://i.postimg.cc/59kS1r3G/suchoh-ib-hn-d.webp', name: 'suchohřib hnědý' },
    { src: 'https://i.postimg.cc/L6YBsVQs/pi-ka-obecn.webp', name: 'špička' }
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
  