import data from "./data"
import domComponents from "./domComponents";

const interestList = {
  displayNewInterests(){
    data.getInterests()
    .then(allResponses => {
      let interestDocumentFragment = document.createDocumentFragment();
      allResponses.forEach(eachInterest => {
        let interestHTML = domComponents.createAndAppend(eachInterest.name, eachInterest.description, eachInterest.cost, eachInterest.review, eachInterest.place)
        console.log(interestHTML)
        interestDocumentFragment.appendChild(interestHTML)
      })
      let interestDocOutput = document.querySelector("#output")
      interestDocOutput.appendChild(interestDocumentFragment)
    })
  }
}

export default interestList