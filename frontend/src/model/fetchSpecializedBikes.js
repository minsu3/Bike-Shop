const endpoint = "http://localhost:9000/api/specializedbikes";

class fetchSpecializedBikes {
  static all = () => {
    return fetch(endpoint)
      .then(response => response.json())
      .catch(err => console.log("Could not get all specialized bikes\n", err));
  };

  // Not sure if this works yet
  // static getOne = rowid => {
  //   return fetch(`${endpoint}/${rowid}`)
  //     .then(response => {
  //       response.json();
  //     })
  //     .then(x => {
  //       return x;
  //       console.log("X: ", x[0]);
  //     })
  //     .catch(err => console.log("Could not get bike make \n", err));
  // };
}

export default fetchSpecializedBikes;
