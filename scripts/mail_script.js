"use strict";

const checkbox = document.getElementById("consent");
const sendButton = document.getElementById("form__button");

function activation() {
  if (checkbox.checked) {
    sendButton.removeAttribute("disabled");
  } else {
    sendButton.setAttribute("disabled", "");
  }
}
checkbox.addEventListener("change", activation);

const form = document.forms[0];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements[4];

let alertPopup = document.getElementById("alert");
let alertTitle = document.getElementById("alert__title");
let alertText = document.getElementById("alert__text");
let alertButton = document.getElementById("alert__button");

alertButton.addEventListener("click", closeAlertPopup);

function closeAlertPopup() {
  alertPopup.classList.remove("alert_opened");
}

form.addEventListener("submit", formSubmit);

async function formSubmit(e) {
  button.style.pointerEvents = "none";
  e.preventDefault();
  const data = serializeForm(form); // получаем данные формы
  const response = await sendData(data); // отправляем данные на почту
  alertPopup.classList.add("alert_opened");
  alertTitle.className = response.ok
    ? "alert__title alert__title_ok"
    : "alert__title alert__title_error";
  alertTitle.textContent = response.ok
    ? "Ваше сообщение успешно отправленно!"
    : "Ошибка на сервере.";
  alertText.textContent = response.ok
    ? "Мы ответим Вам в ближайшее время."
    : "Письмо не может быть доставленно, пожалуйста свяжитесь с нами +74952221942";
  formReset(); // сбрасываем поля формы
  button.style.pointerEvents = "all";
}

function serializeForm(form) {
  // формируем данные формы
  return new FormData(form);
}

async function sendData(data) {
  return await fetch("../send_mail.php", {
    // отправляем в скрипт send_mail.php
    method: "POST", // методом POST
    body: data,
  });
}

function formReset() {
  // сброс полей формы
  form.elements[3].value = "";
}
