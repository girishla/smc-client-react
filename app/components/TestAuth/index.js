import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserIsNotAuthenticated } from 'utils/router';

import {
    firebaseConnect,
    isLoaded,
    isEmpty,
    pathToJS
} from 'react-redux-firebase'


@UserIsNotAuthenticated
@firebaseConnect() // add this.props.firebase
export class TestAuth extends Component {


    static propTypes = {
        firebase: PropTypes.shape({
            login: PropTypes.func.isRequired
        })
    }

    state = {
        isLoading: false
    }

    googleLogin = loginData => {
        this.setState({ isLoading: true })
        return this.props.firebase
            .login({ provider: 'facebook', type: "redirect" })
            .then(() => {
                this.setState({ isLoading: false })
                // this is where you can redirect to another route
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                console.log('there was an error', error)
                console.log('error prop:', this.props.authError) // thanks to connect
            })
    }

    logout= ()=>{
        console.log('logout')
        this.props.firebase.logout();
    }

    render() {


        const { authError,location } = this.props
        const { auth } = this.props
        const { snackCanOpen } = this.state


        console.log('location', this.props)

        if (!isLoaded(auth)) {
            return (
              <div>
                <span>Loading....</span>
              </div>
            )
          }

        if(isEmpty(auth)) {
            return (
                <div>
                    <span>Login page goes here</span>
                    <a onClick={this.googleLogin}>LOGIN</a>


                    
                </div>
            )
        }

        return (
            <div>
            <p>Welcome! {auth.displayName}</p>
            <a onClick={ this.logout}>LOGOUT</a>
            </div>
        )

    }
}


// export default UserIsNotAuthenticated(connect(state => ({
//     auth: pathToJS(state.get('firebase'), 'auth')
// }))(TestAuth))

export default connect(state => ({
    auth: pathToJS(state.get('firebase'), 'auth')
}))(TestAuth)