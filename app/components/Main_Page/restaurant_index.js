import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import { Route } from 'react-router';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantShow from './restaurant_show';
import SavedRestaurants from './saved_restaurants';
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
    // price: this.props.filterProps.price,
    // deliveryTime: this.props.filterProps.deliveryTime || 60,
    // openNow: this.props.filterProps.openNow,
    // openAt: this.props.filterProps.openAt,
    // obtainType: this.props.filterProps.type,
    categoryId: this.props.filterProps.categoryId,
    query: this.props.filterProps.query,
    searchRadius: this.props.filterProps.searchRadius || "2000"
  };
  this.reRender = true;
  this.saveList = [];
  this.openModal = this.openModal.bind(this);
  this.replaceItem = this.replaceItem.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleSavedDelete = this.handleSavedDelete.bind(this);
  this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  this.getRestaurants = this.getRestaurants.bind(this);
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
    // price:newProps.filterProps.price,
    // deliveryTime: newProps.filterProps.deliveryTime,
    // openNow: newProps.filterProps.openNow,
    // openAt: newProps.filterProps.openAt,
    // obtainType: newProps.filterProps.type,
    searchRadius: newProps.filterProps.searchRadius,
    query: newProps.filterProps.query,
    categoryId: newProps.filterProps.categoryId
  }, ()=> this.getRestaurants());

    // this.getRestaurants(newProps.filterProps.location);
}

handleAdd(restaurant, restaurantIndexItem) {
  if (!this.saveList.includes(restaurant)) {
    this.saveList.push(restaurant);
  } else {
    let idx = this.saveList.indexOf(restaurant);
    this.saveList.splice(idx,1);
  }

  this.savedRestaurants.list = this.saveList;
  this.savedRestaurants.forceUpdate();

  restaurantIndexItem.setSavedToList(this.saveList.includes(restaurant));
  restaurantIndexItem.forceUpdate();
}

handleSavedDelete(restaurant) {
  let idx = this.saveList.indexOf(restaurant);
  this.saveList.splice(idx,1);

  this.savedRestaurants.list = this.saveList;
  this.savedRestaurants.forceUpdate();
  if (this.IndexItem[`${restaurant.id}`]) {
    this.IndexItem[`${restaurant.id}`].setSavedToList(this.saveList.includes(restaurant));
    this.IndexItem[`${restaurant.id}`].forceUpdate();
  }
}

replaceItem(newRestaurant, array_pos) {
  this.reRender = false;
  this.restaurantList[array_pos] = newRestaurant;
  this.forceUpdate();
}

getRestaurants(location) {
  const foursquare = require('react-foursquare')({
    clientID: process.env.FOURSQUARE_CLIENT_ID || '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
    clientSecret: process.env.FOURSQUARE_CLIENT_SECRET || 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
  });
  const params = {
    "ll": `${this.state.position.lat},${this.state.position.lng}`,
    "query": this.state.query,
    "categoryId": this.state.categoryId,
    "radius": this.state.searchRadius,
    "limit": '50'
  };
  console.log("cat being sent to foursquare:", this.state.categoryId);
  console.log("query being sent to foursquare:", this.state.query);

  foursquare.venues.getVenues(params)
    .then(res => {
      this.setState({ receivedRestaurants: res.response.venues });
    });
}

