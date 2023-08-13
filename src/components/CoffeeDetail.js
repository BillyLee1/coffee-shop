import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>Name of Coffee: {coffee.name}</h3>
      <h3>Origin of Coffee: {coffee.origin}</h3>
      <h3>Roast Type: {coffee.roast}</h3>
      <h3>Price per Pound: {coffee.price}</h3>
      <h3>Number of Pounds Left: {coffee.beanAmt}</h3>
      <button onClick={ props.onClickingEdit }>Edit</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;
