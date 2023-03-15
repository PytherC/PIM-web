var editar = document.getElementById("editar");


// No click verifico se o editar esta marcado e desativo os 
// readOnly dos inputs type text
editar.addEventListener("click", function() {
  if (this.checked) {
    toggleReadOnly(false);
  } else {
    toggleReadOnly(true);
  }
});

// Percorro  os elementos inputs type text e habilito/desabilito
function toggleReadOnly(bool) {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text") {
      inputs[i].readOnly = bool;
    }
  }
}