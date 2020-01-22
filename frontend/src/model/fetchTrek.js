const endpoint = "http://localhost:9000/api/trek";

class fetchTrek {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all bike makes\n", err));
  };
}

export default fetchTrek;
