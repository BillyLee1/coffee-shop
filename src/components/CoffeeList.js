import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {

  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee
          whenCoffeeClicked = { props.onCoffeeSelection }
          whenSellClicked = { props.onSellCoffee }
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          price={coffee.price}
          beanAmt={coffee.beanAmt}
          id={coffee.id}
          key={coffee.id}/>
        )}
    </React.Fragment>
  )
}
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};


export default TicketList;
