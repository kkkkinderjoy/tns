import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import store  from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Online from "./pages/service/Online";
import Qna from "./pages/service/Qna";
import Gallery from "./pages/service/Gallery";
import Notice from "./pages/service/Notice";
import Notpage from "./pages/Notpage";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Modal from "./components/Modal";


function App() {
  
	// console.log(process.env)
  // const light ={
  //   colors:{
  //     Primary :"orange",  
  //     Secondary:"orangered",
  //     BgColor:"#e9f1f6",
  //     Color: "#000",
  //     ContentBg :"#fff"
  //   }
  // }

  // const dark ={
  //   colors:{
  //     Primary:"#272929",
  //     Secondary:"#e9e9e9",
  //     BgColor:"#333",
  //     Color: "#e9e9e9",
  //     ContentBg :"#272929"
  //   }
  // }
  // const [themeConfig, setThemeConfig] = useState("light");
  // const DarkMode = themeConfig === "light" ? light : dark ;
  //여기서 light,dark는 위에 있는 함수의 컬러들을 받는것임
  // const ThemeSelect = () =>{
  //   setThemeConfig(themeConfig === "light" ? "dark" : "light")
  // }
 
  return (
   <>
    <Provider store={store}>
    	<Inner />
    </Provider>
   </>
  );
}
function Inner(){

  const light ={
    colors:{
      Primary :"orange",  
      Secondary:"orangered",
      BgColor:"#e9f1f6",
      Color: "#000",
      ContentBg :"#fff"
    }
  }

  const dark ={
    colors:{
      Primary:"#272929",
      Secondary:"#e9e9e9",
      BgColor:"#333",
      Color: "#e9e9e9",
      ContentBg :"#272929"
    }
  }
  const theme = useSelector(state => state.dark);
  const DarkMode = theme === "light" ? light : dark ;
  const userState = useSelector(state => state.user);
  console.log(userState);

  const dispatch =useDispatch();
  const uid = sessionStorage.getItem("users");
  console.log(uid);
  //0919-1
  //async를 사용하면 try,catch문을 반드시 써줘야함 국룰
  //try는 실패할수도있다 ~ catch는 오류가 뜨면~
 


  
  const [isModal,setIsModal]=useState(true);
  const navigate = useNavigate();

    return(
    <ThemeProvider theme={DarkMode}>
      	<GlobalStyle/>
      	<Aside/> 
        <Nav userState={userState}/>
     	  <Routes>
       	     <Route path="/" element={<Main />}></Route>
       	     <Route path="/modal" element={<Modal />}></Route>
       	     <Route path="/service" element={<Service />}></Route>
       	      <Route path="notice" element={<Notice />}></Route>
       	      <Route path="online" element={<Online />}></Route>
       	      <Route path="qna" element={<Qna />}></Route>
       	      <Route path="gallery" element={<Gallery />}></Route>
       	      <Route path="/*" element={<Notpage />}></Route>
      	</Routes>
    	</ThemeProvider>
    )

}

export default App;
