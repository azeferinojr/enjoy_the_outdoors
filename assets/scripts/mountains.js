let theDropDown = document.querySelector("#mountaindropdown"); 
let theMountainDiv = document.querySelector("#mountaininfo"); 

//The code below appears to make some progress in that it does something when a drop-down option changes. 
// theDropDown.addEventListener("change", function() {
//     mountainsArray.forEach((mountain) => {
//         theMountainDiv.innerHTML += `<li>${mountain}</li>`
//     })
// })


theDropDown.addEventListener("click", function() {

    console.log(mountainsArray)

    // mountainsArray.forEach((mountain) => {
    //     theMountainDiv.innerHTML += `<li>${mountain}</li>`
    // })

    // theMountainDiv.classList.remove("d-none")

})


// theSampleButton.addEventListener("click", function(event){
//     console.log(locationsArray)
//     console.log(nationalParksArray)
//     console.log(parkTypesArray)

//     locationsArray.forEach((location) => {
//         theSampleUL.innerHTML += `<li>${location}</li>`
//     })

//     parkTypesArray.forEach((parkType) => {
//         parkTypeUL.innerHTML += `<li>${parkType}</li>`
//     })

//     theSampleUL.classList.remove("d-none")
//     parkTypeUL.classList.remove("d-none")
// })

