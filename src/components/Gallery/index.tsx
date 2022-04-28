import React, { useState } from "react";

import {
    Gallery as GalleryContent,
    GalleryContainer,
    GalleryCorrousel,
    GalleryThumbs,
} from "./styles";
import { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useProduct } from "../../provider/AppContext";

const Gallery = () => {
    const [thumbsCarrossel, setThumbsCarrossel] = useState<any>(null);

    const { product, lang } = useProduct();

    return (
        <GalleryContent>
            <GalleryContainer>
                <GalleryCorrousel>
                    <Swiper
                        modules={[Thumbs]}
                        thumbs={{ swiper: thumbsCarrossel }}
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {product.gallery &&
                            product.gallery.map((item: any, index:number) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.url}
                                        alt={product.name[lang.current]}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </GalleryCorrousel>
                <GalleryThumbs>
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsCarrossel}
                        watchSlidesProgress
                        slidesPerView={4}
                    >
                        {product.gallery &&
                            product.gallery.map((item: any, index:number) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.url}
                                        alt={product.name[lang.current]}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </GalleryThumbs>
            </GalleryContainer>
        </GalleryContent>
    );
};

export default Gallery;
