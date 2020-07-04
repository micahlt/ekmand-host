let username;
document.getElementById('verify').addEventListener('click', (event) => {
  event.preventDefault();
  username = document.getElementById('username').value;
});