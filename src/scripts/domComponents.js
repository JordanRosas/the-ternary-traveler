
const domComponents = {
  createAndAppend(name, description, cost, review, place){
    let postedInterest = document.createElement("section")
    let interestName = document.createElement("h2")
    let interestDescription = document.createElement("p")
    let interestCost = document.createElement("p")
    let interestReview = document.createElement("p")
    let interestPlace = document.createElement("p")

    postedInterest.appendChild(interestName)
    interestName.textContent = name

    postedInterest.appendChild(interestDescription)
    interestDescription.textContent = description

    postedInterest.appendChild(interestCost)
    interestCost.textContent = cost

    postedInterest.appendChild(interestReview)
    interestReview.textContent = review

    postedInterest.appendChild(interestPlace)
    interestPlace.textContent = place

    return postedInterest

  }
}
export default domComponents