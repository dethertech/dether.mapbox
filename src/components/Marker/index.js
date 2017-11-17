import { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import './Marker.css';


const lngLat = PropTypes.oneOfType([
  PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  PropTypes.arrayOf(PropTypes.number),
]);

class Marker extends Component {
  constructor(props, context) {
    super(props);
    if (!context.map) {
      throw new Error('Marker must be put inside a Map');
    }
  }

  componentDidMount() {
    this.el = document.createElement('div');
    this.el.className = this.props.className;
    this.el.addEventListener('click', this._onClick);

    const position = mapboxgl.LngLat.convert(this.props.position);
    // make a marker for each feature and add to the map
    this.marker = new mapboxgl.Marker(this.el, {
      offset: [
        -this.props.size.width / 2,
        -this.props.size.height / 2,
      ],
    }).setLngLat(position)
      .addTo(this.context.map);
  }

  render = () => null;
}

Marker.propTypes = {
  className: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  position: lngLat,
};

Marker.defaultProps = {
  className: 'Marker-default',
  size: {
    width: 10,
    height: 10,
  },
  position: [0, 0],
};

Marker.contextTypes = {
  map: PropTypes.object,
};

export default Marker;
