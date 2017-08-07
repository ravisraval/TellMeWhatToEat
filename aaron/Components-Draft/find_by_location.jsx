import React from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router-dom';

class FindByLocation extends React.Component {
  componentDidMount() {
    let searchLocation = document.getElementById('searchLocation');
    let options = {
      types: ['addresses']
    };
    // let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);
    // this.listeners(autoComplete);
  }
  //bonus: attempt to get browser history

  handleSearch(e) {

  }

  listeners(autoComplete) {
    autoComplete.addListener('places_changed', () => {
      let place = autoComplete.getPlace();
      //return address of place here, use this for additional api calls
    });
  }

  render() {
    return(
      <div>
        <input id='searchLocation' placeholder='Enter your address'></input>
        console.log("hello");
      </div>
    );
  }
}

export default withRouter(FindByLocation);

/// in application.html.erb
// <%= javascript_include_tag "https://maps.googleapis.com/maps/api/js?key={APIKEY}" %>
