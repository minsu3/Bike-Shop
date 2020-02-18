import React, { useEffect, useState } from "react";

// using hooks
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
    
    /* { 
      bikeLists = bikeData.map((bikedata) => {
        if (bikedata.bike_name === "Venge") {
          return img={shopvenge}
        }
        else if (bikedata.bike_name === "Shiv") {
          return img={shopshiv}
        }
        else if (bikedata.bike_name === "Stumpjumper") {
          return img={shopstumpjumper}
        }
        else if (bikedata.bike_name === "Domane") {
          return img={shopdomane}
        }
        else if (bikedata.bike_name === "Boone") {
          return img={shopboone}
        }
        else if (bikedata.bike_name === "Super Caliber") {
          return img={shopsupercaliber}
        }
        else if (bikedata.bike_name === "Super Six Evo") {
          return img={shopsupersixevo}
        }
        else if (bikedata.bike_name === "Bad Habit") {
          return img={shopbadhabit}
        }
        else if (bikedata.bike_name === "Caad 12") {
          return img={shopcaad12}
        } 
        else return <h1> </h1>
      })
    } */
    <div className = "getOne">
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