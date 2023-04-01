"use strict"

// get the #play element in html

const play = document.getElementById("play");

play.addEventListener("click", function() {

    // get the #minefield element in html

    let minefield = document.getElementById("minefield");

    // reset minefield on click to play

    minefield.innerHTML = '';

    // get the select element from html

    const level = parseInt(document.getElementById("level").value);

    // for cycle

    for(let i = 1; i <= level; i++) {

        minefield.append( createHtmlElement( "div", "cell", i ) );

    }

})


// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes, text){

    let element = document.createElement( htmlTag );

    element.className = classes;

    // get the select element from html

    const level = document.getElementById("level").value;

    switch(level) {

        case '100':
        default:
           element.classList.add("beginner-cell");
           break;

        case '81':
             element.classList.add("advanced-cell");
             break;

         case '49':
             element.classList.add("pro-cell");
     }

     element.addEventListener("click", function() {
        this.classList.add("azure");
        this.innerHTML = text;
     })

    return element;

}

// console.log( createHtmlElement( "div", "blue-cell" ) );
