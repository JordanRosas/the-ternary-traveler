import data from "./data"
import domComponents from "./domComponents";

const interestList = {
  displayNewInterests(){
    data.getInterests()
    .then(allResponses => {
      let interestDocumentFragment = document.createDocumentFragment();
      allResponses.forEach(eachInterest => {
        let postedNewInterest = domComponents.interestBuilder(eachInterest)
        interestDocumentFragment.appendChild(postedNewInterest)
      })
      let interestDocOutput = document.querySelector("#output")
      interestDocOutput.appendChild(interestDocumentFragment)
    })
  }
}

export default interestList