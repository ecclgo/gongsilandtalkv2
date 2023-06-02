import {
  LeftArrowBox,
  PageLi,
  PageSpan,
  PagingUl,
  RightArrowBox,
} from '@/components/myBoard/Paging';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  totalPosts: number;
  paginate: React.Dispatch<React.SetStateAction<number>>;
};

export default function Paging({ totalPosts, paginate }: Props) {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  const pageNumbers = [];

  const handleClick = (number: number) => {
    setActiveBtn(number);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
    pageNumbers.push(i);
  }

  const handleLeftArrow = () => {
    if (activeBtn === 1) {
      setActiveBtn(activeBtn);
      paginate(activeBtn);
    } else {
      setActiveBtn(activeBtn - 1);
      paginate(activeBtn - 1);
    }
  };

  const handleRightArrow = () => {
    if (activeBtn === pageNumbers.length) {
      setActiveBtn(activeBtn);
      paginate(activeBtn);
    } else {
      setActiveBtn(activeBtn + 1);
      paginate(activeBtn + 1);
    }
  };

  return (
    <>
      <div>
        <PagingUl>
          <LeftArrowBox
            onClick={() => {
              handleLeftArrow();
            }}
          >
            <Image
              src={'/LeftArrow.png'}
              alt="LeftArrow"
              width={30}
              height={30}
            />
          </LeftArrowBox>
          <RightArrowBox
            onClick={() => {
              handleRightArrow();
            }}
          >
            <Image
              src={'/RightArrow.png'}
              alt="RightArrow"
              width={30}
              height={30}
            />
          </RightArrowBox>
          {pageNumbers?.map((number: number) => (
            <PageLi key={number}>
              <PageSpan
                activeBtn={activeBtn === number}
                onClick={() => {
                  paginate(number);
                  handleClick(number);
                }}
              >
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PagingUl>
      </div>
    </>
  );
}
