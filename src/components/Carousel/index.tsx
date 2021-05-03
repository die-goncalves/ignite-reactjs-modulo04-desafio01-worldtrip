import { useEffect, useState } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import Slide from './Slide'
import { api } from '../../services/api'

SwiperCore.use([Navigation, Pagination])

type InfoContinent = {
  slug: string;
  continent: string,
  particularity: string;
  postcard: string;
  postcardInfo: string;
  postcardPosition: string;
}

export default function Carousel() {
  const [allContinents, setAllContinents] = useState<InfoContinent[]>([]);

  useEffect(() => {
    async function getAllContinents() {
      await api
        .get('/continents')
        .then((response) => setAllContinents(response.data));
    }

    getAllContinents();
  }, [])

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      initialSlide={1}
    >
      {allContinents &&
        allContinents.map((el) => {
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
          )
        })}
    </Swiper>
  )
}