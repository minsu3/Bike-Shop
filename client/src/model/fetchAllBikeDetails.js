const endpoint = "http://localhost:9000/api/bikedetails";

class fetchAllBikeDetails {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all all bike details\n", err));
  };
  static delete = (bike) => {
    let rowid = bike.rowid;
    // not expecting rowid in the body
    delete bike.rowid;
    return fetch(`${endpoint}/${rowid}`, {
      method: "DELETE"
    })
      .catch(err => console.log('Could not delete bike \n', err));
  }
}

export default fetchAllBikeDetails;
