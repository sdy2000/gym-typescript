import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

type Props = {};

function BrandSlider({}: Props) {
  return (
    <div className="brands">
      <div className="container">
        <div className="wrapper flexitem">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="forbes-sponsor" src={SponsorForbes} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="forbes-sponsor" src={SponsorForbes} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default BrandSlider;
