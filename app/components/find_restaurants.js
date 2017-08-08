import React from 'react';
import ReactDom from 'react-dom';

class FindRestaurants extends React.Component {
  // componentDidMount() {
  //   this.get_restaurants({lat: 37.558, lng: -127});
  // }
  //
  // listeners(autoComplete) {
  // }
  //
  // get_restaurants(userLocation) {
  //   'use strict';
  //
  //   const yelp = require('yelp-fusion');
  //
  //   const client = yelp.client("b295I9QQuhhjiY4UsniIpCOZ4LVNU6vAXnDc5dBFiOWGZhOU3PdvGvrAlB9MwOxteXqaOSyCloQZn9UyhEbnCwTBxMflazXJXOf6e3EBS4AndyG_tfY2n1QW_3WGWXYx");
  //   //https://www.yelp.com/developers/documentation/v3/business_search
  //   client.search({
  //     term:'Food', //maybe 'Restaurants'?
  //     latitude: userLocation.lat,
  //     longitude: userLocation.lng,
  //     limit: 50
  //   }).then(response => {
  //     console.log(response.jsonBody);
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // }

  render() {
    return(
      <div>
      <h2>"I'm doing something!"</h2>
      </div>
    );
  }
}

export default FindRestaurants;
