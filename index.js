const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
  .then((response) => {
    var jokes = response.data.jokes;
    const randomJoke = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomJoke];

    console.log(`Here's a developer joke for today: \n \nQ: ${joke.question} \nA: ${joke.answer} \n`);
  })
  .catch((error) => {
    console.log(`${error.message}. \nCould not fetch a joke. Try again later.`)
  });