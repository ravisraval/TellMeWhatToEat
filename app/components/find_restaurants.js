import React from 'react';
import ReactDom from 'react-dom';
import RestaurantIndexItem from './restaurant_index_item';

class FindRestaurants extends React.Component {
<<<<<<< HEAD
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
=======
  constructor(props){
    super(props);
    this.state = {
      fooderies: [],
      numRestaurants: 3
    };
    this.getRestaurants = this.getRestaurants.bind(this);
  }

  componentDidMount() {
    this.getRestaurants({lat: 37.558, lng: -127});
    //delete above line when implementing this.props.location = this.userLocation
  }

  listeners(autoComplete) {
  }

  getRestaurants(userLocation) {
    const foursquare = require('react-foursquare')({
      clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
      clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
    });

    const params = {
      "ll": "37.7749,-122.4194",
      "query": 'Restaurants',
      "limit": '6'
    };
    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ fooderies: res.response.venues }, () => {
        });
      });

    // TO GET A SINGLE VENUE'S INFO
    // const params = {
    //   venue_id: "47f1994cf964a520904e1fe3"
    // };
    // foursquare.venues.getVenue(params)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ fooderies: res.response.venues }, () => {
    //     });
    //   });

  }
>>>>>>> 336a741f33cfe4214662b9337cd889503c73331c

  render() {
    //LOGIC FOR PICKING RESTAURANTS HERE
    if (this.state.fooderies.length === 0) {return null;}
    const { fooderies } = this.state;
    console.log(fooderies);
    const ids = Object.keys(fooderies);
    let restaurantList = [];
    let randomRestaurant;
    while (restaurantList.length < this.state.numRestaurants) {
      randomRestaurant = fooderies[Math.floor(Math.random() * ids.length)];
      //fix for duplicates
      if (!restaurantList.includes(randomRestaurant)) {
        restaurantList.push(randomRestaurant);
      }
    }

    return(
      <div>
      <h2>"I'm doing something!"</h2>
      <ul>
        {restaurantList.map( restaurant => <RestaurantIndexItem
           key={restaurant.id}
           restaurant={restaurant}/>
       )}
      </ul>
      </div>
    );
  }
}

export default FindRestaurants;
