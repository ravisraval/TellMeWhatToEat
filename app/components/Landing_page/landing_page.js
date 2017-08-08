import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './address_search';

class LandingPage extends React.Component {
  dineType() {
    return (
      <option>
        <select />
        <select />
        <select />
      </option>
    );
  }

  render() {
    return (
      <div>
        <input id='searchLocation' placeholder='Enter your address'></input>
      </div>

    );
  }

}
export default LandingPage;
