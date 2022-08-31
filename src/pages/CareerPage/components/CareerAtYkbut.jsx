import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./career.scss";

const Careerykbut = () => {
  return (
    <div className="container container-sm mb-5">
      <h2 className="title mb-5 mt-5">BERKARIR DI YKBUT</h2>
      <div>
        <p>
          Sumber Daya Manusia (SDM) merupakan aset utama United Tractors (UT)
          dalam menjalankan kegiatan usaha. UT merekrut SDM berkompeten,
          berkualitas serta siap bekerja bersama untuk mewujudkan keberlanjutan
          dan keberhasilan usaha. Menghadapi tantangan bisnis yang semakin
          ketat, UT turut membangun karakter dan kompetensi SDM agar terus
          berkembang menjadi insan perusahaan yang kreatif, inovatif dan
          kompetitif. Kesempatan berkarir, budaya kerjasama, apresiasi,
          kompensasi dan benefit yang menarik menjadi komitmen UT terhadap
          SDM-nya.
        </p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ height: "300px" }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 4</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 5</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 6</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 7</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 8</SwiperSlide>
          <SwiperSlide style={{ height: "300px" }}>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Careerykbut;
