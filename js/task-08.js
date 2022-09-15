const formRef = document.querySelector(".login-form");
const handleSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  if (email.value === "" || email.value === "") {
    alert("Заповніть всі поля!");
    return;
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  formRef.reset();
};
formRef.addEventListener("submit", handleSubmit);
