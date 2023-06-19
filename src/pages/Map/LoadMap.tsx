import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { FaSearch } from 'react-icons/fa';
import SideFuntion from './SideFunction';

type LatLng = {
  lat?: number;
  lng?: number;
  La?: number;
  Ma?: number;
  coords?: number;
  latitude?: number;
  longitude?: number;
};

type State = {
  center?: LatLng;
  isPanto?: boolean;
};

export default function LoadMap() {
  let [currLevel, setCurrLevel] = useState(3);

  const [state, setState] = useState<State>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    isPanto: true,
  });

  const [searchAddress, setSearchAddress] = useState('');

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1f953fbfd79ff422d8360a0c7c816cc1&libraries=services,clusterer&autoload=false`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer: HTMLElement | null = document.getElementById('map');
        const mapOption = {
          center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer!, mapOption);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, [state]);

  const handleConvertClick = () => {
    // 주소-좌표 변환 객체를 생성
    let geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색
    geocoder.addressSearch(searchAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(
          parseFloat(result[0].y),
          parseFloat(result[0].x)
        );
        setState({
          center: {
            lat: coords.getLat(),
            lng: coords.getLng(),
          },
        });
      }
    });
  };

  const handleSearchAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAddress(e.target.value);
  };

  //  확대 함수
  const PlusFunc = () => {
    const mapContainer: HTMLElement | null = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
      level: currLevel,
    };
    let map = new kakao.maps.Map(mapContainer!, mapOption);
    setCurrLevel(currLevel < 1 ? 1 : (currLevel -= 1));
    map.setLevel(currLevel, { animate: true });
  };

  //  축소 함수
  const MinusFunc = () => {
    const mapContainer: HTMLElement | null = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
      level: currLevel,
    };
    let map = new kakao.maps.Map(mapContainer!, mapOption);
    setCurrLevel(currLevel > 14 ? 14 : (currLevel += 1));
    map.setLevel(currLevel, { animate: true });
  };

  //  현재위치
  const currLocation = (pos: any) => {
    let currentPos = new kakao.maps.LatLng(
      pos?.coords?.latitude,
      pos?.coords?.longitude
    );

    const mapContainer: HTMLElement | null = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
      level: currLevel,
    };
    let map = new kakao.maps.Map(mapContainer!, mapOption);

    map.panTo(currentPos);
    setState({
      center: {
        lat: currentPos.getLat(),
        lng: currentPos.getLng(),
      },
    });
  };

  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(currLocation);
  };

  let currentTypeId: any;
  const changeMapType = (mapType: string) => {
    const mapContainer: HTMLElement | null = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
      level: currLevel,
    };
    let map = new kakao.maps.Map(mapContainer!, mapOption);

    let changeMaptype: any;

    if (mapType === 'HYBRID') {
      changeMaptype = kakao.maps.MapTypeId.HYBRID;
    } else if (mapType === 'USE_DISTRICT') {
      changeMaptype = kakao.maps.MapTypeId.USE_DISTRICT;
    }

    if (currentTypeId) {
      map.removeOverlayMapTypeId(currentTypeId);
    }

    map.addOverlayMapTypeId(changeMaptype);

    currentTypeId = changeMaptype;
  };

  const removeOverlay = () => {
    const mapContainer: HTMLElement | null = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
      level: currLevel,
    };
    let map = new kakao.maps.Map(mapContainer!, mapOption);

    map.removeOverlayMapTypeId(currentTypeId);
  };

  return (
    <>
      <div>
        <div
          id="map"
          style={{
            position: 'absolute',
            width: '1920px',
            height: '860px',
            left: '0px',
            top: '120px',
            zIndex: 3,
          }}
        ></div>
        <SideFuntion
          PlusFunc={PlusFunc}
          MinusFunc={MinusFunc}
          getCurrentPosBtn={getCurrentPosBtn}
          changeMapType={changeMapType}
          removeOverlay={removeOverlay}
        />
      </div>
      <SearchInput
        handleSearchAddress={handleSearchAddress}
        handleConvertClick={handleConvertClick}
      />
      <button
        style={{
          position: 'absolute',
          top: '135px',
          left: '10px',
          zIndex: '999999',
          cursor: 'pointer',
        }}
        onClick={() => {
          handleConvertClick();
        }}
      >
        <FaSearch className="search-icon" />
      </button>
    </>
  );
}
