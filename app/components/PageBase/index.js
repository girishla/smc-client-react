import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Spinner from 'components/Spinner'
import globalStyles from '../../styles';

class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setState({
        loading: nextProps.loading,
      });
    }
  }

  render() {
    const { title, navigation, noWrapContent, children, minHeight } = this.props;

    const content = (
      <div style={{display: 'flex',justifyContent:'center'}}>
        {
          this.props.loading? (
            <div style={{textAlign: 'center'}}>
              <Spinner style={{display: 'inline-block'}}  name="double-bounce" color="rgb(30, 136, 229)"/>
            </div>
          ) :
            <div>
              { children }
            </div>
        }
      </div>
    );

    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        { noWrapContent ? (
          <div>
            { content }
          </div>
        ) : (
          <Paper style={globalStyles.paper}>
            <h3 style={globalStyles.title}>{title}</h3>

            <Divider />

            { content }

            <div style={globalStyles.clear} />

          </Paper>
        )}
      </div>
    );
  }
}

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  noWrapContent: PropTypes.bool,
  children: PropTypes.any,
  minHeight: PropTypes.number,
  loading: PropTypes.bool,
};

export default PageBase;
