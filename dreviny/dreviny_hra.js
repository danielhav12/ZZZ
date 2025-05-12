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
    { src: ['https://i.postimg.cc/MT7YB3f2/bez-cerny.webp','https://i.postimg.cc/yx7yyh0J/bez-cerny2.webp'], name: 'bez černý' },
    { src: ['https://i.postimg.cc/fRy5Pvpm/borovice-lesni.webp','https://i.postimg.cc/QdzSZTZP/borovice-lesni2.webp'], name: 'borovice' },
    { src: ['https://i.postimg.cc/wMz0bYYj/brusnice-brusinka.webp','https://i.postimg.cc/wMz0bYYj/brusnice-brusinka.webp'], name: 'brusnice brusinka' },
    { src: ['https://i.postimg.cc/FR3TZsq6/b-ectan-pop-navy.webp','https://i.postimg.cc/FR3TZsq6/b-ectan-pop-navy.webp'], name: 'břečťan' },
    { src: ['https://i.postimg.cc/MKddtLPz/briza-belokora.webp','https://i.postimg.cc/659MrKhH/briza-belokora2.webp'], name: 'bříza' },
    { src: ['https://i.postimg.cc/SKXTnGGk/buk-lesni.webp','https://i.postimg.cc/PqB6Y86Z/buk-lesni2.webp'], name: 'buk' },
    { src: ['https://i.postimg.cc/L6T0w5XK/dub-letni.webp','https://i.postimg.cc/1377Rdwv/dub-letni2.webp'], name: 'dub' },
    { src: ['https://i.postimg.cc/XqKDV7k5/habr-obecny.webp','https://i.postimg.cc/ry5HGQ2p/habr-obecny2.webp'], name: 'habr' },
    { src: ['https://i.postimg.cc/WzcHLJgj/hloh-obecny.webp','https://i.postimg.cc/C1qQQ4Zm/hloh-obecny2.webp'], name: 'hloh' },
    { src: ['https://i.postimg.cc/QMVPpDjL/jalovec-obecny.webp','https://i.postimg.cc/DzDN6NzS/jalovec-obecny2.webp'], name: 'jalovec' },
    { src: ['https://i.postimg.cc/c4ZbFwdB/jasan-ztepil.webp','https://i.postimg.cc/Sxg32RF7/jasan-ztepily2.webp'], name: 'jasan' },
    { src: ['https://i.postimg.cc/J4c98KpF/javor-babyka.webp','https://i.postimg.cc/Cxh9xDtx/javor-babyka2.webp'], name: 'javor babyka' },
    { src: ['https://i.postimg.cc/SNpwHHf8/javor-klen.webp','https://i.postimg.cc/1RFkCyws/javor-klen2.webp'], name: 'javor klen' },
    { src: ['https://i.postimg.cc/5y8D6mb6/javor-mlec.webp','https://i.postimg.cc/LXYcMpWk/javor-mlec2.webp'], name: 'javor mléč' },
    { src: ['https://i.postimg.cc/43FDMdWN/jedle-belokora.webp','https://i.postimg.cc/xCwWfZrw/jedle-belokora2.webp'], name: 'jedle' },
    { src: ['https://i.postimg.cc/HLxGB54h/jerab-cerveny.webp','https://i.postimg.cc/P5dnv0Lh/jerab-cerveny2.webp'], name: 'jeřáb' },
    { src: ['https://i.postimg.cc/jdHr5RSZ/jilm-horsky.webp','https://i.postimg.cc/zGpZCpWh/jilm-horsky2.webp'], name: 'jilm' },
    { src: ['https://i.postimg.cc/RCnBk75r/jirovec-madal.webp','https://i.postimg.cc/nzNtszmw/jirovec-madal2.webp'], name: 'jírovec maďal' },
    { src: ['https://i.postimg.cc/3RkTJpkv/krusina-olsova.webp','https://i.postimg.cc/Jh48vSmK/krusina-olsova2.webp'], name: 'krušina' },
    { src: ['https://i.postimg.cc/zGN8SVcs/lipa-srdcita.webp','https://i.postimg.cc/fTmM9xB7/lipa-srdcita2.webp'], name: 'lípa' },
    { src: ['https://i.postimg.cc/52m1Pfc6/liska-obecna.webp','https://i.postimg.cc/52m1Pfc6/liska-obecna.webp'], name: 'líska' },
    { src: ['https://i.postimg.cc/mZ0bkdN2/modrin-opadavy.webp','https://i.postimg.cc/xjkf0rm4/modrin-opadavy2.webp'], name: 'modřín' },
    { src: ['https://i.postimg.cc/Th8Hx5bf/olse-lepkava.webp','https://i.postimg.cc/XJJPkb3S/olse-lepkava2.webp'], name: 'olše' },
    { src: ['https://i.postimg.cc/NGn3b55N/ruze-sipkova.webp','https://i.postimg.cc/Z58XTHjg/ruze-sipkova2.webp'], name: 'růže' },
    { src: ['https://i.postimg.cc/pXngSRjP/smrk-ztepily.webp','https://i.postimg.cc/pXngSRjP/smrk-ztepily.webp'], name: 'smrk' },
    { src: ['https://i.postimg.cc/MTKC3B7L/tis-cerveny.webp','https://i.postimg.cc/MTKC3B7L/tis-cerveny.webp'], name: 'tis' },
    { src: ['https://i.postimg.cc/L8jFJ24x/topol-cerny.webp','https://i.postimg.cc/L8jFJ24x/topol-cerny.webp'], name: 'topol' },
    { src: ['https://i.postimg.cc/dtbKQLF7/trnovnik-akat.webp','https://i.postimg.cc/rpJ69jrW/trnovnik-akat2.webp'], name: 'trnovník akát' },
    { src: ['https://i.postimg.cc/TYL6XnzM/vrba-bila.webp','https://i.postimg.cc/TYL6XnzM/vrba-bila.webp'], name: 'vrba' },
    { src: ['https://i.postimg.cc/v8Ssj0St/vres-obecny.webp','https://i.postimg.cc/v8Ssj0St/vres-obecny.webp'], name: 'vřes' }
  ];
} else if (akce === "b") {
 images = [
    { src: ['https://i.postimg.cc/MT7YB3f2/bez-cerny.webp','https://i.postimg.cc/yx7yyh0J/bez-cerny2.webp'], name: 'bez černý' },
    { src: ['https://i.postimg.cc/fRy5Pvpm/borovice-lesni.webp','https://i.postimg.cc/QdzSZTZP/borovice-lesni2.webp'], name: 'borovice' },
    { src: ['https://i.postimg.cc/wMz0bYYj/brusnice-brusinka.webp','https://i.postimg.cc/wMz0bYYj/brusnice-brusinka.webp'], name: 'brusnice brusinka' },
    { src: ['https://i.postimg.cc/FR3TZsq6/b-ectan-pop-navy.webp','https://i.postimg.cc/FR3TZsq6/b-ectan-pop-navy.webp'], name: 'břečťan' },
    { src: ['https://i.postimg.cc/MKddtLPz/briza-belokora.webp','https://i.postimg.cc/659MrKhH/briza-belokora2.webp'], name: 'bříza' },
    { src: ['https://i.postimg.cc/SKXTnGGk/buk-lesni.webp','https://i.postimg.cc/PqB6Y86Z/buk-lesni2.webp'], name: 'buk' },
    { src: ['https://i.postimg.cc/L6T0w5XK/dub-letni.webp','https://i.postimg.cc/1377Rdwv/dub-letni2.webp'], name: 'dub' },
    { src: ['https://i.postimg.cc/XqKDV7k5/habr-obecny.webp','https://i.postimg.cc/ry5HGQ2p/habr-obecny2.webp'], name: 'habr' },
    { src: ['https://i.postimg.cc/WzcHLJgj/hloh-obecny.webp','https://i.postimg.cc/C1qQQ4Zm/hloh-obecny2.webp'], name: 'hloh' },
    { src: ['https://i.postimg.cc/QMVPpDjL/jalovec-obecny.webp','https://i.postimg.cc/DzDN6NzS/jalovec-obecny2.webp'], name: 'jalovec' },
    { src: ['https://i.postimg.cc/c4ZbFwdB/jasan-ztepil.webp','https://i.postimg.cc/Sxg32RF7/jasan-ztepily2.webp'], name: 'jasan' },
    { src: ['https://i.postimg.cc/J4c98KpF/javor-babyka.webp','https://i.postimg.cc/Cxh9xDtx/javor-babyka2.webp'], name: 'javor babyka' },
    { src: ['https://i.postimg.cc/SNpwHHf8/javor-klen.webp','https://i.postimg.cc/1RFkCyws/javor-klen2.webp'], name: 'javor klen' },
    { src: ['https://i.postimg.cc/5y8D6mb6/javor-mlec.webp','https://i.postimg.cc/LXYcMpWk/javor-mlec2.webp'], name: 'javor mléč' },
    { src: ['https://i.postimg.cc/43FDMdWN/jedle-belokora.webp','https://i.postimg.cc/xCwWfZrw/jedle-belokora2.webp'], name: 'jedle' },
    { src: ['https://i.postimg.cc/HLxGB54h/jerab-cerveny.webp','https://i.postimg.cc/P5dnv0Lh/jerab-cerveny2.webp'], name: 'jeřáb' },
    { src: ['https://i.postimg.cc/jdHr5RSZ/jilm-horsky.webp','https://i.postimg.cc/zGpZCpWh/jilm-horsky2.webp'], name: 'jilm' },
    { src: ['https://i.postimg.cc/RCnBk75r/jirovec-madal.webp','https://i.postimg.cc/nzNtszmw/jirovec-madal2.webp'], name: 'jírovec maďal' },
    { src: ['https://i.postimg.cc/3RkTJpkv/krusina-olsova.webp','https://i.postimg.cc/Jh48vSmK/krusina-olsova2.webp'], name: 'krušina' },
    { src: ['https://i.postimg.cc/zGN8SVcs/lipa-srdcita.webp','https://i.postimg.cc/fTmM9xB7/lipa-srdcita2.webp'], name: 'lípa' },
    { src: ['https://i.postimg.cc/52m1Pfc6/liska-obecna.webp','https://i.postimg.cc/52m1Pfc6/liska-obecna.webp'], name: 'líska' },
    { src: ['https://i.postimg.cc/mZ0bkdN2/modrin-opadavy.webp','https://i.postimg.cc/xjkf0rm4/modrin-opadavy2.webp'], name: 'modřín' },
    { src: ['https://i.postimg.cc/Th8Hx5bf/olse-lepkava.webp','https://i.postimg.cc/XJJPkb3S/olse-lepkava2.webp'], name: 'olše' },
    { src: ['https://i.postimg.cc/NGn3b55N/ruze-sipkova.webp','https://i.postimg.cc/Z58XTHjg/ruze-sipkova2.webp'], name: 'růže' },
    { src: ['https://i.postimg.cc/pXngSRjP/smrk-ztepily.webp','https://i.postimg.cc/pXngSRjP/smrk-ztepily.webp'], name: 'smrk' },
    { src: ['https://i.postimg.cc/MTKC3B7L/tis-cerveny.webp','https://i.postimg.cc/MTKC3B7L/tis-cerveny.webp'], name: 'tis' },
    { src: ['https://i.postimg.cc/L8jFJ24x/topol-cerny.webp','https://i.postimg.cc/L8jFJ24x/topol-cerny.webp'], name: 'topol' },
    { src: ['https://i.postimg.cc/dtbKQLF7/trnovnik-akat.webp','https://i.postimg.cc/rpJ69jrW/trnovnik-akat2.webp'], name: 'trnovník akát' },
    { src: ['https://i.postimg.cc/TYL6XnzM/vrba-bila.webp','https://i.postimg.cc/TYL6XnzM/vrba-bila.webp'], name: 'vrba' },
    { src: ['https://i.postimg.cc/v8Ssj0St/vres-obecny.webp','https://i.postimg.cc/v8Ssj0St/vres-obecny.webp'], name: 'vřes' },
    { src: ['https://i.postimg.cc/KYgfG8ZY/bez-hroznaty.webp','https://i.postimg.cc/KYgfG8ZY/bez-hroznaty.webp'], name: 'bez hroznatý' },
    { src: ['https://i.postimg.cc/XJS8p6Jk/brslen-evropsky.webp','https://i.postimg.cc/XJS8p6Jk/brslen-evropsky.webp'], name: 'brslen' },
    { src: ['https://i.postimg.cc/FHHn4vdf/douglaska-tisolista.webp','https://i.postimg.cc/FHHn4vdf/douglaska-tisolista.webp'], name: 'douglaska' },
    { src: ['https://i.postimg.cc/HsDgdrdr/kastanovnik-sety.webp','https://i.postimg.cc/HsDgdrdr/kastanovnik-sety.webp'], name: 'kaštanovník' },
    { src: ['https://i.postimg.cc/BvY30Nn3/lykovec-jedovaty.webp','https://i.postimg.cc/BvY30Nn3/lykovec-jedovaty.webp'], name: 'lýkovec' },
    { src: ['https://i.postimg.cc/mrTJh95r/ostruznik-krovity.webp','https://i.postimg.cc/mrTJh95r/ostruznik-krovity.webp'], name: 'ostružiník' },
    { src: ['https://i.postimg.cc/cJTj3JpB/pajasan-zlaznaty.webp','https://i.postimg.cc/cJTj3JpB/pajasan-zlaznaty.webp'], name: 'pajasan' },
    { src: ['https://i.postimg.cc/pT6606X9/platan-javorolisty.webp','https://i.postimg.cc/Mp2h2N0V/platan-javorolisty2.webp'], name: 'platan' },
    { src: ['https://i.postimg.cc/MTPhCGtp/Stremcha-obecna.webp','https://i.postimg.cc/WzdQTPf6/stremcha-obecna2.webp'], name: 'střemcha' },
    { src: ['https://i.postimg.cc/yx5CZNSb/zerav-thuje.webp','https://i.postimg.cc/ydLH7j6B/zerav-thuje2.webp'], name: 'zerav' },
  ];
}
  
  let currentImage = null;
  
  function showRandomImage() {
    if (images.length === 0) {
      document.getElementById('image').style.display = 'none';
      document.getElementById('image2').style.display = 'none';
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
    document.getElementById('image').src = currentImage.src[1];
    document.getElementById('image2').src = currentImage.src[2];
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
  