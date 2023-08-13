import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm />
    } else {
      currentlyVisibleState = <CoffeeList />
      addCoffeeButton = <button onClick={this.handleClick}>Add a coffee</button>
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addCoffeeButton}
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
