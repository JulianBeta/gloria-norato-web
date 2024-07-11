/*import React from "react";
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

export default SimpleMap;*/

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './../styles/SectionContact.css'


// Fix leaflet's default icon issue with webpack
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  return (
    <MapContainer center={[4.726776034581482, -74.05545738674704]} zoom={150} style={{ height: '150px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[4.726776034581482, 4.726776034581482]}>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
