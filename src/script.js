function recipeSuggested(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function getAi() {
  let apiKey = `0d9d6fa642662e53t328bfec1ado0b77`;
  let prompt1 = document.querySelector("#input-prompt-search");
  let prompt = prompt1.value;
  let context =
    "Generate a recipe using the ingredient provided by the user. Use simple, common ingredients that most people have at home and make sure to give the instructions of cooking.Format the output in using the follow exemplo, <p>recipe name </br></br>ingredients</br>, braking each phrase into a new line.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waiting = document.querySelector("#recipe");
  waiting.innerHTML = "Generating your recipe.....please wait.";

  axios.get(apiUrl).then(recipeSuggested);
}

function promptSearch(event) {
  event.preventDefault();

  getAi();
}

let recipeGenerator = document.querySelector("form");

recipeGenerator.addEventListener("submit", promptSearch);
