import "./style.css";
import { setupIdGenerator } from "./id-generator.js";

document.querySelector("#app").innerHTML = `
  <div id="id-generator">
  <h1>Generate a random valid Israeli Id</h1>
    <div class="row">
        <input class="mb-8" type="text" id="id-input" />
    </div>
    <div class="row"> 
        <button class="button" id="copy-button">Copy to clipboard</button>
        <button class="button" id="generate-button">Generate another one</button>
    </div>
  </div>
`;

setupIdGenerator(document.querySelector("#id-generator"));
