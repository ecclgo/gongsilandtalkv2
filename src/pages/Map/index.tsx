import Layout from "./Layout";
import { useEffect, useState } from "react";
import LoadMap from "./LoadMap";


export default function Map() {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1f953fbfd79ff422d8360a0c7c816cc1&autoload=false`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer: any = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <>
      <div>
        <Layout>
          <div>
            <div id="map" style={{ position: "absolute", width: "1920px", height: "860px", left: "0px", top: "120px"}}></div>
          </div>
        </Layout>
      </div>
    </>
  )
};