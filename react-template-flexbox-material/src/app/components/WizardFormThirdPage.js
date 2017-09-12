import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import MdLocalPrintShop from 'react-icons/lib/md/local-print-shop';
import MdDone from 'react-icons/lib/md/done';
import { Grid, Row, Col } from 'react-flexbox-grid';

import FlatButton from 'material-ui/FlatButton';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-final-content">
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <div className="proceed-to-dashboard"><MdDone/><div></div></div>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12} md={12}>
              <div>
                <FlatButton type="submit" className="btn-goto-dashboard" disabled={pristine || submitting} label="Print Result" primary={true} labelPosition="before" icon={<MdLocalPrintShop />}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
