import { Skeleton } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

SwiperCore.use([Navigation, Pagination]);

type InfoContinent = {
  slug: string;
  continent: string;
  particularity: string;
  postcard: string;
  postcardInfo: string;
  postcardPosition: string;
};
type CarouselProps = {
  continents: InfoContinent[];
}

export default function Carousel({ continents }: CarouselProps) {
  return (
    <Skeleton
      isLoaded={continents.length !== 0}
      width="100%"
      height={["15.625rem", "18.75rem", "21.875rem", "25rem", "28.125rem"]}
      speed={1}
      endColor="brand.skeleton-endColor"
      startColor="brand.skeleton-startColor"
    >
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        initialSlide={0}
      >
        {continents.map((el) => {
          return (
            <SwiperSlide key={el.slug}>
              <Slide
                link={el.slug}
                src={el.postcard}
                alt={el.postcardInfo}
                position={el.postcardPosition}
                continent={el.continent}
                particularity={el.particularity}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Skeleton>
  );
}
