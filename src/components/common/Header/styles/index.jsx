import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 3;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.22), 0px 0px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 56px;
  font-size: 20px;
  text-align: center;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em;
`;

export const LogoKlivo = styled.div`
  flex-direction: end;
  background-size: contain;
  background-image: url(${(props) => props.img});
  width: 40px;
  height: 40px;
`;