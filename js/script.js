"use strict"

// get the #play element in html

const play = document.getElementById("play");

// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes, text, elementWidth){

    let element = document.createElement( htmlTag );

    element.className = classes;

    element.innerHTML = text;

    return element;

}

console.log( createHtmlElement( "div", "blue-cell" ) )

// get the #minefield element in html

let minefield = document.getElementById("minefield");

// for cycle

for(let i = 1; i < 101; i++) {

    minefield.append( createHtmlElement( "div", "azure-cell", i ) )

}