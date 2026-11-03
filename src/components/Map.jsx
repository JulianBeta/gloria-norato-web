import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { SITE } from '../data/site';

// A pin in the brand rose instead of Leaflet's default blue marker image.
const pin = L.divIcon({
  className: 'map-pin',
  html: '<span></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -32],
});

export default function Map() {
  return (
    <MapContainer center={SITE.coords} zoom={17} scrollWheelZoom={false} className="map" aria-label="Mapa de ubicación del estudio">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={SITE.coords} icon={pin} title={SITE.studio}>
        <Popup>
          <strong>{SITE.studio}</strong>
          <br />
          {SITE.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
