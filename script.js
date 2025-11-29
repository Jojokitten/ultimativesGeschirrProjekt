//https://jojokitten.github.io/ultimativesGeschirrProjekt/genshin.html

//enterPages
{
  const fistEnterPageDiv = document.getElementById('fistEnterPageee');
  const fistEnterPageBtn = document.getElementById('fistEnterPageBtn');
  const loginDiv = document.getElementById('login');
  const loginBtn = document.querySelector('.loginBtn');


  if (fistEnterPageBtn) {

    if (fistEnterPageDiv) fistEnterPageDiv.style.display = 'block';


    fistEnterPageBtn.addEventListener('click', () => {
      if (fistEnterPageDiv) fistEnterPageDiv.style.display = 'none';
      if (document && document.body) document.body.style.overflow = 'auto';
      console.log('enter page button clicked');
    });
  }

  if (loginBtn) {

    if (loginDiv) loginDiv.style.display = 'block';


    loginBtn.addEventListener('click', () => {
      if (inputName.value.trim() !== "") {
        if (loginDiv) loginDiv.style.display = 'none';
        if (document && document.body) document.body.style.overflow = 'auto';
        console.log('enter page button clicked');
      }

      else if (nameLableRed && nameLableGreen && inputName) {

        myAlert("Gib einen Namen ein oder du wirst hier für immer steckenbleiben. PS: es gibt ein Easteregg. :)");

      };
    });
  }



  const nameLableRed = document.getElementById('labelNameRed');
  const nameLableGreen = document.getElementById('labelNameGreen');
  const inputName = document.getElementById('enterName');
  const minniImg = document.getElementById('minniImg');

  if (nameLableRed && nameLableGreen && inputName) {
    nameLableGreen.style.display = 'none';
    minniImg.style.display = 'none';
    inputName.addEventListener('input', () => {
      if (inputName.value.trim() !== "") {
        loginBtn.onclick = null;
        loginBtn.style.display = 'block';
        nameLableGreen.style.display = 'block';
        nameLableRed.style.display = 'none';
      }
      else {
        minniImg.style.display = 'none';
        nameLableGreen.style.display = 'none';
        nameLableRed.style.display = 'block';
      }

      const possibleProfileNames = ["Minni", "minni", "MINNI", "mini", "Mini", "lena", "Lena"];
      if (possibleProfileNames.includes(inputName.value.trim())) {
        nameLableGreen.style.display = 'block';
        nameLableRed.style.display = 'none';
        minniImg.style.display = 'block';
      }
      else {
        minniImg.style.display = 'none';
        nameLableRed.style.display = 'block';
      }
    }
    )


  }
}

