import {
  MNoticeBox,
  MNoticeTag,
  MNoticeTitle,
} from '@/components/community/MNotice';
import { NoticeData } from '../../../NoticeDummy';

export default function MNotice() {
  return (
    <>
      <MNoticeBox>
        {NoticeData?.slice(0, 2).map((a, i) => {
          return (
            <div key={i}>
              <MNoticeTag>공지</MNoticeTag>
              <MNoticeTitle>{a.title}</MNoticeTitle>
            </div>
          );
        })}
      </MNoticeBox>
    </>
  );
}
