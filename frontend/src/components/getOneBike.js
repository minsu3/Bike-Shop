import React, { useEffect, useState } from "react";

// using hooks
function GetOneBike(props) {
  const [bikeData, setBikeData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:9000/api/bikedetails/${props.bike_name}`)
      const jsons = await response.json();
      console.log(jsons);
      setBikeData(jsons[0]);
    }
    getData();
  }, [props]);

  if (bikeData === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="getOne">
      <h3 className="h3">{bikeData.brand} {bikeData.bike_name}</h3>
      <p> Size: {bikeData.size} </p>
      <p> Color: {bikeData.color} </p>
      <p> Material: {bikeData.material} </p>
      <p> Serial #: {bikeData.serial_number} </p>
      <p> Component: {bikeData.component} </p>
    </div>
  )
}



export default GetOneBike;