'use client';
import styles from "./page.module.css";
import Map from "react-map-gl/mapbox";
import * as malibregl from "maplibre-gl";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
 <Map
 mapLib={malibregl}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />      </main>
    </div>
  );
}
