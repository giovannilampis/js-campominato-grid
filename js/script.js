"use strict"

// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes){
    let element = document.createElement( htmlTag );
    element.className = classes;
    return element;
}

console.log( createHtmlElement( "div", "blue-cell" ) )