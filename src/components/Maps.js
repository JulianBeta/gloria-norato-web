import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function SimpleMap(){
  const handleApiLoaded = (map, maps) => {}
  const defaultProps = {
    center: {
      lat: 4.726776034581482, 
      lng: -74.05545738674704
    },
    zoom: 15

  };

  return (

    <div style={{ height: '50vh', width: '50%', float: 'left' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcYy4v8DK6sUdCfqNtYfw7TUt66IEUPQI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={4.726776034581482}
          lng={-74.05545738674704}
          text="GLORIA NORATO"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;