import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const HomeSlideShow = () => {
  const images = [
    "https://asset.kompas.com/crops/AsdK08zsp-tddeq8aH8XWPN69uw=/0x77:1000x744/1200x800/data/photo/2020/11/20/5fb73bce7aed2.jpg",
    "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/87/2024/01/23/na-ki-493530717.jpg",
    "https://i.ytimg.com/vi/33HiGSXqrBI/maxresdefault.jpg",
  ];

  return (
    <Fade autoplay={true} duration={3000}>
      {images.map((image, i) => (
        <div key={i} className="each-slide-effect">
          <div style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      ))}
    </Fade>
  );
};

export default HomeSlideShow;
