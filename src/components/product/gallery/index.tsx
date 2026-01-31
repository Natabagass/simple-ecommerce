import { Dispatch, SetStateAction, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductResponse } from "../../../types/response/product";

const ProductGallery = ({
    data,
    activeIndex,
    setActiveIndex
}: {
    data: ProductResponse,
    activeIndex: number,
    setActiveIndex: Dispatch<SetStateAction<number>>
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="flex flex-col gap-4">
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                className="w-full aspect-square rounded-xl overflow-hidden"
            >
                {data.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={item.images[0].url}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={12}
                watchSlidesProgress
                className="w-full"
            >
                {data.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={item.images[0].url}
                            alt=""
                            className="aspect-square object-cover rounded-lg cursor-pointer border hover:border-black"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

export default ProductGallery;