const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

// event listener

btn.addEventListener('click', getJoke);

getJoke();

async function getJoke() {
    const config = {headers: {
        'Accept':'application/json'
    }}

    const joke = await fetch("https://icanhazdadjoke.com", config);
    const data = await joke.json();

    jokeEl.innerHTML = data.joke;
}