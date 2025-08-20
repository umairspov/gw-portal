let selectedMood = "";

function selectMood(mood) {
  selectedMood = mood;
  alert("Mood selected: " + mood);
}

function sendMessage() {
  const diary = document.getElementById("diary").value;
  if (diary.trim() === "" && selectedMood === "") {
    alert("Please write something or select a mood 💖");
    return;
  }
  const entry = document.createElement("p");
  entry.innerHTML = `${selectedMood} ${diary}`;
  document.getElementById("entries").appendChild(entry);
  document.getElementById("diary").value = "";
  selectedMood = "";
}

function showPopup(text) {
  const popup = document.getElementById("popup");
  popup.innerHTML = text;
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 1500);
}
