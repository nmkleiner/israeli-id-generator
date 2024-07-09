import './style.css'
import { setupIdGenerator } from './id-generator.js'

document.querySelector('#app').innerHTML = `
  <div id="id-generator">
    <input type="text" id="id-input" />
    <button id="id-button">Generate</button>
  </div>
`

setupIdGenerator(document.querySelector('#id-generator'))
