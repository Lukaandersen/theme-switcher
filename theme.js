"use strict";

//tilhørende html
//<h2 data-filter="fox">Hey, brown is fox. black is bat</h2>
//     <button>Skift farve</button>

/*document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (document.querySelector("h2").dataset.filter === "bat") {
    document.querySelector("h2").dataset.filter = "fox";
  } else {
    document.querySelector("h2").dataset.filter = "bat";
  }
}
*/

document.querySelectorAll("option").forEach((button) => {
  addEventListener("click", klik);
});

function klik(evt) {
  if (evt.target.value === "light") {
    document.querySelector("body").dataset.theme = "light";
  } else if (evt.target.value === "dark") {
    document.querySelector("body").dataset.theme = "dark";
  } else {
    document.querySelector("body").dataset.theme = "hawaii";
  }
}
