import React, { useState } from "react";
import { RenderMap } from "../RenderMap";
import { DescriptionTree } from "../DescriptionTree";

export const App = (props) => {
  // const [children, setChildren] = useState([
  //   {
  //     id: "1",
  //     name: "Child - 1",
  //     coordinates: [55.684758, 37.738521],
  //   },
  //   {
  //     id: "2",
  //     name: "Child - 2",
  //     coordinates: [56.684758, 47.738521],
  //   },
  //   {
  //     id: "3",
  //     name: "Child - 3",
  //     coordinates: [45.684758, 49.738521],
  //   },
  //   {
  //     id: "4",
  //     name: "Child - 4",
  //     coordinates: [57.684758, 39.738521],
  //   },
  // ]);

  const [mapCenter, setCenter] = useState([55.751574, 37.573856]);

  const descriptionTree = {
    id: "root",
    name: "Parent",
    children: children,
  };

  const setMapCenter = (item_id) => {
    let item = children.find((item) => item.id === item_id);
    setCenter(item.coordinates);
  };

  return (
    <div>
      <div className="App">
        <DescriptionTree
          content={descriptionTree}
          setContent={setChildren}
          setMapCenter={setMapCenter}
        />
      </div>
      <div>
        <RenderMap points_list={children} mapCenter={mapCenter} />
      </div>
    </div>
  );
};
