import interestForm from "./interestForm"
// import domComponents from "./domComponents"
import eventListeners from "./eventListeners"
// import domBuilder from "./domBuilder";
// import data from "./data";
import interestList from "./interestList";


interestForm.travelerInputForm();
interestForm.populateDropdown();



$("#save_interest").click(eventListeners.postNewInterest)

interestList.displayNewInterests();