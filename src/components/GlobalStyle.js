import React from 'react'
//전역으로 사용하는 스타일 컴포넌트임. 스타일컴포넌트에서 제공하는 거임

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
    *{margin: 0;padding: 0; font-family: 'Pretendard-Regular';}
    ul{list-style: none;}
    a{text-decoration:none; color: #000;}
`
export default GlobalStyle