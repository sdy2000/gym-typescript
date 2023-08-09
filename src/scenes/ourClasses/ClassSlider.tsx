// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { classes } from "./data/classes";
import { ClassType } from "@/shared/types";
import Class from "./Class";

type Props = {};

function ClassSlider({}: Props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {classes.map((item: ClassType, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <Class
            name={item.name}
            description={item.description}
            image={item.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ClassSlider;
