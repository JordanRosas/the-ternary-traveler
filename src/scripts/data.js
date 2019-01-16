//fetch calls for both GET the interests in the database and then to post the new interest to database
const data = {
  getDestinations(){
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  },
  getInterests(){
    return fetch("http://localhost:8088/interests")
    .then(response => response.json())
  },
  //POST method. user will now post their new interes to the database in the interests section.
  postNewInterest(interestObject){
    fetch("http://localhost:8088/interests", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(interestObject)
    })
  },
  editInterest (id, description) {
    return fetch(`http://localhost:8088/interests/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(description)
    })

}
}
export default data