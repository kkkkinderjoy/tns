import React, { useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//swiper 공식홈페이지 get started 참조하기
import styled from 'styled-components'
//wowjs를 실행하기 위해서 아래 2개 import 해줘야함 , yarn add wowjs를 해줘야함(터미널에)
import WOW from "wowjs";
import "animate.css";

const TxtData = [
    {
       title:"제목1",
       desc:"부제목",
       desc2:"하고싶은말"
    },   
    {
       title:"제목2",
       desc:"부제목",
       desc2:"하고싶은말"
    },   
    {
       title:"제목3",
       desc:"부제목",
       desc2:"하고싶은말"
    } 
    
]




const StyledSlide = styled(SwiperSlide)` //플러그인의 css는 컴포넌트를 만들어서 적용해줘야함!!
    position: relative;
    img{width: 100%; height:auto;}
`
const DescContent = styled.div`
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    h3{ 
        font-size: 40px;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 30px;
        }
        @media screen and (max-width: 1280px){
            font-size: 48px;
        }
    }
    p{
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        @media screen and (max-width: 768px){
            font-size: 14px;
        }
        @media screen and (max-width: 1280px){
            font-size: 20px;
        }
    }

`
function Banner() {
   useEffect(()=>{
        new WOW.WOW({ //공식홈페이지와 코드가 다른이유는 custom 하기 위해서
            boxClass :"wow", // default
            animateClass:"animate_animated",  //https://animate.style/ 사이트에 있는거
            live:false, 
            mobile:true
        }).init();
   },[])
  return (
   <>
   
    <Swiper 
    autoplay={{
        delay:2000,
        disableOnInteraction: false
    }}
    slidesPerView={1}
    navigation={{clickable:true}}
    pagination={{clickable:true}}
    modules={[Autoplay, Navigation , Pagination]}
    // onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={()=>{ //wow는 스크롤에 반응함. 그리고 슬라이드 넘길때마다 animation 효과가 적용되야하므로 onSlideChange를 사용해야함
        new WOW.WOW({
            live:false
        }).init();
    }}
    >
        { 
            TxtData.map((e,i) =>{ //e를 안쓰면 언더바로 표시
                return(
                    <StyledSlide key={i}>
                        <img src={`./images/img1.webp`} alt='slide' />
                        {/* 만약에 이미지 파일의 확장자가 png라면 조건문을 적어줘야함.
                            ${i===2 ? "png" : "jpg"} 
                        */}
                        <DescContent>
                            <h3 className="wow animate__fadeInRight" data-wow-duration="1s">{e.title}</h3>
                            <p className="wow animate__fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">{e.desc}</p>
                            <p className="wow animate__fadeInRight" data-wow-duration="1s" data-wow-delay="0.6s">{e.desc2}</p>
                        </DescContent>
                    </StyledSlide>
                )
            })
        }
        
    </Swiper>
   </>
  )
}

export default Banner