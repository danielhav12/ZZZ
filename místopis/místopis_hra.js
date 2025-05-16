
const images = [
    { src: 'https://i.postimg.cc/sfGdsTpj/bezd-z.webp', name: 'Zřícenina hradu Bezděz' },
    { src: 'https://i.postimg.cc/W3KB0ZPc/bouzov-hrad.webp', name: 'Hrad Bouzov' },
    { src: 'https://i.postimg.cc/cHrqKm2c/brno-pilberk.webp', name: 'Špilberk v Brně' },
    { src: 'https://i.postimg.cc/wMLGJbVD/brno-vila-tugendhat.webp', name: 'Vila Tugendhat v Brně'},
    { src: "https://i.postimg.cc/438kNMLd/buchlov-hrad.webp" , name: "Hrad Buchlov"},
    { src: "https://i.postimg.cc/4xQRjnpp/esk-bud-jovice-n-m-st-ern-v.webp" , name: "Náměstí s Černou věží v Českých Budějovicích"},
    { src: "https://i.postimg.cc/hPxBb2jy/esk-krumlov-z-mek-m-sto.webp" , name: "Zámek a město Český Krumlov"},
    { src: "https://i.postimg.cc/5yYPJKGZ/cheb-pal-ek.webp" , name: "Špalíček v Chebu"},
    { src: "https://i.postimg.cc/MTrshJs7/chko-p-lava-pavlovsk-vrchy.webp" , name: "Pavlovské vrchy v CHKO Pálava"},
    { src: "https://i.postimg.cc/kMLCb0nR/d-nsk-sn-n-k-hora-rozhledna.webp" , name: "Děčínský Sněžník s rozhlednou"},
    { src: "https://i.postimg.cc/zfDYN5k6/dlouh-str-n-horn-vodn-n-dr.webp" , name: "Horní vodní nádrž Dlouhá Stráň"},
    { src: "https://i.postimg.cc/t4jHrFnX/doma-lice-n-m-st-v.webp" , name: "Náměstí v Domažlicích s válcovou šikmou věží"},
    { src: "https://i.postimg.cc/yxML8XCW/hlubok-nad-vltavou-z-mek.webp" , name: "Zámek Hluboká nad Vltavou"},
    { src: "https://i.postimg.cc/q7wDx3yZ/je-t-d-hora-rozhledna.webp" , name: "Hora Ještěd s vysílačem"},
    { src: "https://i.postimg.cc/3RwSSxZr/ka-ina-z-mek.webp" , name: "Zámek Kačina"},
    { src: "https://i.postimg.cc/QNFsV8rr/karlovy-vary-kolon-da.webp" , name: "Kolonáda Karlovy Vary"},
    { src: "https://i.postimg.cc/NfPHmfK7/karlovy-vary-v-dla.webp" , name: "Vřídlo Karlovy Vary"},
    { src: "https://i.postimg.cc/zD7WDk5Q/karl-tejn-hrad.webp" , name: "Hrad Karlštejn"},
    { src: "https://i.postimg.cc/fy80HMBs/ka-perk-z-cenina-hradu.webp" , name: "Zřícenina hradu Kašperk"},
    { src: "https://i.postimg.cc/jdjfDJSS/konopi-t-z-mek.webp" , name: "Zámek Konopiště"},
    { src: "https://i.postimg.cc/prWFYmQk/kost-hrad.webp" , name: "Hrad Kost"},
    { src: "https://i.postimg.cc/CxBfNTDy/k-ivokl-t-hrad.webp" , name: "Hrad Křivoklát"},
    { src: "https://i.postimg.cc/q7KykVMc/krom-zahrada.webp" , name: "Květná zahrada v Kroměříži"},
    { src: "https://i.postimg.cc/y8k0b3Mb/kuks-hospital.webp" , name: "Hospital Kuks"},
    { src: "https://i.postimg.cc/BQZT2VMs/kun-tick-hora-hrad.webp" , name: "Hrad Kunětická hora"},
    { src: "https://i.postimg.cc/2j7dbDd2/kutn-hora-chr-m-barbory.webp" , name: "Chrám sv. Barbory v Kutné Hoře"},
    { src: "https://i.postimg.cc/9FxGbYn9/l-ny-z-mek.webp" , name: "Zámek Lány"},
    { src: "https://i.postimg.cc/sxm5tYft/lednice-minaret.webp" , name: "Lednicko-valtický areál - Minaret"},
    { src: "https://i.postimg.cc/rm6GWyYY/lednice-t-i-gr-cie.webp" , name: "Lednicko-valtický areál - Tři Grácie"},
    { src: "https://i.postimg.cc/RFc7TrkC/lednice-z-mek.webp" , name: "Lednicko-valtický areál - Zámek Lednice s kaplí"},
    { src: "https://i.postimg.cc/PJTm33HW/litomy-l-z-mek.webp" , name: "Zámek Litomyšl"},
    { src: "https://i.postimg.cc/QMKkHKST/lys-hora.webp" , name: "Lysá hora"},
    { src: "https://i.postimg.cc/pL6JWJQv/macocha-propast.webp" , name: "Propast Macocha"},
    { src: "https://i.postimg.cc/MpTYJFQt/olomouc-radnice-orloj.webp" , name: "Olomoucká radnice s orlojem"},
    { src: "https://i.postimg.cc/3J9Z6Tdd/ostrava-v-tkovick-pece.webp" , name: "Vítkovické pece v Ostravě"},
    { src: "https://i.postimg.cc/L53VmdDQ/pansk-sk-la-u-kamenick-ho-enova.webp" , name: "Panská skála u Kamenického Šenova"},
    { src: "https://i.postimg.cc/Qxjb0tN2/pern-tejn-hrad.webp" , name: "Hrad Pernštejn"},
    { src: "https://i.postimg.cc/59BgBvJ5/p-sek-kamenn-most.webp" , name: "Kamenný most v Písku"},
    { src: "https://i.postimg.cc/nrJk8V4Q/plumlov-z-mek.webp" , name: "Zámek Plumlov"},
    { src: "https://i.postimg.cc/k48chRbm/plze-chr-m.webp" , name: "Chrám sv. Bartoloměje v Plzni"},
    { src: "https://i.postimg.cc/FKYG3BF1/plze-synagoga.webp" , name: "Velká synagoga v Plzni"},
    { src: "https://i.postimg.cc/t4S21jjL/prad-d.webp" , name: "Hora Praděd s vysílačem"},
    { src: "https://i.postimg.cc/jSmy0dKd/praha-chr-m-sv-v-ta.webp" , name: "Chrám sv. Víta v Praze"},
    { src: "https://i.postimg.cc/Wb79vZfp/praha-karl-v-most.webp" , name: "Karlův most v Praze"},
    { src: "https://i.postimg.cc/zDKtx6Cg/praha-n-rodn-divadlo.webp" , name: "Národní divadlo v Praze"},
    { src: "https://i.postimg.cc/pXv04CC1/praha-pet-nsk-rozhledna.webp" , name: "Petřínská rozhledna v Praze"},
    { src: "https://i.postimg.cc/gjVgrLzD/praha-tyr-v-d-m.webp" , name: "Tyršův dům v Praze"},
    { src: "https://i.postimg.cc/MH2sWmSH/praha-vy-ehrad.webp" , name: "Vyšehrad v Praze"},
    { src: "https://i.postimg.cc/hj7yW3NN/prachovsk-sk-ly.webp" , name: "Prachovské skály"},
    { src: "https://i.postimg.cc/BnQmQvdT/prav-ick-br-na.webp" , name: "Pravčická brána"},
    { src: "https://i.postimg.cc/rw8P0jtt/p-hora.webp" , name: "Hora Říp"},
    { src: "https://i.postimg.cc/Pq737kVm/p-rotunda.webp" , name: "Rotunda na hoře Říp"},
    { src: "https://i.postimg.cc/Z5VDrNrs/ro-nov-pod-radho-t-m-skanzen.webp" , name: "Skanzen Rožnov pod Radhoštěm"},
    { src: "https://i.postimg.cc/s2xHK2mj/sn-ka.webp" , name: "Sněžka"},
    { src: "https://i.postimg.cc/Nf8njSLc/soos-rezervace.webp" , name: "Rezervace SOOS"},
    { src: "https://i.postimg.cc/pVF7gpHy/sv-host-n-poutn-kostel.webp" , name: "Poutní kostel na Svatém Hostýně"},
    { src: "https://i.postimg.cc/pXM7xRWC/vihov-vodn-hrad.webp" , name: "Vodní hrad Švihov"},
    { src: "https://i.postimg.cc/SswPnpWy/tel-n-m-st-z-mek.webp" , name: "Náměstí v Telči se zámkem"},
    { src: "https://i.postimg.cc/G2BN3pT7/terez-n-pam-tn-k.webp" , name: "Památník v Terezíně"},
    { src: "https://i.postimg.cc/FKC8QSzk/terez-n-pevnost.webp" , name: "Pevnost Terezín"},
    { src: "https://i.postimg.cc/nhkN0gtk/t-eb-bazilika.webp" , name: "Bazilika v Třebíči"},
    { src: "https://i.postimg.cc/wBjZP2qd/trosky.webp" , name: "Zřícenina hradu Trosky"},
    { src: "https://i.postimg.cc/zXTsR3t4/velk-blan-k-rozhledna.webp" , name: "Rozhledna na Velkém Blaníku"},
    { src: "https://i.postimg.cc/bNXXJ1TQ/r-nad-s-zavou-zelen-hora.webp" , name: "Poutní areál Zelená hora ve Žďáru nad Sázavou"},
    { src: "https://i.postimg.cc/kg9kN9LG/zv-kov-hrad.webp" , name: "Hrad Zvíkov"}
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
      document.getElementById("tlačítko_další").style.display = "none";
      document.getElementById("znovu").style.display = "block";
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