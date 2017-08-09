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
      restaurants: {},
      position: this.props.state.position
    };
    console.log("props");
    console.log(this.props);
    this.getRestaurants = this.getRestaurants.bind(this);
    this.openModal = this.openModal.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  openModal(restID) {
    this.setState({ isModalOpen: true, restID: restID })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  componentDidMount() {
    this.getRestaurants(this.state.position);
  }

  componentWillReceiveProps() {
    //logic for handling added filters
    // this.setState({ restaurants: this.props.restaurants })
    //etc for all filters
    console.log(this.props);
    this.getRestaurants(this.props.state.location)

  }

  getRestaurants(location) {
    const foursquare = require('react-foursquare')({
      clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
      clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
    });

    const params = {
      "ll": `${location.lat},${location.lng}`,
      "query": 'Restaurants',
      // "limit": '40',
      "radius": "4000"
    };

    foursquare.venues.getVenues(params)
      .then(res => {
        this.setState({ receivedRestaurants: res.response.venues }, () => {
      });
      });
  }

  render() {
    //LOGIC FOR PICKING RESTAURANTS
    if (this.state.receivedRestaurants.length === 0) {return null;}
    const { receivedRestaurants } = this.state;
    const ids = Object.keys(receivedRestaurants);
    let restaurantList = [];
    let randomRestaurant;
    while (restaurantList.length < this.state.numRestaurants) {
      randomRestaurant = receivedRestaurants[Math.floor(Math.random() * ids.length)];
      //fix for duplicates
      if (!restaurantList.includes(randomRestaurant)) {
        restaurantList.push(randomRestaurant);
      }
    }
    const restaurants = [];
    const restaurantListRender = [];
    restaurantList.forEach(restaurant => {
      restaurantListRender.push(<RestaurantIndexItem
       key={restaurant.id}
       restaurant={restaurant}
       openModal={this.openModal}
       closeModal={this.closeModal}/>);
      restaurants.push({
        id: restaurant.id,
        lat: restaurant.location.lat,
        lng: restaurant.location.lng,
        displayPosition: restaurants.length + 1
      });



    })

    // const restaurantListRender = restaurantList.map(restaurant => (
    //   <RestaurantIndexItem
    //    key={restaurant.id}
    //    restaurant={restaurant}
    //    openModal={this.openModal}
    //    closeModal={this.closeModal}/>
    //  )
    // );
    const { restID, position } = this.state;
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
