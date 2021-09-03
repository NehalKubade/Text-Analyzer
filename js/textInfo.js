let textarea = document.getElementById("text");

let data = {
  sentences: 0,
  words: 0,
  digits: 0,
  uppercase: 0,
  lowercase: 0,
  spaces: 0,
  vowels: 0,
  consonants: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  data.sentences = findLength(textarea.value.match(/\056/g));
  data.words = findLength(textarea.value.match(/[a-zA-Z]+/g));
  data.lowercase = findLength(textarea.value.match(/[a-z]/g));
  data.spaces = findLength(textarea.value.match(/\s/g));
  data.digits = findLength(textarea.value.match(/\d/g));
  data.consonants = findLength(textarea.value.match(/[^aeiou]/gi));
  data.uppercase = findLength(textarea.value.match(/[A-Z]/g));
  data.vowels = findLength(textarea.value.match(/[aeiou]/gi));

  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let receivedData = getData();
  let htmlContent = "";
  for (item in receivedData) {
    htmlContent += `<div class="box">
  
  <h2>${receivedData[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
