import {
  MTabContents,
  MegazineTab,
  YoutubeTab,
} from '@/components/community/TabBox';
import MNotice from '../MNotice';
import { useEffect, useState } from 'react';
import { Youtubes, community } from '../../../../NoticeDummy';
import MYoutube from './Youtube/MYoutube';
import MMegazine from './Megazine/MMegazine';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function MTabContentsComponent({
  tabClicked,
  setTabClicked,
}: Props) {
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

  //  API 생성시 수정
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
      <MTabContents>
        {tabClicked === 0 ? (
          <>
            <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
              공톡 유튜브
            </YoutubeTab>
            <MegazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
              공톡 매거진
            </MegazineTab>
            {innerTab === 0 ? <MYoutube /> : <MMegazine />}
          </>
        ) : null}
        <MNotice />
      </MTabContents>
    </>
  );
}
