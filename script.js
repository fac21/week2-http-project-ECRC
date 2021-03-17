const apiKey = "cc19c6fe91b661a87a0830b1e591a714";

fetch("https://api.musixmatch.com/ws/1.1/track.search", {
        type: "GET",
        data: {
            apikey: "0f3eb00487e5cbcfec371529a25237d2",
            // q_artist: artistSearch,
            format: "jsonp",
            callback: "jsonp_callback"
        }
    })
    .then((response) => response.json())
    .then((response) => console.log(response))