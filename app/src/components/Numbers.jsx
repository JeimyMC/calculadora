import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = (onClickNum) => {
  const btnNumbers = numbers.map((e) => (
    <Button key={e} text={e.toString()} clickHandler={onClickNum}></Button>
  ));
  return btnNumbers;
};

const Numbers = ({ onClickNum }) => (
  <section className="numbers">{renderButtons(onClickNum)}</section>
);

Numbers.propTypes = {
  onClickNum: PropTypes.func.isRequired,
};

export { Numbers };
