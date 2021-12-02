const quotes = [
  {
    quote: "어깨를 펴고 똑바로 서라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "당신 자신을 도와줘야 할 사람처럼 대해라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "당신에게 최고의 모습을 기대하는 사람만 만나라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "당신을 다른 사람과 비교하지 말고, 오직 어제의 당신 하고만 비교하라",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "당신이 자신의 아이들을 싫어하게 될 계기를 만들지 마라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "세상을 탓하기 전에 방부터 정리하라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "쉬운 길이 아니라 의미 있는 길을 선택하라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "언제나 진실하라, 적어도 거짓말은 하지 마라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote:
      "다른 사람이 말할 때는 당신이 꼭 알아야 할 것을 들려줄 사람이라고 생각하라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "분명하고 정확하게 말하라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "아이들이 스케이트보드를 탈 때 방해하지 말고 내버려 두어라.",
    author: " - Jordan Peterson -  ",
  },
  {
    quote: "길에서 고양이와 마주치면 쓰다듬어 주어라.",
    author: " - Jordan Peterson -  ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
