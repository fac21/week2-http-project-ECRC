
fetch('https://api.giphy.com/v1/gifs/search?api_key=Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B')

.then((response) => response.json())
.then(console.log)

fetch('https://official-joke-api.appspot.com/jokes/ten')
.then((response) => response.json())
.then(console.log)

const form = document.querySelector("form");
const output = document.querySelector("output");

// in here we need to get out 'artist_name' input to be submitted to the s:

document.querySelector("#search_button").addEventListener("click", (event) => {

    event.preventDefault();
    output.innerHTML = "";
    const formData = new FormData(form);
    const name = formData.get("artist_name");

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Mvtk1VOaZhdRLdIqKzWqgXQ0gnMl894B',
    {
        method: "POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            s: name,
        })
        
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })

   

})