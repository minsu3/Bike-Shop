class fetchAllBikeMakes {
  static all = () => {
    return fetch("http://localhost:9000/api/bike_make")
      .then(response => response.json())
      .catch(err => console.log("Could not get all bike makes\n", err));
  };
}

class fetchAllBikeDetails {
  static all = () => {
    return fetch("http://localhost:9000/api/bikedetails")
      .then(response => response.json())
      .catch(err => console.log("Could not get all all bike details\n", err));
  };
  static delete = (bike) => {
    let rowid = bike.rowid;
    delete bike.rowid;
    return fetch(`${endpoint}/${rowid}`, {
      method: "DELETE"
    })
      .catch(err => console.log('Could not delete bike \n', err));
  }
}


export default {fetchAllBikeMakes, fetchAllBikeDetails};