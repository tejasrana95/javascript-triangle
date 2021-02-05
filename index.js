// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");

function buildPyramid(stories) {
  var triangle = "";
  for (let i = 1; i <= stories; i++) {
    var rows = "";
    for (let j = 1; j <= stories - i; j++) {
      rows += "&nbsp;";
    }
    for (let k = 1; k <= i; k++) {
      rows += k + " ";
    }
    triangle = triangle === "" ? rows : triangle + "<br/>" + rows;
  }
  appDiv.innerHTML = triangle;
}

buildPyramid(6);
