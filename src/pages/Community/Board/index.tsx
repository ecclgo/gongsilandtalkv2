import {
  FreeBoardTab,
  KnowHowTab,
  QnABoxTab,
  ReviewTab,
} from '@/components/community/CommunityBox';
import { CommunityText } from '@/components/community/TabSpan';
import { useState } from 'react';
import QnA from './QnA';
import FreeBoard from './FreeBoard';
import KnowHow from './KnowHow';
import Review from './Review';
import Notice from '../Notice';
import Link from 'next/link';

type Props = {
  tabClicked: number;
  setTabClicked: React.Dispatch<React.SetStateAction<number>>;
};

export default function Board({ tabClicked, setTabClicked }: Props) {
  const [innerTab, setInnerTab] = useState<number>(0);

  return (
    <>
      <CommunityText tabClicked={tabClicked} onClick={() => setTabClicked(1)}>
        커뮤니티
      </CommunityText>
      {tabClicked == 1 ? (
        <>
          <QnABoxTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
            질문/답변
          </QnABoxTab>
          <FreeBoardTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
            자유글
          </FreeBoardTab>
          <KnowHowTab innerTab={innerTab} onClick={() => setInnerTab(2)}>
            노하우
          </KnowHowTab>
          <ReviewTab innerTab={innerTab} onClick={() => setInnerTab(3)}>
            후기
          </ReviewTab>
          {innerTab === 0 ? (
            <QnA />
          ) : innerTab === 1 ? (
            <FreeBoard />
          ) : innerTab === 2 ? (
            <KnowHow />
          ) : (
            <Review />
          )}
          <Notice />
        </>
      ) : null}
    </>
  );
}
