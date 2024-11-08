// import ImageGallery from "react-image-gallery";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const DetailProduct = () => {
  const images = [
    <img
      src="https://asset.kompas.com/crops/AsdK08zsp-tddeq8aH8XWPN69uw=/0x77:1000x744/1200x800/data/photo/2020/11/20/5fb73bce7aed2.jpg"
      role="presentation"
    />,
    <img
      src="https://www.blibli.com/friends-backend/wp-content/uploads/2021/06/Ikan-Cupang.jpg"
      role="presentation"
    />,
    <img
      src="https://asset.kompas.com/crops/GOGE5UVQJ-kX5EkpxiXgGTRXt_E=/19x61:898x647/750x500/data/photo/2020/11/20/5fb73ab6933c4.jpg"
      role="presentation"
    />,
  ];
  return (
    <div className="w-5/6 h-auto m-auto">
      <div className="h-28 content-center">
        <h3 className="text-center text-cyan-700 text-5xl font-bold">
          Half Moon
        </h3>
      </div>

      <div className="flex">
        <div className="w-2/3 p-5">
          <AliceCarousel mouseTracking={true} items={images} />
        </div>

        <div className="w-1/3">
          <h4 className="text-3xl mb-6">1.000.000</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
