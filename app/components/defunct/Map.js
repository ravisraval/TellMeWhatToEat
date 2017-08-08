import React from 'react';
import ReactDOM from 'react-dom';
import AutoSearch from './auto_complete_search';

class Map extends React.Component {
  constructor(props) {
    super(props);

    // the state will need to take in a list of latlngs from home/restaurants
    // actually, it would be better if you passed in the restaurant itself,
    // which was an object with a title & pos
    // maybe have places[0] == home
  }

  componentDidMount() {
    // loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyD6-r_EUcFhCN7xCfTh7PcTENVVE-6uxIs&libraries=places')
    this.state = {
      places: [{latLng: new google.maps.LatLng(37.7758, -122.435), title: "meow"}]
    };
    const options = {
      // disableDefaultUI: true,
      // draggable: false,
      // gestureHandling: 'none',
      // scrollwheel: false,
      // disableDoubleClickZoom: true
    };

    const map = document.getElementById("map");
    this.map = new google.maps.Map(map, options);

    this.bounds = new google.maps.LatLngBounds();
    this.state.places.forEach(place => {
      new google.maps.Marker({
        position: place.latLng,
        map: this.map,
        title: place.title
      });
      this.bounds.extend(place.latLng)
    });
    this.map.fitBounds(this.bounds);
    this.map.panToBounds(this.bounds);
  }

  render() {
    const map = this.map;
    return(
      <div>
        <AutoSearch displayMap={map} />

      </div>
    );
  }
}

export default Map;
