import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
const knowfrom = ['Newspaper', 'TV', 'Friend', 'Poster'];
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import { Grid, Row, Col } from 'react-flexbox-grid';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

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
                  component={renderTextField}
                  label="DD"
                  placeholder="DD"
                />
              </Col>
              <Col xs={4} sm={4} md={4}>
                <Field
                  name="month"
                  type="number"
                  component={renderTextField}
                  label="MM"
                  placeholder="MM"
                />
              </Col>
              <Col xs={4} sm={4} md={4}>
                <Field
                  name="year"
                  type="number"
                  component={renderTextField}
                  label="YYYY"
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
            <Row>
              <Col xs={12} md={12}>
                <Field name="gender" component={renderRadioGroup} className="material-gender">
                  <RadioButton value="male" label="male" />
                  <RadioButton value="female" label="female" />
                  <RadioButton value="unspecified" label="unspecified" />
                </Field>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className="signup-select-box">
                <Field
                  name="familierfrom"
                  component={renderSelectField}
                  label="Where did you hear about us"
                >
                  <MenuItem value="Newspaper" primaryText="Newspaper" />
                  <MenuItem value="Television" primaryText="Television" />
                  <MenuItem value="Friend" primaryText="Friend" />
                  <MenuItem value="Poster" primaryText="Poster" />
                </Field>
              </div>  
            </Col>
          </Row>
        </div>
      </Grid>
      <div className="first-step-submit-box">
        <FlatButton type="button" className="previous btn-signup-prev" label="Back" primary={true} onClick={previousPage}/>
        <FlatButton type="submit" className="next btn-signup" label="Next" primary={true} labelPosition="before" icon={<MdArrowForward />}/>
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
