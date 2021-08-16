import React from "react";
import PropTypes from "prop-types";

import Tooltip from "./Tooltip";
import "./Character.css";

const Character = ({ character }) => (
  <div className="character">
    <img src={character.image} alt={character.name} />
    <Tooltip item={character} className="character__tooltip" />
  </div>
);

Character.propTypes = {
  character: PropTypes.object,
};

Character.defaultProps = {
  character: {},
};

export default Character;
