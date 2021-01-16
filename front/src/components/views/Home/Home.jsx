/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Home.module.css";
import Power from "../../commons/Power/Power";

function Home(props) {
  const [url, setUrl] = useState("");
  const { categorie } = props.match.params;
  useEffect(() => {
    if (categorie) {
      setUrl(categorie);
    }
  }, [categorie]);

  const changeUrl = (path) => {
    setUrl(path);
    window.history.replaceState(null, path, `/produits/${path}`);
  };

  return (
    <div className={style.Home}>
      <div className={style.img}>
        <div className={style.containerhome}>
          <h1 className={style.title}>Magic Pills</h1>
          <p className={style.presentation}>
            Bienvenue sur Magic Pills, un site super où vous pouvez acheter des
            super-pouvoirs pour devenir un super héros et c&#39;est super !!!
          </p>
        </div>
      </div>
      <div className={style.categorie}>
        <input
          className={style.button}
          type="button"
          id="toutes"
          value="Toutes catégories"
          onClick={() => changeUrl("")}
        />
        <input
          className={style.button}
          type="button"
          id="classique"
          value=" Les classiques"
          onClick={(e) => changeUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="inutile"
          value="Les inutiles"
          onClick={(e) => changeUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="environnementale"
          value="Les environnementaux"
          onClick={(e) => changeUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="flippant"
          value="Les flippants"
          onClick={(e) => changeUrl(e.target.id)}
        />

        <input
          className={style.button}
          type="button"
          id="corporel"
          value="Les corporels"
          onClick={(e) => changeUrl(e.target.id)}
        />
      </div>
      <Power url={url} />
    </div>
  );
}

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categorie: PropTypes.string,
    }),
  }).isRequired,
};

export default Home;
