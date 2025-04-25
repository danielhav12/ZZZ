
const images = [
    { src: 'https://i.postimg.cc/76F7WBpR/bezd-z.jpg', name: 'Bezděž - Zřícenina hradu' },
    { src: 'https://i.postimg.cc/Fz0c5yvH/bouzov-hrad.jpg', name: 'Bouzov - Hrad' },
    { src: 'https://i.postimg.cc/yNr0F6ns/brno-pilberk.jpg', name: 'Brno - Špilberk' },
    { src: 'https://i.postimg.cc/7PzS2kzr/brno-vila-tugendhat.jpg', name: 'Brno - Vila Tugendhat'},
    { src: "https://i.postimg.cc/Qt91SLn5/buchlov-hrad.jpg" , name: "Buchlov - Hrad"},
    { src: "https://i.postimg.cc/7LLgGJ3K/esk-bud-jovice-n-m-st-ern-v.jpg" , name: "České Budějovice - Náměstí s Černou věží"},
    { src: "https://i.postimg.cc/htsLt1dJ/esk-krumlov-z-mek-m-sto.webp" , name: "Český Krumlov - Zámek a město"},
    { src: "https://i.postimg.cc/wv7cPR31/cheb-pal-ek.jpg" , name: "Cheb - Špalíček"},
    { src: "https://i.postimg.cc/Px9zkf82/chko-p-lava-pavlovsk-vrchy.jpg" , name: "CHKO Pálava - Pavlovské vrchy"},
    { src: "https://i.postimg.cc/x1nGQ4cD/d-nsk-sn-n-k-hora-rozhledna.jpg" , name: "Děčínský Sněžník - Hora s rozhlednou"},
    { src: "https://i.postimg.cc/wTh5SpxQ/dlouh-str-n-horn-vodn-n-dr.jpg" , name: "Dlohé Stráně - Horní vodní nádrž"},
    { src: "https://i.postimg.cc/SN07Ts4K/doma-lice-n-m-st-v.jpg" , name: "Domažlice - Náměstí s válcovou šikmou věží"},
    { src: "https://i.postimg.cc/1RVrrFLT/hlubok-nad-vltavou-z-mek.jpg" , name: "Hluboká nad Vltavou - Zámek"},
    { src: "https://i.postimg.cc/s2fJYNr9/je-t-d-hora-rozhledna.jpg" , name: "Ještěd - Hora a vysílač"},
    { src: "https://i.postimg.cc/CKvsmsMy/ka-ina-z-mek.jpg" , name: "Kačina - Zámek"},
    { src: "https://i.postimg.cc/7hz1Pv3D/karlovy-vary-kolon-da.jpg" , name: "Karlovy Vary - Kolonáda"},
    { src: "https://i.postimg.cc/ZnXNXw2g/karlovy-vary-v-dla.jpg" , name: "Karlovy Vary - Vřídlo"},
    { src: "https://i.postimg.cc/qvxLCd9v/karl-tejn-hrad.webp" , name: "Karlštejn - Hrad"},
    { src: "https://i.postimg.cc/g2WsJ0t7/ka-perk-z-cenina-hradu.webp" , name: "Kašperk - Zřícenina hradu"},
    { src: "https://i.postimg.cc/bY4L7gxp/konopi-t-z-mek.jpg" , name: "Konopiště - Zámek"},
    { src: "https://i.postimg.cc/brSD0QrR/kost-hrad.jpg" , name: "Kost - Hrad"},
    { src: "https://i.postimg.cc/dDM75LTc/k-ivokl-t-hrad.jpg" , name: "Křivoklát - Hrad"},
    { src: "https://i.postimg.cc/zBcHRdzB/krom-zahrada.webp" , name: "Kroměříž - Květná zahrada"},
    { src: "https://i.postimg.cc/fb59Mz1Y/kuks-hospital.jpg" , name: "Kuks - Hospital"},
    { src: "https://i.postimg.cc/25CWpb9z/kun-tick-hora-hrad.webp" , name: "Kunětická hora - Hrad"},
    { src: "https://i.postimg.cc/K8PTsrNq/kutn-hora-chr-m-barbory.jpg" , name: "Kutná Hora - Chrám sv. Barbory"},
    { src: "https://i.postimg.cc/ZRRynkh2/l-ny-z-mek.jpg" , name: "Lány - Zámek"},
    { src: "https://i.postimg.cc/pXnzKtnt/lednice-minaret.jpg" , name: "Lednicko-valtický areál - Minaret"},
    { src: "https://i.postimg.cc/RCYw30hR/lednice-t-i-gr-cie.webp" , name: "Lednicko-valtický areál - Tři Grácie"},
    { src: "https://i.postimg.cc/7Z87VQgJ/lednice-z-mek.jpg" , name: "Lednicko-valtický areál - Zámek Lednice s kaplí"},
    { src: "https://i.postimg.cc/QCF56241/litomy-l-z-mek.jpg" , name: "Litomyšl - Zámek"},
    { src: "https://i.postimg.cc/vBqftYzG/lys-hora.jpg" , name: "Lysá hora - Hora"},
    { src: "https://i.postimg.cc/B6Q2FL2h/macocha-propast.webp" , name: "Macocha - Propast"},
    { src: "https://i.postimg.cc/rp9SzCR0/olomouc-radnice-orloj.webp" , name: "Olomouc - Radnice s orlojem"},
    { src: "https://i.postimg.cc/MGw7WrHJ/ostrava-v-tkovick-pece.jpg" , name: "Ostrava - Vítkovické pece"},
    { src: "https://i.postimg.cc/kgKNPdny/pansk-sk-la-u-kamenick-ho-enova.jpg" , name: "Panská skála u Kamenického Šenova - skalní útvar"},
    { src: "https://i.postimg.cc/GhZPfp12/pern-tejn-hrad.jpg" , name: "Pernštejn - Hrad"},
    { src: "https://i.postimg.cc/HsJ43yRR/p-sek-kamenn-most.jpg" , name: "Písek - Kamenný most"},
    { src: "https://i.postimg.cc/J0F3MrDp/plumlov-z-mek.jpg" , name: "Plumlov - Zámek"},
    { src: "https://i.postimg.cc/v82tWzq5/plze-chr-m.jpg" , name: "Plzeň - Chrám sv. Bartoloměje"},
    { src: "https://i.postimg.cc/6qqVk237/plze-synagoga.jpg" , name: "Plzeň - Velká synagoga"},
    { src: "https://i.postimg.cc/MGJDnps4/prachovsk-sk-ly.jpg" , name: "Prachovské skály - Skalní útvar"},
    { src: "https://i.postimg.cc/KvLQxTfL/praha-chr-m-sv-v-ta.jpg" , name: "Praha - Chrám sv. Víta"},
    { src: "https://i.postimg.cc/TwCqNqRM/praha-karl-v-most.jpg" , name: "Praha - Karlův most"},
    { src: "https://i.postimg.cc/SKLGCb3K/praha-n-rodn-divadlo.jpg" , name: "Praha - Národní divadlo"},
    { src: "https://i.postimg.cc/NMgkxPvk/praha-pet-nsk-rozhledna.jpg" , name: "Praha - Petřínská rozhledna"},
    { src: "https://i.postimg.cc/P5wyfwMY/praha-tyr-v-d-m.jpg" , name: "Praha - Tyršův dům"},
    { src: "https://i.postimg.cc/bNMLjT1q/praha-vy-ehrad.jpg" , name: "Praha - Vyšehrad"},
    { src: "https://i.postimg.cc/FFYDC8JT/prav-ick-br-na.jpg" , name: "Pravčická brána - Skalní útvar"},
    { src: "https://i.postimg.cc/0jyZ9Xty/p-hora.jpg" , name: "Říp - Hora"},
    { src: "https://i.postimg.cc/154MTTnW/p-rotunda.jpg" , name: "Říp - Rotunda"},
    { src: "https://i.postimg.cc/xj6t6YCJ/ro-nov-pod-radho-t-m-skanzen.jpg" , name: "Rožnov pod Radhoštěm - Skanzen"},
    { src: "https://i.postimg.cc/wM42M5Pc/sn-ka.jpg" , name: "Sněžka - Hora"},
    { src: "https://i.postimg.cc/Qtb0GZJz/soos-rezervace.jpg" , name: "SOOS - Rezervace"},
    { src: "https://i.postimg.cc/g03gsZXm/sv-host-n-poutn-kostel.webp" , name: "Svatý Hostýn - Poutní kostel"},
    { src: "https://i.postimg.cc/sXywNg7S/vihov-vodn-hrad.jpg" , name: "Švihov - Vodní hrad"},
    { src: "https://i.postimg.cc/7YLQ4hcn/tel-n-m-st-z-mek.webp" , name: "Telč - Náměstí se zámkem"},
    { src: "https://i.postimg.cc/13kWDHzv/terez-n-pam-tn-k.jpg" , name: "Terezín - Památník"},
    { src: "https://i.postimg.cc/FsnCHmX5/terez-n-pevnost.jpg" , name: "Terezín - Pevnost"},
    { src: "https://i.postimg.cc/Y2RyTYXS/t-eb-bazilika.jpg" , name: "Třebíč - Bazilika"},
    { src: "https://i.postimg.cc/YCGn4Vt4/trosky.webp" , name: "Trosky - Zřícenina hradu"},
    { src: "https://i.postimg.cc/d3sNLV0v/velk-blan-k-rozhledna.jpg" , name: "Velký Blaník - Rozhledna"},
    { src: "https://i.postimg.cc/vBLSYVb3/r-nad-s-zavou-zelen-hora.jpg" , name: "Žďár nad Sázavou - poutní areál Zelená hora"},
    { src: "https://i.postimg.cc/wMwfJYtN/zv-kov-hrad.jpg" , name: "Zvíkov - Hrad"}
  ];

