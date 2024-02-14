"use strict";

// const acceptedUsers = [
//   "guest1",
//   "halbert",
//   "jlaukkanen",
//   "sklaubert",
//   "cvarelas",
//   "pdavis",
//   "jplaisted",
//   "glizotte",
//   "ecollazo",
//   "kregan",
//   "ksawin",
//   "mhudroge",
//   "kbermudez-cotto",
//   "hdoyle",
// ];

// function checkUsername() {
//   const username = document
//     .querySelector(".signin input[type='text']")
//     .value.toLowerCase();
//   if (acceptedUsers.includes(username)) {
//     sessionStorage.setItem("username", username);
//     document.querySelector(".signin").style.display = "none";
//     document.querySelector(".box").style.display = "flex";
//     document.querySelector(".guest").style.display = "none";
//     sessionStorage.setItem("signedIn", "true");
//   } else {
//     alert("Invalid username. Please try again.");
//   }
// }

// const savedUsername = sessionStorage.getItem("username");
// if (acceptedUsers.includes(savedUsername)) {
//   document.querySelector(".signin").style.display = "none";
//   document.querySelector(".box").style.display = "flex";
//   document.querySelector(".signin input[type='text']").value = savedUsername;
//   sessionStorage.setItem("signedIn", "true");
// }

// document
//   .querySelector(".signin input[type='text']")
//   .addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       checkUsername();
//     }
//   });

// const signedIn = sessionStorage.getItem("signedIn");
// if (signedIn === "true") {
//   document.querySelector(".guest").style.display = "none";
// }

document.querySelector(".copy").addEventListener("click", function () {
  const output = document.querySelector(".output");
  output.select();
  navigator.clipboard.writeText(output.value).then(
    function () {
      console.log("Text copied to clipboard");
    },
    function (err) {
      console.error("Error copying text to clipboard: ", err);
    }
  );
});

function convertToCaps() {
  const input = document.querySelector(".box input[type='text']");
  const output = input.value.toUpperCase();
  document.querySelector(".box textarea").value = output;
  input.value = "";
}

function convertToLower() {
  const input = document.querySelector(".box input[type='text']");
  const output =
    input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
  document.querySelector(".box textarea").value = output;
  input.value = "";
}

document
  .querySelector(".box input[type='text']")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      convertToCaps();
    }
  });