//1. tagebuch
{
  function schichtZuEndeja() {
    const messageDiv = document.getElementById("schichtZuEndeneinMessage");
    messageDiv.innerHTML = `
      <ul>
    <li><a href="Geschirrspüler-Projekt.html">Geschirspüler-Liste</a></li>
    <li><a href="statistic.html">Statistik</a></li>
    <li><a href="motivation.html">Motivation</a></li>
        <li><a href="geschirrspühl-tagebuch.html">Geschirrspühl-Tagebuch</a></li>
    <li><a href="profile.html">Profile</a></li>
  </ul> 
     <h1>1. Wie gings dir bei der schicht?</h1>
     <img class="kleedance" src="images/3875-klee.png" alt="klee">
     <p class="wähle">Wähle:</p>
        <div id="tagebuch-buttons-container">
            <button class="tagebuch-sticker" data-mood="strong"><img class="paimon" src="images/3392-paimon-stronk.png" alt="paimon"></button>
            <button class="tagebuch-sticker" data-mood="cry"><img class="paimon" src="images/1235-paimon-cry.png" alt="paimon" height="100px" width="100px"></button>
            <button class="tagebuch-sticker" data-mood="raiden"><img src="https://cdn3.emoji.gg/emojis/55978-boobasword.gif" width="100px" height="100px" alt="boobasword"></button>
        </div>
        
     <h1>2. Wie lange hast du dafür gebraucht?</h1>
  <input type="time" id="uhrzeit">
  <button class="TagebuchEintragSave" id="saveTime">Eintrag speichern</button>
<img class="catTimeGif" src="images/catTime.gif" alt="time">

<div> 
<label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
  <br>
   <span>Click to upload image of the <br> fertig eingeräumten Geschirrspühler</span>
   </div>
   <input type="file" id="file">
</label>
</div>
        `;

  }
  function schichtZuEndenein() {
    const messageDiv = document.getElementById("schichtZuEndeneinMessage");
    messageDiv.innerHTML = `<h1>Then back to work!!!</h1>
        <ul>
    <li><a href="Geschirrspüler-Projekt.html">Geschirspüler-Liste</a></li>
    <li><a href="statistic.html">Statistik</a></li>
    <li><a href="motivation.html">Motivation</a></li>
        <li><a href="geschirrspühl-tagebuch.html">Geschirrspühl-Tagebuch</a></li>
   <li><a href="profile.html">Profile</a></li>
  </ul> 
  <img class="furinaBackToWork" src="images/furina-angry.jpg" alt="furina" height="300px" width="300px">
  <button class="backToWork" onclick="window.location.href='Geschirrspüler-Projekt.html'">Back to work!</button> `;
  }
}
//2. statistik (+tagebuch?)
{
  const clicks = JSON.parse(localStorage.getItem("clicks") || "{}");
  const stickerCounts = JSON.parse(localStorage.getItem("stickerCounts") || "{}");
  document.addEventListener('click', function (event) {
    const clickedSticker = event.target.closest('.tagebuch-sticker');
    if (clickedSticker) {
      // Toggle 'clicked' class among siblings inside same container (if present)
      const container = clickedSticker.closest('#tagebuch-buttons-container');
      if (container) {
        const allButtons = container.querySelectorAll('.tagebuch-sticker');
        allButtons.forEach(btn => btn.classList.remove('clicked'));
        clickedSticker.classList.add('clicked');
      }

      // Increment clicks for today and persist
      const day = new Date().toISOString().split('T')[0];
      clicks[day] = (clicks[day] || 0) + 1;
      localStorage.setItem('clicks', JSON.stringify(clicks));

      // Count sticker selections
      const mood = clickedSticker.dataset.mood || 'unknown';
      stickerCounts[mood] = (stickerCounts[mood] || 0) + 1;
      localStorage.setItem('stickerCounts', JSON.stringify(stickerCounts));

      // Find most selected sticker
      const mostSelectedMood = Object.entries(stickerCounts).reduce((a, b) =>
        (b[1] > a[1] ? b : a), ['none', 0])[0];

      console.log("Ausgewählt: " + mood);
      console.log("Meist ausgewählter Sticker: " + mostSelectedMood);
      return;
    }

    // Save time button (delegated)
    const saveBtn = event.target.closest('#saveTime');
    if (saveBtn) {
      const timeInput = document.getElementById('uhrzeit');
      const time = timeInput ? timeInput.value : '';
      if (time) {
        localStorage.setItem('gespeicherteUhrzeit', time);
        alert("Gespeichert: " + time);
      } else {
        alert("Bitte eine Uhrzeit auswählen.");
      }
      return;
    }
  });
  document.addEventListener('change', function (event) {
    if (event.target && event.target.id === 'file') {
      const fileInput = event.target;
      const file = fileInput.files && fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          localStorage.setItem("uploadedGeschirrspulerImage", imageUrl);
          alert("Image uploaded successfully!");
        };
        reader.readAsDataURL(file);
      }
    }
  });
}

