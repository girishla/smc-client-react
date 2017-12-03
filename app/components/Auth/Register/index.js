import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles';
import Logo from '../../../logo-small.png';

class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div>
              <div style={styles.title}>
                Sign Up
              </div>
              <div style={styles.logoSmallContainer}>
                <img src={Logo} alt="SeeMyChain" />
              </div>
            </div>
            <hr />
            <form>
              <TextField
                hintText="Full Name"
                floatingLabelText="Full Name"
                fullWidth
                value={this.props.fullName}
                onChange={this.props.onFullNameChange}
              />
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth
                value={this.props.email}
                onChange={this.props.onEmailChange}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth
                type="password"
                value={this.props.password}
                onChange={this.props.onPasswordChange}
              />
              <TextField
                hintText="Confirm Password"
                floatingLabelText="Confirm Password"
                fullWidth
                type="password"
                value={this.props.confirmPassword}
                onChange={this.props.onConfirmPasswordChange}
              />

              <div style={styles.buttonsContainer}>
                <RaisedButton
                  label="Go Back"
                  style={styles.goBackBtn}
                  onClick={this.props.onGoBack}
                />

                <RaisedButton
                  label="Register"
                  primary
                  style={styles.boxBtn}
                  onClick={this.props.onRegister}
                />
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  fullName: PropTypes.string.isRequired,
  onFullNameChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onConfirmPasswordChange: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default Register;
