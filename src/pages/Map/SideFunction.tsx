import {
  FunctionBox,
  GpsFunction,
  Line,
  MapFunction,
  MapFunction2,
  Minus,
  Plus,
} from '@/components/map/SubFunction';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  PlusFunc: () => void;
  MinusFunc: () => void;
  getCurrentPosBtn: () => void;
  changeMapType: (mapType: string) => void;
  removeOverlay: (currentTypeId: kakao.maps.MapTypeId) => void;
};

export default function SideFuntion({
  PlusFunc,
  MinusFunc,
  getCurrentPosBtn,
  changeMapType,
  removeOverlay,
}: Props) {

  const [mapType, setMapType] = useState('');

  const handleDistrict = () => {
    if(mapType === 'USE_DISTRICT') {
      removeOverlay(kakao.maps.MapTypeId.USE_DISTRICT);
    }

    setMapType('USE_DISTRICT');
  };

  const handleHybrid = () => {
    setMapType('HYBRID');
  };

  return (
    <>
      <FunctionBox>
        <GpsFunction>
          <Image
            src={'/Gps.png'}
            alt="Gps"
            width={20}
            height={20}
            onClick={getCurrentPosBtn}
          />
        </GpsFunction>
        <Minus>
          <Image
            src={'/Minus.png'}
            alt="Minus"
            width={15}
            height={15}
            onClick={MinusFunc}
          />
        </Minus>
        <Line />
        <Plus>
          <Image
            src={'/Plus.png'}
            alt="Plus"
            width={15}
            height={15}
            onClick={PlusFunc}
          />
        </Plus>
        <MapFunction onClick={() => {handleDistrict(); changeMapType(mapType);}}>지적도</MapFunction>
        <MapFunction2 onClick={() => {handleHybrid(); changeMapType(mapType);}}>위성도</MapFunction2>
      </FunctionBox>
    </>
  );
}
