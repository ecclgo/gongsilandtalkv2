import {
  ContentsBox,
  FreeBoardTab,
  KnowHowTab,
  QnABoxTab,
  ReviewTab,
} from '@/components/community/CommunityBox';
import { MegazineTab, TabBox, YoutubeTab } from '@/components/community/TabBox';
import Notice from '../../Notice';
import { useState } from 'react';
import {
  CommunityText,
  GongtalkContentsText,
} from '@/components/community/TabSpan';
import Link from 'next/link';

export default function QnA() {
  const [tabClicked, setTabClicked] = useState<number>(1);
  const [innerTab, setInnerTab] = useState<number>(0);
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
            <QnABoxTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
              질문/답변
            </QnABoxTab>
            <Link href={'/Community/Board/FreeBoard'}>
              <FreeBoardTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
                자유글
              </FreeBoardTab>
            </Link>
            <KnowHowTab innerTab={innerTab} onClick={() => setInnerTab(2)}>
              노하우
            </KnowHowTab>
            <ReviewTab innerTab={innerTab} onClick={() => setInnerTab(3)}>
              후기
            </ReviewTab>
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
      <ContentsBox></ContentsBox>
    </>
  );
}
