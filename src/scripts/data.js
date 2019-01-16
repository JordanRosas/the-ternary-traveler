//fetch calls for both GET the interests in the database and then to post the new interest to database
const data = {
  getDestinations(){
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  }
}
export default data