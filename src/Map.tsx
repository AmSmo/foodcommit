import React, { useEffect, useState } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";

const geoUrl: string = "/world-110m.json";

const MapChart = () => {
  const [data, setData] = useState<any>({
    Albania: 20,
    "Democratic Republic of the Congo": 8,
    "Russian Federation": 3,
  });

  return (
    <ComposableMap
      style={{ outline: "none" }}
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      <ZoomableGroup>
        <Sphere id="1" stroke="#FF5533" strokeWidth={1} fill={"#ADD8E6"} />(
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="black"
                  strokeWidth="0.5px"
                  fill={
                    !Object.keys(data).includes(geo.properties.NAME_LONG)
                      ? "lightgrey"
                      : `rgba(${data[geo.properties.NAME_LONG] * 3},200, ${
                          (data[geo.properties.NAME_LONG] * 8, 0.5)
                        })`
                  }
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  onClick={() => console.log(geo.properties.NAME_LONG)}
                />
              );
            })
          }
        </Geographies>
        )
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
