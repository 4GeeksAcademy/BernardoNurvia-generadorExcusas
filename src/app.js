/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
//creo mis variables
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
// con `${variable[math...]}` llamo a las variables para mi generador
let excuseGenerator = `${who[Math.floor(Math.random() * who.length)]} ${
  action[Math.floor(Math.random() * action.length)]
} ${what[Math.floor(Math.random() * what.length)]} ${
  when[Math.floor(Math.random() * when.length)]
}.`;
//variable para sustituir
let texExcuse = document.getElementById("excuse");
// variable que sustitulle
texExcuse.innerText = excuseGenerator;
