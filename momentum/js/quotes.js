const quotes = [
    {
        quote:"No Pain, No Fail",
        author:"Silicagel",
    },
    {
        quote:"I'm nothing without you",
        author:"10CM",
    },
    {
        quote:"I sometimes think about happiness",
        author:"SORAN",
    },
    {
        quote:"why I'm crying",
        author:"SeoYeong",
    },
    {
        quote:"You're my celebrity",
        author:"IU",
    },
    {
        quote:"Do you think of me?",
        author:"10CM",
    },
    {
        quote:"Isn't you happy?",
        author:"CryingNut",
    },
    {
        quote:"All Life is Highlight",
        author:"Touched",
    },
    {
        quote:"You'll make my perfect day",
        author:"SORAN",
    },
    {
        quote:"How beautiful world",
        author:"Peppertones",
    },
    {
        quote:"There's an egg in my ear",
        author:"Silicagel",
    },
    {
        quote:"I'll make you to walk a road of flower",
        author:"Daybreak",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;