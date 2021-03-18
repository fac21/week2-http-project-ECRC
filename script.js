const form = document.querySelector("form");
const output = document.querySelector("#joke");
const gif_api_key = "Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B";
const image = document.querySelector("#gif_image");
const output1 = document.querySelector("#punchline");
const loader = document.querySelector("#loader");

// Gif button 

document.querySelector("#search_button").addEventListener("click", (event) => {

    event.preventDefault();

    output.innerHTML = "";
    output1.innerHTML= "";

    const formData = new FormData(form);
    const name = formData.get("gif_name");


    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${gif_api_key}&tag=${name}&limit=1`)

        .then(document.getElementById("loader").className = "loader-view")

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
                output.textContent = `⚠️ Couldn't find ${name}`;
            } else {
                output.textContent = "⚠️ Something went wrong";
            }
        });
});


document.querySelector("#joke_button").addEventListener("click", (event) => {

    fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
        .then((object) => {
            output.textContent = object[0].setup;
            var punch = object[0].punchline;
            setInterval(function() {
                output1.textContent = punch;
            }, 3000)
        })
        .catch((error) => {
            console.log(error);
            if (error.message === "404") {
                output.textContent = `⚠️ Couldn't find ${name}`;
            } else {
                output.textContent = "⚠️ Something went wrong";
            }
        });
})