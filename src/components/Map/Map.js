import React from "react";

import { Placemark, YMaps, Map } from "react-yandex-maps";

import "./Map.scss";

const FooterMap = () => {
  return (
    <div className="map">
      <YMaps>
        <Map
          defaultState={{
            center: [41.2537, 69.148871],
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          width="100%"
          height="100%"
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[41.2537, 69.148871]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default FooterMap;
