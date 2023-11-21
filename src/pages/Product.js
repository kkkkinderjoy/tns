import React,{ memo } from 'react' 

const Product = memo(function(){ 
  

  console.log("프로덕트 실행")


  return (
    <>
     <p>프로덕트</p>
    </>
  )
})




  

export default Product