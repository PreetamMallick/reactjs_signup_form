import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import { Grid, Row, Col } from 'react-flexbox-grid';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="progressStep1">
      <div className="form-main-content">
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <Field 
                name="email" 
                type="email" 
                component={renderField} 
                label="Email" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Field
                name="confirmpassword"
                type="password"
                component={renderField}
                label="Confirm Password"
              />
            </Col>
          </Row>
        </Grid>
      </div>
      <Row>
        <Col xs={12} md={12}>
          <div className="first-step-submit-box">
            <button type="submit" className="next btn-signup">Next <MdArrowForward/></button>
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
