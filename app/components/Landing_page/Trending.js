import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import TrendingRestaurant from './TrendingRestaurant';

class Trending extends React.Component {
constructor(props){
  super(props);
  this.state = {
    receivedRestaurants: [],
    numRestaurants: 3,
    lat: null,
    lng: null,
    query: "Restaurants",
    searchRadius: "2000"
  };
  this.getTrending = this.getTrending.bind(this);
}

componentDidMount() {
  navigator.geolocation.getCurrentPosition((position) => {
    this.getTrending(
      position.coords.latitude,
       position.coords.longitude
    );
  }, (error) => alert(error.message) );
}

getTrending(lat, lng) {
  const foursquare = require('react-foursquare')({
    clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
    clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
  });

  const params = {
    "ll": `${lat},${lng}`,
    "section": "food",
    "radius": "3000",
    "limit": '50',
  };

  foursquare.venues.explore(params)
    .then(res => {
      console.log("recieved venues", res.response.groups[0].items);
      this.setState({ receivedRestaurants: res.response.groups[0].items });
    });
}

render() {
  //LOGIC FOR PICKING RESTAURANTS
  const { receivedRestaurants } = this.state;

  if (receivedRestaurants.length === 0) {
    return(
      <div>
        <h2>Finding Top Restaurants in Your Area...</h2>
      </div>
    );
  }

  const handler = {
    get: function(target, name) {
      return target.hasOwnProperty(name) ? target[name] : "";
    }
  };
  this.restaurantsByRating = new Proxy({}, handler);

  receivedRestaurants.forEach(item => {
    this.restaurantsByRating[item.venue.rating] = item.venue.id;
  });
  this.restaurantList = [];
  let ratings = Object.keys(this.restaurantsByRating).sort().reverse();
  let i = 0;

  while (this.restaurantList.length < this.state.numRestaurants) {
    this.restaurantList.push(
      this.restaurantsByRating[ratings[i]]
    );
    i++;
  }

  const restaurants = [];
  const restaurantListRender = [];

  this.restaurantList.forEach(restaurantId => {

    restaurantListRender.push(<TrendingRestaurant
     key={restaurantId ? restaurantId : ""}
     listOrder={restaurants.length}
     restaurantId={restaurantId ? restaurantId : {}}
     />
    );
  });

  return(
    <div className="trending">
      <h2> Top Rated Restaurants Near You</h2>
      <ul>
        {restaurantListRender}
      </ul>
    </div>
  );
  }
}

export default Trending;
