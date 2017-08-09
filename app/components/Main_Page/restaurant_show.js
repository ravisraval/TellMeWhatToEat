import React from 'react';
import ReactDom from 'react-dom';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: {}
    };
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  componentDidMount() {
    this.getRestaurant(this.props.restID);
    //delete above line when implementing this.props.id = this.id
  }

  getRestaurant(venueId) {
    const foursquare = require('react-foursquare')({
      clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
      clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
    });

    const params = {
      venue_id: venueId
    };
    foursquare.venues.getVenue(params)
      .then(res => {
        this.setState({ restaurant: res.response.venue }, () => {
        });
      });
  }

  render() {
    const { restaurant } = this.state;
    return(
      <div>
        <h2>"I'm doing show stuff!"</h2>
        <h3>{restaurant.name}</h3>
      </div>
    );
  }
}

export default RestaurantShow;
