const endpoint = "http://localhost:9000/api/bikedetails";

class fetchAllBikeSpecs {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all specialized bikes\n", err));
  };

}

export default fetchAllBikeSpecs;
