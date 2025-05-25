//!-- Ici, j'anime les boutons des barres de navigation de mon header et de mon footer-->
const routes = {
  "index.html": "index.html",
  "catalogue.html": "Catalogue.html",
  "studio.html": "Studio.html",
  "panier.html": "Panier.html",
};

const RIPPLE_DURATION = 400; // (durée de l’anim CSS en ms)

/** Fonction pour toutes les barres de navigation */
function handleNavClick(e) {
  const item = e.target.closest(".nav-item");
  if (!item) return; // effet si clic en dehors d’un lien

  /* Empêche les clics multiples pendant l’anim */
  if (item.dataset.busy) return;
  item.dataset.busy = "1";

  // 1) déclenche l’animation
  item.classList.add("ripple");

  // 2) construit l’URL : dans routes[] ou fallback "#"
  const url = routes[item.dataset.route] ?? "#";

  // 3) redirige une fois l’animation finie
  setTimeout(() => {
    window.location.href = url;
  }, RIPPLE_DURATION);

  // 4) reset après coup pour pouvoir re-cliquer
  setTimeout(() => {
    item.classList.remove("ripple");
    delete item.dataset.busy;
  }, RIPPLE_DURATION + 50);
}

/* Branche le même handler sur chaque barre (header + footer) */
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".textetlogobarredenavigation")
    .forEach((nav) =>
      nav.addEventListener("click", handleNavClick, { passive: true })
    );
});

//!-- Ici, je TENTE! le carousel -->
let imgDisplayed = 0;
const imgCarousel = [
  "https://th.bing.com/th/id/OIP.drOFFUHGahqo_hCI5UGmAgHaE8?w=600&h=401&rs=1&pid=ImgDetMain",
  "https://live.staticflickr.com/7018/6508795847_cc9cfd2e58_b.jpg",
  "https://media4.giphy.com/media/3oz8xur099boo4N9aU/giphy.gif",
];
const captions = [
  "NOTRE CREDO : RIEN NE SE PERD, TOUT SE <span>SERA</span>",
  "CHEZ NOUS, <span>CHAQUE FIL</span> RACONTE UNE HISTOIRE", ""
];

const img = document.getElementById("img1");
const captionEl = document.getElementById("caption");
captionEl.innerHTML = captions[0];
captionEl.style.display = captions[0] ? "block" : "none";

function prev() {
  imgDisplayed = (imgDisplayed - 1 + imgCarousel.length) % imgCarousel.length;
  img.src = imgCarousel[imgDisplayed];
  captionEl.innerHTML = captions[imgDisplayed];
  captionEl.style.display = captions[imgDisplayed] ? "block" : "none"
}

function next() {
  imgDisplayed = (imgDisplayed + 1) % imgCarousel.length;
  img.src = imgCarousel[imgDisplayed];
  captionEl.innerHTML = captions[imgDisplayed];
  captionEl.style.display = captions[imgDisplayed] ? "block" : "none"
}

document.getElementById("btn1").addEventListener("click", function () {
  prev();
});
document.getElementById("btn2").addEventListener("click", function () {
  next();
});

//!-- Ici, je mets un message d'animation quand on tape sur le bouton "Envoyer le message" -->
let effetclickboutoncontact = document.getElementById('boutoncontact')
effetclickboutoncontact.addEventListener('click', function(){alert("Merci, nous avons bien reçu votre message. SERA Atelier reviendra vers vous dès que possible ! 🙂💙")});

//!-- Ici, j'importe une carte Google Maps sur la page -->
async function getMap() {
  
  let response = await fetch(
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/liste_des_prenoms/records?order_by=nombre%20DESC&limit=20&refine=annee%3A%222019%22&refine=sexe%3A%22M%22"
  );

  let data = await response.json();

  console.log(data.results[0].prenoms);

  document.getElementById("prenom").textContent =
    `Le prénom est : ${data.results[0].prenoms}`;
}

document.getElementById("bouton").addEventListener("click", function () {
  getMap();
});
