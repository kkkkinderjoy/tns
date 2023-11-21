import { faBuilding, faHistory, faMedal, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    width: 100%;
    padding: 48px 0;   
`

const ContainerWrap =styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 2%;    
`

const Content = styled.div`
flex-basis: 50%;
display: none;

@media screen and (min-width: 1024px){
    display: block;
}
img{width: 100%;}
`
const ContentDesc = styled.div`
flex-basis: 100%;

@media screen and (min-width: 1024px){
    flex-basis: 50%;
}
display: flex;
flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 50%;
    padding: 3rem;
    box-sizing: border-box;
    position: relative;
    @media screen and (max-width:640px){
        padding: 1.5rem;
    }
    &:nth-child(3n+1){ // 한줄로 줄여서 쓰기
    background-color: #eee;
    }

    &:hover svg{
        transform: rotateY(360deg);
    }
    h3{
        font-size: 2rem;
        font-weight: bold;
        @media screen and (max-width:640px){
        font-size: 1.5rem;
        }
    }
    p{
        margin: 1rem 0; //1rem =16px , 1em =12px
    }
    svg{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        font-size: 2.5rem;
        color: rgba(0,0,0,0.3);
        transition: 0.7s;
        @media screen and (max-width:640px){
        font-size: 2rem;
        }
        
    }
`
const company =[
    {
        "title": "인사말",
        "desc": "인사말....",
        "icon":faBuilding
    },
    {
        "title": "연혁",
        "desc": "연혁 (2010~)",
        "icon":faHistory
    },
    {
        "title": "비전",
        "desc": "주식회사 티앤에스는 눈 앞의 이익보다  상호간의 신뢰에 더 가치를 두고 ​고객사와 함께 성장하는 기업이 되겠습니다.",
        "icon":faPaperPlane
    },
    {
        "title": "인증서",
        "desc": "미쓰비시 서보 관련 인증서 다운로드",
        "icon":faMedal
    }

]

function Company() {
  return (
    <>
        <Container>
            <ContainerWrap>
                <Content>
                    <img src="https://via.placeholder.com/650x620" alt="전경" />
                </Content>
                <ContentDesc>
                        {
                            company.map((e,i)=>{
                                return(
                                    <Card key={i}>
                                        <h3>{e.title}</h3>
                                        <p>{e.desc}</p>
                                        <FontAwesomeIcon icon={e.icon} />
                                    </Card>
                                )
                            })
                        }
                </ContentDesc>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default Company