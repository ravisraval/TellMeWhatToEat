import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: {}
    };
    this.getRestaurant = this.getRestaurant.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAnother = this.handleAnother.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getRestaurant(this.props.restaurant.id);
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
        console.log(res.response.venue);
        this.setState({ restaurant: res.response.venue });
      });
  }

  handleClick() {
    this.props.openModal(this.state.restaurant.id);
  }

  handleAdd() {
    this.props.handleAdd(this.state.restaurant);
  }

  handleAnother() {
    const newRestaurant = this.props.restaurants[
      Math.floor(Math.random() * this.props.restaurants.length)];
    this.getRestaurant(newRestaurant.id);
    this.props.replaceItem(newRestaurant, this.props.listOrder);
  }

  render() {
    const { restaurant } = this.state;
    if (restaurant == {}) {
      console.log("no restaurant yet");
      return(<div></div>);
    }
    let photo;
    if (restaurant ? restaurant.bestPhoto : false) {
      photo = `${restaurant.bestPhoto.prefix}320x200${restaurant.bestPhoto.suffix}`;
    } else {
      photo = `http://res.cloudinary.com/runaway-today/image/upload/c_scale,w_320/v1502320378/StockSnap_K8ATWBW0EK_m9o9fc.jpg`
    }
    // PHOTO RENDERING INFO : https://developer.foursquare.com/docs/responses/photo
    return (
      <li className="restaurant-index-item">
        <button onClick={this.handleClick}>
          <img src={photo ? photo : ""}/>
        </button>
        <span> { restaurant ? restaurant.name : ""} </span>
        <span> FourSquare Rating: { restaurant ? restaurant.rating : "" } </span>
        <button onClick={this.handleAdd}>Save to List</button>
        <button onClick={this.handleAnother}>Gimme Another</button>
      </li>
    );
  }
}

export default RestaurantIndexItem;
