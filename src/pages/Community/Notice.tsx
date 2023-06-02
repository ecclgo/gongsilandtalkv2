import { NoticeTag, NoticeTitle } from '@/components/community/Notice';
import { EmptyBox, NoticeBox } from '@/components/community/NoticeBox';
import { NoticeData } from '../../../NoticeDummy';

export default function Notice() {
  return (
    <>
      <NoticeBox>
        {NoticeData?.slice(0, 2).map((a, i) => {
          return (
            <div key={i}>
              <NoticeTag>공지</NoticeTag>
              <NoticeTitle>
                {a.title}
                {' - ' + a.date}
              </NoticeTitle>
            </div>
          );
        })}
      </NoticeBox>
      <EmptyBox />
    </>
  );
}
