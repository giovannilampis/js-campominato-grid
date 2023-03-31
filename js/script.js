"use strict"

// get the #play element in html

const play = document.getElementById("play");

play.addEventListener("click", function() {


  

    // get the #minefield element in html

    let minefield = document.getElementById("minefield");

    // for cycle

    for(let i = 1; i < 101; i++) {

        minefield.append( createHtmlElement( "div", "azure-cell", i ) );

         // get the select element from html

        const level = document.getElementById("level").value;

        switch(level) {

            case '1':
            default:
                element.classList.add("beginner-cell");
                break;

            case '2':
                element.classList.add("advanced-cell");
                break;

            case '3':
                element.classList.add("pro-cell");
        }

    }

})


// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes, text){

    let element = document.createElement( htmlTag );

    element.className = classes;

    element.innerHTML = text;

    return element;

}

// console.log( createHtmlElement( "div", "blue-cell" ) );
