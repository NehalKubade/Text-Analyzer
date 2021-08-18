let textareaEl = document.getElementById("text");
let text = null;
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
  text = textareaEl.value;
  //  number of new Sentences   text.match(/\056/g)
  //  number of uppercase       text.match(/[A-Z]/g)
  //  number of lowercase       text.match(/[a-z]/g)
  //  number of spaces          text.match(/\s/g)
  //  number of digits          text.match(/\d/g)
  //  number of words           text.match(/[a-zA-Z]+/g)
  //  number of vowels          text.match(/[aeiou]/gi)
  // numbers of consonant      text.match(/[^aeiou]/gi)
  if (text != null) {
    data.sentences = findLength(text.match(/\056/g));
    data.words = findLength(text.match(/[a-zA-Z]+/g));
    data.lowercase = findLength(text.match(/[a-z]/g));
    data.spaces = findLength(text.match(/\s/g));
    data.digits = findLength(text.match(/\d/g));
    data.consonants = findLength(text.match(/[^aeiou]/gi));
    data.uppercase = findLength(text.match(/[A-Z]/g));
    data.vowels = findLength(text.match(/[aeiou]/gi));
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};