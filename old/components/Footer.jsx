import React, { Fragment, Component } from "react";
import { Navbar } from './style';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return(
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Book Library</Navbar.Brand>
      </Navbar>
    </Fragment>
  );
}




// export default class Footer extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand>Book Library</Navbar.Brand>
//         </Navbar>
//       </Fragment>
//     );
//   }
// }
