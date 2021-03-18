// fetch('https://api.giphy.com/v1/gifs/random?api_key=Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B')

// .then((response) => response.json())
// .then(console.log)

// fetch('https://official-joke-api.appspot.com/jokes/ten')
// .then((response) => response.json())
// .then(console.log)

const form = document.querySelector("form");
const output = document.querySelector("output");
const gif_api_key = "Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B";
const image = document.querySelector("#gif_image")


// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${gif_api_key}&tag=${name}&limit=1`)
// .then((response) => response.json())
// .then(console.log)

// in here we need to get out 'artist_name' input to be submitted to the s:

document.querySelector("#search_button").addEventListener("click", (event) => {

    event.preventDefault();

    output.innerHTML = "";

    const formData = new FormData(form);
    const name = formData.get("artist_name");

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${gif_api_key}&tag=${name}&limit=1`)
        .then((response) => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then((data) => {
            console.log(data)
                //const giphy = document.createElement("img");
            image.src = data.data.image_original_url;
            image.alt = "";

            //output.append(image)
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

// so far the fetch is working, we just need