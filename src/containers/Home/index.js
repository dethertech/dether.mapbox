import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapBox from '../../components/MapBox';
import actions from '../../actions';

/**
 * Home component
 * @extends Component
 */
class Home extends Component {
  /**
   * Load all tellers
   * @return {[type]} [description]
   */
  componentWillMount = () => {
    const { tellers } = this.props.actions;
    tellers.getTellers();
  }

  /**
   * Home component
   * @return {component} return home component
   */
  render = () => (
    <MapBox tellers={this.props.tellers} />
  );
}

Home.propTypes = {
  actions: PropTypes.shape({
    tellers: PropTypes.shape({}),
  }),
  tellers: PropTypes.array,
};

Home.defaultProps = {
  actions: null,
  tellers: [],
};

const mapStateToProps = ({ tellers }) => ({
  tellers,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    tellers: bindActionCreators(actions.tellers, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
