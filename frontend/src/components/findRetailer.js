import React, { Component } from 'react';
import Map from './Map'
import { CLIENT_URL } from './constants.js';
// import Retail from './Retail';

class findRetailer extends Component {
    state = {
        retail: []
    }

    componentDidMount() {
        fetch(CLIENT_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ retails: data.stores  })
        })
    }

    render() {
        return (
            <>
                <div className="map">
                    <Map />
                    <p className="findretail">Find Retailer</p>
                </div>
                {/* <div className="retail">
                    <Retail />
                </div> */}
            </>
        )
    }
}

export default findRetailer;
