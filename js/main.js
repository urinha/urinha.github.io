var firstColumn = [
  "The referee",
  "The 4th official",
  "The referee's assistant",
  "Lady Luck",
  "Their manager",
  "The media",
  "The FA",
  "The opposition",
  "The weather",
  "Paul Pogba"
];

var secondColumn = [
  "did not listen to",
  "underestimated the size of",
  "turned a blind eye to",
  "was disrespectful to",
  "doesn't understand",
  "has destabilised",
  "has provoked divisions in",
  "plays a different system to",
  "was intimidated by",
  "ignored"
];

var thirdColumn = [
  "Zlatan Ibrahimovich",
  "my ego",
  "the cosmic principle of karma",
  "my innate superiority",
  "my instructions",
  "the dressing room",
  "all the trophies i've won",
  "my signings",
  "Paul Pogba's transfer fee",
  "Sir Alex Ferguson"
];

var button = document.getElementById('button');
var phrase = document.getElementById('phrase');

button.addEventListener('click', function () {
  phrase.innerHTML = firstColumn[Math.floor(Math.random() * firstColumn.length)] + ' ' + secondColumn[Math.floor(Math.random() * secondColumn.length)] + ' ' + thirdColumn[Math.floor(Math.random() * thirdColumn.length)];
});