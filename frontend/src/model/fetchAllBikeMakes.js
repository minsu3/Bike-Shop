const endpoint = "http://localhost:9000/api/bike_make";

class fetchAllBikeMakes {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all bike makes\n", err));
  };
}

export default fetchAllBikeMakes;