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
    { src: 'https://i.postimg.cc/LsscYVgs/ba-ant-obecn.webp', name: 'bažant' },
    { src: 'https://i.postimg.cc/htKWgnST/cap-bily.webp', name: 'čáp bílý' },
    { src: 'https://i.postimg.cc/Fsy52zQh/cap-cerny.webp', name: 'čáp černý' },
    { src: 'https://i.postimg.cc/htMFtYjw/datel.webp', name: 'datel' },
    { src: 'https://i.postimg.cc/kG83MX6F/havran.webp', name: 'havran' },
    { src: 'https://i.postimg.cc/DZR3KbZw/holub.webp', name: 'holub' },
    { src: 'https://i.postimg.cc/wxsdQFfy/husa.webp', name: 'husa' },
    { src: 'https://i.postimg.cc/rpFkGk3M/kachna.webp', name: 'kachna' },
    { src: 'https://i.postimg.cc/bwRP2J6m/k-n-lesn.webp', name: 'káně' },
    { src: 'https://i.postimg.cc/PrYTTK1s/kos.webp', name: 'kos' },
    { src: 'https://i.postimg.cc/CMWS39Bs/kuka-ka.webp', name: 'kukačka' },
    { src: 'https://i.postimg.cc/J0HY36R1/labut.webp', name: 'labuť' },
    { src: 'https://i.postimg.cc/dQ7JSJ10/led-ek-n.webp', name: 'ledňáček' },
    { src: 'https://i.postimg.cc/gr9SgV03/racek.webp', name: 'racek' },
    { src: 'https://i.postimg.cc/8CwYTfyV/sojka-obecn.webp', name: 'sojka' },
    { src: 'https://i.postimg.cc/bvqMX99T/sokol.webp', name: 'sokol' },
    { src: 'https://i.postimg.cc/7Z8d9kCj/sova.webp', name: 'sova' },
    { src: 'https://i.postimg.cc/br4MKXmD/straka.webp', name: 'straka' },
    { src: 'https://i.postimg.cc/15NbDtzp/strakapoud-velk.webp', name: 'strakapoud' },
    { src: 'https://i.postimg.cc/W3Wxwqr7/s-kora-ko-adra.webp', name: 'sýkora koňadra' },
    { src: 'https://i.postimg.cc/8kYqFWTp/s-kora-mod-inka.webp', name: 'sýkora modřinka' },
    { src: 'https://i.postimg.cc/qRM9KxtR/vlastovka.webp', name: 'vlaštovka' },
    { src: 'https://i.postimg.cc/7LDvHkwS/volavka.webp', name: 'volavka' },
    { src: 'https://i.postimg.cc/Nf9vbDd2/vrabec-dom-c.webp', name: 'vrabec' },
    { src: 'https://i.postimg.cc/rw5X2mX8/vyr.webp', name: 'výr' }
];
} else if (akce === "b") {
 images = [
    { src: 'https://i.postimg.cc/LsscYVgs/ba-ant-obecn.webp', name: 'bažant' },
    { src: 'https://i.postimg.cc/htKWgnST/cap-bily.webp', name: 'čáp bílý' },
    { src: 'https://i.postimg.cc/Fsy52zQh/cap-cerny.webp', name: 'čáp černý' },
    { src: 'https://i.postimg.cc/htMFtYjw/datel.webp', name: 'datel' },
    { src: 'https://i.postimg.cc/kG83MX6F/havran.webp', name: 'havran' },
    { src: 'https://i.postimg.cc/DZR3KbZw/holub.webp', name: 'holub' },
    { src: 'https://i.postimg.cc/wxsdQFfy/husa.webp', name: 'husa' },
    { src: 'https://i.postimg.cc/rpFkGk3M/kachna.webp', name: 'kachna' },
    { src: 'https://i.postimg.cc/bwRP2J6m/k-n-lesn.webp', name: 'káně' },
    { src: 'https://i.postimg.cc/PrYTTK1s/kos.webp', name: 'kos' },
    { src: 'https://i.postimg.cc/CMWS39Bs/kuka-ka.webp', name: 'kukačka' },
    { src: 'https://i.postimg.cc/J0HY36R1/labut.webp', name: 'labuť' },
    { src: 'https://i.postimg.cc/dQ7JSJ10/led-ek-n.webp', name: 'ledňáček' },
    { src: 'https://i.postimg.cc/gr9SgV03/racek.webp', name: 'racek' },
    { src: 'https://i.postimg.cc/8CwYTfyV/sojka-obecn.webp', name: 'sojka' },
    { src: 'https://i.postimg.cc/bvqMX99T/sokol.webp', name: 'sokol' },
    { src: 'https://i.postimg.cc/7Z8d9kCj/sova.webp', name: 'sova' },
    { src: 'https://i.postimg.cc/br4MKXmD/straka.webp', name: 'straka' },
    { src: 'https://i.postimg.cc/15NbDtzp/strakapoud-velk.webp', name: 'strakapoud' },
    { src: 'https://i.postimg.cc/W3Wxwqr7/s-kora-ko-adra.webp', name: 'sýkora koňadra' },
    { src: 'https://i.postimg.cc/8kYqFWTp/s-kora-mod-inka.webp', name: 'sýkora modřinka' },
    { src: 'https://i.postimg.cc/qRM9KxtR/vlastovka.webp', name: 'vlaštovka' },
    { src: 'https://i.postimg.cc/7LDvHkwS/volavka.webp', name: 'volavka' },
    { src: 'https://i.postimg.cc/Nf9vbDd2/vrabec-dom-c.webp', name: 'vrabec' },
    { src: 'https://i.postimg.cc/rw5X2mX8/vyr.webp', name: 'výr' },
    { src: 'https://i.postimg.cc/W4fQMJ0w/brhl-k-lesn.webp', name: 'brhlík' },
    { src: 'https://i.postimg.cc/YqKBngZX/ervenka-obecn.webp', name: 'červenka' },
    { src: 'https://i.postimg.cc/pTmM7BPS/hrdli-ka-zahradn.webp', name: 'hrdlička' },
    { src: 'https://i.postimg.cc/3xh7RpZy/kormoran.webp', name: 'kormorán' },
    { src: 'https://i.postimg.cc/Y9syWKKn/p-nkava-obecn.webp', name: 'pěnkava' },
    { src: 'https://i.postimg.cc/gJJTjc5L/po-tolka-obecn.webp', name: 'poštolka' },
    { src: 'https://i.postimg.cc/SRn3TQfb/stehl-k-obecn.webp', name: 'stehlík' },
    { src: 'https://i.postimg.cc/3wZsWcxV/sycek.webp', name: 'sýček' },
    { src: 'https://i.postimg.cc/g2V5BT8j/spacek.webp', name: 'špaček' },
    { src: 'https://i.postimg.cc/MKC2LBLP/zvonek-zelen.webp', name: 'zvonek' }
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
  