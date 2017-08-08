import React from 'react';
import ReactDom from 'react-dom';

class FindRestaurants extends React.Component {
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
      if (!restaurantList.includes(randomRestaurant)) {
        restaurantList.push(randomRestaurant);
      }
    }



    return(
      <div>
      <h2>"I'm doing something!"</h2>
      <ul>
        {restaurantList.map(restaurant => (
          <li>
            {restaurant.name}
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default FindRestaurants;