const jména = images.map(image => image.name);

const výběry = [
  {ID: "výběr1", hodnota: 0},
  {ID: "výběr2", hodnota: 0},
  {ID: "výběr3", hodnota: 0},
  {ID: "výběr4", hodnota: 0},
  {ID: "výběr5", hodnota: 0},
  {ID: "výběr6", hodnota: 0}
]
  
  let currentImage = null;
  
  function showRandomImage() {
    if (images.length === 0) {
      document.getElementById('image').style.display = 'none';
      document.getElementById('feedback').style.color = 'rgb(7, 80, 0)';
      document.getElementById('feedback').style.marginTop = '4rem';
      document.getElementById('feedback').textContent = 'Šikulka už víš všechno!\u{1F92B}\u{1F9CF}';
      return;
    }
    document.getElementById("tlačítko_další").style.display = "none";
    document.getElementById("guessForm").style.display = "block";
    //vybere random obrázek
    document.getElementById("feedback").textContent = "";
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage = images[randomIndex];
    document.getElementById('image').src = currentImage.src;
    //výběr správně odpovědi
    const index_odpovědi = Math.floor(Math.random() * výběry.length);
    výběry[index_odpovědi].hodnota = 1;
    document.getElementById(výběry[index_odpovědi].ID).textContent = currentImage.name;
    //doplnění zbytku odpovědí
    const klon_jména = [...jména];
    for (let i = 0; i < výběry.length; i++) {
      if (i !== index_odpovědi) {
        let randomIndex = Math.floor(Math.random() * klon_jména.length);
        while (klon_jména[randomIndex] === currentImage.name) {
          randomIndex = Math.floor(Math.random() * klon_jména.length);}
        výběry[i].hodnota = 0;
        document.getElementById(výběry[i].ID).textContent = klon_jména[randomIndex];
        klon_jména.splice(randomIndex, 1);
      }
    }
  }

  
  document.getElementById('guessForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const tlačitko = e.submitter;
    const pořadí = tlačitko.value;
    const výsledek = výběry[pořadí].hodnota;

    if (výsledek == 1) {
      const indexToRemove = images.findIndex(img => img.name === currentImage.name);
      images.splice(indexToRemove, 1);
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").textContent = `Správně je to ${currentImage.name}`;
      document.getElementById("feedback").style.color = 'rgb(7, 80, 0)';
      document.getElementById("feedback").style.marginTop = "4rem";
      document.getElementById("tlačítko_další").style.display = "block";
    } else {
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").textContent = `Špatně je to ${currentImage.name}`;
      document.getElementById("feedback").style.color = 'rgb(255, 0, 0)';
      document.getElementById("feedback").style.marginTop = "4rem";
      document.getElementById("tlačítko_další").style.display = "block";
    }

  });

showRandomImage();