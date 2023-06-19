import { useState } from 'react';

const [state, setState] = useState({
  center: {
    lat: 0.0,
    lng: 0.0,
  },
  isPanto: true,
});

export const mapContainer: HTMLElement | null = document.getElementById('map');
export const mapOption = {
  center: new kakao.maps.LatLng(state.center?.lat!, state.center?.lng!),
  level: 3,
};
