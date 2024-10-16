import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import {EffectCreative} from 'swiper'
import Hero from './Hero';
import HeroTwo from './HeroTwo';



const HeroContainer = () => {
  return (
    <>
    <section className=''>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
            prev: {
                shadow: true,
                translate: ["-120%", 0, -500]
            },
            next: {
                shadow: true,
                translate: ["-120%", 0, -500]
            }
        }}
        modules={[EffectCreative]}
        className='mySwiper5'
        loop={true}
        autoplay={
            {
                delay: 250,
                disableOnInteraction: false,
            }
        }

        >
            <SwiperSlide>
               <Hero/>
            </SwiperSlide>

            <SwiperSlide>
               <HeroTwo/>
            </SwiperSlide>
        </Swiper>
    </section>
    </>
  )
}

export default HeroContainer
