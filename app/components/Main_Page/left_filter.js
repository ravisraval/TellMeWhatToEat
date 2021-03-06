import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantIndex from './restaurant_index';
import AddressSearch from '../Landing_page/address_search';
import Questions from '../Questions/question';

class FilterBar extends React.Component {
  constructor(props){
    super(props);
    if (this.props.location.state && this.props.location.state.address) {
      this.searchRadiusDisplay = 8047;
      this.state = {
        price:[1, 3, 4],
        type: this.props.location.state.type,
        address: this.props.location.state.address,
        position: this.props.location.state.position,
        openNow: true,
        openAt: "",
        searchRadius: 8047,
        query: "",
        categoryId: "4d4b7105d754a06374d81259"
      };
    } else {
      this.state = {
        price:[],
        type: "delivery",
        address: "",
        position: {lat: 37.7367436, lng: -122.4573766},
        openNow: true,
        openAt: "",
        searchRadius: 8047,
        query: "",
        categoryId: "4d4b7105d754a06374d81259"
      };
    }

    this.searchRadiusDisplay = 8047;
    // this.handleToggle = this.handleToggle.bind(this);
    // this.handlePrice = this.handlePrice.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateQstring = this.updateQstring.bind(this);
    this.updateCatId = this.updateCatId.bind(this);
  }

  updateAddress(address) {
    this.setState({
      address: address
      });
  }

  updatePosition(position) {
    this.setState({
      position: position
      });
  }

  update(property) {
    return e => (this.setState({ [property]: e.target.value}));
  }

  // handleToggle(e){
  //   const toggledBool = this.state.openNow ? false : true;
  //   this.setState({ openNow: toggledBool, openAt:""});
  // }

  // handlePrice(e){
  //   const priceInt = parseInt(e.target.value);
  //   const currentPrice = this.state.price;
  //   let price = currentPrice;
  //
  //   if (currentPrice.includes(priceInt)) {
  //     const i = currentPrice.indexOf(priceInt);
  //     price.splice(i, 1);
  //   } else {
  //     price = currentPrice.concat(priceInt);
  //   }
  //
  //   this.setState({price});
  // }

  updateQstring(newQuery) {
    this.setState({query: this.state.query.concat(newQuery)});
  }

  updateCatId(newCatId) {
    // this.setState({categoryId: this.state.categoryId.concat(newCatId)});
    if (newCatId) {
      this.setState({categoryId: newCatId});
    }
  }

  // generatePriceArray(int){
  //   const array = [];
  //   for (let i = 1; i <= int; i++) {
  //     array.push(i);
  //   }
  //   return array;
  // }

  handleMouseDown(e){
    // this.setState({searchRadiusDisplay: e.target.value});
    this.searchRadiusDisplay = e.target.value
    e.stopPropagation();
    e.preventDefault();
  }

  renderSliderBarHeader(){
    // if (this.state.deliveryTimeDisplay > 79) {
    //   return (<h3 className="slider-bar-header"><br/>Any delivery time</h3>);
    // } else {
      return (
        <h3 className="slider-bar-header">Within {(this.searchRadiusDisplay / 1609.34).toFixed(1)} miles</h3>);
    }
  // }

  renderAddressSearchBar() {
    return(
      <div className="filter-address-search">
        <h6>Your Current Address</h6>
        <AddressSearch
          updateAddress={this.updateAddress}
          updatePosition={this.updatePosition}
          address={this.state.address}/>
      </div>

    );
  }

