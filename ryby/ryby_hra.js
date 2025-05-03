
function prvníVelké(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const images = [
  { src: 'https://i.postimg.cc/vTvhtppw/cand-t.webp' , name: 'candát'},
  { src: 'https://i.postimg.cc/fys5Xwqv/cejn.webp' , name: 'cejn'},
  { src: 'https://i.postimg.cc/jjW8Y3Jy/kapr.webp' , name: 'kapr'},
  { src: 'https://i.postimg.cc/PxY2PLyx/karas.webp' , name: 'karas'},
  { src: 'https://i.postimg.cc/4xxLBxfL/lin.webp' , name: 'lín'},
  { src: 'https://i.postimg.cc/kgYjZPDn/okoun.webp' , name: 'okoun'},
  { src: 'https://i.postimg.cc/pXZcfFH5/pstruh.webp' , name: 'pstruh'},
  { src: 'https://i.postimg.cc/XN9zvP18/sumec.webp' , name: 'sumec'},
  { src: 'https://i.postimg.cc/7YDQJNpy/tika.webp' , name: 'štika'},
  { src: 'https://i.postimg.cc/D0QjYW4D/ho.webp' , name: 'úhoř'}
];

  
  let currentImage = null;
  
  function showRandomImage() {
    if (images.length === 0) {
      document.getElementById('image').style.display = 'none';
      document.getElementById('feedback').style.color = 'rgb(7, 80, 0)';
      document.getElementById('feedback').style.marginTop = '4rem';
      document.getElementById('feedback').textContent = 'Šikulka už víš všechno!\u{1F92B}\u{1F9CF}';
      document.getElementById("znovu").style.display = "inline";
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
  