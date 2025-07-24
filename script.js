const jokeContainer = document.getElementById('joke');
const nextButton = document.getElementById('next');

async function fetchJoke() {
    jokeContainer.textContent = 'Fetching a new joke...';
    try{
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();
        const jokeText = `${data.setup} — ${data.punchline}`;
        jokeContainer.textContent = jokeText
    }
    catch(error){
        jokeContainer.textContent = 'Failed to load joke 😢';
        console.error('Error fetching joke:', error);
    }
};

window.addEventListener("load", () => {
    fetchJoke();
})

nextButton.addEventListener('click', fetchJoke);