let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


mountainsDDL.addEventListener("change", function (event) {
    //debugger
    let mountainSelected = event.target.value;

    let filteredMountains = mountainsArray.filter((mountain) => {
    return mountain.name === mountainSelected 
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
        row += `    <td width="30%"><img src="assets/images/mountains/${mountain.img}"  class="img-thumbnail"></td>`
        row += `    <td width="30%"><b>${mountain.name}</b><br><i>${mountain.desc}</i></td>`
        row += `    <td>${mountain.elevation}</td>`
        row += `    <td>${mountain.effort}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row

    })
}




