import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import process from "process";
import {MapContainer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {Marker, Popup, TileLayer} from "react-leaflet";

export default function MainMap() {
  const [latitude, setLatitude] = useState("51.505");
  const [longitude, setLongitude] = useState("-0.09");
  const [coordinates, setCoordinates] = useState([latitude,longitude]);
  const [zoom, setZoom] = useState(13);

return (
        <MapContainer center={coordinates} zoom={zoom} style={{width:'100%', height: '500px'}} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              Enter text here dood
            </Popup>
          </Marker>
        </MapContainer>
)
};