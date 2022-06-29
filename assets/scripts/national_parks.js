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

//Final below
let searchTypeDDL = document.querySelector("#searchTypeDDL");
let locationsDDL = document.querySelector("#locations");
let typesDDL = document.querySelector("#types");
let resultsTable = document.querySelector("#resultstable");


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
}

if(event.target.value === "") {
    locationsDDL.classList.add("hidden");
    typesDDL.classList.add("hidden");
}

})

//In progress
locationsDDL.addEventListener("change", function(event) {
    console.log("You selected a location. Location code to follow.")
    if(event.target.value != "") {
        resultsTable.classList.remove("hidden");
    }
})



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

//In progress 
function generateSelectedLocation(){

}