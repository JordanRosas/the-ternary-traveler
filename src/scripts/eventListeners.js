import data from "./data";

//method to save the user interest and post to the database
const eventListeners = {
  postNewInterest(){
    //need to take the value of each of the input fields
    let interestName = document.querySelector("#interest_name").value
    let interestDescription = document.querySelector("#interest_description").value
    let interestCost = document.querySelector("#interest_cost").value
    let interestReview = document.querySelector("#interest_review").value
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
  }
}
export default eventListeners