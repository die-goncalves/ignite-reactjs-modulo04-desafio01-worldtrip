import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import { api } from "../../services/api";
import { Skeleton } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination]);

type InfoContinent = {
  slug: string;
  continent: string;
  particularity: string;
  postcard: string;
  postcardInfo: string;
  postcardPosition: string;
};

export default function Carousel() {
  const [allContinents, setAllContinents] = useState<InfoContinent[]>([]);

  useEffect(() => {
    async function getAllContinents() {
      await api
        .get("/continents")
        .then((response) => setAllContinents(response.data));
    }

    getAllContinents();
  }, []);

  return (
    <Skeleton
      isLoaded={allContinents.length !== 0}
      width="100%"
      height="28.125rem"
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
        {allContinents.map((el) => {
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
