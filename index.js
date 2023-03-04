const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const description = document.getElementById("description");
const mobile = document.getElementById("mobile");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");
const passwordInput2 = document.querySelector("#password2");
const eye2 = document.querySelector("#eye2");

eye.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});
eye2.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordInput2.getAttribute("type") === "password2" ? "text" : "password";
  passwordInput2.setAttribute("type", type);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";
  age.value = "";
  description.value = "";
  mobile.value = "";
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validateMobileNumber(mobileNumber) {
  var mobileNumberRegex = /^[1-9]\d{9}$/;
  return mobileNumberRegex.test(mobileNumber);
}

function validateAge(age) {
  if (isNaN(age)) {
    return false;
  }
  if (age < 1 || age > 100) {
    return false;
  }
  return true;
}

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const ageValue = age.value.trim();
  const mobileValue = mobile.value.trim();
  const descriptionValue = description.value.trim();

  if (descriptionValue === "") {
    setError(description, "descriptionValue is required");
  } else {
    setSuccess(description);
  }

  if (ageValue === "") {
    setError(age, "Age is required");
  } else if (!validateAge(ageValue)) {
    setError(age, "Please age enter 1 to 100 between");
  } else {
    setSuccess(age);
  }

  if (mobileValue === "") {
    setError(mobile, "Age is required");
  } else if (!validateMobileNumber(mobileValue)) {
    setError(mobile, "Please enter valid mobile number");
  } else {
    setSuccess(mobile);
  }

  if (firstnameValue === "") {
    setError(firstname, "First Name is required");
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === "") {
    setError(lastname, "Last Name is required");
  } else {
    setSuccess(lastname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
