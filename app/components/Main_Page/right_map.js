import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
// import { withRouter } from 'react-router-dom';

class RightMapDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.restaurants = this.props.restaurants;
    this.restaurants = this.testRestaurants();
  }

  testRestaurants() {
    const restaurantsObj = [
      {
        id: 1, lat:37.791565, lng:-122.392434, displayPosition: 1
      }, {
        id: 2, lat:37.791305, lng:-122.393735, displayPosition: 2
      }, {
        id: 3, lat:37.790051, lng:-122.390192, displayPosition: 3
      }];
      return restaurantsObj;
  }

  componentDidMount() {
    const defaultBounds = {
      northEast: {lat: 37.873972, lng: -122.331297},
      southWest: {lat: 37.673972, lng: -122.531297}
    };


    const searchMap = this.refs.searchMap;
    const mapOptions = {
      center: {lat: 37.773972,
      lng: -122.431297},
      zoom: 12,
      minZoom: 3
    };

    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    const infowindow = new google.maps.InfoWindow();
    this.MarkerManager = new MarkerManager(this.searchMap, infowindow, this.handleMarkerClick.bind(this));
    console.log(this.restaurants);
    this.MarkerManager.updateMarkers(this.restaurants);
    this.updateMap = () => {
      const response = this.searchMap.getBounds().toJSON();
      this.formattedBounds = {
        northEast: {lat: response.north, lng: response.east},
        southWest: {lat: response.south, lng: response.west}
      };
    };
    google.maps.event.addListener(this.searchMap, 'bounds_changed', this.updateMap);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurants !== this.props.restaurants) {
      this.MarkerManager.updateMarkers(nextProps.restaurants);
    }
  }

  handleMarkerClick(restaurantId) {
    //Have Modal Here
  }

  render() {
    return (
      <div className="searchMap-container">
          <div id="map" className="searchMap" ref="searchMap"> Map </div>
      </div>
    );
  }
}
export default RightMapDisplay;
