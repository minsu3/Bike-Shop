import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "70%"
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { lat: 30.2682, lng: -97.74295 }
      ]
    };
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  render() {
    return (
      <Map
        className="mapStyles"
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
        <Marker position={{ lat: 37.6305, lng: -122.4111 }} />
        <Marker position={{ lat: 37.8044, lng: -122.2712 }} />
        <Marker position={{ lat: 37.6604, lng: -121.8758 }} />
        <Marker position={{ lat: 37.6688, lng: -122.081 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(Maps);
