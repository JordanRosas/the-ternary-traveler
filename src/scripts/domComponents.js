import eventListeners from "./eventListeners"
const domComponents = {
  createAndAppend(interestObject){
    let postedInterest = document.createElement("section")
    postedInterest.setAttribute("id", `interest--${interestObject.id}`)

    let interestName = document.createElement("h2")
    interestName.textContent = interestObject.name

    let interestDescription = document.createElement("p")
    interestDescription.textContent = `Description: ${interestObject.description}`

    let interestCost = document.createElement("p")
    interestCost.textContent = `Cost:$ ${interestObject.cost}`
    interestCost.setAttribute("id", `cost--${interestObject.id}`)

    let interestReview = document.createElement("p")
    interestReview.textContent = `Review: ${interestObject.review}`
    interestReview.setAttribute("id", `review--${interestObject.id}`)

    let interestPlace = document.createElement("p")
    interestPlace.innerHTML = `Location: ${interestObject.place.name}`

    let costEditButton = document.createElement("button")
    costEditButton.textContent = "Edit"

    let costDeleteButton = document.createElement("button")
    costDeleteButton.textContent = "Delete"


    // return postedInterest
  }
}
export default domComponents