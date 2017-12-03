import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { blue200 } from 'material-ui/styles/colors';
import styles from '../styles';
import Logo from '../../../logo.png';


class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div style={styles.logoContainer}>
              <img
                style={{ width: 295, height: 54, fill: blue200 }}
                src={Logo} alt="SeeMyChain"
              />
            </div>
            {
              this.props.errorMessage ? (
                <div>
                  <p style={styles.errorMessage}>
                    * {this.props.errorMessage}
                  </p>
                </div>
              ) : null
            }

            <form>
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

              <div style={styles.buttonsContainer}>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                  checked={this.props.rememberMe}
                  onCheck={this.props.onRememberMeChange}
                />

                <RaisedButton
                  label="Login"
                  primary
                  style={styles.boxBtn}
                  onClick={this.props.onSignIn}
                />

              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label="Forgot Password?"
              onClick={this.props.onForgotPassword}
              style={styles.flatButton}
              icon={<FontIcon className="material-icons">help</FontIcon>}
            />
            <FlatButton
              label="Register"
              onClick={this.props.onRegister}
              style={styles.flatButton}
              icon={<FontIcon className="material-icons">person_add</FontIcon>}
            />
          </div>

          <div style={styles.buttonsDiv}>
            <Link
              to="/"
              onClick={this.props.onSignInFacebook}
              style={{ ...styles.btn, ...styles.btnFacebook }}
            >
              <i className="fa fa-facebook fa-lg" />
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </Link>
            <Link
              to="/"
              onClick={this.props.onSignInGoogle}
              style={{ ...styles.btn, ...styles.btnGoogle }}
            >
              <i className="fa fa-google-plus fa-lg" />
              <span style={styles.btnSpan}>Log in with Google</span>
            </Link>
          </div>
          <p style={styles.instructions}>Try login with</p>
          <p style={styles.instructions}>email: demo@test.com | password: demo</p>
          <p style={styles.instructions}>Or</p>
          <p style={styles.instructions}>email: demo2@test.com | password: demo2</p>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  rememberMe: PropTypes.any.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignInFacebook: PropTypes.func.isRequired,
  onSignInGoogle: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Login;
