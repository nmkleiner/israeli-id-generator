import "./style.css";
import { setupIdGenerator } from "./id-generator.js";

document.querySelector("#app").innerHTML = `
  <div id="id-generator">
    <div class="row">
        <input class="mb-8" type="text" id="id-input" />
    </div>
    <div class="row"> 
        <button class="button" id="copy-button">Copy</button>
        <button class="button" id="generate-button">Generate</button>
    </div>
  </div>
`;

setupIdGenerator(document.querySelector("#id-generator"));
