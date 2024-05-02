const btnliste = document.getElementById("liste");
const btncontact = document.getElementById("contact");
const disque = document.querySelector(".disque");
const btnplay = document.getElementById("btnplay");
const random = document.getElementById("btnrandom");
const imgplay = document.querySelector(".play_pause");
const audio = document.getElementById("audio");
const cover = document.querySelector(".cover");
const listmusic = document.querySelector(".listmusic");
const playlist = document.getElementById("playlist");
let playlistVisible = false;
let data = []; // Déclarez data en tant que variable globale pour stocker les données chargées

//pour chaque musique dans musiques creer un li clickable qui change l'audio et la cover selon ce dans le li

const config = {
  urlCover: "assets/pictures/",
  urlSound: "assets/audio/",
};

const getData = async () => {
  const req = await fetch("https://api-jukebox-ehw8.onrender.com/api/v1/music");
  const dbmusic = await req.json();
  data = dbmusic.result; // Stockez les données dans la variable data globale

  data.forEach((musique) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<li id=${musique.id}><h2>${musique.nom}</h2> <img src="${config.urlCover}${musique.cover}" alt ="${musique.title}" ><div><small>${musique.category}</small></div></li>`;
    playlist.appendChild(liElement);

    liElement.addEventListener("click", () => {
      audio.src = config.urlSound + musique.lien;
      cover.src = config.urlCover + musique.cover;

      if (disque.classList.contains("pause")) {
        disque.classList.toggle("pause");
        imgplay.src = "assets/pictures/bouton_pause.png";
        audio.play();
      } else {
        audio.play();
      }
    });
  });
}

getData();

function choisirMusiqueAleatoire() {
  if (data && data.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * data.length);
    const musiqueAleatoire = data[indexAleatoire];
    return musiqueAleatoire;
  } else {
    console.error('Aucune donnée de musique chargée ou la liste est vide.');
    return null;
  }
}

btnplay.addEventListener("click", () => {
  disque.classList.toggle("pause");
  if (disque.classList.contains("pause")) {
    imgplay.src = "assets/pictures/bouton.png";
    audio.pause();

  } else {
    imgplay.src = "assets/pictures/bouton_pause.png";
    audio.play();

  }
});

//fais apparaitre le li playlist et disparaittre
btnliste.addEventListener("click", () => {
  if (playlistVisible) {
    playlist.style.display = "none";
  } else {
    playlist.style.display = "block";
  }
  playlistVisible = !playlistVisible;
});

random.addEventListener("click", () => {
  const musiqueAleatoire = choisirMusiqueAleatoire();
  if (musiqueAleatoire) {
    audio.src = config.urlSound + musiqueAleatoire.lien;
    cover.src = config.urlCover + musiqueAleatoire.cover;
    if (disque.classList.contains("pause")) {
      disque.classList.toggle("pause");
      imgplay.src = "assets/pictures/bouton_pause.png";
      audio.play();
    } else {
      audio.play();
    }
  }
});
