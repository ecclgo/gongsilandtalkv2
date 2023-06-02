import {
  ContentsBox,
  FreeBoardTab,
  KnowHowTab,
  QnABoxTab,
  ReviewTab,
} from '@/components/community/CommunityBox';
import { NewPostBtn } from '@/components/community/NewPost';
import { MegazineTab, TabBox, YoutubeTab } from '@/components/community/TabBox';
import {
  CommunityText,
  GongtalkContentsText,
} from '@/components/community/TabSpan';
import Link from 'next/link';
import { useState } from 'react';
import Notice from '../../Notice';

export default function FreeBoard() {
  const [tabClicked, setTabClicked] = useState<number>(1);
  const [innerTab, setInnerTab] = useState<number>(1);

  return (
    <>
      <TabBox>
        <Link href={'/Community/Contents/Youtube'}>
          <GongtalkContentsText
            tabClicked={tabClicked}
            onClick={() => setTabClicked(0)}
          >
            공톡 컨텐츠
          </GongtalkContentsText>
        </Link>
        <CommunityText tabClicked={tabClicked} onClick={() => setTabClicked(1)}>
          커뮤니티
        </CommunityText>
        {tabClicked == 1 ? (
          <>
            <Link href={'/Community/Board/QnA'}>
              <QnABoxTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
                질문/답변
              </QnABoxTab>
            </Link>
            <Link href={'/Community/Board/FreeBoard'}>
              <FreeBoardTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
                자유글
              </FreeBoardTab>
            </Link>
            <Link href={'/Community/Board/KnowHow'}>
              <KnowHowTab innerTab={innerTab} onClick={() => setInnerTab(2)}>
                노하우
              </KnowHowTab>
            </Link>
            <Link href={'/Community/Board/Review'}>
              <ReviewTab innerTab={innerTab} onClick={() => setInnerTab(3)}>
                후기
              </ReviewTab>
            </Link>
            <Notice />
          </>
        ) : (
          <>
            <Link href={'/Community/Contents/Youtube'}>
              <YoutubeTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
                공톡 유튜브
              </YoutubeTab>
            </Link>
            <Link href={'/Community/Contents/Megazine'}>
              <MegazineTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
                공톡 매거진
              </MegazineTab>
            </Link>
          </>
        )}
      </TabBox>
    </>
  );
}
