const endpoint = "http://localhost:9000/api/cannondale";

class fetchCannondale {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all bike makes\n", err));
  };
}

export default fetchCannondale;
