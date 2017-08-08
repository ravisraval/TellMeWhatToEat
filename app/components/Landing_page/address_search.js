import React from 'react';
import ReactDOM from 'react-dom';

class AddressSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lng: null,
      lat: null,
      address: ""
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
   };
  }


  componentDidUpdate() {
    // let self = this;
    // const geocoder = new google.maps.Geocoder;
    //
    // geocoder.geocode({'location': this.state}, function(results, status) {
    //    if (status === 'OK') {
    //      if (results[1]) {
    //        self.searchLocation.value = results[1].formatted_address;
    //      } else {
    //        window.alert('No results found');
    //      }
    //    } else {
    //      window.alert('Geocoder failed due to: ' + status);
    //    }
    //  });
  }

  getLocation() {
    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      self.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude});
      }, (error) => alert(error.message) );
  }


  componentDidMount() {
    let searchLocation = this.searchLocation;
    let options = {
      types: ['address']
    };

    let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);
    this.searchLocation = document.getElementById('searchLocation');
    this.getLocation();
    this.listeners(autoComplete);
  }

  listeners(autoComplete){
    let self = this;

    autoComplete.addListener('place_changed', function() {
      let place = autoComplete.getPlace();
      const long = place.geometry.viewport["b"]["b"];
      const latt = place.geometry.viewport["f"]["b"];
      var pos = {lat: latt, lng: long};
    });
  }

  render() {
    return (
      <div>
        <input id='searchLocation'
        placeholder='Enter your address'
        value={this.props.address}
        onChange={this.props.update('address')}
        ></input>
      </div>
    );
  }

}
export default AddressSearch;
