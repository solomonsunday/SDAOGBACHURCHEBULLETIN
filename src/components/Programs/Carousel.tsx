import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const LandingPageCarousel = () => {
  return (
    <>
      <div className="relative flex items-center justify-center backdrop-blur-xl">
        <div className="z-10 absolute">
          {" "}
          <p className=" text-fuchsia-500 font-serif md:text-5xl text-xl font-extrabold text-center w-[80vw] max-w-6xl ">
            Discover the happiness of laundry convenience with our Pick-Up and
            Delivery{" "}
            <span className="text-green-700"> Dry Cleaning Service.</span>
          </p>
        </div>

        <Carousel
          autoPlay
          autoFocus
          showArrows={false}
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}
          className="bg-black backdrop-blur-xl"
        >
          <div className="bg-black backdrop-blur-xl">
            <img
              src="/assets/imgs/home/washing.svg"
              className="bg-black backdrop-blur-xl"
            />
          </div>
          <div>
            <img src="/assets/imgs/home/img-1.svg" />
          </div>
          <div>
            <img src="/assets/imgs/home/img-2.svg" />
          </div>
          <div>
            <img src="/assets/imgs/home/img-3.svg" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default LandingPageCarousel;
