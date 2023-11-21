import React, { useEffect, useState } from 'react'
import Banner from '../components/home/Banner'
import Company from '../components/home/Company'
import Content from '../components/home/Content'
import Different from '../components/home/Different'
import Management from '../components/home/Management'


function Main() {

  return (
    <>
     <Banner />
     <Company />
     <Content />
     <Different />
     <Management />
    </>
  )
}

export default Main