import React from 'react';
import { cyan500, cyan600, pink500, pink600, purple500, purple600, orange500, orange600 } from 'material-ui/styles/colors';
import InfoBox from '../../components/dashboard/InfoBox';
import NewOrders from '../../components/dashboard/NewOrders';
import MonthlySales from '../../components/dashboard/MonthlySales';
import BrowserUsage from '../../components/dashboard/BrowserUsage';
import RecentlyProducts from '../../components/dashboard/RecentlyProducts';
import Data from '../../data';
import PageBase from '../../components/PageBase';

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

export default DashboardPage;
