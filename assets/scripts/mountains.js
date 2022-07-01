let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


mountainsDDL.addEventListener("change", function (event) {
    //debugger
    let mountain = event.target.value;

    let filteredMountains = mountainsArray.filter((mountain) => {
    return mountain === mountain // was return mountain.name
    })

    generateTableRows(filteredMountains)

    searchResults.classList.remove("hidden")
    console.log("change event detected")
})

   
//Function that generates table when selecting a state from DDL 
function generateTableRows(someArrayOfData){

    //clear out the tables previous results
    searchResultsBody.innerHTML = ""

    //generate new table rows and appewnd to the the tbody innerHTML

someArrayOfData.forEach((mountain)=>{
        let row = ""
        row += `<tr>`
        row += `    <td>${mountain.name}</td>`
        row += `    <td>${mountain.elevation}</td>`
        row += `    <td>${mountain.effort}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row

    })
}
