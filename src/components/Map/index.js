import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl';

class Map extends Component {
  state = {
  }

  componentDidMount() {
    MapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    this.map = new MapboxGl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      attributionControl: false,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return <div style={style} ref={(el) => { this.mapContainer = el; }} />;
  }
}
export default Map;
