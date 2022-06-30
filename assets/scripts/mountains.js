let theDropDown = document.querySelector("#mountainDDL"); 
let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


window.onload = function() {
    generateMountainsDDLOptions();
  };
   
    function generateMountainsDDLOptions(){
        mountainsArray.forEach((mountain) => {
            theDropDown.innerHTML += `<option value=${mountain}>${mountain}</option>`
        })
    }


setTimeout (() => {
console.log(mountainsArray)
}, 5000 );