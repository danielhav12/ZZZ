
function prvníVelké(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const images = [
  { src: 'https://i.postimg.cc/PqN7rr0p/colek.webp' , name: 'čolek'},
  { src: 'https://i.postimg.cc/FRLn3Crh/jesterka-obecna.webp' , name: 'ješterka obecná'},
  { src: 'https://i.postimg.cc/3w6cyQHL/jesterka-zivoroda.webp' , name: 'ještěrka živorodá'},
  { src: 'https://i.postimg.cc/g2g5W6tb/mlok.webp' , name: 'mlok'},
  { src: 'https://i.postimg.cc/BnSykCgC/ropucha.webp' , name: 'ropucha'},
  { src: 'https://i.postimg.cc/m2NJmnQD/rosni-ka.webp' , name: 'rosnička'},
  { src: 'https://i.postimg.cc/wTdnczRZ/skokan.webp' , name: 'skokan'},
  { src: 'https://i.postimg.cc/BZFdKbb2/slep-s.webp' , name: 'slepýš'},
  { src: 'https://i.postimg.cc/0QTF4RW6/uzovka.webp' , name: 'užovka'},
  { src: 'https://i.postimg.cc/Xq9mSHms/zmije.webp' , name: 'zmije'}
];

  
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
  