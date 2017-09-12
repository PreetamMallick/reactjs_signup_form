import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import { Grid, Row, Col } from 'react-flexbox-grid';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const renderTextField = (
  { input, label, placeholder, type, meta: { touched, error }, ...custom },
) => (
  <div>
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      type={type}
      {...input}
      {...custom}
    />
  </div>
);

const WizardFormFirstPage = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="progressStep1">
      <div className="form-main-content">
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <Field 
                name="email" 
                type="email" 
                component={renderTextField} 
                label="Email" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Field
                name="password"
                type="password"
                component={renderTextField}
                label="Password"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Field
                name="confirmpassword"
                type="password"
                component={renderTextField}
                label="Confirm Password"
              />
            </Col>
          </Row>
        </Grid>
      </div>
      <Row>
        <Col xs={12} md={12}>
          <div className="first-step-submit-box">
            <FlatButton type="submit" className="next btn-signup" label="Next" primary={true} labelPosition="before" icon={<MdArrowForward />}/>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
