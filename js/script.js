"use strict"

// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes){
    let element = document.createElement( htmlTag );
    element.className = classes;
    return element;
}

console.log( createHtmlElement( "div", "blue-cell" ) )

// get the #minefield element in html

let minefield = document.getElementById("minefield");

// for cycle

for(let i = 1; i < 101; i++) {



}