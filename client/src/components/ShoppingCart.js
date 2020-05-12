import React, { useEffect, useState } from 'react';

function ShoppingCart(props) {
    const [bikeData, setBikeData] = useState(null);
    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://localhost:9000/api/bikedetails/${props.bike_name}`)
            const jsons = await response.json();
            console.log(jsons);
            setBikeData(jsons[0]);
        }
        getData();
    }, [props])

    if (bikeData === null) {
        return <h2>Loading...</h2>
    }

    if(bikeData !== []) {
        return (
            <div className="cart">
                <h3>On the cart:</h3>
                <img src={bikeData.image} alt="new" className="cartImg"/>
                <p className="cart-title"><strong>{bikeData.color} {bikeData.brand} {bikeData.bike_name}</strong></p>
                <p> Size: {bikeData.size} </p>
                <p> Color:  </p>
                <p> Material: {bikeData.material} </p>
                <p> Serial #: {bikeData.serial_number} </p>
                <p> Component: {bikeData.component} </p>
            </div>
        )
    } else {
        return <h2>Cart is empty</h2>
    }
}

export default ShoppingCart;