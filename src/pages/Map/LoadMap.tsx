import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

export default function LoadMap() {
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1f953fbfd79ff422d8360a0c7c816cc1&autoload=false`;

  return(
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%' }}>

      </Map>
    </>
  )
}