//mit api zählen welches lied man am häufigsten gehört hat
//PLAYLIST 
{
  document.addEventListener('DOMContentLoaded', () => {
    const playlist = [
      { index: 0, title: "Tolles Lied 1", src: "playlist/kafka.mp4" },
      { title: "Ganz Tolles Billie Eilish Lied", src: "playlist/ilomilo.mp4" },
      { title: "Kaffee", src: "playlist/Espresso.mp4" }
    ];

    const videoPlayer = document.getElementById('videoPlayer');
    const songTitleDisplay = document.getElementById('songTitle');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');


    if (!videoPlayer) {
      if (window.location.pathname.endsWith("GeschirrspühlSession.html")) {
        console.warn('videoPlayer-Element nicht gefunden.');
        return;
      }
    }//trowWarning


    const FurinaGif = document.querySelector('.FurinaGif2');
    const furinaVideo1 = document.querySelector('.FurinaGif1');

    let currentSongIndex = 0;
    let isPlaying = false;

    const updateFurinaVisibility = (isCurrentlyPlaying) => {
      if (!furinaVideo1) return;
      const isEspresso = currentSongIndex === 2;
      const isFurina = currentSongIndex === 4;
      if (isEspresso && isCurrentlyPlaying) {
        furinaVideo1.style.visibility = 'visible';
        videoPlayer.style.opacity = "0.1";
      } else {
        furinaVideo1.style.visibility = 'hidden';
        videoPlayer.style.opacity = "0.5";
      }
      if (isFurina && isCurrentlyPlaying && FurinaGif) {
        FurinaGif.style.visibility = 'visible';
      }
    };

    const showVideo = (isCurrentlyPlaying) => {
      videoPlayer.style.visibility = isCurrentlyPlaying ? 'visible' : 'hidden';
    };

    const loadSong = (index) => {
      const song = playlist[index];
      videoPlayer.src = song.src;
      songTitleDisplay.textContent = song.title;
      videoPlayer.load();
      updateFurinaVisibility(isPlaying);
    };

    const togglePlayPause = () => {
      if (isPlaying) {
        videoPlayer.pause();
        playPauseBtn.textContent = '▶';
        isPlaying = false;
        updateFurinaVisibility(isPlaying);
        showVideo(isPlaying);
      } else {
        const playPromise = videoPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            playPauseBtn.textContent = '⏸';
            isPlaying = true;
            updateFurinaVisibility(isPlaying);
            showVideo(isPlaying);
          }).catch(error => {
            console.error("Playback fehlgeschlagen:", error);
            playPauseBtn.textContent = '▶';
            isPlaying = false;
            updateFurinaVisibility(isPlaying);
            showVideo(isPlaying);
          });
        }
      }
    };

    const playNextSong = () => {
      currentSongIndex = (currentSongIndex + 1) % playlist.length;
      loadSong(currentSongIndex);
      if (isPlaying) videoPlayer.play().catch(() => { });
      updateFurinaVisibility(isPlaying);
      showVideo(isPlaying);
    };

    const playPreviousSong = () => {
      currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
      loadSong(currentSongIndex);
      if (isPlaying) videoPlayer.play().catch(() => { });
      updateFurinaVisibility(isPlaying);
      showVideo(isPlaying);
    };

    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    if (prevBtn) prevBtn.addEventListener('click', playPreviousSong);
    videoPlayer.addEventListener('ended', playNextSong);

    loadSong(currentSongIndex);
    showVideo(isPlaying);
  });
}

