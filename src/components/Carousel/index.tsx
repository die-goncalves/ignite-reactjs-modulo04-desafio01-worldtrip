import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import Slide from './Slide'

SwiperCore.use([Navigation, Pagination])

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Slide
          link="/europa"
          src="https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          alt="colosseum-rome-italy"
          continent="Europa"
          particularity="O continente mais antigo"
          position="0% 5%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          link="/africa"
          src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="south-africa"
          continent="África"
          particularity="O continente considerado o berço da humanidade"
          position="0% 100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          link="/asia"
          src="https://images.unsplash.com/photo-1551829714-729df766a145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1429&q=80"
          alt="yellow-mountains"
          continent="Ásia"
          particularity="O continente considerado o berço das civilizações"
          position="0% 100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          link="/america-do-norte"
          src="https://images.unsplash.com/photo-1594011869133-e2c50c1308ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="whitney-lake-colorado-usa"
          continent="América do norte"
          particularity="O continente com a maior ilha do mundo"
          position="0% 30%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          link="/america-do-sul"
          src="https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
          alt="machu-picchu"
          continent="América do sul"
          particularity="O continente com uma das maiores bacias hidrográficas do mundo"
          position="0% 40%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          link="/oceania"
          src="https://images.unsplash.com/photo-1545605114-7b82dad7b990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
          alt="chuuk-lagoon-micronesia"
          continent="Oceania"
          particularity="O continente com a maior concentração de ilhas"
          position="0% 100%"
        />
      </SwiperSlide>
    </Swiper>
  )
}