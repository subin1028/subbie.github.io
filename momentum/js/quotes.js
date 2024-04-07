const quotes = [
    {
        quote:"Ryudejakeiru",
        author:"Silica Gel",
    },
    {
        quote:"소년",
        author:"10CM",
    },
    {
        quote:"Prince",
        author:"SORAN",
    },
    {
        quote:"CHANCE!",
        author:"PEPPERTONES",
    },
    {
        quote:"LETTER",
        author:"유다빈밴드",
    },
    {
        quote:"Cilla",
        author:"SURL",
    },
    {
        quote:"YOU",
        author:"Lacuna",
    },
    {
        quote:"Highlight",
        author:"Touched",
    },
    {
        quote:"yours",
        author:"Damons year",
    },
    {
        quote:"New Hippie Generation",
        author:"PEPPERTONES",
    },
    {
        quote:"Budland",
        author:"Silica Gel",
    },
    {
        quote:"찬란(Shine)",
        author:"Band Nah",
    }
];

const quote = document.querySelector(".music span:last-child");
const author = document.querySelector(".music span:first-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = `${todaysQuote.author} - `;