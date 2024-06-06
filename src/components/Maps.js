import React from "react";
import GoogleMapReact from 'google-map-react';
import './../styles/SectionContact.css'

const   AnyReactComponent = ({ text }) => <div className="marcador">{text}</div>;

export function SimpleMap(){
  const handleApiLoaded = (map, maps) => {}
  const defaultProps = {
    center: {
      lat: 4.726776034581482, 
      lng: -74.05545738674704
    },
    zoom: 17
  };

  return (

    <div style={{ height: '150%', width: '90%', float: 'none' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcYy4v8DK6sUdCfqNtYfw7TUt66IEUPQI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
       gestureHandling= 'none'       
       draggable= "false"
       draggingCursor= 'false'
       cursos         
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