// Theme button
const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

    });

}

// Space fact button
const factButton = document.getElementById("factButton");

const factText = document.getElementById("factText");

const spaceFacts = [

    "The Milky Way contains billions of stars.",

    "Mars is known as the Red Planet.",

    "The Sun is a star.",

    "Olympus Mons on Mars is the largest volcano in the Solar System.",

    "Light from the Sun takes about 8 minutes to reach Earth."

];

if (factButton) {

    factButton.addEventListener("click", function () {

        const randomNumber =
            Math.floor(Math.random() * spaceFacts.length);

        factText.textContent =
            spaceFacts[randomNumber];

    });

}