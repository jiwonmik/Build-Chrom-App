const quotes =[
    {
        quote: "The purpose of our lives is to be happy.",
        author: "DALAI LAMA"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "ALBERT EINSTEIN"
    },
    {
        quote: "After all, life is too short to be anything but happy.",
        author: "Karl Marx"
    },
    {
        quote:"If you want to lift yourself up, life up someone else.",
        author:"Booker T. Washington"
    },
    {
        quote:"Everything has beauty, but not everyone sees it.",
        author: "Confucius"
    },
    {
        quote:"Keep your face to the sunshine and you cannot see a shadow.",
        author: "Helen Keller"
    },
    {
        quote:"You were given this life because you are strong enought to live it.",
        author: "Ain Eineziz"
    },
    {
        quote:"Act as if what you do makes a difference. It does.",
        author:"Willia James"
    
    },
    {
        quote:"Wherever you go, no matter what the weather, always bring your own sunshine.",
        author:"Anthony J. D'Angelo"
    },
    {
        quote:"Every day brings new choices.",
        author:"Martha Beck"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

// Math.random() : 0~1 사이 랜덤 숫자
// Math.round(): 반올림 
// Math.ceil(): 올림
// Math.floor(): 내림 