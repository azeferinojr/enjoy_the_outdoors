//This file has all the arrays available because we included local_national_parks_data.js above it.  

//This won't work, because the file needs to be able to load first
// console.log(locationsArray, "Trying to see immediately")

//This will work , but we won't use.  Rather, data loading should be event driven 
// setTimeout (() => {
//     console.log(locationsArray)
// }, 5000 );



let theSampleButton = document.querySelector("#theDemoButton"); 
let theSampleUL = document.querySelector("#locations"); 
let parkTypeUL = document.querySelector("#partTypes"); 


theSampleButton.addEventListener("click", function(event){
    console.log(locationsArray)
    console.log(nationalParksArray)
    console.log(parkTypesArray)

    locationsArray.forEach((location) => {
        theSampleUL.innerHTML += `<li>${location}</li>`
    })

    parkTypesArray.forEach((parkType) => {
        parkTypeUL.innerHTML += `<li>${parkType}</li>`
    })

    theSampleUL.classList.remove("d-none")
    parkTypeUL.classList.remove("d-none")
})

