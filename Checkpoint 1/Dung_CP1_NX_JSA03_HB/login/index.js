const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const password = document.getElementById("pw").value.trim();
  const username = document.getElementById("userName").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);

  const checkUser = users.some(
    (user) => user.username === username && user.password === password
  );

  if (checkUser) {
    alert("Đăng nhập thành công!");
  } else {
    alert("Đăng nhập không thành công");
  }
});
