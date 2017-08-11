import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantShow from './restaurant_show';
import RightMapDisplay from './right_map';
import Modal from '../Modal';

class RestaurantIndex extends React.Component {
constructor(props){
  super(props);
  this.state = {
    receivedRestaurants: [],
    numRestaurants: 3,
    isModalOpen: false,
    position: this.props.filterProps.position,
    price: this.props.filterProps.price,
    deliveryTime: this.props.filterProps.deliveryTime || 60,
    openNow: this.props.filterProps.openNow,
    openAt: this.props.filterProps.openAt,
    obtainType: this.props.filterProps.type,
    query: this.props.filterProps.query,
    searchRadius: this.props.filterProps.searchRadius || "4000"
  };
  this.reRender = true;
  this.saveList = [];
  this.getRestaurants = this.getRestaurants.bind(this);
  this.openModal = this.openModal.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
}

openModal(restID) {
  this.reRender = false;
  this.setState({ isModalOpen: true, restID: restID });
}

closeModal() {
  this.reRender = false;
  this.setState({ isModalOpen: false });
}

componentDidMount() {
  this.getRestaurants(this.state.position);
}

componentWillReceiveProps(newProps) {
  this.reRender = true;
  this.setState({
    position: newProps.filterProps.position,
    price:newProps.filterProps.price,
    deliveryTime: newProps.filterProps.deliveryTime,
    openNow: newProps.filterProps.openNow,
    openAt: newProps.filterProps.openAt,
    // obtainType: newProps.state.type,
    // searchRadius: newProps.state.searchRadius,
    query: newProps.filterProps.query
  });
  this.getRestaurants(newProps.filterProps.position);
}

handleAdd(restaurant) {
  // if (!this.saveList.includes(restaurant)) {
  //   this.saveList.push(restaurant);
  // }
}

getRestaurants(location) {
  const foursquare = require('react-foursquare')({
    clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
    clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
  });

  const params = {
    "ll": `${location.lat},${location.lng}`,
    "query": this.state.query,
    "categoryId": "4d4b7105d754a06374d81259",
    "radius": this.state.searchRadius
    // "limit": '40',
  };

  foursquare.venues.getVenues(params)
    .then(res => {
      this.setState({ receivedRestaurants: res.response.venues }, () => {
      });
    });
}

render() {
  //LOGIC FOR PICKING RESTAURANTS
  //DONT PICK THE SAME RESTAURANT
  const { receivedRestaurants } = this.state;
  if (this.state.receivedRestaurants.length === 0) {return(
    <h1>No restaurants match your search :( Try widening your search area or removing filters</h1>
    );
  }
  if (this.reRender) {
    const ids = Object.keys(receivedRestaurants);
    this.restaurantList = [];
    let randomRestaurant;
    while (this.restaurantList.length < this.state.numRestaurants) {
      randomRestaurant = receivedRestaurants[Math.floor(Math.random() * ids.length)];
      //fix for duplicates
      if (!this.restaurantList.includes(randomRestaurant)) {
        this.restaurantList.push(randomRestaurant);
      }
    }
  }
  const restaurants = [];
  const restaurantListRender = [];
  this.restaurantList.forEach(restaurant => {
    restaurantListRender.push(<RestaurantIndexItem
     key={restaurant.id}
     listOrder={restaurants.length}
     restaurant={restaurant}
     openModal={this.openModal}
     closeModal={this.closeModal}
     handleAdd={this.handleAdd}
     restaurants={this.state.receivedRestaurants}/>);
    restaurants.push({
      id: restaurant.id,
      lat: restaurant.location.lat,
      lng: restaurant.location.lng,
      displayPosition: restaurants.length + 1
    });
  })
  const { restID, position} = this.state;
  console.log(this.state.query);
  return(
    <div className="restaurant-index-and-map">
      <Modal className="restaurant-modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <RestaurantShow restID={restID}/>
      </Modal>
      <div className="restaurant-index col-sm-5">
        <ul>
          {restaurantListRender}
        </ul>
      </div>
      <RightMapDisplay restaurants={restaurants} homePos={position}/>
    </div>
  );
}
}

export default RestaurantIndex;
