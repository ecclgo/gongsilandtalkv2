import Image from 'next/image';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  {
    url: 'https://m.post.naver.com/viewer/image.nhn?src=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMjA1MTJfMjYz%2FMDAxNjUyMjgyNDMxNTMx.eiksoWq4rbopryxGcA8kYLbbluZBGmlgAyIqk9IGt5Ig.I7z63dT0QXrlv2VPs1lgrGniY-mDD3T8_PwOwDcSyBEg.PNG%2F%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584.png',
    id: '1',
    alt: 'Picka',
  },
  {
    url: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=hanee218&logNo=221028983538&view=img_4',
    id: '2',
    alt: 'Raichu',
  },
  {
    url: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=gkfngkfn414&logNo=220551095277&view=img_1',
    id: '3',
    alt: 'Pairy',
  },
  {
    url: 'https://i2.ruliweb.com/ori/19/09/07/16d0b37ce61501ee9.jpg',
    id: '4',
    alt: 'Kkobugi',
  },
];

const renderThumbs = () =>
  images.map((image) => (
    <Image
      key={image.id}
      src={image.url}
      alt={image.alt}
      width={100}
      height={80}
    />
  ));

const RenderCarousel = (): any => {
  return (
    <>
      <Carousel
        showArrows={true}
        renderThumbs={renderThumbs}
        infiniteLoop={true}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.alt}
            width={100}
            height={80}
          />
        ))}
      </Carousel>
    </>
  );
};

export default RenderCarousel;
