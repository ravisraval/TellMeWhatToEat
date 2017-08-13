import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
// import { withRouter } from 'react-router-dom';

class RightMapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.restaurants = this.props.restaurants;
  }

  componentDidMount() {
    const searchMap = this.refs.searchMap;

    const defaultBounds = {
      northEast: {lat: 37.873972, lng: -122.331297},
      southWest: {lat: 37.673972, lng: -122.531297}
    };

    const mapOptions = {
      center: {lat: this.props.homePos.lat,
      lng: this.props.homePos.lng},
      zoom: 12,
      minZoom: 3,
      mapTypeControl: false,

    };
    this.bounds = new google.maps.LatLngBounds();
    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    const infowindow = new google.maps.InfoWindow({disableAutoPan: true});
    this.MarkerManager = new MarkerManager(this.searchMap, infowindow, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.restaurants.concat({
      id: 0,
      lat: this.props.homePos.lat,
      lng: this.props.homePos.lng,
      displayPosition: 0
    }), this.bounds);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurants !== this.props.restaurants) {
      let timestampID = new Date().getUTCMilliseconds();
      const restaurantsWithHome = nextProps.restaurants.concat(
        {
          id: timestampID,
          lat: nextProps.homePos.lat,
          lng: nextProps.homePos.lng,
          displayPosition: 0
        });

      const mapOptions = {
        center: {lat: this.props.homePos.lat,
        lng: this.props.homePos.lng},
        zoom: 12,
        minZoom: 3
      };
      // const searchMap = this.refs.searchMap;
      this.bounds = new google.maps.LatLngBounds();
      this.searchMap.setCenter({lat: this.props.homePos.lat, lng: this.props.homePos.lng});
      this.MarkerManager.updateMarkers(restaurantsWithHome, this.bounds);
    }

  }

  handleMarkerClick(restaurantId) {
    //Have Modal Here - Ravi: no problem I did
    this.props.openModal(restaurantId);
  }

  render() {
    return (
      <div className="searchMap-container col-sm-3">
          <div id="map" className="searchMap" ref="searchMap"> Map </div>
      </div>
    );
  }
}
export default RightMapDisplay;
