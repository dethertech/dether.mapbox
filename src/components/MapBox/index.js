import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl';
import PropTypes from 'prop-types';

import Marker from '../Marker';
import './MapBox.css';

/**
 * Map component
 * @extends Component
 */
class MapBox extends Component {
  state = {
    ready: false,
  }

  getChildContext = () => ({ map: this.map });

  /**
   * generate map
   * @return {} return map
   */
  componentDidMount = () => {
    MapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    this.map = new MapboxGl.Map({
      container: this.mapContainer,
      style: process.env.REACT_APP_MAPBOX_DESIGN,
    });

    this.map.addControl(new MapboxGl.NavigationControl({
      position: 'top-left',
    }));

    this.map.on('load', () => {
      this.setState({ ready: true });
    });
  }

  /**
   * Remove map
   */
  componentWillUnmount = () => this.map.remove();

  /**
   * Get teller position
   * @param  {object} teller formated teller
   * @return {object} formated position
   */
  getTellerPosition = teller => ({
    lat: teller.lat,
    lng: teller.lng,
  });

  /**
   * Marker on the map
   * @param  {object} data formated teller
   * @return {component} return marker
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
   * map with tellers and markers
   * @return {component} return map and teller
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
