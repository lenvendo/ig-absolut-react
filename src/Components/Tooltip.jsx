import React from "react";
import PropTypes from "prop-types";

import "./Tooltip.css";

const Tooltip = ({ item, className }) => (
  <div className={"tooltip " + className}>
    <p className="tooltip__name">Name: {item.name}</p>
    <p className="tooltip__status">Status: {item.status}</p>
    <p className="tooltip__species">Species: {item.species}</p>
  </div>
);

Tooltip.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Tooltip;
