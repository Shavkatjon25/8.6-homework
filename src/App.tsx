import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Good from "./Saxifa1/Good"
import Home from "./Home"
import UserActive from "./UserActive"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Omborchi from "./Omborchi"
import styled from "styled-components"


const router=createBrowserRouter([
  {
    path:'/',
    element:<Good/>
  }
])

const Ota=styled.div`
  display:flex;
  margin:0;
  padding:0;
`




function App() {
const dispach=useDispatch();

  async function Token(){
    const date=new Date;
    const dat1=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+'/'+date.getHours();
    if (!localStorage.getItem('tk') || !localStorage.getItem('vq') || localStorage.getItem('vq')!=dat1) {
      const dt=await fetch('https://accounts.spotify.com/api/token', 
  
      {
        method:'POST',
        headers:{
          "Content-Type":'application/x-www-form-urlencoded',
          "Authorization":`Basic ${btoa('5600412904044fa1bfb5e3f541c70a25'+":"+'2e50a238ea094468b9be7c618f34c769')}`
        },
        body:'grant_type=client_credentials'
      }
      )
      const dtj= await  dt.json();
      dispach(Omborchi.actions.tk(dtj.access_token));
      localStorage.setItem('tk', dtj.access_token);
      const date=new Date;
      const dat=date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+'/'+date.getHours();
      localStorage.setItem('vq', dat);
      console.log(dtj);
      
    }
  
    
  }

  useEffect(()=>{
    Token();
    console.log(localStorage.getItem('tk'));
    
  }, [])


  return (
    <Ota>
      <Home/>
      <RouterProvider router={router}></RouterProvider>
      <UserActive/>
    </Ota>
  )
}

export default App