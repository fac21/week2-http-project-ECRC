const form = document.querySelector("form");
const joke = document.querySelector("#joke");
const gif_api_key = "Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B";
const image = document.querySelector("#gif_image");
const punchline = document.querySelector("#punchline");
const loader = document.querySelector("#loader");

// Gif button 

document.querySelector("#search_button").addEventListener("click", (event) => {

    event.preventDefault();

    joke.innerHTML = "";
    punchline.innerHTML= "";

    const formData = new FormData(form);
    const name = formData.get("gif_name");

    if (name.length > 0) {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${gif_api_key}&tag=${name}&limit=1`)

        .then(document.getElementById("loader").className ="loader-view")

        .then((response) => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then((data) => {
            image.src = data.data.image_original_url;
            image.alt = data.data.title;
            document.getElementById("loader").className = "loader";
        })
        .catch((error) => {
            console.log(error);
            if (error.message === "404") {
                joke.textContent = `⚠️ Couldn't find ${name}`;
            } else {
                joke.textContent = "⚠️ Something went wrong";
            }
        });

}

else alert("Please search for something!");

});

document.querySelector("#joke_button").addEventListener("click", (event) => {

    fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
        .then((object) => {
            punchline.textContent = "";
            joke.textContent = object[0].setup;
            var punch = object[0].punchline;
            let interval = setInterval(function() {
                clearInterval(interval);
                punchline.textContent = punch;
            }, 1500)
        })
        .catch((error) => {
            console.log(error);
            if (error.message === "404") {
                joke.textContent = `⚠️ Couldn't find ${name}`;
            } else {
                joke.textContent = "⚠️ Something went wrong";
            }
        });
})

