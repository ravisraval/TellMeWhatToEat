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
        this.setState({ restaurant: res.response.venue });
      });
  }

  render() {
    if (restaurant === {}) {
      return (<div></div>);
    }
    const { restaurant } = this.state;
    // <h2>"I'm doing show stuff!"</h2>
    let photo;
    if (restaurant.bestPhoto) {
      photo = `${restaurant.bestPhoto.prefix}320x200${restaurant.bestPhoto.suffix}`;
    } else {
      photo = `http://res.cloudinary.com/runaway-today/image/upload/c_scale,w_320/v1502320378/StockSnap_K8ATWBW0EK_m9o9fc.jpg`
    }

    let price;
    if (restaurant.price) {
      price = `Price: ${"$".repeat(restaurant.price.tier)}`;
    }
    console.log(restaurant);
    return(
      <div className="modal-container">
        <img src={photo}/>
        <h3>{restaurant.name}</h3>
        <h3 className="modal-field">{restaurant.hours ? restaurant.hours.status : "Restaurant hours unavailable"}</h3>
        <a href={restaurant.url}><h3 className="modal-header">{restaurant.url}</h3></a>
        <h3 className="modal-info">{restaurant.contact ? restaurant.contact.formattedPhone : ""}</h3>
        <h3>{restaurant.price ? price : "Price information unavailable"}</h3>
      </div>
    );
  }
}

export default RestaurantShow;
