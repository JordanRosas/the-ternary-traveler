const domComponents = {
  interestBuilder(interestObject){
    let postedInterest = document.createElement("section")
    postedInterest.setAttribute("id", `interest--${interestObject.id}`)

    let interestName = document.createElement("h2")
    interestName.textContent = interestObject.name

    let interestDescription = document.createElement("p")
    interestDescription.textContent = `Description: ${interestObject.description}`

    let interestCost = document.createElement("p")
    interestCost.textContent = `Cost:$ ${interestObject.cost}`
    interestCost.setAttribute("id", `cost--${interestObject.id}`)

    let interestPlace = document.createElement("p")
    interestPlace.innerHTML = `Location: ${interestObject.place}`

    let editCostButton = document.createElement("button")
    editCostButton.setAttribute("id", "edit_cost")
    editCostButton.textContent = "Edit Cost"
    

    let addReviewButton = document.createElement("button")
    addReviewButton.setAttribute("id", "add_review")
    addReviewButton.textContent = "Add a Review"




    postedInterest.appendChild(interestName)
    postedInterest.appendChild(interestDescription)
    postedInterest.appendChild(interestCost)
    postedInterest.appendChild(interestPlace)
    postedInterest.appendChild(editCostButton)
    postedInterest.appendChild(addReviewButton)
    // return postedInterest gives the outer most element with the children appended
    return postedInterest
  }
}
export default domComponents