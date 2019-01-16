import data from "./data";
// import domComponents from "./domComponents"

//method to save the user interest and post to the database
const eventListeners = {
  postNewInterest(){
    //need to take the value of each of the input fields
    let interestName = document.querySelector("#interest_name").value
    let interestDescription = document.querySelector("#interest_description").value
    let interestCost = document.querySelector("#interest_cost").value
    let interestReview =  document.querySelector("p")
    let interestLocation = document.querySelector("#interest_destination").value

    //then create an object out of those values to populate the JSON
    let interestObject = {
      name:interestName,
      description:interestDescription,
      cost:interestCost,
      review:interestReview,
      place:interestLocation
    }
    //calling the post method passing it the interestObject as the arguement
    data.postNewInterest(interestObject)
  },
  editCost(){
    $("#editCost").empty()
    // let editCostContainer = document.querySelector("#editCost")

    let editCost = document.createElement("input")
    editCost.setAttribute("id", "reviewCostInput")

    let editCostButton = document.createElement("button")
    editCostButton.setAttribute("type", " button")
    editCostButton.setAttribute("id", "editCostSubmit")
    editCostButton.textContent = "Submit"

    $("#editCost").append(editCost)
    $("#editCost").append(editCostButton)


    console.log("working")
  },
  editReview(){
    $("#editReview").empty()
    // let editCostContainer = document.querySelector("#editCost")

    let editReviews = document.createElement("input")
    editReviews.setAttribute("id", "reviewEditInput")

    let editReviewButton = document.createElement("button")
    editReviewButton.setAttribute("type", " button")
    editReviewButton.setAttribute("id", "editReviewSubmit")
    editReviewButton.textContent = "Submit"

    $("#editReview").append(editReviews)
    $("#editReview").append(editReviewButton)

  }
}
export default eventListeners