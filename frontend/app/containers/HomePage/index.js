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
import PropTypes from 'prop-types';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';
import { loadData } from './actions';

import { createStructuredSelector } from 'reselect';
import makeSelectLogin from 'containers/Login/selectors';
import makeSelectData from './selectors';
import CryptoSelect from 'components/CryptoSelect';
import Dropdowns from 'components/Dropdowns';

 export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    this.props.dispatch(loadData());
  }
  render() {
    console.log(this.props.data)
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
            {this.props.data.data && this.props.data.data.map(item => {
              return (
                <tr>
                  <th scope="row">{item.sum}</th>
                  <td>{item.total}</td>
                  <td>{item.size}</td>
                  <td>{item.bid}</td>
                  <td><Dropdowns /></td>
                </tr>
              )
            })}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  // login: makeSelectLogin(),
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect, ) (HomePage);

// export default HomePage;