render() {
  //LOGIC FOR PICKING RESTAURANTS
  const { receivedRestaurants } = this.state;
  if (receivedRestaurants.length === 0) {return(
    <h1>No restaurants match your search :( Try widening your search area or removing filters</h1>
    );
  }

  if (this.reRender) {//get new restaurants, else use old ones
    const ids = Object.keys(receivedRestaurants);
    this.restaurantList = [];
    let randomRestaurant;
    while (this.restaurantList.length <= receivedRestaurants.length && this.restaurantList.length < this.state.numRestaurants) {
      let idx = Math.floor(Math.random() * Object.keys(receivedRestaurants).length)
      randomRestaurant = receivedRestaurants[idx];
      receivedRestaurants.splice(idx,1);
      if (!this.restaurantList.includes(randomRestaurant)) {
        this.restaurantList.push(randomRestaurant);
      }
    }
  }

  const restaurants = [];
  const restaurantListRender = [];
  this.IndexItem = {};
  this.restaurantList.forEach(restaurant => {

    restaurantListRender.push(<RestaurantIndexItem
     key={restaurant ? restaurant.id : ""}
     listOrder={restaurants.length}
     restaurant={restaurant ? restaurant : {}}
     openModal={this.openModal}
     closeModal={this.closeModal}
     handleAdd={this.handleAdd}
     handleAnother={this.replaceItem}
     replaceItem={this.replaceItem}
     restaurants={this.state.receivedRestaurants}
     isSavedToList={this.saveList.includes(restaurant)}
     onRef={ref => (this.IndexItem[`${restaurant.id}`] = ref)}
   />);

    restaurants.push({
      id: restaurant ? restaurant.id : "",
      lat: restaurant ? restaurant.location.lat : "",
      lng: restaurant ? restaurant.location.lng : "",
      displayPosition: restaurant ? restaurants.length + 1 : "",
      name: restaurant ? restaurant.name : ""
    });

  });
  const { restID, position } = this.state;
  return(
    <div className="restaurant-index-and-map">

      <Modal className="restaurant-modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <RestaurantShow restID={restID}/>
      </Modal>

      <div className="restaurant-index col-sm-5">
        <ul>
          {restaurantListRender}
          <button className="more-restaurants-btn" onClick={() => {
              this.reRender = true;
              this.forceUpdate();
            }}>These aren't doing it for me. Show me more.</button>
          <img src="https://res.cloudinary.com/runaway-today/image/upload/v1502564312/Powered-by-Foursquare-full-color-300_pahzsj.png" alt="Powered-by-Foursquare-logo" />
        </ul>
      </div>

      <section className="right-bar">
        <ul className="right-bar-list">
          <li><RightMapDisplay
            openModal={this.openModal}
            closeModal={this.closeModal}
            restaurants={restaurants}
            homePos={position}
            />
          </li>

          <li><SavedRestaurants
            list={this.saveList}
            onRef={ref => (this.savedRestaurants = ref)}
            openModal={this.openModal}
            closeModal={this.closeModal}
            handleSavedDelete={this.handleSavedDelete}
            />
          </li>
      </ul>

      </section>
    </div>
  );
}
}

