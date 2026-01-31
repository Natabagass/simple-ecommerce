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
        <div className="flex flex-col gap-4 md:col-span-2">
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                className="w-full aspect-[1/2] max-h-[400px] md:max-h-[600px] rounded-xl overflow-hidden"
            >
                {data.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={item.images[0].url}
                            alt={`Product ${item.name} - E-Commerce`}
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
                className="w-full md:w-[70%]"
            >
                {data.data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={item.images[0].url}
                            alt={`Product ${item.name} - E-Commerce`}
                            className="aspect-square object-cover rounded-lg cursor-pointer border hover:scale-110 hover:shadow-2xl transition-all duration-500"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

export default ProductGallery;