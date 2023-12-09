import { Navigation, Pagination, Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import ReviewSlide from "./ReviewSlide";

function CustomerReviewSection() {
  const [setSwiperRef] = useState(null);
  return (
    <section
      className="section-customer  w-full px-[7rem] py-[8rem]"
      id="reviews"
    >
      <div className="customer">
        <div className="customer__header">
          <h2 className="secondary__heading">Customer Review</h2>
        </div>

        <div className="customer__body">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={true}
            className="overflow-x-clip"
            initialSlide={1}
            virtual
          >
            <SwiperSlide>
              <ReviewSlide name={"Tun Tun Myint"} comment={"lorem ipsum"} />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide name={"Tun Tun Myint"} comment={"lorem ipsum"} />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide name={"Tun Tun Myint"} comment={"lorem ipsum"} />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide name={"Tun Tun Myint"} comment={"lorem ipsum"} />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewSlide name={"Tun Tun Myint"} comment={"lorem ipsum"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
