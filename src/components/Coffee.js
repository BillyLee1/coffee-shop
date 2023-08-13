import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>Name of Coffee: {props.name}</h3>
        <h3>Origin of Coffee: {props.origin}</h3>
        <h3>Coffee Roast: {props.roast}</h3>
        <h3>Number of Pounds Left: {props.beanAmt}</h3>
      </div>
      <button onClick={()=> props.whenSellClicked(props.id) }>Sell a Pound?</button>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  beanAmt: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Coffee;
