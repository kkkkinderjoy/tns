import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%; 
    padding-bottom: 48px;

`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;
`
const ContentTitle = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 1.25rem;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 2.5%;
        height: 2px;
        background-color: #111;
        left: 39%;
        top: 0;
        transform: translateX(-50%,-50%);
    }
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
const Desc = styled.p`
    font-size: 0.875rem;
    color: #a0a0a0;

`
const ContentGrid = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
const ContentItem = styled.div`
    flex-basis: 100%;
    margin-bottom: 0.75rem;
    position: relative;
    @media screen and (min-width:640px){
        flex-basis: 48.5%;
        margin-bottom: 1.25rem;
    }
    @media screen and (min-width:1024px){
        flex-basis: 23.5%; //px은 절대값이기때문에 항상 %로 입력해줘야함
        margin-bottom: 0;
    }
    img{
        width: 100%;
        height :auto ;
        object-fit: cover;
    }
    div{
        padding: 1rem 1.25rem;
        background-color: rgba(255,255,255,0.2);
        text-align: center;
        position: absolute;
        bottom: 0; //img안으로 쏙 들어감
        h3{
            font-weight: bold;
            margin-bottom: 0.5rem;

        }
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
            overflow: hidden;
        }

    }
`




function Content() {
    const data = [
        {
            "img" : "images/cate1.webp",
            "title": "서보 시스템",
            "desc": ""
        },
        {
            "img" : "images/cate2.webp",
            "title": "산업용 로봇",
            "desc": ""

        },
        {
            "img" : "images/cate3.webp",
            "title": "감속기",
            "desc": ""

        },
        {
            "img" : "images/cate4.webp",
            "title": "UVW 스테이지",
            "desc": ""

        }
    ]
  return (
    <>
        <Container>
            <ContainerWrap>
                <ContentTitle>
                    <Title>컨텐츠 제목구간</Title>
                    <Desc>해당 컨텐츠 설명 구간</Desc>
                </ContentTitle>
                <ContentGrid>
                    {       
                        data.map((e,i)=>{ //반복문을 이용해서 data 출력해보기
                            return(
                                <ContentItem key={i}>
                                    <img src={e.img} alt={e.title}/>
                                    <div>
                                        <h3>{e.title}</h3>
                                        <p>{e.desc}</p>
                                    </div>
                                </ContentItem>
                            )    
                        })
                    }   
                </ContentGrid>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default Content