import React from "react";
import StarRatingComponentProps from "./StarRatingComponentProps";
import Icons from "../assets/Icons";
import styles from "./StarRatingComponentStyles.module.scss";

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({
  rating,
}) => {
  return (
    <div className={styles.star_rating_component}>
      {[...Array(5)].map((_, index) => (
        <div className="d-flex align-items-center me-1" key={index}>
          {index + 0.5 > rating ? (
            <Icons.StarEmpty />
          ) : index + 1 <= rating ? (
            <Icons.StarFull />
          ) : (
            <Icons.StarHalf />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRatingComponent;
