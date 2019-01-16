//build the form where user enters the name, description, cost, review
import data from "./data"

const interestForm = {
  travelerInputForm(){
    let interestForm = `<article>
    <fieldset>
      <label for = "interest_name">Name:</label>
      <input type = "text" id = "interest_name" name = "interest_name" autofocus>
    </fieldset>
    <fieldset>
      <label for = "interest_description">Description:</label>
      <input type = "text" id = "interest_description" name = "interest_description" autofocus>
    </fieldset>
    <fieldset>
      <label for = "interest_cost">Cost:</label>
      <input type = "text" id = "interest_cost" name = "interest_cost" autofocus>
    </fieldset>
    <fieldset>
      <label for = "interest_review">Review:</label>
      <input type = "text" id = "interest_review" name = "interest_review" autofocus>
    </fieldset>
    <fieldset>
      <label for = "interest_destination">Location:</label>
      <select id = interest_destination></select>
    </fieldset>
    <button type = "button" id = "save_interest" value = "Refresh Page" onClick = "history.go(0)">Save</button>
    </article>`

    //appends form to the DOM
    $("#output").append(interestForm)
  },
    //method to get the locations from my database.json and populate a dropdown menu
  populateDropdown(){
    //fetching the places form database.json as pareses the data into JS
    data.getDestinations()

    .then(allResponse => {
      let dropDownHtml = " "
      allResponse.forEach(destination =>{
        dropDownHtml += `<option>${destination.name}</option>`
        // console.log(dropDownHtml)
      })
      let destinationMenu = document.querySelector("#interest_destination")
      destinationMenu.innerHTML = dropDownHtml
    })
  }
}
export default interestForm