window.onkeyup = function(event) {
//chargement de la fenêtre avec la fonction event quand une touche de clavier est bougée
  if (event.keyCode) {
//afficher une boîte de dialogue la valeur mise dans l'input lastname
    alert(lastname.value);
  }
};

/* C'est nul mais ça marche un peu

lastname.addEventListener("focusout",function(){
  alert("Merci de votre participation")
})

*/
