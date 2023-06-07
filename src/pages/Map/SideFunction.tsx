import { ArrowFunction, FunctionBox, GpsFunction, Line, MapFunction, Minus, NearFunction, Plus } from "@/components/map/SubFunction";
import Image from "next/image";

type Props = {
  PlusFunc: () => void;
  MinusFunc: () => void;
  getCurrentPosBtn: () => void
}

export default function SideFuntion({PlusFunc, MinusFunc, getCurrentPosBtn}: Props) {
  return (
    <>
      <FunctionBox>
        <ArrowFunction>
          <Image 
            src={'/MapArrow.png'}
            alt="MapArrow"
            width={20}
            height={20}
          />
        </ArrowFunction>
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
        <MapFunction>
          지도
        </MapFunction>
      </FunctionBox>
    </>
  )
}
