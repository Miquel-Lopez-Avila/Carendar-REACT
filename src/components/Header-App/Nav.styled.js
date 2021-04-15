import styled, { createGlobalStyle } from 'styled-components';
import { Content } from '../Styles/Style/Style.styled';


export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

export const HeaderTop = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #8265A7;
  box-shadow: 13px 4px 12px -7px rgba(0,0,0,0.75);
  z-index: 3;
  overflow: hidden;
`;

export const HeaderLeft = styled.div`
  width: 50px;
  height: 100%;
  background-color: gray;
  box-shadow: 13px 4px 12px -7px rgba(0,0,0,0.75);
  position: absolute;
  top:0;
  z-index: 999;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #DAE0FE;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  max-height: 2.1rem;
  
`;
export const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  z-index: 5;
`;

export const IteamMenuWrapper = styled.div`
  width: 50px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${(({ background }) => background ? 'red' : '')};

  .icon {
    color: white;
    font-size: 20px;
  }
`;

export const WrapperNavTop = styled.div`
  max-width: 2000px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const Hamburger = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    background-color: orange;
`;

export const UserData = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const UserPicture = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    background-color: red;
`;

export const UserName = styled.div`
    font-weight: bold;
    font-size: 20px;
`;
