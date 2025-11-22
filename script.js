
//1. TEIL
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
    function schichtZuEndenein() {      const messageDiv = document.getElementById("schichtZuEndeneinMessage");
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








//2. TEIL

const clicks = JSON.parse(localStorage.getItem("clicks") || "{}");
const stickerCounts = JSON.parse(localStorage.getItem("stickerCounts") || "{}");
document.addEventListener('click', function(event) {
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
document.addEventListener('change', function(event) {
    if (event.target && event.target.id === 'file') {
        const fileInput = event.target;
        const file = fileInput.files && fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                localStorage.setItem("uploadedGeschirrspulerImage", imageUrl);
                alert("Image uploaded successfully!");
            };
            reader.readAsDataURL(file);
        }
    }
});







//PLAYLIST
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



    const FurinaPlaylistGif2 = document.querySelector('.2FurinaGif');
    const furinaPlaylistGif = document.querySelector('.tenor-gif-embed');
   
    let currentSongIndex = 0;

    const updateGifVisibility = (isCurrentlyPlaying) => {
        if (!furinaPlaylistGif) return;

        const isEspresso = currentSongIndex === 2; 
        const isFurina = currentSongIndex === 4;

        if (isEspresso && isCurrentlyPlaying) {
            furinaPlaylistGif.style.visibility = 'visible';
            videoPlayer.style.opacity = "0.1";
        } else {
            furinaPlaylistGif.style.visibility = 'hidden';
            videoPlayer.style.opacity = "0.5";
        }
        if (isFurina && isCurrentlyPlaying) {
            FurinaPlaylistGif2.style.visibility = 'visible';
        }

    };

    const showVideo = (isCurrentlyPlaying) => {
        if (!videoPlayer) return;

        if ( isCurrentlyPlaying) {
            videoPlayer.style.visibility = 'visible';
        } else {
            videoPlayer.style.visibility = 'hidden';
        }
    }


    const loadSong = (index) => {
        const song = playlist[index];
        videoPlayer.src = song.src;
        songTitleDisplay.textContent = song.title;

        videoPlayer.load();
        updateGifVisibility(isPlaying);
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            videoPlayer.pause();
            playPauseBtn.textContent = '▶';
            isPlaying = false; // 1. Zustand ändern
            updateGifVisibility(isPlaying); 
            showVideo(isPlaying);
        } else {
            // FIX: Verwende promise, um Playback-Fehler zu vermeiden
            const playPromise = videoPlayer.play();
            


            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Wiedergabe erfolgreich
                    playPauseBtn.textContent = '⏸';
                    isPlaying = true; // 1. Zustand ändern
                    updateGifVisibility(isPlaying); // 2. GIF aktualisieren
                    showVideo(isPlaying);
                }).catch(error => {
                    // Autoplay blockiert oder anderer Fehler
                    console.error("Autoplay wurde blockiert oder die Wiedergabe ist fehlgeschlagen:", error);
                    playPauseBtn.textContent = '▶';
                    isPlaying = false;
                    updateGifVisibility(isPlaying);
                    showVideo(isPlaying);
                });
            }
        }
    };




    const playNextSong = () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
       
        if (isPlaying) {
            videoPlayer.play();
        }
        updateGifVisibility(isPlaying);
        showVideo(isPlaying);
    };
   
    const playPreviousSong = () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
       
        if (isPlaying) {
            videoPlayer.play();
        }
        updateGifVisibility(isPlaying);
        showVideo(isPlaying);
    };





    if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
    if (nextBtn) nextBtn.addEventListener('click', playNextSong);
    if (prevBtn) prevBtn.addEventListener('click', playPreviousSong);
    videoPlayer.addEventListener('ended', () => navigateSong('next'));


    loadSong(currentSongIndex);
    updateGifVisibility(false);
    showVideo(isPlaying);
});









