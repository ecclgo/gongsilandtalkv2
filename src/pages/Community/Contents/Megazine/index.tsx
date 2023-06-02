import {
  ContentsBox,
  ProfileBox,
  YContents,
  YFooter,
  YUsername,
  Ytitle,
} from '@/components/community/ContentsBox';
import { EmptyBox, Line, NoticeBox } from '@/components/community/NoticeBox';
import Notice from '../../Notice';
import Image from 'next/image';
import Paging from '../../Paging';
import Link from 'next/link';
import { MegazineTab, TabBox, YoutubeTab } from '@/components/community/TabBox';
import {
  CommunityText,
  GongtalkContentsText,
} from '@/components/community/TabSpan';
import { useEffect, useState } from 'react';
import { Youtubes, community } from '../../../../../NoticeDummy';

export default function Megazine() {
  const [tabClicked, setTabClicked] = useState<number>(0);
  const [innerTab, setInnerTab] = useState<number>(1);
  const [clickedOrder, setClickedOrder] = useState<number>(0);
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

  const handleClick = (number: number) => {
    setClickedOrder(number);
  };

  return (
    <>
      <TabBox>
        <GongtalkContentsText
          tabClicked={tabClicked}
          onClick={() => setTabClicked(0)}
        >
          공톡 컨텐츠
        </GongtalkContentsText>
        <Link href={'/Community/Board/QnA'}>
          <CommunityText
            tabClicked={tabClicked}
            onClick={() => setTabClicked(1)}
          >
            커뮤니티
          </CommunityText>
        </Link>
        {tabClicked === 0 ? (
          <>
            <Link href={'/Community/Contents/Youtube'}>
              <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
                공톡 유튜브
              </YoutubeTab>
            </Link>
            <MegazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
              공톡 매거진
            </MegazineTab>
          </>
        ) : null}
        <Notice />
        <EmptyBox />
      </TabBox>
      <ContentsBox>
        {post?.map((a: any, i: number) => {
          return (
            <div key={i}>
              <ProfileBox>
                <Image
                  src={'/ProPic.png'}
                  alt="ProPic"
                  width={30}
                  height={30}
                  style={{
                    marginBottom: '16px',
                  }}
                />
                <YUsername>공실앤톡</YUsername>
              </ProfileBox>
              <div>
                <Image
                  src={'/YImage.png'}
                  alt="YImage"
                  width={154}
                  height={108}
                  style={{
                    position: 'absolute',
                    left: '600px',
                    marginTop: '-20px',
                  }}
                />
              </div>
              <Link href={`/Community/Contents/Megazine/posts/${a.id}`}>
                <Ytitle>{a.title}</Ytitle>
              </Link>
              <YContents>{a.content}</YContents>
              <YFooter>
                {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
              </YFooter>
              <Line />
            </div>
          );
        })}
        <Paging totalPosts={mPosts?.length} paginate={setCurrentPage} />
      </ContentsBox>
    </>
  );
}