//PrimoCount
{
  const primoText = document.querySelectorAll('.totalPrimosJavatext');
  const getMoreButton = document.querySelector('.getMore');
  const secondGetMoreButton = document.querySelector('.secondGetMore');
  const firstFreePullButton = document.querySelector('.firstFreePulls');
  const secondFreePullButton = document.querySelector('.secondFreePulls');
  const wishVideoPlayer = document.getElementById('videoPlayerWishAnimation');

  const firstTenPull = document.querySelectorAll('.tenPulls');
  const secondTenPull = document.querySelectorAll('.secondTenPull');
  const firstOnePull = document.querySelectorAll('.onePull');
  const secondOnePull = document.querySelectorAll('.secondOnePull');

  let savedPrimo = parseInt(localStorage.getItem('primoCount'), 10);
  let primoCount = Number.isNaN(savedPrimo) ? 0 : savedPrimo;
  let savedPity = parseInt(localStorage.getItem('pity'), 10);
  let pity = Number.isNaN(savedPity) ? 0 : savedPity;
  let guaranteed = localStorage.getItem('guaranteed') === 'true';
  let currentBanner = localStorage.getItem('currentBanner') || "first";

  const FIVE_RATE = 0.006;
  const FOUR_RATE = 0.051;
  const featured5_firstBanner = "yae";
  const featured5_secondBanner = "tartaglia";

  const wishAnimation = {
    five: "playlist/5StarWishAnimation.mp4",
    four: "playlist/4StarWishAnimation.mp4",
    three: "playlist/3StarWishAnimation.mp4",
    yae: "playlist/yaeWhisAnimationC0.mp4",
    tartaglia: "playlist/tartagliawhisAnimationC0.mp4",
    qiqi: "playlist/qiqiWishAnimationC0.mp4",
    minni: "playlist/minniC0.mp4"
  };

  if (wishVideoPlayer) wishVideoPlayer.pause();

  function updateInventar() {
    // Platzhalter — implementiere Inventar-Update hier
    console.log("Inventar wurde aktualisiert.");
  }

  function primoUpdateText() {
    primoText.forEach(e => e.innerHTML = `insgesamt:<br>${primoCount}`);
    localStorage.setItem('primoCount', String(primoCount));
    localStorage.setItem('pity', String(pity));
    localStorage.setItem('guaranteed', String(guaranteed));
    localStorage.setItem('currentBanner', currentBanner);
  }
  primoUpdateText();

  function getFiveStarForCurrentBanner() {
    return currentBanner === "first" ? featured5_firstBanner : featured5_secondBanner;
  }

  // Berechnet Rarity anhand des aktuellen pity (ändert pity nicht).
  function calcSingleRarity() {
    // erhöhte Rate nach 74 pulls (soft pity scaling). clamp bei 1.
    const fiveStarRate = pity >= 74 ? Math.min(1, FIVE_RATE * (1 + (pity - 73) * 10)) : FIVE_RATE;
    const j = Math.random();

    if (j < fiveStarRate) return 5;
    // 10-pull 4★ pity: wenn pity % 10 === 9 (d.h. nächster Pull ist 10., dann mindestens 4★)
    if (pity % 10 === 9) return 4;
    if (j < fiveStarRate + FOUR_RATE) return 4;
    return 3;
  }

  // Liefert Char-Name bei 5★, setzt pity=0, handhabt "guaranteed".
  function calcCharacter(rarity) {
    if (rarity !== 5) {
      return null;
    }

    // Reset pity because 5★ obtained
    pity = 0;

    if (guaranteed) {
      guaranteed = false;
      return getFiveStarForCurrentBanner();
    }

    const win = Math.random() < 0.5;
    if (win) {
      return getFiveStarForCurrentBanner();
    }

    guaranteed = true;
    return Math.random() < 0.5 ? "qiqi" : "minni";
  }

  function playWishAnimation(rarity, charName) {
    if (!wishVideoPlayer) return;
    let src = "";

    if (rarity === 5 && charName && wishAnimation[charName]) {
      src = wishAnimation[charName];
    } else if (rarity === 4) {
      src = wishAnimation["four"];
    } else {
      src = wishAnimation["three"];
    }

    wishVideoPlayer.src = src;
    wishVideoPlayer.style.display = 'block';
    wishVideoPlayer.load();
    wishVideoPlayer.play();

    wishVideoPlayer.onended = () => {
      wishVideoPlayer.style.display = 'none';
    };
  }

  if (getMoreButton && secondGetMoreButton) {
    const handleNavigation = () => {
      window.location.href = "statistic.html";
    };
    getMoreButton.addEventListener('click', handleNavigation);
    secondGetMoreButton.addEventListener('click', handleNavigation);
  }

  let obtainedCharacter = null;

  function handleSinglePull(banner) {
    if (primoCount <= 0) {
      primoText.forEach(el => {
        el.style.color = "red";
        setTimeout(() => el.style.color = "", 1200);
      });
      return;
    }

    currentBanner = banner;

    const rarity = calcSingleRarity();
    let charName = null;

    if (rarity === 5) {
      // calcCharacter setzt pity = 0 intern
      charName = calcCharacter(5);
    } else {
      // kein 5★ → pity erhöht sich um 1
      pity++;
    }

    primoCount--;

    // Update obtainedCharacter mapping (Beispiel)
    if (rarity === 5 && charName) {
      if (charName === "yae") {
        obtainedCharacter = "pullYae";
      } else if (charName === "alhaitham") {
        obtainedCharacter = "pullAlhatham";
      } else {
        obtainedCharacter = `pull_${charName}`;
      }
    }

    playWishAnimation(rarity, charName);
    primoUpdateText();
    updateInventar();
  }

  function handleTenPull(banner) {
    if (primoCount < 10) {
      primoText.forEach(el => {
        el.style.color = "red";
        setTimeout(() => el.style.color = "", 1200);
      });
      return;
    }

    currentBanner = banner;

    // Ergebnisse speichern als Objekte {rarity, name}
    const results = [];
    let hasRare = false;
    const obtainedFiveNames = [];

    for (let i = 0; i < 10; i++) {
      const rarity = calcSingleRarity();
      if (rarity === 5) {
        const name = calcCharacter(5); // setzt pity = 0
        results.push({ rarity: 5, name });
        hasRare = true;
        obtainedFiveNames.push(name);
      } else {
        // 4★ oder 3★
        // Wenn calcSingleRarity zurückgibt 4, name bleibt null (4★ placeholders)
        results.push({ rarity, name: null });
        // pity nur erhöhen, wenn kein 5★
        pity++;
        if (rarity >= 4) hasRare = true;
      }
    }

    // Falls kein 4★/5★ in 10er, erzwinge 4★ an erster 3★-Stelle
    if (!hasRare) {
      const idx = results.findIndex(r => r.rarity === 3);
      if (idx !== -1) {
        results[idx] = { rarity: 4, name: null };
        hasRare = true;
        // 4★ erzwingen verändert pity nicht (nur 5★ setzt pity = 0)
      }
    }

    const highestRarity = Math.max(...results.map(r => r.rarity));
    const firstFiveName = obtainedFiveNames.length > 0 ? obtainedFiveNames[0] : null;

    primoCount -= 10;

    playWishAnimation(highestRarity, firstFiveName);
    primoUpdateText();
    updateInventar();
  }

  // Eventlisteners
  firstOnePull.forEach(btn => btn.addEventListener("click", () => handleSinglePull("first")));
  firstTenPull.forEach(btn => btn.addEventListener("click", () => handleTenPull("first")));
  secondOnePull.forEach(btn => btn.addEventListener("click", () => handleSinglePull("second")));
  secondTenPull.forEach(btn => btn.addEventListener("click", () => handleTenPull("second")));

  // LOCAL STORAGE Free Pulls
  let freePullUsed = localStorage.getItem('freePullUsed') === 'true';
  let secondFreePullUsed = localStorage.getItem('secondFreePullUsed') === 'true';

  if (firstFreePullButton) {
    if (!freePullUsed) {
      firstFreePullButton.addEventListener('click', () => {
        firstFreePullButton.style.animation = 'freePullDrop 2s forwards';
        setTimeout(() => {
          primoCount += 10;
          primoUpdateText();
        }, 2000);
        localStorage.setItem('freePullUsed', 'true');
        freePullUsed = true;
      });
    } else {
      firstFreePullButton.style.display = 'none';
    }
  }

  if (secondFreePullButton) {
    if (!secondFreePullUsed) {
      secondFreePullButton.addEventListener('click', () => {
        secondFreePullButton.style.animation = 'secondFreePullDrop 2s forwards';
        setTimeout(() => {
          primoCount += 10;
          primoUpdateText();
          updateInventar();
        }, 2000);
        localStorage.setItem('secondFreePullUsed', 'true');
        secondFreePullUsed = true;
      });
    } else {
      secondFreePullButton.style.display = 'none';
    }
  }



  //https://jojokitten.github.io/ultimativesGeschirrProjekt/genshin.html


}
//CharacterMenu 
{
  //Alhaitham

  //DELETE
  let pullAlhaitham = false;
  let pullYae = false;


  const noAlhathamCharMenu = document.getElementById('noAlhathamMenuImg');
  const alhathamCharMenu = document.getElementById('alhathaimMenuImg');


  const noAlhaithamImg = document.getElementById('noAlhaithamFullImg');

  //Yae
  const noYaeMenuImg = document.getElementById('noYaeMikoImg');
  const yaeCharMenuImg = document.getElementById('yaeMenuImg');

  const noYaeImg = document.getElementById('noYaeFullImg');



  if (window.location.pathname.endsWith("characterMenue.html") && !weaponMenuChangeHTML) {
    //Alhaitham
    console.log('2');
    if (pullAlhaitham === true) {
      noAlhathamCharMenu.style.display = 'none';
      alhathamCharMenu.style.display = 'block';
    }
    else {
      console.log('1');
      noAlhathamCharMenu.style.display = 'block';
      alhathamCharMenu.style.display = 'none';
    }
  console.log('3');
    //yae
    if (pullYae === true) {
      noYaeMenuImg.style.display = 'none';
      yaeCharMenuImg.style.display = 'block';
    }
    else {
      console.log('1yy');
      noYaeMenuImg.style.display = 'block';
      yaeCharMenuImg.style.display = 'none';
    }
  }

  if (window.location.href.endsWith("showNichtErhalten.html?From=Alhaitham")) {
    noYaeImg.style.display = 'none';
    noAlhaithamImg.style.display = 'block';
  }

  if (window.location.href.endsWith("showNichtErhalten.html?From=Yae")) {
    noYaeImg.style.display = 'block';
    noAlhaithamImg.style.display = 'none';
  }



function weaponMenuChangeHTML() {
  weaponMenuDiv.innerHTML = `
    <ul z-index="20" class="navBar">
      <li><a href="index.html"><img src="images/blueHomeButton.png" width="20px">&nbsp; Home</a></li>
      <li><a href="statistic.html"><img src="images/primoIcon.ico" width="20px">&nbsp; Primos</a></li>
      <li><a href="genshin.html">Banners</a></li>
      <li class="profileItem"><a href="profile.html"><img class="profileIcon" src="images/paimonIcon.png"></a></li>
    </ul>
    <button id="weaponMenuActivationBtn"></button>
  `;

  characterMenu.style.display = 'none';
}

}




