import React, { useEffect, useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import allStates from "./data/allstates.json";
import energySource from './data/use_energy_source.json'

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = () => {
  const [date, setDate] = useState(1960);

  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <>
        <button onClick={() => setDate(Math.min(date+1, 2020))}>Add Date</button>
        <button onClick={() => setDate(Math.max(date-1, 1960))}>Delete Date</button>
        {date}
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const cur = allStates.find((s) => s.val === geo.id);
                const colorValue = energySource.find((s) => s.state === cur.id)
                const val = colorValue ? colorValue.value[date] : null
                let color = "#ff0000"

                if (val < 75) {
                    color = "#00ff00"
                }

                return <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  fill={color}
                  onClick={() => console.log(colorValue)}
                />
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find((s) => s.val === geo.id);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {
                      cur && centroid[0] > -160 && centroid[0] < -67 && (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={8} textAnchor="middle">
                            {cur.id}
                          </text>
                        </Marker>
                      )
                    }
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default MapChart;