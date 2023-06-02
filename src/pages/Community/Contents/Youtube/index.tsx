import { Line } from '@/components/community/NoticeBox';
import {
  ContentsBox,
  MovingBox,
  ProfileBox,
  YContents,
  YFooter,
  YUsername,
  Ytitle,
} from '@/components/community/ContentsBox';
import Image from 'next/image';
import Paging from '../../Paging';
import {
  OrderBox,
  Updated,
  Recommend,
  Repl,
  ClickedOrder,
} from '@/components/community/OrderBy';
import { useEffect, useState } from 'react';
import {
  CommunityText,
  GongtalkContentsText,
  MovingSpan,
} from '@/components/community/TabSpan';
import Notice from '../../Notice';
import Link from 'next/link';
import { MegazineTab, TabBox, YoutubeTab } from '@/components/community/TabBox';
import Board from '../../Board';
import { Youtubes, community } from '../../../../../NoticeDummy';

export default function Youtube() {
  const [tabClicked, setTabClicked] = useState<number>(0);
  const [innerTab, setInnerTab] = useState<number>(0);
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
            <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
              공톡 유튜브
            </YoutubeTab>
            <Link href={'/Community/Contents/Megazine'}>
              <MegazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
                공톡 매거진
              </MegazineTab>
            </Link>
          </>
        ) : (
          <>
            <Board tabClicked={tabClicked} setTabClicked={setTabClicked} />
          </>
        )}
        <Notice />
      </TabBox>
      {tabClicked === 0 && innerTab === 0 ? (
        <>
          <ContentsBox>
            <OrderBox>
              <Updated
                clickedOrder={clickedOrder === 0}
                onClick={() => {
                  handleClick(0);
                }}
              >
                <ClickedOrder
                  clickedOrder={clickedOrder === 0}
                  onClick={() => {
                    handleClick(0);
                  }}
                />
                최신순
              </Updated>
              <Recommend
                clickedOrder={clickedOrder === 1}
                onClick={() => {
                  handleClick(1);
                }}
              >
                <ClickedOrder
                  clickedOrder={clickedOrder === 1}
                  onClick={() => {
                    handleClick(1);
                  }}
                />
                추천순
              </Recommend>
              <Repl
                clickedOrder={clickedOrder === 2}
                onClick={() => {
                  handleClick(2);
                }}
              >
                <ClickedOrder
                  clickedOrder={clickedOrder === 2}
                  onClick={() => {
                    handleClick(2);
                  }}
                />
                댓글순
              </Repl>
            </OrderBox>
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
                  <Link href={`/Community/Contents/Youtube/posts/${a.id}`}>
                    <Ytitle>{a.title}</Ytitle>
                    <YContents>{a.contents}</YContents>
                    <YFooter>
                      {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
                    </YFooter>
                  </Link>
                  <Line />
                </div>
              );
            })}
            <Paging totalPosts={yPosts?.length} paginate={setCurrentPage} />
          </ContentsBox>
          <MovingBox>
            <MovingSpan>공톡 유튜브 추천글</MovingSpan>
          </MovingBox>
        </>
      ) : null}
    </>
  );
}
