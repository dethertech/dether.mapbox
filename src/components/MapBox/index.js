import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl';
import PropTypes from 'prop-types';

import Marker from '../Marker';
import './MapBox.css';

/**
 * [MapBox description]
 * @extends Component
 */
class MapBox extends Component {
  state = {
    ready: false,
  }

  /**
   * [getChildContext description]
   * @return {[type]} [description]
   */
  getChildContext = () => ({ map: this.map });

  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount = () => {
    MapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    this.map = new MapboxGl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_DESIGN,
    });

    this.map.on('load', () => {
      this.setState({ ready: true });
    });
  }

  /**
   * [componentWillUnmount description]
   * @return {[type]} [description]
   */
  componentWillUnmount = () => this.map.remove();

  /**
   * [getTellerPosition description]
   * @param  {[type]} teller [description]
   * @return {[type]}        [description]
   */
  getTellerPosition = teller => ({
    lat: teller.lat,
    lng: teller.lng,
  });

  /**
   * [renderMarkers description]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  renderMarkers = data => (
    data.map(teller => (
      <Marker
        key={teller.id}
        position={this.getTellerPosition(teller)}
        className="Marker-teller"
      />
    ))
  )

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render = () => (
    <div className="map" ref={(el) => { this.mapContainer = el; }}>
      {this.state.ready && this.renderMarkers(this.props.tellers)}
    </div>
  );
}

MapBox.childContextTypes = {
  map: PropTypes.object,
};


MapBox.propTypes = {
  tellers: PropTypes.array,
};

MapBox.defaultProps = {
  tellers: [],
};

export default MapBox;
