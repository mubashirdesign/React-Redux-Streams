import React from "react";
import { Field, reduxForm } from "redux-form";


class StreamForm extends React.Component {
  renderError({error, touched}){
    if (touched && error){
      return (
        <div>{error}</div>
      );
    }
  }
  renderInput = ({input, label, placeholder, meta}) => {
    return (
     <div className="form__field">
       
         <label>{label}</label>
         <input placeholder={placeholder} {...input} autoComplete="off" />
         {this.renderError(meta)}
         </div>   
   
    )
  }

  onSubmit = (formValues) => {
  this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
        <div className="form__box">
        <Field label="Enter Title" name="title" placeholder="Title" component={this.renderInput} />
        <Field label="Enter Description" name="description" placeholder="Description" component={this.renderInput} />
        <button className="form__button">Submit</button>
        </div>
        
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors ={};

  if (!formValues.title) {
    errors.title = 'Your must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

