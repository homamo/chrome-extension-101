function initaliseForm() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.getElementById("userColor").value = color;
  });
}

function handleSubmit(event) {
  event.preventDefault();
  var color = document.getElementById("userColor").value;
  chrome.storage.sync.set({ color });
}

document.addEventListener("DOMContentLoaded", function () {
  initaliseForm();

  const form = document.getElementById("userPreferencesForm");
  form.addEventListener("submit", handleSubmit);
});
