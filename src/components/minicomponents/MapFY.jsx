import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapFY = ({}) => {
  return (
    <MapContainer
      center={[-12.065089, -77.046427]}
      zoom={30}
      scrollWheelZoom={false}
      dragging={true}
      touchZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        noWrap={true}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-12.065089, -77.046427]}>
        <Popup minWidth={90}>
          Nuestro establecimiento!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapFY;
