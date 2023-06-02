import {
  DetailBox,
  DetailContent,
  DetailLine,
  DetailProBox,
  DetailTopBox,
  EndLine,
  ImgBox,
  Repl,
  TopLine,
  UserInfoBox,
} from '@/components/community/DetailContents';
import { Megazine, Youtube } from '../../../../../types/Contents';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  BackArrow,
  GongtalkBox,
  MBackArrow,
} from '@/components/community/Icon';
import Image from 'next/image';
import {
  MRegiCount,
  RegiDate,
  TitleText,
  UserName,
} from '@/components/community/DetailText';
import moment from 'moment';
import {
  MainRepleBox,
  MainRepleBtn,
  MainRepleContents,
  MainRepleFooter,
  MainRepleProfileBox,
  MainRepleUsername,
  RepleBox,
  RepleBtn,
  RepleContents,
  RepleFooter,
  RepleProfileBox,
  RepleUsername,
} from '@/components/community/ReplBox';
import { useRouter } from 'next/router';

interface Props {
  megazine: Megazine;
  youtube: Youtube | undefined;
}

const YoutubeDetail: NextPage<Props> = ({ youtube }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <DetailTopBox>
        <MBackArrow
          onClick={() => {
            handleGoBack();
          }}
        >
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </MBackArrow>
      </DetailTopBox>
      <DetailBox>
        <BackArrow onClick={handleGoBack}>
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </BackArrow>
        <TopLine />
        <GongtalkBox>공톡 유튜브</GongtalkBox>
        <TitleText>{youtube?.title}</TitleText>
        <UserInfoBox>
          <DetailProBox>
            <Image src={'/ProPic.png'} alt="ProPic" width={40} height={40} />
          </DetailProBox>
          <UserName>공실앤톡</UserName>
          <RegiDate>
            {moment(youtube?.date).format('YYYY.MM.DD HH:mm')}
          </RegiDate>
        </UserInfoBox>
        <DetailLine />
        <DetailContent>{youtube?.contents}</DetailContent>
        <ImgBox>
          <Image src={'/YImage'} alt="YImage" width={324} height={182} />
        </ImgBox>
        <EndLine />
        <MRegiCount>{'댓글 ' + youtube?.repl}</MRegiCount>
        <MainRepleBox>
          <MainRepleProfileBox />
          <MainRepleUsername>user123</MainRepleUsername>
          <MainRepleContents>유용한 정보네요~</MainRepleContents>
          <MainRepleFooter>2023.04.02 - 16:23</MainRepleFooter>
          <MainRepleBtn>답글쓰기</MainRepleBtn>
        </MainRepleBox>
        <Repl placeholder="댓글을 입력해보세요" />
      </DetailBox>
      <RepleBox>
        <RepleUsername>user123</RepleUsername>
        <RepleProfileBox />
        <RepleContents>유용한 정보네요!</RepleContents>
        <RepleFooter>2023.04.02 - 16:23</RepleFooter>
        <RepleBtn>답글쓰기</RepleBtn>
      </RepleBox>
    </>
  );
};

export default YoutubeDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;

  const paths = youtubes.map((youtubes: Youtube) => ({
    params: { id: youtubes.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;
  const youtube = youtubes.find(
    (youtubes: Youtube) => youtubes.id === params?.id
  );
  return { props: { youtube } };
};
