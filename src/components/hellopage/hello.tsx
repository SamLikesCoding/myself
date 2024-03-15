import { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer, Slide } from 'react-toastify';
import Assets from "../assetsLoader";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

export default function HelloPage() {
  const data = Assets.profileData;
  const roles = data.intro.roles;
  const [currRole, setRole] = useState(roles[0]);

  const changeRole = useCallback(() => {
    const idx = Math.floor(Math.random() * roles.length);
    setRole(roles[idx]);
  }, []);

  useEffect(() => {
    toast("Click 'start' to explore more");
    const intvID = setInterval(changeRole, 500);
    return () => clearInterval(intvID);
  }, [changeRole]);

  return (
    <>
     <ToastContainer 
        position="top-center"
        hideProgressBar={true}
        theme="dark"
        closeOnClick
        limit={1}
        transition={Slide}
      />
      <div className="intro-container">
        <img src={Assets.introImage} alt="me"/>
        <div
          id="info-card"
          className="info glass"
          style={{
            top:'45vh',
            right:'20vw'
          }}
        >
          <div style={{
            fontFamily: Assets.mainFont, 
            fontSize:18, 
          }}>
            Hello, my name is
          </div>
          
          <div style={{
            fontFamily: Assets.mainFont, 
            fontWeight:'bold', 
            fontSize:40, 
            letterSpacing:-2
          }}>
            Sarath Peter
          </div>
          
          <div style={{
            fontFamily: Assets.mainFont, 
            fontSize:14,
            paddingTop: '1ch',
          }}>
            {currRole}
          </div>

        </div>
      </div>
    </>
  );
}
