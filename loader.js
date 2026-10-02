//loader commands
const commandInput = document.getElementById("commandInput");

commandInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {

    const command = commandInput.value.trim().toLowerCase();

    if (command === "enter") {
      window.location.href = "index.html";
    }

    commandInput.value = "";
  }
});
