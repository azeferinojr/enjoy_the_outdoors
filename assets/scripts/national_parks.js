//This file has all the arrays available because we included local_national_parks_data.js above it.  

//This won't work, because the file needs to be able to load first
// console.log(locationsArray, "Trying to see immediately")

//This will work , but we won't use.  Rather, data loading should be event driven 
// setTimeout (() => {
//     console.log(locationsArray)
// }, 5000 );


// working, but removed for now 
// let theSampleButton = document.querySelector("#theDemoButton"); 
// let theSampleUL = document.querySelector("#locations"); 
// let parkTypeUL = document.querySelector("#partTypes"); 

// console.log(nationalParksArray)

//Final below
let searchTypeDDL = document.querySelector("#searchTypeDDL");
let locationsDDL = document.querySelector("#locations");
let typesDDL = document.querySelector("#types");
let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");

// let searchResults = document.querySelector(#searchResults);
// let searchResultsBody = document.querySelector

searchTypeDDL.addEventListener("change", function(event){
//Check which search type
//if search type is location, then show locations dropdown 
//if search type is type, then show types drop down

if(event.target.value === "location") {
    generateLocationsDDLOptions(); //This calls the locations function below
    locationsDDL.classList.remove("hidden");
    typesDDL.classList.add("hidden");
}

if(event.target.value === "type") {
    generateTypesDDLOptions();
    typesDDL.classList.remove("hidden");
    locationsDDL.classList.add("hidden");
    searchResults.classList.add("hidden");
}

if(event.target.value === "") {
    locationsDDL.classList.add("hidden");
    typesDDL.classList.add("hidden");
    searchResults.classList.add("hidden");

}

})







//Change event that is triggered when selecting a state from state DDL  
locationsDDL.addEventListener("change", function(event){

    searchResults.classList.add("hidden")
   
    let location = event.target.value;

    let filteredParks = nationalParksArray.filter((nationalPark)=>{
        return nationalPark.State === location
    })

    console.log(filteredParks)

    generateTableRows(filteredParks)

    searchResults.classList.remove("hidden")

})


// //Change event that is triggered when selecting a type from type DDL  
//Changed first part of 1st line to typesDDL
typesDDL.addEventListener("change", function(event){

    searchResults.classList.add("hidden")
   
    let type = event.target.value;

    let filteredTypes = nationalParksArray.filter((nationalPark)=>{
        return nationalPark.LocationName.indexOf(type) >= 0  // this was type originally
    })

    console.log(filteredTypes)

    generateTableRows(filteredTypes)

    searchResults.classList.remove("hidden")

})



//Function that generates table when selecting a state from DDL 
function generateTableRows(someArrayOfData){

    //clear out the tables previous results
    searchResultsBody.innerHTML = ""

    //generate new table rows and appewnd to the the tbody innerHTML
    someArrayOfData.forEach((park)=>{
        let row = ""
        row += `<tr>`
        row += `    <td>${park.LocationName}</td>`
        row += `    <td>${park.State}</td>`
        row += `    <td>${park.Address}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row
    })

}



function generateLocationsDDLOptions(){
    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value=${location}>${location}</option>`
    })
}

function generateTypesDDLOptions(){
    parkTypesArray.forEach((parkType) => {
        typesDDL.innerHTML += `<option value=${parkType}>${parkType}</option>`
    })
}

// function generateResultsOutput(){
//     nationalParksArray.forEach((natpark) => {
//         console.log(nationalParksArray)
//     })
// }




