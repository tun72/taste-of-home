import { Navigation, Pagination, Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import ReviewSlide from "./ReviewSlide";
import Heading from "./Heading";

function CustomerReviewSection() {
  const [setSwiperRef] = useState(null);
  const users = [
    {
      name: "Emily",
    },
    {
      name: "Rock Ricky",
    },
    {
      name: "Morty Smith",
    },
    {
      name: "Rick",
    },
    {
      name: "Alex",
    },
  ];
  return (
    <section className="w-full  p-[8rem_7rem_8rem_7rem]" id="reviews">
      <div className="mx-auto mb-[2rem] max-w-[80%]">
        <div className="mb-[10rem]">
          <Heading type="secondary">Customer Review</Heading>
        </div>

        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={50}
          pagination={true}
          className="overflow-x-clip"
          initialSlide={1}
          virtual
        >
          {users.map((user) => (
            <SwiperSlide
              className="mb-[5rem] p-[2rem] shadow-xl rounded-md cursor-pointer"
              key={user.name}
            >
              <ReviewSlide name={user.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
