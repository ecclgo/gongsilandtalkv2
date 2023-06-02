import {
  MYoutubeBox,
  MYoutubeContents,
  MYoutubeContentsBox,
  MYoutubeContentsDetail,
  MYoutubeContentsTitle,
  MYoutubeFooter,
  MYoutubeLine,
  MYoutubeProfileBox,
  MYoutubeProfileName,
} from '@/components/community/MYoutube';
import { Youtube } from '@/types/Contents';
import Image from 'next/image';
import YoutubeData from '../../../../../YoutubeDummy.json';
import Link from 'next/link';

export default function MYoutube() {
  return (
    <>
      <MYoutubeBox>
        {YoutubeData?.map((a: Youtube, i: number) => {
          return (
            <div key={i}>
              <MYoutubeContents>
                <MYoutubeProfileBox>
                  <MYoutubeProfileName>공실앤톡</MYoutubeProfileName>
                </MYoutubeProfileBox>
                <MYoutubeContentsBox>
                  <Link href={`/Community/Contents/Youtube/posts/${a.id}`}>
                    <MYoutubeContentsTitle>{a.title}</MYoutubeContentsTitle>
                    <MYoutubeContentsDetail>
                      {a.contents}
                    </MYoutubeContentsDetail>
                    <MYoutubeFooter>
                      {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
                    </MYoutubeFooter>
                  </Link>
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
                </MYoutubeContentsBox>
              </MYoutubeContents>
              <MYoutubeLine />
            </div>
          );
        })}
      </MYoutubeBox>
    </>
  );
}
