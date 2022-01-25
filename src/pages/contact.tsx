import React from "react";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import { Container, styled } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, icon } from "leaflet";

const MapWrap = styled("div")(({ theme }) => ({
  height: 400,
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
const mapCenter: LatLngExpression = [44.7972, 20.4535];
const zoomLevel = 16;

const customIcon = icon({
  iconUrl: "../icons/icon-144x144.png",
  iconSize: [96, 96],
  iconAnchor: [0, 96],
  popupAnchor: [48, -100],
  // shadowUrl: "my-icon-shadow.png",
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94],
});

export default function Contact() {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Container>
        <h1>{t("pages.contact.title")}</h1>
        <p>{t("pages.contact.text")}</p>

        <MapWrap>
          <MapContainer
            center={mapCenter}
            zoom={zoomLevel}
            scrollWheelZoom={false}
          >
            <TileLayer attribution={openSourceAttribution} url={tilesUrl} />
            <Marker position={mapCenter} icon={customIcon}>
              <Popup>{t("pages.contact.mapMarkerPopup")}</Popup>
            </Marker>
          </MapContainer>
        </MapWrap>
      </Container>
    </>
  );
}
