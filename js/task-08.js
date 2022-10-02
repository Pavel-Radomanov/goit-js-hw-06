const formElement = document.querySelector(".login-form");
// submit.preventDefault();


formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");

  }
//   console.log(elements);
  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};


  