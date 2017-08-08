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
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
   };
  }


  componentDidUpdate() {
    // const geocoder = new google.maps.Geocoder;
    //
    // geocoder.geocode({'location': this.state}, (results, status) => {
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude});
      }, (error) => alert(error.message) );
  }


  componentDidMount() {
    let searchLocation = document.getElementById('searchLocation');
    let options = {
      types: ['address']
    };

    let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);
    this.listeners(autoComplete);
    // this.getLocation(); //INCLUDE WHEN 403 BUG FIGURED OUT
  }

  listeners(autoComplete){
    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      const long = place.geometry.viewport["b"]["b"];
      const latt = place.geometry.viewport["f"]["b"];
      var pos = {lat: latt, lng: long};
      this.props.updatePosition(pos);
      this.props.updateAddress(place.formatted_address);
    });
  }

  render() {
    return (
      <div>
        <input id='searchLocation'
        placeholder='Enter your address'
        value={this.address}
        onChange={this.update('address')}
        ></input>
      </div>
    );
  }

}
export default AddressSearch;
