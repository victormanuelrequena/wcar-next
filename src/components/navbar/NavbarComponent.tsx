import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Custom CSS file for Navbar
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import CardFavoriteComponent from "./components/cardFavorite/CardFavoriteComponent";
// import di from "../../../../di/DependencyInjection";
// import SignOutUseCase, { SignOutUseCaseName } from "../../../../domain/use_cases/auth/SignOutUseCase";
import { routes } from "@/utils/routes";
import { useRouter } from "next/router";
import Link from "next/link";
import AccountCircleIcon from "../assets/AccountCircleIcon";
import HeartOutlined from "../assets/HeartIconOutlined";
import TypeVehicleContext from "@/context/typeVehicle/TypeVehicleContext";
import TypeVehicleContextType from "@/context/typeVehicle/TypeVehicleContextType";
import UserContext from "@/context/user/UserContext";
import UserContextType from "@/context/user/UserContextType";

const NavbarComponent = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const { typeVehicles } = useContext(
    TypeVehicleContext
  ) as TypeVehicleContextType;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const _handleAccountButton = async () => {
    if (user == null) {
      router.push(routes.signIn.relativePath);
    } else {
      // await di.get<SignOutUseCase>(SignOutUseCaseName).call();
      router.push(routes.home.relativePath);
    }
  };

  return (
    <Navbar className="bg-transparent px-3 position-md-fixed w-100" expand="lg">
      <Link className="navbar-brand me-5" href={routes.home.relativePath}>
        <img
          src="/assets/logos/horizontal.svg"
          title="wcar"
          alt="wcar"
          height="50"
        />{" "}
        {/* Add the logo image */}
      </Link>

      <Collapse navbar id="navbarNav" isOpen={isOpen}>
        <Nav className="ml-auto d-md-flex align-items-center" navbar>
          <NavItem className="mx-3">
            <Link className="nav-link" href={routes.aboutUs.relativePath}>
              Sobre Nosotros
            </Link>
          </NavItem>
          <NavItem className="mx-3">
            <div className="dropdown">
              <div className="dropdown-title">
                <Link href={routes.buyOrSell.relativePath} className="nav-link">
                  Compra o Vende
                  <span className="text_reduced ms-1" style={{ fontSize: 10 }}>
                    &#9660;
                  </span>{" "}
                </Link>
              </div>
              <div className="dropdown_content">
                <div className="dropdown">
                  <div className="dropdown-title">
                    <Link
                      href={routes.buyYourCar.relativePath}
                      className="nav-link"
                    >
                      Compra tu carro
                      <span
                        className="text_reduced ms-1"
                        style={{ fontSize: 10 }}
                      >
                        &#9654;
                      </span>{" "}
                    </Link>
                  </div>
                  <div className="dropdown_content right">
                    {typeVehicles.map((typeVehicle, index) => (
                      <Link
                        key={index}
                        href={
                          parseInt(typeVehicle.id) === 8
                            ? "/compra-tu-carro/camionetas-usadas"
                            : routes.buyYourCar.relativePath +
                              "/" +
                              typeVehicle.name
                        }
                        className="dropdown-item"
                      >
                        <img
                          src={typeVehicle.photo}
                          alt={typeVehicle.name}
                          title={typeVehicle.name}
                          className="me-2"
                          width={24}
                        />
                        {typeVehicle.name}{" "}
                        <span className="text_gray">
                          ({typeVehicle.count ?? 0})
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href={routes.sellYourCar.relativePath}
                  className="nav-link"
                >
                  Vende tu carro
                </Link>
              </div>
            </div>
          </NavItem>
          <NavItem className="mx-3">
            <div className="dropdown">
              <div className="dropdown-title">
                <div className="nav-link">
                  Servicios{" "}
                  <span className="text_reduced ms-1" style={{ fontSize: 10 }}>
                    &#9660;
                  </span>{" "}
                </div>
              </div>
              <div className="dropdown_content">
                <Link
                  href={routes.services.relativePath}
                  className="dropdown-item"
                >
                  Financiación
                </Link>
                <Link
                  href={routes.insurance.relativePath}
                  className="dropdown-item"
                >
                  Seguros
                </Link>
                <Link
                  href={routes.procedures.relativePath}
                  className="dropdown-item"
                >
                  Trámites
                </Link>
              </div>
            </div>
          </NavItem>
          <NavItem className="mx-3">
            <Link className="nav-link" href={routes.blog.relativePath}>
              Blog
            </Link>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink href={routes.contact.relativePath}>Contacto</NavLink>
          </NavItem>
        </Nav>
      </Collapse>

      <div className="d-flex navbar_icons">
        <div className="dropdown d-flex justify-content-center align-items-center">
          <div className="">
            <HeartOutlined size={33} />
          </div>
          <div className="dropdown_content" style={{ left: "-180px" }}>
            <CardFavoriteComponent />
          </div>
        </div>
        <div
          className="btn d-flex align-items-center btn-account"
          onClick={_handleAccountButton}
        >
          <AccountCircleIcon size={33} />
          <div className="d-none d-xl-block" style={{ marginLeft: "20px" }}>
            {user?.name ?? "Cuenta"}
          </div>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