//PROFILE
if (window.location.pathname.endsWith("profile.html")) {
  const currentPic = document.getElementById("currentProfilePic");
  const addBtn = document.getElementById("addProfilePic");

  const picsContainer = document.querySelector(".profilbild-wrapper .profilbilder");
  const bilder = Array.from(picsContainer.querySelectorAll("img")); // Alle auswählbaren Bilder
  const nameInput = document.getElementById("profilename");
  const spiritSelect = document.getElementById("spirit");
  const saveBtn = document.getElementById("saveProfil");

  //local storage
  const savedPic = localStorage.getItem("profilbild");
  const savedName = localStorage.getItem("profilname");
  const savedSpirit = localStorage.getItem("spirit");

  if (savedPic) {
    currentPic.src = savedPic;

    bilder.forEach(b => {
      // Vergleicht den gespeicherten Pfad (savedPic) mit dem src des Auswahlbildes
      b.classList.toggle("selected", b.src === savedPic);
    });
  } else {
    // Wenn nichts gespeichert ist, stelle sicher, dass das Standardbild geladen wird.
    currentPic.src = "images/L-Profile.jpg";
  }



  function checkBilder() {
    if (!bilder) {
      if (window.location.pathname.endsWith("profiel.html")) {
        console.warn('bilder-Elemente nicht gefunden.');
        return;
      }
    }
  } checkBilder();



  const ENDPOINT = "https://6920e6b5512fb4140bdec336.mockapi.io/api/geschirrspueler-ausraeumungen";
  // ...existing code...
  async function loadData() {
    try {
      const response = await fetch(ENDPOINT);
      if (!response.ok) throw new Error("Fetch failed: " + response.status);
      const data = await response.json();
      console.log("API data:", data); // -> öffne DevTools (F12) und prüfe hier die Keys
      renderTable(data);
    } catch (err) {
      console.error("loadData error:", err);
      const table = document.getElementById("resultTable");
      if (table) {
        table.innerHTML = "<thead><tr><th>ID</th><th>Name</th><th>Zeit</th></tr></thead><tbody><tr><td colspan='3'>Fehler beim Laden der Daten. Prüfe Konsole.</td></tr></tbody>";
      }
    }
  }

  function pickField(obj, candidates) {
    for (const key of candidates) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] != null && obj[key] !== "") return obj[key];
    }
    // try case-insensitive match
    const lowerKeys = Object.keys(obj).reduce((acc, k) => { acc[k.toLowerCase()] = k; return acc; }, {});
    for (const cand of candidates) {
      if (lowerKeys[cand.toLowerCase()]) {
        const real = lowerKeys[cand.toLowerCase()];
        if (obj[real] != null && obj[real] !== "") return obj[real];
      }
    }
    return null;
  }

  function renderTable(data) {
    const table = document.getElementById("resultTable");
    if (!table) return;

    // ensure header
    if (!table.querySelector("thead")) {
      table.innerHTML = "<thead><tr><th>ID</th><th>Name</th><th>Zeit</th></tr></thead>";
    }

    // ensure tbody exists
    let tbody = table.querySelector("tbody");
    if (!tbody) {
      tbody = document.createElement("tbody");
      table.appendChild(tbody);
    }
    tbody.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      tbody.innerHTML = "<tr><td colspan='3'>Keine Einträge gefunden</td></tr>";
      return;
    }


    const nameCandidates = ["person", 'name', 'profilname', 'profilename', 'title', 'username', 'vorname', 'nachname', 'fullname', 'profil'];
    const timeCandidates = ["zeitpunkt", 'zeit', 'time', 'uhrzeit', 'createdAt', 'created_at', 'date', 'timestamp', 'zeitstempel'];

    data.forEach(item => {
      const id = item.id ?? item.ID ?? item._id ?? "—";
      const name = pickField(item, nameCandidates) ?? "—";
      const created = pickField(item, timeCandidates) ?? "—";

      // If both name and created are missing, show a short JSON snippet for debugging
      const fallback = (name === "—" && created === "—") ? `<pre style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px">${JSON.stringify(item)}</pre>` : "";

      tbody.insertAdjacentHTML("beforeend", `
      <tr>
        <td class="border px-2 py-1">${id}</td>
        <td class="border px-2 py-1">${name}</td>
        <td class="border px-2 py-1">${created}${fallback ? "<div>" + fallback + "</div>" : ""}</td>
      </tr>
    `);
    });
  }

  // load after DOM ready to be safe
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }

  if (savedSpirit) {
    const optionExists = Array.from(spiritSelect.options).some(o => o.value === savedSpirit);
    if (optionExists) {
      spiritSelect.value = savedSpirit;
    }
  }

  addBtn.addEventListener("click", () => {
    if (picsContainer) {
      picsContainer.style.display = "block";
    }
  });

  bilder.forEach(bild => {
    bild.addEventListener("click", () => {
      // 1. Markierung setzen
      bilder.forEach(b => b.classList.remove("selected"));
      bild.classList.add("selected");

      // 2. Speichern und Anzeigen des ausgewählten Bildes
      const selectedSrc = bild.src; // Holt den vollen Pfad
      localStorage.setItem("profilbild", selectedSrc); // Speichert den vollen Pfad
      currentPic.src = selectedSrc;

      // 3. Container schließen
      if (picsContainer) {
        picsContainer.style.display = "none";
      }
    });
  });

  saveBtn.addEventListener("click", () => {

    localStorage.setItem("profilname", nameInput.value.trim() || "");
    localStorage.setItem("spirit", spiritSelect.value || "");

    alert("Profil gespeichert!");
  });

  //otherPart
  function limitScrollHeight() {
    const scrollLimit = 1000; // Definierte Grenze in Pixeln (am besten 130px)

    if (window.scrollY > scrollLimit) {
      window.scrollTo(0, scrollLimit);
    }
  } window.addEventListener('scroll', limitScrollHeight);

};