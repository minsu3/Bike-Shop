import React, { Component } from 'react';
import Map from './Map'

class FindRetailer extends Component {
    render() {
        return (
            <>
                <div className="map">
                    <Map />
                    <p className="findretailer">Find Retailer</p>
                </div>
            </>
        )
    }
}

export default FindRetailer;
