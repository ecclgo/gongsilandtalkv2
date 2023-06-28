import { ResetBox, ResetBtn } from '@/components/map/FilterMenu/Header';
import {
  Acre,
  Building,
  CommerceBud,
  CommerceType,
  CommerceTypeSubMenuBox,
  Factory,
  Jisan,
  Office,
} from '@/components/map/FilterMenu/ProductType/CommerceType';
import {
  ApartCoup,
  BuildingCoup,
  CouSubBox,
  CouponType,
  JisanCoup,
  OfficetelCoup,
} from '@/components/map/FilterMenu/ProductType/CouponType';
import {
  Apartment,
  CommerceHouse,
  FilterType,
  House,
  HouseType,
  HouseTypeSubMenuBox,
  MultiHouse,
  Officetel,
  ProductTypeBox,
  ProductTypeSubBox,
  ProductTypeText,
  SingleHouse,
  TypeLine,
} from '@/components/map/FilterMenu/ProductType/HouseType';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Object = {
  type: string | null;
  sub: string[] | null;
};

type Props = {
  selectOption: string;
  setProductType: any;
  productType: Object;
  isOpen: boolean;
  setIsOpen: any;
};

export default function ProductType({
  selectOption,
  setProductType,
  isOpen,
  setIsOpen,
}: Props) {
  const [changeSubMenuBox, setChangeSubMenuBox] = useState(0);
  const [changeSubMenu, setChangeSubMenu] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleDivBox = (e: any) => {
    if (
      boxRef.current &&
      boxRef.current instanceof Element &&
      !boxRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDivBox);
    return () => {
      document.removeEventListener('mousedown', handleDivBox);
    };
  }, []);

  const handleProductType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetElement = e.target as HTMLElement;
    setProductType(() => {
      return {
        type: 'house',
        sub: [targetElement.id],
      };
    });
  };

  const handleCommerceType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetElement = e.target as HTMLElement;
    setProductType(() => {
      return {
        type: 'commerce',
        sub: [targetElement.id],
      };
    });
  };

  const handleCouponType = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetElement = e.target as HTMLElement;
    setProductType(() => {
      return {
        type: 'coupon',
        sub: [targetElement.id],
      };
    });
  };

  const handleResetBtn = () => {
    if (changeSubMenuBox === 0) {
      setChangeSubMenu(0);
      setProductType({
        type: 'house',
        sub: ['아파트'],
      });
    } else if (changeSubMenuBox === 1) {
      setChangeSubMenu(6);
      setProductType({
        type: 'commerce',
        sub: ['상가'],
      });
    } else {
      setChangeSubMenu(12);
      setProductType({
        type: 'coupon',
        sub: ['아파트 분양권'],
      });
    }
  };

  return (
    <div>
      <ProductTypeBox isOpen={isOpen} ref={boxRef}>
        <ProductTypeText>매물 종류</ProductTypeText>
        <ProductTypeSubBox>
          <FilterType>
            <HouseType
              onClick={() => {
                setChangeSubMenuBox(0);
                setProductType({
                  type: 'house',
                  sub: ['아파트'],
                });
                setChangeSubMenu(0);
              }}
              changeSubMenuBox={changeSubMenuBox}
            >
              주거용
            </HouseType>
            <CommerceType
              onClick={() => {
                setChangeSubMenuBox(1);
                setProductType({
                  type: 'commerce',
                  sub: ['상가'],
                });
                setChangeSubMenu(6);
              }}
              changeSubMenuBox={changeSubMenuBox}
            >
              상업용
            </CommerceType>
            {selectOption === 'Real' ? (
              ''
            ) : (
              <>
                <CouponType
                  onClick={() => {
                    setChangeSubMenuBox(2);
                    setProductType({
                      type: 'coupon',
                      sub: ['아파트 분양권'],
                    });
                    setChangeSubMenu(12);
                  }}
                  changeSubMenuBox={changeSubMenuBox}
                >
                  분양권
                </CouponType>
              </>
            )}
          </FilterType>
          <TypeLine />
          {changeSubMenuBox === 0 ? (
            <>
              <HouseTypeSubMenuBox>
                <Apartment
                  id="아파트"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(0);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  아파트
                </Apartment>
                <Officetel
                  id="오피스텔"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(1);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  오피스텔
                </Officetel>
                <CommerceHouse
                  id="상가주택"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(2);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  상가주택
                </CommerceHouse>
                <House
                  id="주택"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(3);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  주택
                </House>
                <SingleHouse
                  id="단독/다가구"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(4);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  단독/다가구
                </SingleHouse>
                <MultiHouse
                  id="다세대/빌라/연립"
                  onClick={(e) => {
                    handleProductType(e);
                    setChangeSubMenu(5);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  다세대/빌라/연립
                </MultiHouse>
              </HouseTypeSubMenuBox>
            </>
          ) : changeSubMenuBox === 1 ? (
            <>
              <CommerceTypeSubMenuBox>
                <CommerceBud
                  id="상가"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(6);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  상가
                </CommerceBud>
                <Office
                  id="사무실"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(7);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  사무실
                </Office>
                <Building
                  id="건물"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(8);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  건물
                </Building>
                <Acre
                  id="토지/임야"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(9);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  토지/임야
                </Acre>
                <Jisan
                  id="지식산업센터"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(10);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  지식산업센터
                </Jisan>
                <Factory
                  id="공장/창고"
                  onClick={(e) => {
                    handleCommerceType(e);
                    setChangeSubMenu(11);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  공장/창고
                </Factory>
              </CommerceTypeSubMenuBox>
            </>
          ) : (
            <>
              <CouSubBox>
                <ApartCoup
                  id="아파트 분양권"
                  onClick={(e) => {
                    handleCouponType(e);
                    setChangeSubMenu(12);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  아파트 분양권
                </ApartCoup>
                <OfficetelCoup
                  id="오피스텔 분양권"
                  onClick={(e) => {
                    handleCouponType(e);
                    setChangeSubMenu(13);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  오피스텔 분양권
                </OfficetelCoup>
                <BuildingCoup
                  id="상가 분양권"
                  onClick={(e) => {
                    handleCouponType(e);
                    setChangeSubMenu(14);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  상가 분양권
                </BuildingCoup>
                <JisanCoup
                  id="지식산업센터 분양권"
                  onClick={(e) => {
                    handleCouponType(e);
                    setChangeSubMenu(15);
                  }}
                  changeSubMenu={changeSubMenu}
                >
                  지식산업센터 분양권
                </JisanCoup>
              </CouSubBox>
            </>
          )}
          <ResetBox>
            <ResetBtn
              onClick={() => {
                handleResetBtn();
              }}
            >
              <Image src={'/ResetBtn.png'} alt="Reset" width={12} height={12} />
              초기화
            </ResetBtn>
          </ResetBox>
        </ProductTypeSubBox>
      </ProductTypeBox>
    </div>
  );
}
