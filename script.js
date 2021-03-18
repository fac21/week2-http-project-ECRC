// fetch('https://api.giphy.com/v1/gifs/random?api_key=Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B')

// .then((response) => response.json())
// .then(console.log)

// fetch('https://official-joke-api.appspot.com/jokes/ten')
// .then((response) => response.json())
// .then(console.log)

const form = document.querySelector("form");
const output = document.querySelector("#image");
const gif_api_key = "Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B";
const image = document.querySelector("#gif_image");
const output1 = document.querySelector("#lyrics");


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
            image.alt = ""; //add in text hre from image

            //output.append(image)
        })

    .then(() => fetch('https://official-joke-api.appspot.com/jokes/ten')

        .then((response) => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }))

    .then((object) => {
        // console.log(object[0].punchline)
        //const giphy = document.createElement("img");
        output.textContent = object[0].setup;
        output1.textContent = object[0].punchline;

    })


    // .then(setInterval(function() {
    //     object => {
    //         console.log(object[0].punchline);
    //         output1.textContent = object[0].punchline;
    //     }
    // }, 3000))



    .catch((error) => {
        console.log(error);
        if (error.message === "404") {
            output.textContent = `⚠️ Couldn't find ${name}`;
        } else {
            output.textContent = "⚠️ Something went wrong";
        }
    });

});

// so far the fetch is working, we just need