import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Map from '../../components/Map';
import actions from '../../actions';
import * as MapboxHelper from '../../helpers/mapboxApi';

class Home extends Component {
  state = {
    addressByPosition: {},
  }

  componentWillMount() {
    const { tellers } = this.props.actions;
    tellers.getTellers();
  }

  componentWillReceiveProps(newProps) {
    console.log('new PRops');
    if (newProps.tellers !== this.props.tellers) {
      newProps.tellers.forEach((teller) => {
        const position = this.getTellerPosition(teller);
        if (!this.getAddress(position)) {
          MapboxHelper.reverseGeocode(position).then((result) => {
            this.setAddress(position, result.place_name);
          }).catch(() => {
            this.setAddress(position, 'Unknown address');
          });
        }
      });
    }
  }

  getTellerPosition = teller => ({
    lat: teller.lat,
    lng: teller.lng,
  });

  getPositionHash = (latLngLike) => {
    const latlng = mapboxgl.LngLat.convert(latLngLike);
    return `${latlng.lat},${latlng.lng}`;
  };

  setAddress(position, address) {
    const addressByPosition = {
      ...this.state.addressByPosition,
      [this.getPositionHash(position)]: address,
    };
    this.setState({ addressByPosition });
  }

  getAddress(position) {
    return this.state.addressByPosition[this.getPositionHash(position)];
  }

  render() {
    return (
      <Map tellers={this.props.tellers} />
    );
  }
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
