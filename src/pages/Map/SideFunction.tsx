import { ArrowFunction, FunctionBox, GpsFunction, Line, MapFunction, Minus, NearFunction, Plus } from "@/components/map/SubFunction";
import Image from "next/image";

export default function SideFuntion() {
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
          />
        </GpsFunction>
        <Minus>
          <Image 
            src={'/Minus.png'}
            alt="Minus"
            width={15}
            height={15}
          />
        </Minus>
        <Line />
        <Plus>
          <Image 
            src={'/Plus.png'}
            alt="Plus"
            width={15}
            height={15}
          />
        </Plus>
        <MapFunction>
          지도
        </MapFunction>
      </FunctionBox>
    </>
  )
}
