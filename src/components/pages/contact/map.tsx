import React from "react";
// @ts-ignore
import t from "@translate";
import { styled } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, icon } from "leaflet";

const MapWrap = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  "& .leaflet-container": {
    height: "100%",
    width: "100%",
    filter: "grayscale(100%)",
  },
}));

const tilesUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const openSourceAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const mapCenter: LatLngExpression = [44.02565, 20.90838];
const zoomLevel = 16;

const Map = () => {
  const customIcon = icon({
    iconUrl: "/bgs-logo--filled.svg",
    iconSize: [96, 96],
    iconAnchor: [0, 96],
    popupAnchor: [48, -100],
    // shadowUrl: "my-icon-shadow.png",
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94],
  });

  return (
    <MapWrap>
      <MapContainer center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer attribution={openSourceAttribution} url={tilesUrl} />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>{t("pages.contact.mapMarkerPopup")}</Popup>
        </Marker>
      </MapContainer>
    </MapWrap>
  );
};
export default Map;
