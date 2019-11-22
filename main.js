document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector("input[type='submit']").addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("h1").innerHTML = "wating....";


        axios.defaults.headers.common["x-api-key"] = "08107017-92ca-41a3-89c9-6f1f93be67d7";

        axios.get("https://api.thecatapi.com/v1/breeds")
            .then(function(theHttpResponse) {
                let randomCat = Math.ceil(Math.random(0, theHttpResponse.data.length - 1) * 10);
                document.querySelector("h1").innerHTML = theHttpResponse.data[randomCat].name;
                document.querySelector("div p").innerHTML = theHttpResponse.data[randomCat].life_span;
            })
            .catch(function(error) {
                tellUserError();
            });
    });

});