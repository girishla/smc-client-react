import React from 'react';
// import { cyan500, cyan600, pink500, pink600, purple500, purple600, orange500, orange600 } from 'material-ui/styles/colors';
// import InfoBox from '../../components/dashboard/InfoBox';
// import NewOrders from '../../components/dashboard/NewOrders';
// import MonthlySales from '../../components/dashboard/MonthlySales';
// import BrowserUsage from '../../components/dashboard/BrowserUsage';
// import RecentlyProducts from '../../components/dashboard/RecentlyProducts';
// import Data from '../../data';
import { UserIsAuthenticated } from 'utils/router';
import PageBase from 'components/PageBase';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
// import { reduxFirebase as fbReduxSettings } from 'config';
import { connect } from 'react-redux';

// @UserIsAuthenticated // redirect to /login if user is not authenticated
@firebaseConnect()
// @connect(({ firebase }) => ({
//   auth: pathToJS(firebase, 'auth'),
//   account: pathToJS(firebase, 'profile'),
// }))
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <PageBase
        navigation="Application / Dashboard"
        noWrapContent
        loading={this.state.loading}
      >

      </PageBase>
    );
  }
}

// export default DashboardPage;


export default UserIsAuthenticated(connect(({ firebase }) => ({
  auth: pathToJS(firebase, 'auth'),
  account: pathToJS(firebase, 'profile'),
}))(DashboardPage))

