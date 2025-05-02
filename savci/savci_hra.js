
function prvníVelké(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const images = [
  { src: 'https://i.postimg.cc/KjVSx38Y/bobr.webp' , name: 'bobr'},
  { src: 'https://i.postimg.cc/63Mxbmsn/dan-k.webp' , name: 'daněk'},
  { src: 'https://i.postimg.cc/zBz1j1Qq/jelen.webp' , name: 'jelen'},
  { src: 'https://i.postimg.cc/5tqVLtnP/jezevec.webp' , name: 'jezevec'},
  { src: 'https://i.postimg.cc/wBdz1Ncy/jezek.webp' , name: 'ježek'},
  { src: 'https://i.postimg.cc/NjXYGDTv/kamzik.webp' , name: 'kamzík'},
  { src: 'https://i.postimg.cc/rszXBNcb/kr-l-k.webp' , name: 'králík'},
  { src: 'https://i.postimg.cc/MKvqNqpT/krtek.webp' , name: 'krtek'},
  { src: 'https://i.postimg.cc/BQk4GkjC/krecek.webp' , name: 'křeček'},
  { src: 'https://i.postimg.cc/2jHC0VmM/kuna.webp' , name: 'kuna'},
  { src: 'https://i.postimg.cc/D0zn2KQx/liska.webp' , name: 'liška'},
  { src: 'https://i.postimg.cc/SRtqRtDk/medv-d.webp' , name: 'medvěd'},
  { src: 'https://i.postimg.cc/hjsKWGmJ/muflon.webp' , name: 'muflon'},
  { src: 'https://i.postimg.cc/wBh622TQ/mys.webp' , name: 'myš'},
  { src: 'https://i.postimg.cc/rp6V53cp/netopyr.webp' , name: 'netopýr'},
  { src: 'https://i.postimg.cc/XJ4nz5rS/nutrie.webp' , name: 'nutrie'},
  { src: 'https://i.postimg.cc/FsRHv0Dh/ondatra.webp' , name: 'ondatra'},
  { src: 'https://i.postimg.cc/XNxYtsK2/plch-velky.webp' , name: 'plch'},
  { src: 'https://i.postimg.cc/KvHv84HB/potkan.webp' , name: 'potkan'},
  { src: 'https://i.postimg.cc/br6YbvNX/prase.webp' , name: 'prase'},
  { src: 'https://i.postimg.cc/Jn5zrqfz/rejsek.webp' , name: 'rejsek'},
  { src: 'https://i.postimg.cc/bJhvfMF5/rys.webp' , name: 'rys'},
  { src: 'https://i.postimg.cc/rwRy0cBb/srnec.webp' , name: 'srnec'},
  { src: 'https://i.postimg.cc/RhCVNtmQ/veverka.webp' , name: 'veverka'},
  { src: 'https://i.postimg.cc/6p8qrCvM/vlk.webp' , name: 'vlk'},
  { src: 'https://i.postimg.cc/DwRZBmQn/vydra.webp' , name: 'vydra'},
  { src: 'https://i.postimg.cc/nL7L5ZT7/zaj-c.webp' , name: 'zajíc'}
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
  