  renderFilterBar(){
    const checked = (property, value) => {
      return this.state.price.includes(value);
    };

    const selected = (property, value) => (
      this.state[property] === value
    );

    // let deliveryTime = this.state.deliveryTime;
    //
    // const handleMouseDown = e => (
    //   deliveryTime = e.target.value
    // );

    return (
    <nav className="filter-bar">

      <div>
        {this.renderAddressSearchBar()}
      </div>

      <h1 className="title">Restaurant Picker</h1>

      <div className="filters">
        <section className="question-section">
          <h2 className="filter-section-header">Help Me Decide</h2>
          <Questions updateQstring={this.updateQstring} updateCatId={this.updateCatId}/>
        </section>


        <section className="search-radius-section">
          <h2 className="filter-section-header">Search Radius</h2>
          {this.renderSliderBarHeader()}
          <div className="slider-bar-div">
            <span> 1 </span>
            <input
              className="slider-bar"
              type="range"
              min="1610"
              max="16100"
              value={this.state.searchRadiusDisplay}
              onChange={this.handleMouseDown}
              onMouseUp={this.update("searchRadius")}
              />
            <span> 10 </span>
          </div>
        </section>

      </div>

    </nav>
    );
  }

  render(){
    return (
      <div className="restaurants-page">
        {this.renderFilterBar()}
        <RestaurantIndex filterProps={this.state}/>
      </div>
    );
  }
}

export default FilterBar;

// <section className="price-section">
//   <h2 className="filter-section-header">Price</h2>
//   <div className="switch-group">
//
//     <input
//       type="checkbox"
//       value={1}
//       id="$"
//       className="1"
//       onChange={this.handlePrice}
//       checked={checked("price",1)}
//       />
//     <label id="1" htmlFor="$">$</label>
//
//     <input
//       type="checkbox"
//       value={2}
//       id="$$"
//       className="1 2"
//       onChange={this.handlePrice}
//       checked={checked("price",2)}
//       />
//     <label id="2" htmlFor="$$">$$</label>
//
//     <input
//       type="checkbox"
//       value={3}
//       id="$$$"
//       className="1 2 3"
//       onChange={this.handlePrice}
//       checked={checked("price",3)}
//       />
//     <label htmlFor="$$$">$$$</label>
//
//     <input
//       type="checkbox"
//       value={4}
//       id="$$$$"
//       className="1 2 3 4"
//       onChange={this.handlePrice}
//       checked={checked("price",4)}
//       />
//     <label id="4" htmlFor="$$$$">$$$$</label>
//
//   </div>
// </section>
//
// <section className="transaction-type-section">
//   <h2 className="filter-section-header">I want ...</h2>
//   <div className="switch-group">
//
//     <input
//       type="radio"
//       value="delivery"
//       id="delivery"
//       className="transaction-type"
//       onChange={this.update("type")}
//       checked={selected("type","delivery")}
//       />
//     <label htmlFor="delivery" className="type">Delivery</label>
//
//     <input
//       type="radio"
//       value="takeout"
//       id="takeout"
//       className="transaction-type"
//       onChange={this.update("type")}
//       checked={selected("type","takeout")}
//       />
//     <label htmlFor="takeout" className="type">Takeout</label>
//
//     <input
//       type="radio"
//       value="eatout"
//       id="eatout"
//       className="transaction-type"
//       onChange={this.update("type")}
//       checked={selected("type","eatout")}
//       />
//     <label htmlFor="eatout" className="type">Eat Out</label>
//
//   </div>
// </section>
//
// <section className="open-now-section">
// <h2 className="filter-section-header">Open</h2>
//   <div className="open-now-or-later">
//     <div className="open-now">
//
//       <div className="toggle-section">
//
//         <p className={this.state.openNow ? "now checked" : "now"}>now</p>
//         <input
//           id="toggle"
//           className="toggle"
//           type="checkbox"
//           value={this.state.openNow}
//           checked={this.state.openNow}
//           onChange={this.handleToggle}
//         />
//
//         <label htmlFor="toggle" className="toggle-display"></label>
//
//       </div>
//
//     </div>
//
//
//     <div
//       ref={elem => {this.openLater = elem}}
//       className={this.state.openNow ? "no open-later" : "yes open-later"}>
//     <p>today at</p>
//        <input
//         className="open-at"
//         type="time"
//         value={this.state.openAt}
//         onChange={this.update('openAt')}
//         disabled={this.state.openNow}
//       />
//     </div>
//
//   </div>
