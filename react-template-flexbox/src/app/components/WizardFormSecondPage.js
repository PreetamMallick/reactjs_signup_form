import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
const knowfrom = ['Newspaper', 'TV', 'Friend', 'Poster'];
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import { Grid, Row, Col } from 'react-flexbox-grid';

const renderKnowusfrom = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value=""></option>
      {knowfrom.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit} className="progressStep2">
      <Grid fluid>
        <div className="form-main-content form-main-content2">
          <div className="dob-box">
            <Row>
              <Col xs={12} md={12}>
                <label>Date of Birth</label>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4} md={4}>
                <Field
                  name="date"
                  type="number"
                  component={renderField}
                  label=""
                  placeholder="DD"
                />
              </Col>
              <Col xs={4} sm={4} md={4}>
                <Field
                  name="month"
                  type="number"
                  component={renderField}
                  label=""
                  placeholder="MM"
                />
              </Col>
              <Col xs={4} sm={4} md={4}>
                <Field
                  name="year"
                  type="number"
                  component={renderField}
                  label=""
                  placeholder="YYYY"
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={12} md={12}>
                <label className="signup-gender">Gender</label>
              </Col>
            </Row>
            <div className="signup-gender-box">
            <Row>
              <Col xs={4} sm={4} md={4}>
                <label>
                  <Field name="gender" component="input" type="radio" value="male" id="male" />
                  {' '}
                  <span className="rborder1"><small>Male</small></span>
                </label>
              </Col>
              <Col xs={4} sm={4} md={4}>
                <label>
                  <Field name="gender" component="input" type="radio" value="female" id="female" />
                  {' '}
                  <span className="rborder1"><small>Female</small></span>
                </label>
              </Col>
              <Col xs={4} sm={4} md={4}>
                <label>
                  <Field name="gender" component="input" type="radio" value="unspecified" id="unspecified" />
                  {' '}
                  <span><small>Unspecified</small></span>
                </label>
              </Col>
              <Field name="gender" component={renderError} />
              </Row>
            </div>
          </div>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className="signup-select-box">
                <label className="signup-gender">WHERE DID YOU HEAR ABOUT IS?</label>
                <Field name="knowfrom" component={renderKnowusfrom} />
              </div>  
            </Col>
          </Row>
        </div>
      </Grid>
      <div className="first-step-submit-box">
        <button type="button" className="previous btn-signup-prev" onClick={previousPage}>
          Back
        </button>
        <button type="submit" className="next btn-signup">Next <MdArrowForward/></button>
      </div>
    </form>
  );
};

export default reduxForm({

  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
