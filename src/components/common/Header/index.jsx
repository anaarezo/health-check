import React, { Fragment } from "react";
import { 
  Nav, 
  Navbar,
  LogoKlivo, 
} from './styles';

export const Header = () => {
  return (
    <Fragment>
      <Nav>
        <Navbar>
          <LogoKlivo img={'http://localhost:3000/favicon.png'} />
        </Navbar>
      </Nav> 
    </Fragment>
  );
};

export default Header;