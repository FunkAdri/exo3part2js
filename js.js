window.onkeyup = function(event) {
  if (event.keyCode) {
    alert(lastname.value);
  }
};

/* C'est nul mais ça marche un peu

lastname.addEventListener("focusout",function(){
  alert("Merci de votre participation")
})

*/
