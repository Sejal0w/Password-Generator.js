const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

document.getElementById("generateBtn").addEventListener("click", () => {
  let length = parseInt(lengthInput.value);
  let chars = "";

  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }

  passwordBox.value = password;
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}