import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "../../components/search/Search";

export default function Home() {
  const [displayMap, setDisplayMap] = useState("");
  const [currentMap, updateCurrentMap] = useState("");

  useEffect(() => {
    getMap();
    if (currentMap.length) getMap();
  }, [currentMap]);

  const getMap = async () => {
    axios
      .post("http://127.0.0.1:5000/iframe", {
        pickup:
          currentMap == "" ? "" : [currentMap[0]["lon"], currentMap[0]["lat"]],
        dropoff:
          currentMap == "" ? "" : [currentMap[1]["lon"], currentMap[1]["lat"]],
      })
      .then((res) => {
        setDisplayMap(res.data);
      });
  };

  return (
    <>
      <div className="body-continer">
        <div className="main-container">
          <div
            className="map-container"
            dangerouslySetInnerHTML={{ __html: displayMap }}
          />
          <h2 className="search-container">
            <SearchBox updateCurrentMap={updateCurrentMap} />
          </h2>
        </div>
      </div>
    </>
  );
}
