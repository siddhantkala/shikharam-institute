import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import './YoutubeVideos.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { HiOutlineTrendingUp } from "react-icons/hi";

const YoutubeVideos = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Our Youtube Channel</span>
                <span className='primaryText'>Popular Videos</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                {/* <img src={card.image} alt='home'/> */}
                                <iframe
        //   className="rounded-2xl object-center"
          width="400"
          height="170"
          src={card.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
                                <span className="secondaryText r-price">
                                    <span style={{color: 'orange'}}><HiOutlineTrendingUp /></span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default YoutubeVideos

const SliderButtons=()=>{
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-buttons'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};