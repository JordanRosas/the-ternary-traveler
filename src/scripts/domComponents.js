import editInterestForm from "./editInterestForm"
import data from "./data";
import interestList from "./interestList";
// import interestList from "./interestList"

const domComponents = {
  interestBuilder(interestObject){
    let postedInterest = document.createElement("section")
    postedInterest.setAttribute("id", `interest--${interestObject.id}`)

    let interestName = document.createElement("h2")
    interestName.textContent = interestObject.name

    let interestDescription = document.createElement("p")
    interestDescription.textContent = `Description: ${interestObject.description}`

    let interestCost = document.createElement("p")
    interestCost.setAttribute("id", `cost--${interestObject.id}`)
    interestCost.textContent = `Cost:$ ${interestObject.cost}`


    let interestPlace = document.createElement("p")
    interestPlace.innerHTML = `Location: ${interestObject.place}`

    let interestReview = document.createElement("p")
    interestReview.setAttribute("id", "review_interest")
    interestReview.textContent = `Review: ${interestObject.review}`
    if(interestObject.review === null){
      interestReview.innerHTML = "Update Interest to add a review"
      console.log("nothing here")
    }

    let editCostButton = document.createElement("button")
    editCostButton.textContent = "Update interest"
    editCostButton.setAttribute("id", "editCost")
    editCostButton.addEventListener("click", () =>{
      let sectionId = event.target.parentNode.id
      let interestId = sectionId.split("--")[1]
      data.getInterests2(interestId)
      .then(response => {
        console.log(response)
        editInterestForm.createEditForm(sectionId, response)
      })
    })

    let deleteInterestButton = document.createElement("button")
    deleteInterestButton.textContent = "Delete"
    deleteInterestButton.addEventListener("click", () => {
      let interestSecId = event.target.parentNode.id.split("--")[1]
      data.deleteFood(interestSecId)
      window.location.reload()
    })



    postedInterest.appendChild(interestName)
    postedInterest.appendChild(interestDescription)
    postedInterest.appendChild(interestCost)
    postedInterest.appendChild(interestPlace)
    postedInterest.appendChild(interestReview)
    postedInterest.appendChild(editCostButton)
    postedInterest.appendChild(deleteInterestButton)

    // postedInterest.appendChild(addReviewButton)
    // return postedInterest gives the outer most element with the children appended
    return postedInterest
  }
}
export default domComponents