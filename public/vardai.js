"use strict";
console.log("vardai.js file was loaded");

const url = "http://localhost:3000/api/vardai";

function addNameToUl() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("data ===", data);
      ulWhitNames(data);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
addNameToUl();

function ulWhitNames(dataArr) {
  const ulEl = document.createElement("ul");
  dataArr.forEach((arrObj) => {
    const liEl = document.createElement("li");
    liEl.textContent = `${arrObj.name} ${arrObj.surname}`;
    ulEl.append(liEl);
  });
  document.body.append(ulEl);
  return ulEl;
}
