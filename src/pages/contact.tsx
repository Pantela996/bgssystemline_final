import React from "react";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import { Container, styled } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, icon } from "leaflet";
import Title from "../components/title";

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
const mapCenter: LatLngExpression = [44.02565, 20.90838];
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
        <Title>{t("pages.contact.title")}</Title>
        <p>{t("pages.contact.text")}</p>
        {/* Adresa je KOZARACKA 6, , kontakt je Bogdan Stevanovic 064 1963986 */}
        {/* - on se pojavljuje i u footeru i u contactu */}
        <ul>
          <li>{t("global.contact.contactNumber")}</li>
          <li>{t("global.contact.street")}</li>
          <li>{t("global.contact.zipCity")}</li>
          <li>{t("global.contact.country")}</li>
          <li>{t("global.contact.contactPerson")}</li>
          <li>{t("global.contact.contactEmail")}</li>
        </ul>
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
