function showMessage(newMessage, timeout) {
  if (!timeout) {
    timeout = 5000;
  }
  const message = document.getElementById("js--messageAlert");
  message.innerHTML = newMessage;
  message.classList.remove("messageAlert--hidden");
  setTimeout(() => {
    message.classList.add("messageAlert--hidden");
  }, timeout);
}

module.exports = showMessage;
