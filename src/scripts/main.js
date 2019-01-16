import interestForm from "./interestForm";
import interestList from "./interestList";
import eventListeners from "./eventListeners";
// import domComponents from "./domComponents"
// import domBuilder from "./domBuilder";
//import data from "./data";


interestForm.travelerInputForm();
interestForm.populateDropdown();
$("#save_interest").click(eventListeners.postNewInterest)


interestList.displayNewInterests();

