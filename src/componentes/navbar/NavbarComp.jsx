import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { UserCart } from "../userCart/UserCart";
import { showElement } from "../../actions/ui";

export const NavbarComp = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showElement());
  };

  return (
    <>
      <div className="mb-md-5">
        <Navbar
          expand="lg"
          bg="transparent"
          fixed="top"
          className="navbar-color p-2"
        >
          <Container>
            <div>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="border-0 shadow-0"
              />
            </div>

            {/* Para colocar el texto en el centro agregar text-center */}
            <Navbar.Brand className="navbar-brand ">Urban INK</Navbar.Brand>
            <div className="d-flex justify-content-between">
              <div className="d-sm-block d-lg-none mx-2">
                <button className="btn border shadow-none">
                  <Link to="/auth/login">
                    <AiOutlineUser />
                  </Link>
                </button>
              </div>
              <div className="d-sm-block d-lg-none">
                <UserCart />
                <button
                  className="btn border shadow-none d-flex align-items-center"
                  onClick={handleClick}
                >
                  {cart.length}
                  <BsFillBagFill />
                </button>
              </div>
            </div>
            <Navbar.Collapse className="" id="basic-navbar-nav">
              <Nav className="p-2">
                <Link to="/" className="nav-link text-center">
                  Home
                </Link>
                <Link to="/men" className="nav-link text-center">
                  Men's
                </Link>
                <Link to="/women" className="nav-link text-center">
                  Women's
                </Link>
                <Link to="/footwear" className="nav-link text-center">
                  Footwear
                </Link>
                <Link to="/accesories" className="nav-link text-center">
                  Accesories
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <div className="d-none d-lg-flex justify-content-center">
            <UserCart />
            <button
              className="d-flex align-items-center btn border shadow-none"
              onClick={handleClick}
            >
              <div className="mx-1">{cart.length}</div>
              <BsFillBagFill />
            </button>
          </div>
          <div className="d-none d-lg-flex mx-2 justify-content-center">
            <button className="btn border shadow-none">
              <Link to="/auth/login" className="">
                <AiOutlineUser />
              </Link>
            </button>
          </div>
        </Navbar>
      </div>
    </>
  );
};

//////////////////////////// NAVBAR CON EL LOGO EN LA IZQUIERDA ////////////////////////////////////

// <div className="w-100 d-flex align-items-center">
// <div>
//   <Navbar.Toggle
//     aria-controls="basic-navbar-nav"
//     className="border-0 shadow-0"
//   />
// </div>

// <div className="w-100 d-flex align-items-center">
// {/* Para colocar el texto en el centro agregar text-center */}
//   <div className=" w-100 mx-2">
//     <Navbar.Brand className="navbar-brand">
//       Urban Ink
//     </Navbar.Brand>
//   </div>
//   <div className="d-flex justify-content-between">
//     <div className="d-sm-block d-lg-none">
//       <button className="btn border shadow-none">
//         <AiOutlineUser />
//       </button>
//     </div>
//     <div className="d-sm-block d-lg-none">
//       <button className="btn border shadow-none">
//         <BsFillBagFill />
//       </button>
//     </div>
//   </div>
// </div>
// </div>
