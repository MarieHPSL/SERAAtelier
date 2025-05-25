//------- Bouton filtrer------------------
function hide(name_class, name_id) {
  let class_list = document.getElementsByClassName(name_class);
  let p = document.querySelector(name_id);
  p.addEventListener("change", function () {
    if (p.checked) {
      for (let i = 0; i < class_list.length; i = i + 1) {
        class_list[i].parentElement.style.display = "block";
      }
    } else {
      for (let i = 0; i < class_list.length; i = i + 1) {
        class_list[i].parentElement.style.display = "none";
      }
    }
  });
}

hide("Pantalon", "input[id=Pantalons]");
hide("Accessoire", "input[id=accessoires]");
hide("Chemise", "input[id=Chemise_et_Chemisiers]");
hide("Veste", "input[id=Vestes]");

//-------- Bouton charger plus--------------
let p3 = document.getElementById("Charger_plus");
let i = 1;
let nbr = 4;
p3.addEventListener("click", function () {
  if (i <= nbr) {
    i = i + 1; //nbre de clique
    let group = "Groupe" + i;
    let groupe = document.getElementsByClassName(group);
    for (let i = 0; i < groupe.length; i = i + 1) {
      groupe[i].style.display = "block";
    }
    if (i === 4) {
      p3.innerHTML = "Charger Moins";
    }
  } else {
    for (let i = 0; i <= nbr; i = i + 1) {
      let group = "Groupe" + i;
      let groupe = document.getElementsByClassName(group);
      for (let i = 1; i < groupe.length; i = i + 1) {
        groupe[i].style.display = "none";
      }
    }
    if (i=>6){
        p3.innerHTML = "Charger Plus";
        i = 1
      }
  }
});
