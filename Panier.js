function affichage() {
  var colissimo = document.getElementById("adresse2");
  if (document.getElementById("radiocolissimo").checked) {
    colissimo.style.display = "block";
    return false;
  }
}
