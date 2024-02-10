const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";

window.addEventListener("DOMContentLoaded", () => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (storedData) {
    emailInput.value = storedData.email;
    messageInput.value = storedData.message;
  }
});

form.addEventListener("input", () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
  if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    console.error("Please fill in all fields.");
    return;
  }
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
