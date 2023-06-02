import {
  MMegazineBox,
  MMegazineContents,
  MMegazineContentsBox,
  MMegazineContentsDetail,
  MMegazineContentsTitle,
  MMegazineFooter,
  MMegazineLine,
  MMegazineProfileBox,
  MMegazineProfileName,
} from '@/components/community/MMegazine';
import MegazineData from '../../../../../MegazineDummy.json';
import { Megazine } from '@/types/Contents';
import Image from 'next/image';

export default function MMegazine() {
  return (
    <>
      <MMegazineBox>
        {MegazineData.map((a: Megazine, i: number) => {
          return (
            <div key={i}>
              <MMegazineContents>
                <MMegazineProfileBox>
                  <MMegazineProfileName>공실앤톡</MMegazineProfileName>
                </MMegazineProfileBox>
                <MMegazineContentsTitle>{a.title}</MMegazineContentsTitle>
                <MMegazineContentsDetail>{a.content}</MMegazineContentsDetail>
                <MMegazineFooter>
                  {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
                </MMegazineFooter>
                <MMegazineContentsBox>
                  <Image
                    src={'/YImage'}
                    alt="YImage"
                    width={92}
                    height={92}
                    style={{
                      position: 'absolute',
                      left: '250px',
                      marginTop: '-20px',
                    }}
                  />
                </MMegazineContentsBox>
              </MMegazineContents>
              <MMegazineLine />
            </div>
          );
        })}
      </MMegazineBox>
    </>
  );
}
