import { MegazineTab, TabBox, YoutubeTab } from '@/components/community/TabBox';
import { GongtalkContentsText } from '@/components/community/TabSpan';
import { useEffect, useState } from 'react';
import { Youtubes, community } from '../../../../NoticeDummy';
import Youtube from './Youtube';
import Megazine from './Megazine';
import Image from 'next/image';
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from '@/components/community/SearchInput';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function Contents({ tabClicked, setTabClicked }: Props) {
  const [innerTab, setInnerTab] = useState<number>(0);

  const [post, setPost] = useState<any>([]);
  const [yPosts, setYposts] = useState<any>(Youtubes);
  const [mPosts, setMposts] = useState<any>(community);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(5);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = (posts: any) => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  /** API 생성시 수정 */
  useEffect(() => {
    const fetchData = () => {
      if (innerTab === 0) {
        setPost(currentPosts(yPosts));
      } else {
        setPost(currentPosts(mPosts));
      }
    };
    fetchData();
  }, [currentPage, innerTab]);

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <GongtalkContentsText
        tabClicked={tabClicked}
        onClick={() => setTabClicked(0)}
      >
        공톡 컨텐츠
      </GongtalkContentsText>
      {tabClicked === 0 ? (
        <>
          <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
            공톡 유튜브
          </YoutubeTab>
          <MegazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
            공톡 매거진
          </MegazineTab>
          <SearchContainer>
            <SearchIcon
              className="fa fa-search"
              onClick={handleSearchClick}
              style={{
                position: 'absolute',
                left: '750px',
                top: '95px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={'/SearchIcon.png'}
                alt="SearchIcon"
                width={20}
                height={20}
              />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요..."
              show={showSearch}
            />
          </SearchContainer>
          {/* {innerTab === 0 ? (
            <Youtube
              post={post}
              yPosts={yPosts}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <Megazine
              post={post}
              mPosts={mPosts}
              setCurrentPage={setCurrentPage}
            />
          )} */}
        </>
      ) : null}
    </>
  );
}
