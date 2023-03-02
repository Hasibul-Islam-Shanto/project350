import React, { useState, useEffect, useRef } from "react";
import styles from "./tracking.module.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const routes = [
  {
    lat: 24.720725,
    lon: 91.751451,
  },
  {
    lat: 24.730596,
    lon: 91.765006,
  },
  {
    lat: 24.740079,
    lon: 91.775796,
  },
  {
    lat: 24.753551,
    lon: 91.781889,
  },
  {
    lat: 24.767175,
    lon: 91.783237,
  },
  {
    lat: 24.783225,
    lon: 91.784682,
  },
  {
    lat: 24.80074,
    lon: 91.790166,
  },
  {
    lat: 24.850591,
    lon: 91.827739,
  },
  {
    lat: 24.858268,
    lon: 91.838164,
  },
  {
    lat: 24.871104,
    lon: 91.866127,
  },
  {
    lat: 24.877453,
    lon: 91.874773,
  },
  {
    lat: 24.887167,
    lon: 91.868121,
  },
  {
    lat: 24.894942,
    lon: 91.86871,
  },
];

const Tracking = () => {
  const [point, setPoint] = useState(0);
  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      console.log(point);
      setPoint((prevState) => prevState + 1);
    }, 3000);

    if (point === routes.length - 1) {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current);
  }, [point]);

  return (
    <React.Fragment>
      <div className={styles.tracking}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Tracking
          </h1>
        </div>

        <div className={styles.account_div}>
          <MapContainer
            center={[routes[point].lat, routes[point].lon]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[routes[point].lat, routes[point].lon]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tracking;
