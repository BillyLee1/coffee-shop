import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });

    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  }

  handleSwitchingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleSellingCoffee = (id) => {
    const newCoffeeList = this.state.mainCoffeeList.map(coffee => {

      if(coffee.id === id) {
        const newAmt = coffee.beanAmt - 1;
        return { ...coffee, beanAmt: newAmt < 0 ? 0 : newAmt};
      }
      return coffee;
    });
    
    this.setState({
      mainCoffeeList: newCoffeeList
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm 
      coffee = {this.state.selectedCoffee} 
      onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
      
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail 
      coffee = {this.state.selectedCoffee} 
      onClickingDelete = {this.handleDeletingCoffee} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}  />;
      buttonText = "Return to Coffee List";

    } else {
      currentlyVisibleState = <CoffeeList 
      coffeeList = {this.state.mainCoffeeList} 
      onCoffeeSelection = {this.handleSwitchingSelectedCoffee} 
      onSellingCoffee = { this.handleSellingCoffee} />;
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
