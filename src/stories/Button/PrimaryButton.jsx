import React from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const PrimaryButton = ({ label, ...props }) => {
  return (
    <div className="d-flex">
      <a href="/">
        <button className="button-header" {...props}>
          {label}
        </button>
      </a>
    </div>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  onClick: undefined,
};
