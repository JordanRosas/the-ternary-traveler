import interestForm from "./interestForm";
import interestList from "./interestList";
import eventListeners from "./eventListeners";
// import domComponents from "./domComponents"
// import domBuilder from "./domBuilder";
//import data from "./data";


interestForm.travelerInputForm();
interestForm.populatePlaceDropdown();
$("#interest_submit").click(eventListeners.postNewInterest)


interestList.displayNewInterests();

