const endpoint = "http://localhost:9000/api/bikedetails";

class fetchAllBikeDetails {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all all bike details\n", err));
  };
}

export default fetchAllBikeDetails;
