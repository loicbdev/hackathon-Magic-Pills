import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./CardPower.module.css";

function CardPower({ power }) {
  const { title, prix, picture, contenu_produit, slug } = power;
  return (
    <div className={style.CardPower}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.price}>{prix} euros</span>
        <div className={style.containerImg}>
          <img className={style.img} src={picture} alt={title} />
          <p className={style.description}>{contenu_produit}</p>
        </div>
        <Link className={style.link} to={`/produit/${slug}`}>
          <button className={style.button} type="submit">
            Acheter
          </button>
        </Link>
      </div>
    </div>
  );
}

CardPower.propTypes = {
  power: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    idsuper_pouvoir: PropTypes.number.isRequired,
    contenu_produit: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPower;
