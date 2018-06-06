/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import { loadData } from './actions';

import { createStructuredSelector } from 'reselect';
import makeSelectLogin from 'containers/Login/selectors';
import CryptoSelect from 'components/CryptoSelect';
import Dropdowns from 'components/Dropdowns';

 export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    this.props.dispatch(loadData());
  }
  render() {
    return (
      <div>
        { /*<h2>{this.props.login.username}</h2> */}
          <h1>Test</h1>
          <div className="border padding-10">
            <CryptoSelect label="Units" currency="BTC" />
            <CryptoSelect label="Bid" currency="SGD" />
          </div>
        <div className="row m-t-30">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">SUM</th>
                <th scope="col">TOTAL</th>
                <th scope="col">SIZE</th>
                <th scope="col">BID</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Dropdowns /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withConnect,withReducer,withSaga ) (HomePage);

// export default HomePage;
