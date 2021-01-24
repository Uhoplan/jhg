import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import "./style.css";

export const RenderMap = (props) => {
  const { points_list, mapCenter } = props;

  return (
    <YMaps>
      <Map
        className="map-container"       
        state={{ zoom: 4, center: mapCenter }}
      >
        {points_list.map((item, index) => {
          return (
            <Placemark
              geometry={item.coordinates}
              options={{ title: item.name, _id: item.id }}
              key={index}
            />
          );
        })}
      </Map>
    </YMaps>
  );
};
