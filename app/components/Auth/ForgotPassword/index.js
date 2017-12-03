import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles';
import Logo from '../../../logo-small.png';

class ForgotPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      showEmailSentMessage: false,
      message: 'Enter your e-mail address below to reset your password.',
    };

    this.sentEmail = this.sentEmail.bind(this);
  }

  sentEmail() {
    this.setState({
      showEmailSentMessage: true,
      message: `An email has been sent to ${this.props.email} with further instructions.`,
    });
  }

  render() {
    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div>
              <div style={styles.title}>
                Forgot Password?
              </div>
              <div style={styles.logoSmallContainer}>
                <img src={Logo} alt="Seemychain" />
              </div>
            </div>
            <hr />
            <p>{this.state.message}</p>
            <form>
              {
                this.state.showEmailSentMessage ? null :
                (
                  <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    fullWidth
                    value={this.props.email}
                    onChange={this.props.onEmailChange}
                  />
                )
              }

              <div style={styles.buttonsContainer}>
                <RaisedButton
                  label="Go Back"
                  style={styles.goBackBtn}
                  onClick={this.props.onGoBack}
                />

                {
                  this.state.showEmailSentMessage ? null :
                  (
                    <RaisedButton
                      label="Submit"
                      primary
                      style={styles.boxBtn}
                      onClick={this.sentEmail}
                    />
                  )
                }
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default ForgotPassword;
