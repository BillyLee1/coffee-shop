import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Coffee Name" 
          required />
        <input
          type='text'
          name='origin'
          placeholder="Coffee's Origin" 
          required />
        <input
          type='text'
          name='roast'
          placeholder="Coffee Roast Level" 
          required />
        <input
          type='number'
          name='price'
          placeholder="Coffee Price " 
          required />
        <input
          type='number'
          name='beanAmt'
          placeholder="Total amount of beans left" 
          required />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
