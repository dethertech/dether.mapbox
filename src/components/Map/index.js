import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl';
import PropTypes from 'prop-types';

import Marker from '../Marker';

class Map extends Component {
  state = {
    ready: false,
  }

  getChildContext() {
    return { map: this.map };
  }

  componentDidMount() {
    MapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    this.map = new MapboxGl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      attributionControl: false,
    });
    this.map.on('load', () => {
      this.setState({ ready: true });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  getTellerPosition = teller => ({
    lat: teller.lat,
    lng: teller.lng,
  });

  renderMarkers = data => (
    data.map(teller => (
      <Marker
        key={teller.id}
        position={this.getTellerPosition(teller)}
        className="Marker-teller"
      />
    ))
  )

  render = () => {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return (
      <div style={style} ref={(el) => { this.mapContainer = el; }}>
        {this.state.ready && this.renderMarkers(this.props.tellers)}
      </div>
    );
  }
}

// TODO changer le nom pas le droit d'utiliser Map
Map.childContextTypes = {
  map: PropTypes.object,
};


Map.propTypes = {
  tellers: PropTypes.array,
};

Map.defaultProps = {
  tellers: [],
};

export default Map;
