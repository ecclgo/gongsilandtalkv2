import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

type Props = {
  status?: number | string;
  result?: any;
}

type LatLng = {
  lat: number;
  lng: number;
}

type State = {
  center?: LatLng;
  isPanto?: boolean
}

export default function LoadMap() {
  const [state, setState] = useState<State>({
    center: { 
      lat: 33.450701,
      lng: 126.570667
    },
    isPanto: true
  });

  const [searchAddress, setSearchAddress] = useState('');

  const SearchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    let callback: any = function({result, status}: Props) {
      if(status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState({
          center: {
            lat: newSearch.y,
            lng: newSearch.x
          }
        })
      }
    };
    geocoder.addressSearch(`${searchAddress}`, callback);
  };

  const handleSearchAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAddress(e.target.value);
  };

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1f953fbfd79ff422d8360a0c7c816cc1&autoload=false&libraries=services,clusterer`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer: any = document.getElementById('map');
        const mapOption = {
          center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
          level: 3
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return(
    <>
      <div>
        <div id="map" style={{ position: "absolute", width: "1920px", height: "860px", left: "0px", top: "120px" }}></div>
      </div>
      <SearchInput handleSearchAddress={handleSearchAddress} SearchMap={SearchMap} state={state} setSearchAddress={setSearchAddress} searchAddress={searchAddress} />
    </>
  )
};