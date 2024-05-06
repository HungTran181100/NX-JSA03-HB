function validate() {
  const email = document.helloform.Email.value.trim();
  const username = document.helloform.Username.value.trim();
  const password = document.helloform.password.value.trim();

  if (email === "") {
    alert("Vui lòng nhập email của bạn!!!");
    return false;
  }

  if (username === "") {
    alert("Vui lòng nhập tên đăng nhập!!!");
    return false;
  }

  if (password === "") {
    alert("Vui lòng nhập mật khẩu!!!");
    return false;
  }

  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Sai định dạng Email");
    return false;
  }

  if (!containsUppercase(password)) {
    alert("Mật khẩu phải chứa ít nhất 1 chữ in hoa");
    return false;
  }

  return true;
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

const registerForm = document.getElementById("form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validate()) {
    return;
  }

  const username = document.getElementById("Username").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = [];

  if (localStorage.users) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công");
  window.location.href = "/login/index.html";
});