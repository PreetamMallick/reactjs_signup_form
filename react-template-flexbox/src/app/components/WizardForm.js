import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import { Grid, Row, Col } from 'react-flexbox-grid';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  setProgress(data) {
    this.setState({
      step : data
    })
  }

  render() {

    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="dynamicData">
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <h2 className="signup-heading">{this.state.page==3 ? "Thank you!" : "Signup"}</h2>
            </Col>
          </Row>
        </Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="progress custom-progress">
              <div className={"progress-bar width" + this.state.page} role="progressbar" aria-valuenow={this.state.page}
          aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </Col>
        </Row>
        
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            changeProgress={this.setProgress.bind(this)}
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
