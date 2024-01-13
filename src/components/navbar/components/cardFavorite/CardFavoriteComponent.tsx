import { FC, useContext } from "react";
import CardFavoriteComponentProps from "./CardFavoriteComponentProps";
import Link from "next/link";
import FavoriteCarsContext from "@/context/favoriteCars/FavoriteCarsContext";
import FavoriteCarsContextType from "@/context/favoriteCars/FavoriteCarsContextType";
import { routes } from "@/utils/routes";
import { getUrlCar } from "@/utils/constants";

const CardFavoriteComponent: FC<CardFavoriteComponentProps> = ({}) => {
  const { favoriteCars } = useContext(
    FavoriteCarsContext
  ) as FavoriteCarsContextType;

  if (!favoriteCars.length)
    return (
      <div className="card_favorite_component p-4">
        Agrega tus favoritos para verlos aquí{" "}
      </div>
    );
  return (
    <div className="card_favorite_component">
      {favoriteCars.map((favoriteCar, index) => (
        <Link
          href={`${routes.detailedCar.relativePath}/${getUrlCar(favoriteCar)}`}
          className="car_item d-flex"
          key={index}
        >
          <div className="car_image d-flex justify-content-center align-items-center">
            <img src={favoriteCar.photoUrl} alt="wcar" title="wcar" />
          </div>
          <div className="d-flex flex-column flex-grow-1 ms-3">
            <strong>{favoriteCar.name}</strong>
            <span>{favoriteCar.brand.name} </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardFavoriteComponent;
