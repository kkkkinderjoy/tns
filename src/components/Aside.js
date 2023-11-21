import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { toggleTheme } from '../store'



const ASide = styled.div`
position: fixed;
right: 20px;
bottom: 20px;
border: 1px solid #ddd;
background-color: ${({$isdark}) =>($isdark === "light" ? "#fff" : "#333")};
border-radius: 5px;
cursor: pointer;
width: 50px; height: 50px;
line-height: 50px; text-align: center;
  svg{
    color: ${({$isdark}) =>($isdark === "light" ? "#333" : "#fff")};
  }
`


function Aside(){

  const theme = useSelector(state => state.dark);
  const dispatch = useDispatch();
  
  return (
    <ASide $isdark={theme} onClick={()=>{dispatch(toggleTheme())}}> 
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="xl" />
        {/* islight={theme} 오류떠서 삭제함 다시 확인해보기 */}
        {/* App.js에서 ThemeSelect 함수를 만들어줬기 때문에 함수를 바로 실행하면 됨 : 중괄호만 사용 */}
    </ASide>
  )
}

export default Aside