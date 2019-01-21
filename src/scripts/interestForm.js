import data from "./data"
//build the form where user enters the name, description, cost, review
const interestForm = {
  travelerInputForm(){
    let formContainer = document.querySelector("#output")

    let interestForm = document.createElement("form")

    let interestNameFormField = document.createElement("fieldset")

    let interestNameLabel = document.createElement("label")
    interestNameLabel.textContent = "Name "
    interestNameLabel.setAttribute("for", "interest_name")

    let interestNameInput = document.createElement("input")
    interestNameInput.setAttribute("id", "interest_name")
    interestNameInput.setAttribute("name", "interest_name")

    interestNameFormField.appendChild(interestNameLabel)
    interestNameFormField.appendChild(interestNameInput)
    interestForm.appendChild(interestNameFormField)


    let interestDescriptionFormField = document.createElement("fieldset")


    let interestDescriptionLabel = document.createElement("label")
    interestDescriptionLabel.textContent = "Description "
    interestDescriptionLabel.setAttribute("for", "interest_description")

    let interestDescriptionInput = document.createElement("input")
    interestDescriptionInput.setAttribute("id", "interest_description")
    interestDescriptionInput.setAttribute("name", "interest_description")

    interestDescriptionFormField.appendChild(interestDescriptionLabel)
    interestDescriptionFormField.appendChild(interestDescriptionInput)
    interestForm.appendChild(interestDescriptionFormField)


    let interestCostFormField = document.createElement("fieldset")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.setAttribute("for", "interest_cost")
    interestCostLabel.textContent = "Cost "

    let interestCostInput = document.createElement("input")
    interestCostInput.setAttribute("id", "interest_cost")
    interestCostInput.setAttribute("name", "interest_cost")

    interestCostFormField.appendChild(interestCostLabel)
    interestCostFormField.appendChild(interestCostInput)
    interestForm.appendChild(interestCostFormField)



    let interestPlaceFormField = document.createElement("fieldset")

    let interestPlaceLabel = document.createElement("label")
    interestPlaceLabel.setAttribute("for", "interest_place")
    interestPlaceLabel.textContent = "Place "

    let interestPlaceSelect = document.createElement("select")
    interestPlaceSelect.setAttribute("id", "interest_place")


    interestPlaceFormField.appendChild(interestPlaceLabel)
    interestPlaceFormField.appendChild(interestPlaceSelect)
    interestForm.appendChild(interestPlaceFormField)

    let interestSubmitButton = document.createElement("button")
    interestSubmitButton.setAttribute("id", "interest_submit")
    interestSubmitButton.setAttribute("type", "button")
    // interestSubmitButton.setAttribute("value", "Reload Page")
    // interestSubmitButton.setAttribute("onClick", "history.go(0)")
    interestSubmitButton.textContent = "Save"
    interestForm.appendChild(interestSubmitButton)

    formContainer.appendChild(interestForm)
  },
  populatePlaceDropdown(){
    data.getDestinations()
    .then(allResponses =>{
      let interestHTML = " "
      allResponses.forEach(location =>{
        interestHTML += `<option id="location_option">${location.name}</option>`
      })
      let dropDown = document.querySelector("#interest_place")
      dropDown.innerHTML = interestHTML
    })
  }
}
export default interestForm