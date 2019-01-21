import interestForm from "./interestForm";
import interestList from "./interestList";
import eventListeners from "./eventListeners";


interestForm.travelerInputForm();
interestForm.populatePlaceDropdown();

$("#interest_submit").click(eventListeners.postNewInterest)

interestList.displayNewInterests();

