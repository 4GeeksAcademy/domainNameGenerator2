/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es"];

  for (let i in pronoun) {
    for (let t = 0; t < adj.length; t++) {
      for (let p = 0; p < noun.length; p++) {
        for (let n of extension) {
          console.log(pronoun[i] + adj[t] + noun[p] + n);
        }
      }
    }
  }
};
