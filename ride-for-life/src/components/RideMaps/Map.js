import React, {Component} from 'react';
import { Container } from '../../simple-library';
import MapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiZG91Z2xhc2pvcmRhbjIiLCJhIjoiY2p2MWdzOGxoMXR0aTRkc2sxa2ZuOWlrcyJ9.YNCXCmHFh_w4ppr-6DoA0g'

export default class Map extends Component {
  state = {
    viewport: {
      latitude: 37.785164,
      longitude: -100,
      zoom: 2.8,
      bearing: 0,
      pitch: 0,
      width: '100vw',
      height: '100vh',
    }
  }

  render() {
    return (
      <Container map>
        <MapGL
          style = {{zIndex: '-1000'}}
          { ...this.state.viewport }
          mapStyle="mapbox://styles/douglasjordan2/cjv1hk541a91r1frvz532dfyf"
          mapboxApiAccessToken={ TOKEN } 
          onViewportChange={ (viewport) => this.setState({ viewport }) }
        />
      </Container>
    );
  }
}