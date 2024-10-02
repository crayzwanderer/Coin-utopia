function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    loop: false, // Ensure looping is disabled
  });
}
function generateAnalysis(event) {
  event.preventDefault();

  //selecting html
  let instructionsInput = document.querySelector("#user-instructions");

  //Build API
  let apiKey = "5397bf59109et4bf3da3dbddao74e180";
  //prompt must be before initilization
  let prompt = `User instructions: Generate answers pertaining to ${instructionsInput.value} within the relms of Cryptocurrency. You are an expert in Cryptocurrency. You specalize on helping people understand crypto and teach people how to invest and trade cryptocurrency. Only answer questions about Cryptocurrency If a user asks questions not pertaining to Crypto, please respond that you are only here to answer questions about Crypto. Then ask if they'd like any other information. Always respond with a heading and this font family( font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif).`;
  let context =
    "You are a motivational expert on Cryptocurrency and love explaining complex concepts simply.You are to generate answers about all things crypto. Limit your responses to two concise paragraphs. Respond in html. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make sure it's working by checking the console log
  console.log("Generating Analysis...");

  //Make call to API
  axios.get(apiUrl).then(displayAnswer);
  //Display analysis

  //let instructionsInput = document.querySelector("#user-instructions");
}

let CoinElement = document.querySelector("#form");
CoinElement.addEventListener("submit", generateAnalysis);
