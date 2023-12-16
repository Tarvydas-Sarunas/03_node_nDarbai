"use strict";
console.log("public.js file was loaded");

// Nusitaikymai

const btnVardai = document.getElementById("name-page");
const form = document.getElementById("form");
const vardas = document.getElementById("vardas");
const pavarde = document.getElementById("pavarde");

const url = "http://localhost:3000/api/vardai";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newObj = {
    vardas: vardas.value,
    pavarde: pavarde.value,
  };
  console.log("newObj ===", newObj);
  addNewPost(newObj);
});

function addNewPost(newPostObj) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPostObj),
  })
    .then((response) => response.json())
    .then((postsArr) => {
      console.log(postsArr);
      // renderPosts(postsArr);
    })
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}

function addNameToUl() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log("data ===", data))
    .catch((error) => {
      console.warn("ivyko klaida:", error);
    });
}
