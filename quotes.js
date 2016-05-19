var quotes = [
	"'This too shall pass.' -Unknown",
	"'It is during our darkest moments that we must focus to see the light.' -Aristotle Onassis",
	"'No act of kindness, no matter how small, is ever wasted.' -Aesop"
];

function returnQuote(){
    var randomQuote = Math.floor(Math.random()*quotes.length);
	return quotes[randomQuote];
};

module.exports = returnQuote;

module.exports = quotes;