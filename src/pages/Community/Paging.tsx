import { PageLi, PageSpan, PageUl } from '@/components/community/PagingStyle';
import { useState } from 'react';

type Props = {
  totalPosts: number;
  paginate: React.Dispatch<React.SetStateAction<number>>;
};

export default function Paging({ totalPosts, paginate }: Props) {
  const [activeBtn, setActiveBtb] = useState<number>(1);

  const handleClick = (number: number) => {
    setActiveBtb(number);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        <nav>
          <PageUl>
            {pageNumbers.map((number: number) => (
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
          </PageUl>
        </nav>
      </div>
    </>
  );
}
