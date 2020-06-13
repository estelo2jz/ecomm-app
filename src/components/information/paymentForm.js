import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field  
          className="payment-form__name" 
          type="email" 
          title="Name" 
          placeholder="Name" 
          name="email" 
          component={FormInput} 
        />
        <Field  
          className="payment-form__address" 
          type="address" 
          title="Address" 
          placeholder="Address" 
          name="address" 
          component={FormInput} 
        />
        <Field  
          className="payment-form__city" 
          type="city" 
          title="City" 
          placeholder="City" 
          name="city" 
          component={FormInput} 
        />
        <Field  
          className="payment-form__state" 
          type="state" 
          title="State" 
          placeholder="State" 
          name="state" 
          component={FormInput} 
        />
        <Field  
          className="payment-form__zipcode" 
          type="zipcode" 
          title="Zipcode" 
          placeholder="Zipcode" 
          name="zipcode" 
          component={FormInput} 
        />

        <div className="payment-form__line"></div>
        <Field 
          className="payment-form__use-this-address" 
          onClick={() => history.push('/information/payment')}
          type="submit" 
          title="Use This Address" 
          name="use-this-address" 
          component={FormButton} 
        />
        <Field 
          className="payment-form__back" 
          onClick={() => history.push('/signin')}
          type="button" 
          title="Back" 
          name="back" 
          short={true}
          component={FormButton} 
        />
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;