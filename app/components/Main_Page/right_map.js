import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';
// import { withRouter } from 'react-router-dom';

class RightMapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.restaurants = this.props.restaurants;
    // this.restaurants = this.testRestaurants();
  }

  componentDidMount() {
    const defaultBounds = {
      northEast: {lat: 37.873972, lng: -122.331297},
      southWest: {lat: 37.673972, lng: -122.531297}
    };


    const searchMap = this.refs.searchMap;
    const mapOptions = {
      center: {lat: this.props.homePos.lat,
      lng: this.props.homePos.lng},
      zoom: 12,
      minZoom: 3
    };

    this.searchMap = new google.maps.Map(searchMap, mapOptions);
    const infowindow = new google.maps.InfoWindow();
    this.MarkerManager = new MarkerManager(this.searchMap, infowindow, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.restaurants.concat({
      id: 0,
      lat:this.props.homePos.lat,
      lng:this.props.homePos.lng,
      displayPosition: 0
    }));
    // this.updateMap = () => {
    //   const response = this.searchMap.getBounds().toJSON();
    //   this.formattedBounds = {
    //     northEast: {lat: response.north, lng: response.east},
    //     southWest: {lat: response.south, lng: response.west}
    //   };
    // };
    // google.maps.event.addListener(this.searchMap, 'bounds_changed', this.updateMap);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurants !== this.props.restaurants) {
      this.MarkerManager.updateMarkers(nextProps.restaurants.concat({
        id: 0,
        lat:this.props.homePos.lat,
        lng:this.props.homePos.lng,
        displayPosition: 0
      }));
    }

  }

  handleMarkerClick(restaurantId) {
    //Have Modal Here
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
