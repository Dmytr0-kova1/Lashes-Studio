import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function MyWorksItem({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;

    if (isOpen) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  }, [isOpen, swiperInstance]);

  return (
    <>
      <Swiper
        modules={[Navigation, Mousewheel, Autoplay]}
        spaceBetween={10}
        loop={true}
        navigation={true}
        mousewheel={true}
        onSwiper={setSwiperInstance}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="works-item">
              <img
                className="works-img"
                src={img}
                alt={`eyelash extensions ${index + 1}`}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({
            src: img,
          }))}
          plugins={[Zoom]}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullUp: true,
            closeOnPullDown: true,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      )}
    </>
  );
}

export default MyWorksItem;
