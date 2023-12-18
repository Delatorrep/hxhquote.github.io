const quotes = [
  {
    text: '"Do you humans ever listen to the cries of mercy coming from the pigs and cows you slaughter?"',
    author: "Meruem"
  },
  {
    text: '"If you want to get to know someone, find out what makes them angry."',
    author: "Gon"
  },
  {
    text: '"It takes a mere second for treasure to turn to trash."',
    author: "Hisoka"
  },
   {
    text: '"When I say it does not hurt me, that means I can bear it."',
    author: "Killua"
  },
    {
    text: '"An apology is a promise to do things differently next time, and to keep the promise."',
    author: "Ging"
  },
  
    {
    text: '"Human potential for evolution is limitless."',
    author: "Netero"
  },
  
      {
    text: '"Human potential for evolution is limitless."',
    author: "Netero"
  },


       {
    text: '"In the hands of an incompetent, power brings nothing but ruin."',
    author: "Meruem"
  },

        {
    text: '"You should enjoy the little detours to the fullest."',
    author: "Ging"
  },

        {
    text: '"I do not fear death. I fear only that my rage will fade over time."',
    author: "Kurapika"
  },

        {
    text:  '"There are liars who only lie when there’s a reason to, and there are liars who also lie without a reason."',
    author: "Biscuit Kruegar"
  },

         {
    text:  '"There are two things that collectors always want. The first is any item of extreme rarity. The second is colleagues to whom they can brag about their collection."',
    author: "Kurapika"
  },

         {
    text:  '"I’m not interested in broken toys."',
    author: "Hisoka"
  },

         {
    text:  '"My greatest pleasure comes when such people buckle to their knees, and I look down upon their disbelieving faces as their plan fail."',
    author: "Hisoka"
  },

        {
    text:  '"If I ignore a friend, I have the ability to help, wouldn’t I be betraying him?"',
    author: "Killua"
  },

        {
    text:  '"I was trying to take the easy way out by running away from everything. No matter the pain, I will keep living. So, when I die, I’ll feel I did the best I could."',
    author: "Koala"
  },


        {
    text:  '"A beast in human’s clothing understands better than anyone how people want to be treated."',
    author: "Kurapika"
  },


        {
    text:  '"Who wants their life planned out for them."',
    author: "Killua"
  },

          {
    text:  '"Skill is one thing, and caution is another."',
    author: "Geretta"
  },

          {
    text:  '"Whenever humans encounter the unknown, they tend to lose perspective."',
    author: "Knov"
  },

         {
    text:  '"I’ll wait. And when the fruit is ripe, I’ll pluck it."',
    author: "Hisoka"
  },

         {
    text:  '"You believe I cannot pray with a single arm? A prayer comes from the heart. If the heart achieves the correct form, it becomes emotions and emotions can be manifested."',
    author: "Netero"
  },

         {
    text:  '"I want money—money can get you anything in this world."',
    author: "Leorio"
  },

   {text:  '"Normally, as people love and are loved, they feel happiness. When I am hated by people, that is when I feel happiness. And then I want to tear apart and inflict unimaginable harm to the things I love. But is that really all that strange, I wonder?"',
    author: "Pariston"
  },


        {
    text:  '"In my next life, I want to be me, and meet you again."',
    author: "Gon"
  },

        {
    text:  '"For the right price, you can buy not only treasures, but dreams, hearts, and even people’s lives."',
    author: "Leorio"
  },

        {
    text:  '"Those who call themselves hunters always get their prey."',
    author: "Kite"
  },
  // Add more quotes as needed...
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const { text, author } = getRandomQuote();
  document.getElementById('quote').innerHTML = text;
  document.getElementById('author').textContent = `— ${author}`;
}

displayQuote(); // Display initial quote

// Update quote every 3 hours (in milliseconds: 3 hours * 60 minutes * 60 seconds * 1000 milliseconds)
setInterval(displayQuote, 3 * 60 * 60 * 1000);
