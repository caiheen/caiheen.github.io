const quotes = [
    {
        quote: "진실로 날마다 새로워지면 나날이 새로워지고 또 날로 새로워 진다.",
        author: "-대학",
    },
    {
        quote: "덮어놓고 책을 믿는 것은 책이 없는 것과 마찬가지이다.",
        author: "- 맹자",
    },
    {
        quote: "천시는 지리를 따르지 못하고 지리는 인화를 따르지 못한다.",
        author: "- 맹자",
    },
    {
        quote: "빈곤하면서 원망하지 않기는 어렵고 부유하면서 교만하지 않기는 쉽다.",
        author: "- 논어",
    },
    {
        quote: "깊이 생각지 않으면 얻지 못하고 행위로 옮겨지지 않으면 이루지 못한다.",
        author: "- 서경",
    },
    {
        quote: "세 명이 길을 가노라면 반드시 스승 될 만한 이가 있다.",
        author: "- 논어",
    },
    {
        quote: "두 사람이 마음을 합치면 그 날카로움은 금속도 자를 수 있다.",
        author: "- 역경",
    },
    {
        quote: "학문을 해도 사색하지 않으면 애매하고 사색도 학문하지 않으면 확신할 수 없다.",
        author: "- 논어",
    },
    {
        quote: "남이 나를 알아주지 않는다고 불평하지 말고 내가 남을 알지 못함을 걱정하라.",
        author: "- 논어",
    },
    {
        quote: "깊이 팠는데도 물이 안 나온다 해서 우물 파기를 포기하지 마라.",
        author: "- 맹자",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;