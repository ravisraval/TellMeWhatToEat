import React from 'react';
import ReactDOM from 'react-dom';

class ComboMapSearch extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let searchLocation = document.getElementById('searchLocation');
    let options = {
      types: ['address']
    };
    let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);

     const map = this.refs.map;
     const mapOptions = {
       center: {lat: 37.773972,
       lng: -122.431297},
       zoom: 12
     };
     this.map = new google.maps.Map(map, mapOptions);

     this.listeners(autoComplete, map);
  }
  //
  // getCurrentLocation() {
  //   navigator.geolocation.getCurrentPosition((position)=>{
  //     return {lat: position.coords.latitude, lng: position.coords.longitude};
  //   });
  // }

  listeners(autoComplete, map){
    let self = this;

    autoComplete.addListener('place_changed', function() {

      let place = autoComplete.getPlace();
      const long = place.geometry.viewport["b"]["b"];
      const latt = place.geometry.viewport["f"]["b"];
      var pos = {lat: latt, lng: long};
      console.log(long, latt);
      const mapOptions = {
        center: pos, // this is area 51
        zoom: 14
      };
      //  autoComplete.bindTo('bounds', self.map);
      //
      const mapRerender = new google.maps.Map(map, mapOptions);
      var marker = new google.maps.Marker({
        position: pos,
        map: mapRerender,
      });
      self.map.setCenter(pos, 14);
      // self.props.updateGeoLocation({
      // lat: place.geometry.viewport["f"]["b"],
      // lng: place.geometry.viewport["b"]["b"],
      // address: place.formatted_address});
      //
      //
      //
      //


    });
  }

  render() {
    return (
      <div>
        <input id='searchLocation' placeholder='Enter your address'></input>
        <div id="map" className="map" ref="map"> Map </div>
      </div>

    );
  }

}
export default ComboMapSearch;
