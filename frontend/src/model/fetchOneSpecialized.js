const endpoint = "http://localhost:9000/api/specializedbikes/:id";

class fetchOneSpecialized {
  static getOne = rowid => {
    return fetch(`${endpoint}/${rowid}`)
      .then(response => {
        response.json();
      })
      .then(x => {
        return x;
        console.log("X: ", x[0]);
      })
      .catch(err => console.log("Could not get bike make \n", err));
  };
} 


export default fetchOneSpecialized