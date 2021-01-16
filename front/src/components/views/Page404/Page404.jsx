import React from "react";
import { Link } from "react-router-dom";
import style from "./Page404.module.css";

function Page404() {
  return (
    <div className={style.Page404}>
      <p className={style.errorText}>
        Même si ce site est super, il n&#39;y a rien par ici! Vous pouvez
        cliquer sur le bouton pour revenir à l&#39;accueil.
      </p>
      <p className={style.error}>404</p>
      <Link to="/">
        <button type="button" className={style.goHome}>
          Retour à l&#39;accueil
        </button>
      </Link>
    </div>
  );
}

export default Page404;
