import React, { useEffect, useState } from "react";

function GetOneBike(props) {
  const [bikeData, setBikeData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:9000/api/bikedetails/${props.bike_name}`)
      const jsonData = await response.json();
      console.log(jsonData);
      setBikeData(jsonData[0]);
    }
    getData();
  }, [props]);

  if (bikeData === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className = "getOne">
      <img src={bikeData.image} alt="new" className="oneImg"/>
      <h3 className="h3">{bikeData.brand} {bikeData.bike_name}</h3>
      <p> Size: {bikeData.size} Color: {bikeData.color} Material: {bikeData.material} </p>
      <p> Serial #: {bikeData.serial_number} </p>
      <p> Component: {bikeData.component} </p>
    </div> 
  )
}



export default GetOneBike;