import React from 'react'
import styled from 'styled-components'
import AnimateNumber from 'animated-number-react';
import { useState } from 'react';
import { useEffect } from 'react';
//"animated-number-react": "^0.1.2"가 package.json에 있어야 동작함

const Container = styled.div`
    width: 100%; 
    padding-bottom: 48px;
    text-align: center;
    color: #fff;
    background: url("images/print.webp") fixed center center; //스타벅스에도 배경이 고정되는 UI 있음 참조하기
    
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
    margin-bottom: 1.5rem;
    
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase; //대문자: uppercase , 소문자: lowercase 
`
const Desc = styled.p`
    font-size: 0.875rem;
    color: #eee;

`
const ContentGrid = styled.div`
    flex-basis: 100%;
    padding: 48px 0;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            flex-basis: 100%;
            text-align: center;
            @media screen and (min-width:640px){
                flex-basis: 50%;
            }
            @media screen and (min-width:1024px){
                flex-basis: 25%;
            }
            p:first-child{font-size:1.25rem}
            p:last-child{font-size:1rem; padding-bottom: 2rem;}
            span{font-size: 60px; padding-top: 20px; display: block;}
        }
    }

`






function Different() {
    const[isView , setIsView] = useState(false);
    useEffect(()=>{

        const scrollEvent = () =>{
            const rect = document.querySelector("#content").getBoundingClientRect();
            console.log(rect);
            console.log(window.innerHeight);
            if(rect.top-200 <= window.innerHeight && rect.bottom >=0){ //innerHeight 사용할때 반응형에 적용되기 때문에 scrollY보다 innerHeight를 사용하는걸 권장함
                setIsView(true);
            }
            

        }
        window.addEventListener('scroll',scrollEvent);
        scrollEvent()
        return()=> {
            window.removeEventListener("scroll",scrollEvent);
        }

    },[])
    const data =[
        {
            "title":"설립일",
            "number":"2010",
            "time":"3000",
            "desc":"Date of Foundation"
        },
        {
            "title":"직원수",
            "number":"10",
            "time":"1500",
            "desc":"Number of Employees"
        },
        {
            "title":"계약체결",
            "number":"1234",
            "time":"3500",
            "desc":"Contract Conclusion"
        },
        {
            "title":"견적문의",
            "number":"1234",
            "time":"5500",
            "desc":"Request for a Quote"
        }

    ]
  return (
    <>
    <Container>
        <ContainerWrap>
            <ContentTitle>
                <Title>Different</Title>
                <Desc>제목에 대한 부가 설명 ...</Desc>
            </ContentTitle>
            <ContentGrid>
                <ul id="content">
                    {
                        data.map((e,i)=>{
                            return(
                        <li key={i}>
                        <p>{e.title}</p>
                        {
                           isView &&
                           <AnimateNumber  //mount 되었을 때 숫자가 올라가는 UI 만들기
                           value={e.number}
                           duration={e.time}
                           formatValue={(value)=>`${value.toFixed(0)}`
                           }/> 
                        }
                        <p>{e.desc}</p>
                        </li>
                        )
                        })
                    }
                    
                </ul>
            </ContentGrid>
        </ContainerWrap>
    </Container>
    
    </>
  )
}

export default Different