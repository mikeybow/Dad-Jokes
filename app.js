const jokeElement = document.getElementById('joke');
const getJoke = document.getElementById('jokeBtn');

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokeRes.json();

    jokeElement.innerHTML = joke.joke;
}