import { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import './Marker.css';

/**
 * Marker component
 * @extends Component
 */
class Marker extends Component {
  constructor(props, context) {
    super(props);
    if (!context.map) {
      throw new Error('Marker must be put inside a Map');
    }
  }

  /**
   * Create a new marker form mapbox
   */
  componentDidMount = () => {
    this.el = document.createElement('div');
    this.el.className = this.props.className;

    const position = mapboxgl.LngLat.convert(this.props.position);

    this.marker = new mapboxgl.Marker(this.el)
      .setLngLat(position)
      .addTo(this.context.map);
  }

  render = () => null;
}

Marker.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOfType([
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

Marker.defaultProps = {
  className: 'Marker-default',
  position: [0, 0],
};

Marker.contextTypes = {
  map: PropTypes.object,
};

export default Marker;
