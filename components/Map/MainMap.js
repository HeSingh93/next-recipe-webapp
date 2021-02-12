import React, {useContext, useState} from 'react';
import {Card} from "react-bootstrap";
import process from "process";
import {MapContainer} from "react-leaflet";
import styles from 'leaflet/dist/leaflet.css';
import {Marker, Popup, TileLayer} from "react-leaflet";
import AppContext from "../../Context/ContextIndex";

export default function MainMap() {
 const {recipeData} = useContext(AppContext)
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

return (
        <MapContainer center={coordinates} zoom={zoom} style={{width:'100%', height: '500px'}} scrollWheelZoom={false}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
{/*
          {recipeData.meals?.map(area => (
              <Marker
                  key={area.idMeal}
                  position={coordinates}>
              </Marker>
          ))}*/}
        </MapContainer>
)
};