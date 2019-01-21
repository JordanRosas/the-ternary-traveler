import data from "./data";
// // import domBuilder from "./domBuilder";
// import interestList from "./interestList";
// import domComponents from "./domComponents"

//method to save the user interest and post to the database
const eventListeners = {
  postNewInterest(){
    //need to take the value of each of the input fields
    let interestName = document.querySelector("#interest_name").value
    let interestDescription = document.querySelector("#interest_description").value
    let interestCost = document.querySelector("#interest_cost").value
    let interestLocation = document.querySelector("#interest_place").value
    let interestReview = document.querySelector("review_interest")

    if(interestReview === null){
      console.log("nothing")
    }

    //then create an object out of those values to populate the JSON
    let interestObject = {
      name:interestName,
      description:interestDescription,
      cost:interestCost,
      place:interestLocation,
      review:interestReview
    }
    //calling the post method passing it the interestObject as the arguement
    data.postNewInterest(interestObject)
    window.location.reload()
  }


}
export default eventListeners