//PrimoCount
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

    
  let primoCount = parseInt(localStorage.getItem('primoCount')) || 0;
  let pity = parseInt(localStorage.getItem('pity')) || 0;
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
        console.log("Inventar wurde aktualisiert.");
        // CharacterInventar logic
        const yaeNotRecivedImg = document.querySelector('.1yaeMikoImg');
        const yaeRecivedImg = document.querySelector('.2yaeMikoImg');
        const alhaithamNotRecivedImg = document.querySelector('.1alhathamImg');
        const AlhaithamRecivedImg = document.querySelector('.2alhathamImg');

        if (typeof obtainedCharacter !== "undefined") {
            if (obtainedCharacter === "pullYae") {
                if (yaeNotRecivedImg) yaeNotRecivedImg.style.display = 'none';
                if (yaeRecivedImg) yaeRecivedImg.style.display = 'block';
            }
            if (obtainedCharacter === "pullAlhatham") {
                if (alhaithamNotRecivedImg) alhaithamNotRecivedImg.style.display = 'none';
                if (AlhaithamRecivedImg) AlhaithamRecivedImg.style.display = 'block';
            }
        }
    } 
    function primoUpdateText() {
        primoText.forEach(e => e.innerHTML = `insgesamt:<br>${primoCount}`);
        localStorage.setItem('primoCount', primoCount);
        localStorage.setItem('pity', pity);
        localStorage.setItem('guaranteed', guaranteed);
        localStorage.setItem('currentBanner', currentBanner);
    }        primoUpdateText(); 

        
    
    function calcSingleRarity() {
        
        const fiveStarRate = pity >= 74 ? FIVE_RATE * (1 + (pity - 73) * 10) : FIVE_RATE;
        
        const j = Math.random();

        if (j < fiveStarRate) return 5;
        
        if (pity % 10 === 9) return 4; 
        
        if (j < FIVE_RATE + FOUR_RATE) return 4;
        return 3;
    }
    
    function getFiveStarForCurrentBanner() {
        return currentBanner === "first" ? featured5_firstBanner : featured5_secondBanner;
    }
    
    function calcCharacter(rarity) {
        if (rarity !== 5) {            
            return "4star_placeholder"; 
        }

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
    
    function calcTenPull() {
        let results = [];
        let hasRare = false;

        for (let i = 0; i < 10; i++) { 
            const currentRarity = calcSingleRarity();
            results.push(currentRarity);
            if (currentRarity >= 4) hasRare = true;
        }

        
        
        if (!hasRare) {
            const index = results.indexOf(3);
            if (index !== -1) {
                results[index] = 4;
            }
        }
        return results;
    }

    
    function playWishAnimation(rarity, charName) {
      if (!wishVideoPlayer) return;
      
        let src = "";
              
        if (rarity === 5 && wishAnimation[charName]) {
            src = wishAnimation[charName];
        }
        
        else if (rarity === 4) {
            src = wishAnimation["four"];
        } 
        
        else {
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
            if (primoCount > 0) {
                currentBanner = banner;
    
                const rarity = calcSingleRarity();
                let charName = (rarity === 5) ? calcCharacter(rarity) : null;
                
                ++pity;
                --primoCount;
    
                // Update obtainedCharacter if a 5-star character is obtained
                if (rarity === 5 && charName) {
                    if (charName === "yae") {
                        obtainedCharacter = "pullYae";
                    } else if (charName === "alhaitham") {
                        obtainedCharacter = "pullAlhatham";
                    }
                }
                
                playWishAnimation(rarity, charName);
                primoUpdateText();
                updateInventar();
    
            } else {
                primoText.forEach(el => {
                    el.style.color = "red";
                    setTimeout(() => el.style.color = "", 1200);
                });
            }
        }

    function handleTenPull(banner) {
        if (primoCount >= 10) {
            currentBanner = banner;

            const results = calcTenPull();
            const highestRarity = Math.max(...results); 
            
            
            let charName = (highestRarity === 5) ? calcCharacter(5) : null;
            
            pity += 10;
            primoCount -= 10;
            
            playWishAnimation(highestRarity, charName);
            primoUpdateText();
            updateInventar();

        } else {
            primoText.forEach(el => {
                el.style.color = "red";
                
                setTimeout(() => el.style.color = "", 1200); 
            });
        }
    }

    
    
    
    firstOnePull.forEach(btn => btn.addEventListener("click", () => handleSinglePull("first")));
    firstTenPull.forEach(btn => btn.addEventListener("click", () => handleTenPull("first")));
    
    
    secondOnePull.forEach(btn => btn.addEventListener("click", () => handleSinglePull("second")));
    secondTenPull.forEach(btn => btn.addEventListener("click", () => handleTenPull("second")));





// LOCAL STORAGE!!!! :)

let freePullUsed = localStorage.getItem('freePullUsed') !== 'true';
let secondFreePullUsed = localStorage.getItem('secondFreePullUsed') !== 'true';



if (firstFreePullButton && !freePullUsed) {
    firstFreePullButton.addEventListener('click', () => {
    firstFreePullButton.style.animation = 'freePullDrop 2s forwards';
    setTimeout(() => { primoCount += 10;     primoUpdateText();}, 2000);
    localStorage.setItem('freePullUsed', 'true');
  });
} else if (firstFreePullButton && freePullUsed) {
    firstFreePullButton.style.display = 'none';
}
if (secondFreePullButton && !secondFreePullUsed) {
  secondFreePullButton.addEventListener('click', () => {
    secondFreePullButton.style.animation = 'secondFreePullDrop 2s forwards';
    const AlhaithamRecivedImg = document.querySelector('.2alhathamImg');

    if (typeof obtainedCharacter !== "undefined" && obtainedCharacter === "pullYae") {
      if (yaeNotRecivedImg) yaeNotRecivedImg.style.display = 'none';
      if (yaeRecivedImg) yaeRecivedImg.style.display = 'block';
    }
    if (typeof obtainedCharacter !== "undefined" && obtainedCharacter === "pullAlhatham") {
      if (alhaithamNotRecivedImg) alhaithamNotRecivedImg.style.display = 'none';
      if (AlhaithamRecivedImg) AlhaithamRecivedImg.style.display = 'block';
    };});
}