export default RestaurantIndex;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link, withRouter } from 'react-router-dom';
// import { Route } from 'react-router';
// import RestaurantIndexItem from './restaurant_index_item';
// import RestaurantShow from './restaurant_show';
// import SavedRestaurants from './saved_restaurants';
// import RightMapDisplay from './right_map';
// import Modal from '../Modal';
//
// const foursquare = require('react-foursquare')({
//   clientID: '5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX',
//   clientSecret: 'CAACNZE0PFJGNTABOT1RA3DYOSJAMQJBM5VQWJVYMF4EIW4B'
// });
//
// class RestaurantIndex extends React.Component {
// constructor(props){
//   super(props);
//   this.state = {
//     receivedRestaurants: [],
//     numRestaurants: 3,
//     isModalOpen: false,
//     position: this.props.filterProps.position,
//     // price: this.props.filterProps.price,
//     price: "1,2,3",
//     deliveryTime: this.props.filterProps.deliveryTime || 60,
//     openNow: this.props.filterProps.openNow,
//     openAt: this.props.filterProps.openAt,
//     obtainType: this.props.filterProps.type,
//     query: this.props.filterProps.query || "",
//     categoryId: this.props.filterProps.categoryId || "",
//     searchRadius: this.props.filterProps.searchRadius || "4000"
//   };
//   this.reRender = true;
//   this.saveList = [];
//   this.getRestaurants = this.getRestaurants.bind(this);
//   this.openModal = this.openModal.bind(this);
//   this.replaceItem = this.replaceItem.bind(this);
//   this.handleAdd = this.handleAdd.bind(this);
//   this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
//   // this.isRestWithinPriceRange = this.isRestWithinPriceRange.bind(this);
// }
//
// openModal(restID) {
//   this.reRender = false;
//   this.setState({ isModalOpen: true, restID: restID });
// }
//
// closeModal() {
//   this.reRender = false;
//   this.setState({ isModalOpen: false });
// }
//
// componentDidMount() {
//   this.getRestaurants(this.state.position);
// }
//
// componentWillReceiveProps(newProps) {
//   this.reRender = true;
//   this.setState({
//     position: newProps.filterProps.position,
//     // price:newProps.filterProps.price,
//     price: [2,3,4],
//     deliveryTime: newProps.filterProps.deliveryTime,
//     openNow: newProps.filterProps.openNow,
//     openAt: newProps.filterProps.openAt,
//     obtainType: newProps.filterProps.type,
//     searchRadius: newProps.filterProps.searchRadius,
//     query: newProps.filterProps.query,
//     categoryId: newProps.filterProps.categoryId
//   });
//   this.getRestaurants(newProps.filterProps.position);
// }
//
// handleAdd(restaurant) {
//   if (!this.saveList.includes(restaurant)) {
//     this.saveList.push(restaurant);
//   }
// }
//
// replaceItem(newRestaurant, array_pos) {
//   this.reRender = false;
//   this.restaurantList[array_pos] = newRestaurant;
//   this.forceUpdate();
// }
//
// getRestaurants(location) {
//
//   const searchParams = {
//     "ll": `${location.lat},${location.lng}`,
//     "query": this.state.query,
//     "categoryId": `4d4b7105d754a06374d81259${this.state.categoryId}`,
//     "radius": this.state.searchRadius,
//     "limit": '50'
//   };
//
//   const searchRests = [];
//   const searchRestsIds = [];
//   const exploreRests = [];
//   foursquare.venues.getVenues(searchParams)
//     .then(res => {
//       searchRests.push(res.response.venues);
//       searchRests[0].forEach(rest => {
//         searchRestsIds.push(rest.id);
//       });
//     })
//
//   const exploreParams = {
//     "ll": `${location.lat},${location.lng}`,
//     "query": this.state.query,
//     "price": this.state.price,
//     "radius": this.state.searchRadius,
//     "openNow": "1",
//     "limit": '50'
//   };
//
//   foursquare.venues.explore(exploreParams)
//   .then(res => {
//     res.response.groups[0].items.forEach(item => {
//       if /*searchRests includes*/ (searchRestsIds.includes(
//                                     item.venue.id)) {
//         // if /*price*/(this.state.price.includes(item.venue.price.tier)) {
//           // if /*openNow*/(this.state.openNow) {
//             // if (item.venue.hours && item.venue.hours.isOpen) {
//               // exploreRests.push(item.venue);
//             // } else {
//               // return;
//             // }
//           // } else {
//             exploreRests.push(item.venue);
//           // } else {
//           // return;
//         // }
//       }
//     });
//     this.setState({ receivedRestaurants: exploreRests});
//   })
//
//  }
//
// // isRestWithinPriceRange(restId) {
// //   foursquare.venues.getVenue({venue_id: restId})
// //     .then(res => {
// //       if (res.response.venue.price &&
// //           this.state.price.includes(res.response.venue.price.tier)) {
// //             return true;
// //       } else {
// //         return false;
// //       }
// //     });
// // }
//
// render() {
//   //LOGIC FOR PICKING RESTAURANTS
//   const { receivedRestaurants } = this.state;
//   if (receivedRestaurants.length === 0) {return(
//     <h1>No restaurants match your search :( Try widening your search area or removing filters</h1>
//     );
//   }
//
//   if (this.reRender) {//get new restaurants, else use old ones
//
//     const ids = Object.keys(receivedRestaurants);
//     this.restaurantList = [];
//     let randomRestaurant;
//
//     while (this.restaurantList.length < this.state.numRestaurants) {
//
//       let idx = Math.floor(Math.random() * ids.length)
//       randomRestaurant = receivedRestaurants[idx];
//       receivedRestaurants.splice(idx,1);
//
//       if (!this.restaurantList.includes(randomRestaurant)) {
//         this.restaurantList.push(randomRestaurant);
//       }
//
//     }
//
//   }
//
//   const restaurants = [];
//   const restaurantListRender = [];
//
//   this.restaurantList.forEach(restaurant => {
//
//     restaurantListRender.push(<RestaurantIndexItem
//      key={restaurant.id}
//      listOrder={restaurants.length}
//      restaurant={restaurant}
//      openModal={this.openModal}
//      closeModal={this.closeModal}
//      handleAdd={this.handleAdd}
//      handleAnother={this.replaceItem}
//      replaceItem={this.replaceItem}
//      restaurants={this.state.receivedRestaurants}/>);
//
//     restaurants.push({
//       id: restaurant.id,
//       lat: restaurant.location.lat,
//       lng: restaurant.location.lng,
//       displayPosition: restaurants.length + 1
//     });
//
//   });
//
//   const { restID, position} = this.state;
//   return(
//     <div className="restaurant-index-and-map">
//
//       <Modal className="restaurant-modal" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//         <RestaurantShow restID={restID}/>
//       </Modal>
//
//       <div className="restaurant-index col-sm-5">
//         <ul>
//           {restaurantListRender}
//         </ul>
//       </div>
//
//       <SavedRestaurants list={this.saveList}/>
//       <RightMapDisplay restaurants={restaurants} homePos={position}/>
//
//     </div>
//   );
// }
// }
//
// export default RestaurantIndex;
