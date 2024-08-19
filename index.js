import {
  validateName,
  validateEmail,
  validateMessage,
} from "./assets/js/fieldValidation.js";

const inputData = document.querySelectorAll("input");
const inputMessage = document.querySelector("textarea");
const loginButton = document.querySelector("button");
const errorMessage = document.querySelectorAll("span");

const popup = document.getElementById("popup");

let errorText = null;

const showPopup = () => {
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
};

const cleanForm = () => {
  inputData.forEach((item) => {
    if (item.type === "radio" || item.type === "checkbox") {
      item.checked = false;
    } else {
      item.value = "";
    }
  });
  inputMessage.value = "";
};

const reseatErrorMessage = () => {
  errorMessage.forEach((item) => {
    item.classList.add("displayNone");
    item.textContent = " ";
  });
};

const showMessage = (error, element) => {
  switch (error) {
    case "1":
      element.classList.remove("displayNone");
      element.innerText = "This field is required.";
      break;

    case "2":
      element.classList.remove("displayNone");
      element.innerText = "First Name should have between 2 and 16 characters.";
      break;

    case "3":
      element.classList.remove("displayNone");
      element.innerText =
        "Please enter you email address with this pattern email@example.com";
      break;

    case "4":
      element.classList.remove("displayNone");
      element.innerText =
        "First Name should have between 2 and 300 characters.";
      break;

    case "5":
      element.classList.remove("displayNone");
      element.innerText = "Please select one of the 'Query Type' options.";
      break;

    case "6":
      element.classList.remove("displayNone");
      element.innerText =
        "To submit this form, please consent to being contacted.";
      break;

    default:
      showPopup();
      cleanForm();
      reseatErrorMessage();
      break;
  }
};

const submitHandler = (event) => {
  event.preventDefault();
  reseatErrorMessage();

  errorText = validateName(inputData[0].value);
  showMessage(errorText, errorMessage[0]);

  errorText = validateName(inputData[1].value);
  showMessage(errorText, errorMessage[1]);

  errorText = validateEmail(inputData[2].value);
  showMessage(errorText, errorMessage[2]);

  if (!(inputData[3].checked || inputData[4].checked)) {
    errorText = "5";
    showMessage(errorText, errorMessage[3]);
  }

  errorText = validateMessage(inputMessage.value);
  showMessage(errorText, errorMessage[4]);

  if (!inputData[5].checked) {
    errorText = "6";
    showMessage(errorText, errorMessage[5]);
  }
};

loginButton.addEventListener("click", submitHandler);
