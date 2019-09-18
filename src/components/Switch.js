import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { nextGif, prevGif } from "../actions";

const Switch = props => {
  const { to, index, onClick, nextGif, prevGif } = props;
  const previous = to === "prev";
  const next = to === "next";
  const disabled =
    (previous && index === 0) ||
    (next && index === process.env.REACT_APP_LIMIT - 1)
      ? true
      : false;
  const handleClick = () => {
    onClick();
    previous ? prevGif() : nextGif();
  };

  return (
    <div>
      <Button
        variant="outlined"
        disabled={disabled}
        color="primary"
        onClick={handleClick}
      >
        {to}
      </Button>
    </div>
  );
};

const mapStateToProps = ({ index }) => {
  return { index };
};

export default connect(
  mapStateToProps,
  { nextGif, prevGif }
)(Switch);
