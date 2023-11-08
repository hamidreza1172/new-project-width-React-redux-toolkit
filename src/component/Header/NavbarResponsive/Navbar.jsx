import "../../cssforcomponent/styleForall.css";
import logo from "../../../assets/header/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Navbar() {
  const Navigat = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="d-flex d-lg-none w-100">
        <nav className="navbar navbar-expand-lg bg-body-info w-100">
          <div className="container">
            <div className=" d-flex justify-content-between w-100">
              <div>
                {" "}
                <img
                  src={logo}
                  alt="logo"
                  className="navbar-brand "
                  onClick={() => {
                    Navigat("/Home");
                  }}
                />
              </div>
              <div className=" ">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse pt-4"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item py-3">
                      <Link to={'/Login'} className="text-info text-decoration-none fw-bold h5 border-none">
                        Login
                      </Link>
                    </li>
                    <li class="nav-item py-3">
                      <Link className="text-info text-decoration-none fw-bold h5">
                        Signup
                      </Link>
                    </li>
                    <li>
                      <Link className="text-info text-decoration-none fw-bold h5 " to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item py-3 ">
                      <Link className=" position-relative">
                      <PiShoppingCartSimpleFill
                        className="text-info"
                        role="button"
                        size={30}
                        onClick={() => {
                          Navigat("/Cart");
                        }}/>
                      {cart.cartItems.length !== 0 && (
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cart.cartItems?.length}
                        </span>
                      )}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-50 d-flex justify-content-start"></div>

      <div className="row w-100 d-none d-lg-flex  align-items-center start py-4">
        <nav>
          <ul className="d-flex  justify-content-lg-end list-unstyled ">
            <li className=" mx-3">
              <Link to={'./Login'} className="text-info text-decoration-none fw-bold h5 border-none">
                Login
              </Link>
              <span className="h4 mx-1">/</span>
              <Link className="text-info text-decoration-none fw-bold h5">
                Signup
              </Link>
            </li>
            <li className=" mx-3 position-relative">
              <PiShoppingCartSimpleFill
                className="text-info "
                role="button"
                size={30}
                onClick={() => {
                  Navigat("/Cart");
                }}
              />
              {cart.cartItems.length !== 0 && (
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.cartItems?.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="container d-flex flex-row justify-content-center justify-content-lg-between align-items-center ">
        <a href="/" className="d-none d-lg-flex pt-3 pt-lg-0">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              Navigat("/Home");
            }}
          />
        </a>
        <nav className="d-none d-lg-flex nav1">
          <Link
            onClick={() => {
              Navigat("/Home");
            }}
            className="text-decoration-none text-dark mx-5 fw-bolder"
          >
            HOME
          </Link>
          <Link
            to={"/Jewelery"}
            className="text-decoration-none text-dark mx-5 fw-bolder"
          >
            jewelery
          </Link>

          <Link
            to={"/Contact"}
            className="text-decoration-none text-dark mx-5 fw-bolder"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
}
