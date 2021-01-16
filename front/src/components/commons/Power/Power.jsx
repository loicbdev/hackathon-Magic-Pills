import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import style from "./Power.module.css";
import CardPower from "./CardPower";

const Power = ({ url }) => {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/${url}`)
      .then((res) => res.data)
      .then((data) => {
        setPowers(data);
      });
  }, [url]);
  return (
    <div className={style.Power}>
      {powers.map((power) => (
        <CardPower power={power} key={power.title} />
      ))}
    </div>
  );
};

export default Power;

Power.propTypes = {
  url: PropTypes.string.isRequired,
};
