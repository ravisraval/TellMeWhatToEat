import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantShow from './restaurant_show';
import Modal from '../Modal';
import { Link, withRouter } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fooderies: [],
      numRestaurants: 3,
      isModalOpen: false
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(restID) {
    this.setState({ isModalOpen: true, restID: restID });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  componentDidMount() {
    this.getRestaurants(this.props.position);
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
  }

  render() {
    //LOGIC FOR PICKING RESTAURANTS HERE
    if (this.state.fooderies.length === 0) {return null;}
    const { fooderies } = this.state;
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
    const restaurantListRender = restaurantList.map(restaurant => (
      <RestaurantIndexItem
       key={restaurant.id}
       restaurant={restaurant}
       openModal={this.openModal}
       closeModal={this.closeModal}/>
     )
   );
    const { restID } = this.state;
    return(
      <div>
        <Modal className="restaurant-modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <RestaurantShow restID={restID}/>
        </Modal>
      <h2>"I'm doing something!"</h2>
      <ul>
        {restaurantListRender}
      </ul>
      </div>
    );
  }
}

export default RestaurantIndex;
