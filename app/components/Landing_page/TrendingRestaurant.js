import React from 'react';
import { Link } from 'react-router-dom';

class TrendingRestaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: {}
    };
    this.getRestaurant = this.getRestaurant.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getRestaurant(this.props.restaurantId);
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
        this.setState({ restaurant: res.response.venue });
      });
  }

  handleClick() {

  }

  render() {
    const { restaurant } = this.state;
    if (restaurant == {}) {
      return(<div>
        <h2>Loading a Top Local Restaurant</h2>
        </div>);
    }
    let photo;
    if (restaurant ? restaurant.bestPhoto : false) {
      photo = `${restaurant.bestPhoto.prefix}320x200${restaurant.bestPhoto.suffix}`;
    } else {
      photo = `http://res.cloudinary.com/runaway-today/image/upload/c_scale,w_320/v1502320378/StockSnap_K8ATWBW0EK_m9o9fc.jpg`
    }
    // PHOTO RENDERING INFO : https://developer.foursquare.com/docs/responses/photo
    return (
      <li className="trending-restaurant">
        <a href={`https://foursquare.com/v/${restaurant.id}?ref=5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX`} target="_blank">
          <img src={photo ? photo : ""}/>
        </a>
        <section className="trending-restaurant-text">
          <span className="restaurant-name"> { restaurant ? restaurant.name : ""} </span>
          <span className="restaurant-rating"> { restaurant ? restaurant.rating : "" } <p>★</p> </span>
        </section>
      </li>
    );
  }
}

export default TrendingRestaurant;
