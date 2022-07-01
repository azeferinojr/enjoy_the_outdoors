"use strict"

let mountainsArray = []

//added this
let mountainsDDL = document.querySelector("#mountainsDDL"); 
//end add

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;

            //added this
        mountainsArray.forEach(function(mountain) {
            mountainsDDL.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
        });

        searchResults.classList.add("hidden") 
            //end


    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}