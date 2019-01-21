import data from "./data"
import interestList from "./interestList"

const foodEditForm = {
  createEditForm(articleId, interestObject){

    let interestNameField = document.createElement("p")


    let interestNameLabel = document.createElement("label")
    interestNameLabel.textContent = "Name "
    interestNameLabel.setAttribute("for", "interest_name")

    let interestNameInput = document.createElement("input")
    interestNameInput.setAttribute("id", "interest_name")
    interestNameInput.setAttribute("name", "interest_name")
    interestNameInput.value = interestObject.name

    interestNameField.appendChild(interestNameLabel)
    interestNameField.appendChild(interestNameInput)

    let interestDesField = document.createElement("p")

    let interestDescriptionLabel = document.createElement("label")
    interestDescriptionLabel.textContent = "Description "
    interestDescriptionLabel.setAttribute("for", "interest_description")

    let interestDescriptionInput = document.createElement("input")
    interestDescriptionInput.setAttribute("id", "interest_description")
    interestDescriptionInput.setAttribute("name", "interest_description")
    interestDescriptionInput.value = interestObject.description

    interestDesField.appendChild(interestDescriptionLabel)
    interestDesField.appendChild(interestDescriptionInput)

    let interestCostField = document.createElement("p")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.setAttribute("for", "interest_cost")
    interestCostLabel.textContent = "Cost "

    let interestCostInput = document.createElement("input")
    interestCostInput.setAttribute("id", "interest_cost")
    interestCostInput.setAttribute("name", "interest_cost")
    interestCostInput.value = interestObject.cost

    interestCostField.appendChild(interestCostLabel)
    interestCostField.appendChild(interestCostInput)
    let interestLocation = document.createElement("p")

    let interestLocationLabel = document.createElement("label")
    interestLocationLabel.textContent = "Place "

    let interestLocationInput = document.createElement("input")
    interestLocationInput.setAttribute("type", "text")
    interestLocationInput.value = interestObject.place

    interestLocation.appendChild(interestLocationLabel)
    interestLocation.appendChild(interestLocationInput)

    let interestReviewField = document.createElement("p")


    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "Review "
    let interestReviewInput = document.createElement("input")
    interestReviewInput.setAttribute("id", "reviewInterest")
    interestReviewInput.setAttribute("type", "text")

    interestReviewField.appendChild(interestReviewLabel)
    interestReviewField.appendChild(interestReviewInput)

    let updateButton = document.createElement("button")
    updateButton.setAttribute("id", "updateInterest")
    updateButton.textContent = "update"


    updateButton.addEventListener("click", () => {
      console.log("update clicked")
      window.location.reload()
      let updatedInterest = {
        name:interestNameInput.value,
        description:interestDescriptionInput.value,
        cost:interestCostInput.value,
        place:interestLocationInput.value,
        review:interestReviewInput.value
      }
      data.editInterest(interestObject.id, updatedInterest)
    })
    let interestSection = document.querySelector(`#${articleId}`)

    while(interestSection.firstChild){
      interestSection.removeChild(interestSection.firstChild)
    }

    interestSection.appendChild(interestNameField)
    interestSection.appendChild(interestDesField)
    interestSection.appendChild(interestCostField)
    interestSection.appendChild(interestLocation)
    interestSection.appendChild(interestReviewField)
    interestSection.appendChild(updateButton)

  }
}
export default foodEditForm