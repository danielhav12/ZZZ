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
    { src: 'https://i.postimg.cc/NGZjqrq2/blatouch-bahenn.webp', name: 'blatouch' },
    { src: 'https://i.postimg.cc/ryDwPNbL/bledule-jarni.webp', name: 'bledule' },
    { src: 'https://i.postimg.cc/d3bXHYfD/bodlak-obecny.webp', name: 'bodlák' },
    { src: 'https://i.postimg.cc/fytpfLB6/bolsevnik-velkolepy.webp', name: 'bolševník' },
    { src: 'https://i.postimg.cc/sX0bWS9Y/cekanka-obecna.webp', name: 'čekanka' },
    { src: 'https://i.postimg.cc/fbCGw1Vg/devetsil-bily.webp', name: 'devětsil' },
    { src: 'https://i.postimg.cc/G2pZ9zY3/divizna-velkokveta.webp', name: 'divizna' },
    { src: 'https://i.postimg.cc/NfTfgfBJ/hermanek-pravy.webp', name: 'heřmánek' },
    { src: 'https://i.postimg.cc/rwXXg16g/hluchavka-bila.webp', name: 'hluchavka' },
    { src: 'https://i.postimg.cc/ZqJkzJ5d/hrachor-lucni.webp', name: 'hrachor' },
    { src: 'https://i.postimg.cc/02J1pt4b/chmel-otacivy.webp', name: 'chmel' },
    { src: 'https://i.postimg.cc/htLFYXcn/chrpa-modra.webp', name: 'chrpa' },
    { src: 'https://i.postimg.cc/HnFGq5rY/jetel-plazivy.webp', name: 'jetel' },
    { src: 'https://i.postimg.cc/mZnG1x8v/jitrocel-kopinaty.webp', name: 'jitrocel' },
    { src: 'https://i.postimg.cc/7h58tXYt/kakost-lucni.webp', name: 'kakost' },
    { src: 'https://i.postimg.cc/rmn297ct/kaprad-samec.webp', name: 'kapraď' },
    { src: 'https://i.postimg.cc/d1tKrJMY/kokoska-pastusi-tobolka.webp', name: 'kokoška' },
    { src: 'https://i.postimg.cc/MGwwZydX/kontrihel-obecny.webp', name: 'kontryhel' },
    { src: 'https://i.postimg.cc/hG0BXf5s/konvalinka-vonn.webp', name: 'konvalinka' },
    { src: 'https://i.postimg.cc/dVrvKWRz/kopriva-dvoudoma.webp', name: 'kopřiva' },
    { src: 'https://i.postimg.cc/4NrZqCc6/kostival-lekarsky.webp', name: 'kostival' },
    { src: 'https://i.postimg.cc/Kcpm73vs/kridlatka-japonsk.webp', name: 'křídlatka' },
    { src: 'https://i.postimg.cc/HnndDd32/leknin-bily.webp', name: 'leknín' },
    { src: 'https://i.postimg.cc/kXVqTM2M/lopuch-plstnaty.webp', name: 'lopuch' },
    { src: 'https://i.postimg.cc/ZnQZJ2Mh/mak-vlci.webp', name: 'mák' },
    { src: 'https://i.postimg.cc/851T4h6x/m-ta-dlouholista.webp', name: 'máta' },
    { src: 'https://i.postimg.cc/KY7Zt9Rn/materidouska-vejcita.webp', name: 'mateřídouška' },
    { src: 'https://i.postimg.cc/XJQ4zpKq/netykavka-malokvetna.webp', name: 'netýkavka' },
    { src: 'https://i.postimg.cc/FsqsvdMJ/orobinec-uzkolisty.webp', name: 'orobinec' },
    { src: 'https://i.postimg.cc/gkrk1qTW/pelynek-cernobyl.webp', name: 'pelyněk' },
    { src: 'https://i.postimg.cc/q7HJhfMJ/podbel-lekarsky.webp', name: 'podběl' },
    { src: 'https://i.postimg.cc/fyqWJJkp/pomnenka-lesni.webp', name: 'pomněnka' },
    { src: 'https://i.postimg.cc/RF9ZYkjs/prvosenka-jarni.webp', name: 'prvosenka' },
    { src: 'https://i.postimg.cc/mkg2LQZ7/preslicka-rolni.webp', name: 'přeslička' },
    { src: 'https://i.postimg.cc/VsKk7H4g/rebricek-obecny.webp', name: 'řebříček' },
    { src: 'https://i.postimg.cc/DZgw3Ch2/sasanka-hajni.webp', name: 'sasanka' },
    { src: 'https://i.postimg.cc/2SZjSjY9/sedmikraska-chudobka.webp', name: 'sedmikráska' },
    { src: 'https://i.postimg.cc/3xtMhP4f/smetanka-lekarska.webp', name: 'smetánka' },
    { src: 'https://i.postimg.cc/HxqDKXcp/snezenka-posneznik.webp', name: 'sněženka' },
    { src: 'https://i.postimg.cc/Vkm1mq7v/srha-lalocnata.webp', name: 'srha' },
    { src: 'https://i.postimg.cc/MGr87hzf/starcek-obecny.webp', name: 'starček' },
    { src: 'https://i.postimg.cc/TY8fHMgr/svizel-pritula.webp', name: 'svízel' },
    { src: 'https://i.postimg.cc/qvwrRNYL/stavel-kysely.webp', name: 'šťavel' },
    { src: 'https://i.postimg.cc/8CCSr1gV/stovik-kysely.webp', name: 'šťovík' },
    { src: 'https://i.postimg.cc/xTKYwx3B/trezalka-teckovana.webp', name: 'třezalka' },
    { src: 'https://i.postimg.cc/8cvDPtQJ/violka-vonn.webp', name: 'violka' },
    { src: 'https://i.postimg.cc/qRS4TWYH/vlci-bob-mnoholisty.webp', name: 'vlčí bob' },
    { src: 'https://i.postimg.cc/rmKM7qf9/vrani-oko-ctyrlstei.webp', name: 'vraní oko' },
    { src: 'https://i.postimg.cc/s2fV9YSq/vrbka-uzkolista.webp', name: 'vrbka' },
    { src: 'https://i.postimg.cc/wjpx38B6/zvonek-rozkladity.webp', name: 'zvonek' }
  ];
} else if (akce === "b") {
 images = [
  { src: 'https://i.postimg.cc/NGZjqrq2/blatouch-bahenn.webp', name: 'blatouch' },
  { src: 'https://i.postimg.cc/ryDwPNbL/bledule-jarni.webp', name: 'bledule' },
  { src: 'https://i.postimg.cc/d3bXHYfD/bodlak-obecny.webp', name: 'bodlák' },
  { src: 'https://i.postimg.cc/fytpfLB6/bolsevnik-velkolepy.webp', name: 'bolševník' },
  { src: 'https://i.postimg.cc/sX0bWS9Y/cekanka-obecna.webp', name: 'čekanka' },
  { src: 'https://i.postimg.cc/fbCGw1Vg/devetsil-bily.webp', name: 'devětsil' },
  { src: 'https://i.postimg.cc/G2pZ9zY3/divizna-velkokveta.webp', name: 'divizna' },
  { src: 'https://i.postimg.cc/NfTfgfBJ/hermanek-pravy.webp', name: 'heřmánek' },
  { src: 'https://i.postimg.cc/rwXXg16g/hluchavka-bila.webp', name: 'hluchavka' },
  { src: 'https://i.postimg.cc/ZqJkzJ5d/hrachor-lucni.webp', name: 'hrachor' },
  { src: 'https://i.postimg.cc/02J1pt4b/chmel-otacivy.webp', name: 'chmel' },
  { src: 'https://i.postimg.cc/htLFYXcn/chrpa-modra.webp', name: 'chrpa' },
  { src: 'https://i.postimg.cc/HnFGq5rY/jetel-plazivy.webp', name: 'jetel' },
  { src: 'https://i.postimg.cc/mZnG1x8v/jitrocel-kopinaty.webp', name: 'jitrocel' },
  { src: 'https://i.postimg.cc/7h58tXYt/kakost-lucni.webp', name: 'kakost' },
  { src: 'https://i.postimg.cc/rmn297ct/kaprad-samec.webp', name: 'kapraď' },
  { src: 'https://i.postimg.cc/d1tKrJMY/kokoska-pastusi-tobolka.webp', name: 'kokoška' },
  { src: 'https://i.postimg.cc/MGwwZydX/kontrihel-obecny.webp', name: 'kontryhel' },
  { src: 'https://i.postimg.cc/hG0BXf5s/konvalinka-vonn.webp', name: 'konvalinka' },
  { src: 'https://i.postimg.cc/dVrvKWRz/kopriva-dvoudoma.webp', name: 'kopřiva' },
  { src: 'https://i.postimg.cc/4NrZqCc6/kostival-lekarsky.webp', name: 'kostival' },
  { src: 'https://i.postimg.cc/Kcpm73vs/kridlatka-japonsk.webp', name: 'křídlatka' },
  { src: 'https://i.postimg.cc/HnndDd32/leknin-bily.webp', name: 'leknín' },
  { src: 'https://i.postimg.cc/kXVqTM2M/lopuch-plstnaty.webp', name: 'lopuch' },
  { src: 'https://i.postimg.cc/ZnQZJ2Mh/mak-vlci.webp', name: 'mák' },
  { src: 'https://i.postimg.cc/851T4h6x/m-ta-dlouholista.webp', name: 'máta' },
  { src: 'https://i.postimg.cc/KY7Zt9Rn/materidouska-vejcita.webp', name: 'mateřídouška' },
  { src: 'https://i.postimg.cc/XJQ4zpKq/netykavka-malokvetna.webp', name: 'netýkavka' },
  { src: 'https://i.postimg.cc/FsqsvdMJ/orobinec-uzkolisty.webp', name: 'orobinec' },
  { src: 'https://i.postimg.cc/gkrk1qTW/pelynek-cernobyl.webp', name: 'pelyněk' },
  { src: 'https://i.postimg.cc/q7HJhfMJ/podbel-lekarsky.webp', name: 'podběl' },
  { src: 'https://i.postimg.cc/fyqWJJkp/pomnenka-lesni.webp', name: 'pomněnka' },
  { src: 'https://i.postimg.cc/RF9ZYkjs/prvosenka-jarni.webp', name: 'prvosenka' },
  { src: 'https://i.postimg.cc/mkg2LQZ7/preslicka-rolni.webp', name: 'přeslička' },
  { src: 'https://i.postimg.cc/VsKk7H4g/rebricek-obecny.webp', name: 'řebříček' },
  { src: 'https://i.postimg.cc/DZgw3Ch2/sasanka-hajni.webp', name: 'sasanka' },
  { src: 'https://i.postimg.cc/2SZjSjY9/sedmikraska-chudobka.webp', name: 'sedmikráska' },
  { src: 'https://i.postimg.cc/3xtMhP4f/smetanka-lekarska.webp', name: 'smetánka' },
  { src: 'https://i.postimg.cc/HxqDKXcp/snezenka-posneznik.webp', name: 'sněženka' },
  { src: 'https://i.postimg.cc/Vkm1mq7v/srha-lalocnata.webp', name: 'srha' },
  { src: 'https://i.postimg.cc/MGr87hzf/starcek-obecny.webp', name: 'starček' },
  { src: 'https://i.postimg.cc/TY8fHMgr/svizel-pritula.webp', name: 'svízel' },
  { src: 'https://i.postimg.cc/qvwrRNYL/stavel-kysely.webp', name: 'šťavel' },
  { src: 'https://i.postimg.cc/8CCSr1gV/stovik-kysely.webp', name: 'šťovík' },
  { src: 'https://i.postimg.cc/xTKYwx3B/trezalka-teckovana.webp', name: 'třezalka' },
  { src: 'https://i.postimg.cc/8cvDPtQJ/violka-vonn.webp', name: 'violka' },
  { src: 'https://i.postimg.cc/qRS4TWYH/vlci-bob-mnoholisty.webp', name: 'vlčí bob' },
  { src: 'https://i.postimg.cc/rmKM7qf9/vrani-oko-ctyrlstei.webp', name: 'vraní oko' },
  { src: 'https://i.postimg.cc/s2fV9YSq/vrbka-uzkolista.webp', name: 'vrbka' },
  { src: 'https://i.postimg.cc/wjpx38B6/zvonek-rozkladity.webp', name: 'zvonek' },
  { src: 'https://i.postimg.cc/B6Dwjyb0/bojinek-lucni.webp', name: 'bojínek' },
  { src: 'https://i.postimg.cc/MKYN0hDZ/cernys-hajni.webp', name: 'černýš' },
  { src: 'https://i.postimg.cc/Z5KgwV78/durman-obecny.webp', name: 'durman' },
  { src: 'https://i.postimg.cc/ncxNDHqw/jaternik-podleska.webp', name: 'jaterník'},
  { src: 'https://i.postimg.cc/2yQJKJNw/koniklec-lucni.webp', name: 'koniklec' },
  { src: 'https://i.postimg.cc/T2gZ1y5D/lebeda-rozkladita.webp', name: 'lebeda' },
  { src: 'https://i.postimg.cc/fynp5spy/lnice-kvetel.webp', name: 'lnice' },
  { src: 'https://i.postimg.cc/k4tLxGjL/locika-kompasov.webp', name: 'locika' },
  { src: 'https://i.postimg.cc/dVHfprpz/mochna-husi.webp', name: 'mochna' },
  { src: 'https://i.postimg.cc/q7F9hyG8/naprstn-k-velkokvety.webp', name: 'náprstník' },
  { src: 'https://i.postimg.cc/9f06QJym/ostrice-obecna.webp', name: 'ostřice' },
  { src: 'https://i.postimg.cc/Mp6khWTj/pryskyrnik-prudky.webp', name: 'pryskyřník' },
  { src: 'https://i.postimg.cc/BQc9Y8q0/prysec-kolovratec.webp', name: 'pryšec' },
  { src: 'https://i.postimg.cc/y6RzRQtW/ptacinec-prostredni.webp', name: 'ptačinec' },
  { src: 'https://i.postimg.cc/rs5XLsx5/pupava-bezlodyzna.webp', name: 'pupava' },
  { src: 'https://i.postimg.cc/WbPcwmc8/rozrazil-l-ka-sk.webp', name: 'rozrazil' },
  { src: 'https://i.postimg.cc/NM9vpp0J/rulik-zlomocny.webp', name: 'rulík' },
  { src: 'https://i.postimg.cc/Kc3mNvkG/stulik-zluty.webp', name: 'stulík' },
  { src: 'https://i.postimg.cc/CKvwvRs1/vlastovicnik-vetsi.webp', name: 'vlaštovičník' },
  { src: 'https://i.postimg.cc/9QYm784y/vratic-obecn.webp', name: 'vratič' }
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
      document.getElementById('feedback').textContent = `Špatně je to ${prvníVelké(currentImage.name[0])}`;
      document.getElementById('feedback').style.color = 'rgb(255, 0, 0)';
      document.getElementById("guessInput").style.display = "none";
      document.getElementById("kontrola").style.display = "none";
      document.getElementById("další").style.marginLeft = "5rem";
    }
  });

showRandomImage();
  