import eventListeners from "./eventListeners"
const domComponents = {
  createAndAppend(name, description, cost, review, place){
    let postedInterest = document.createElement("section")
    postedInterest.setAttribute("id","postedInterest")
    let interestName = document.createElement("h2")
    let interestDescription = document.createElement("p")

    let interestCost = document.createElement("p")
    interestCost.setAttribute("id", "editCost")
    let costEditButton = document.createElement("button")
    costEditButton.setAttribute("type", "button")
    costEditButton.setAttribute("id", "costEditButton")
    costEditButton.textContent = "Edit"
    costEditButton.addEventListener("click", eventListeners.editCost);
    

    let interestReview = document.createElement("p")
    interestReview.setAttribute("id", "editReview")
    let reviewEditButton = document.createElement("button")
    reviewEditButton.setAttribute("id", "reviewEditButton")
    reviewEditButton.textContent = "Edit"
    reviewEditButton.addEventListener("click", eventListeners.editReview)

    let interestPlace = document.createElement("p")

    postedInterest.appendChild(interestName)
    interestName.textContent = name

    postedInterest.appendChild(interestDescription)
    interestDescription.textContent = `Desctiption: ${description}`

    postedInterest.appendChild(interestCost)
    interestCost.textContent = `Cost: ${cost}`
    interestCost.appendChild(costEditButton)

    postedInterest.appendChild(interestReview)
    interestReview.textContent = "Review: "
    interestReview.appendChild(reviewEditButton)

    postedInterest.appendChild(interestPlace)
    interestPlace.textContent = `Location: ${place}`

    return postedInterest
  }
}
export default domComponents