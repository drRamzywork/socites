import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import styles from '@/styles/landing.module.scss';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Button from '@/components/Utils/Button';
import Map from '@/components/Icons/svgs/Map';


const LandingV1 = () => {
  const carouselItems = [{ img: "/imgs/bg/4.jpg" }, { img: "/imgs/bg/3.jpg" }, { img: "/imgs/bg/2.jpg" }, { img: "/imgs/bg/1.jpg" }]
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentDot, setCurrentDot] = useState(0);
  const breakpoints = {
    1: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
  return (
    <>
      <Navbar />
      <section id='landing' className={styles.landing}>
        <div className="container  mx-auto px-4">
          <div className={styles.sec_container}>
            <div className={styles.map_container}>
              <img src="/imgs/map.svg" alt="" />
              {/* <Map /> */}
            </div>

            <div className={styles.boxes_container}>

              <Swiper
                modules={[Navigation,]}
                spaceBetween={48}
                // slidesPerView={3}
                // breakpoints={}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setCurrentDot(swiper.realIndex)}
                speed={500}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                className={styles.swiper_boxes}
                id="swiper"
                dir={'ltr'}
                breakpoints={breakpoints}

              >
                {carouselItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.box}>
                      <div className={styles.img_container}>
                        <img src={item.img} alt="" />

                        <div className={styles.title} >
                          <h3 >دولة الشرق تنهار</h3>
                        </div>
                      </div>

                      <div className={styles.text_container}>
                        <div className={styles.desc}>
                          <p>العديد من الخسائر في قسم المالية التابع لجمعية الشرق</p>
                        </div>

                        <div className={styles.button_container}>
                          <Button> قراءة المزيد</Button>
                        </div>

                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
        <div className={styles.img_bg_container}>
          <div className={styles.imgs_container}>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setCurrentDot(swiper.realIndex)}
              speed={500}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4000,
              }}

              loop={true}
              id="swiper-carosel"
              dir={'ltr'}
            >
              {carouselItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <img src={'/imgs/bg/4.jpg'} alt="" /> */}

          </div>


          <div className={styles.layer} />



        </div>
      </section>
    </>
  )
}

export default LandingV1