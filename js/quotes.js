const quotes =[
{
    quote:"If I know what love is, it is because of you.",

    author:"Hermann Hesse"
},{
    quote:"I fell in love with her courage, her sincerity, and her flaming self respect. And it’s these things I’d believe in, even if the whole world indulged in wild suspicions that she wasn’t all she should be. I love her and it is the beginning of everything.",

    author:"F. Scott Fitzgerald",
},{
    quote:"I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",

    author:"Leo Christopher",
},{
    quote:"If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",

    author:"A. A. Milne",
},{
    quote:"A man is already halfway in love with any woman who listens to him.",

    author:"Brendan Francis",
},{
    quote:"I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",

    author:"Pablo Neruda",
},{
    quote:"Women are meant to be loved, not to be understood.",

    author:"Oscar Wilde",
},{
    quote:"You make me want to be a better man.",

    author:"Melvin Udall",
},{
    quote:"Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",

    author:"Unknown",
},{
    quote:"I loved you so much all my heart, but seems like you don't love me",

    author:"Saehwan Park",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;