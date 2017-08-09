import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantIndex from './restaurant_index';


class FilterBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: "$",
      type: "delivery",
      openNow: true,
      openAt: null,
      deliveryTime: null,
    };

    //bindings

    this.handlePrice = this.handlePrice.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // to handle submit,
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createPreferences(this.state)
  //   .then(data => this.props.history.push(**what goes here**));
  // }

//update property for testing  (that can console log)
  update(property) {
    const that = this;
    return e => {
      return that.setState({ [property]: e.target.value});
    };
  }

// // update property, refactored
//   update(property) {
//     return e => (this.setState({ [property]: e.target.value}));
//   }

  handlePrice(e){
    e.preventDefault();
    return () => this.setState({ ["price"]: e.target.value});
  }

  // renderErrors(){
  //
  // }



  renderFilterBar(){
    console.log("current state", this.state);
    const checked = (property, value) => {
      return (
      this.state[property] === value ? true : false
      );
    };

    return (
    <nav className="filter-bar">
      <form className="filter-bar-form">

        <section className="price-section">
          <h2 className="filter-section-header">Price</h2>
          <div className="switch-group">

          <label htmlFor="$">$</label>
            <input
              type="radio"
              value="$"
              id="$"
              className="1"
              onChange={this.update("price")}
              checked={checked("price","$")}
              />

            <label htmlFor="$$">$$</label>
            <input
              type="radio"
              value="$$"
              id="$$"
              className="2-and-fewer"
              onChange={this.update("price")}
              checked={checked("price","$$")}
              />

            <label htmlFor="$$$">$$$</label>
            <input
              type="radio"
              value="$$$"
              id="$$$"
              className="3-and-fewer"
              onChange={this.update("price")}
              checked={checked("price","$$$")}
              />

            <label htmlFor="$$$$">$$$$</label>
            <input
              type="radio"
              value="$$$$"
              id="$$$$"
              className="4-and-fewer"
              onChange={this.update("price")}
              checked={checked("price","$$$$")}
              />

          </div>
        </section>

        <section className="transaction-type-section">
          <h2 className="filter-section-header">I want</h2>
          <div className="switch-group">

          <label htmlFor="delivery" className="type">Delivery</label>
            <input
              type="radio"
              value="delivery"
              id="delivery"
              className="transaction-type"
              onChange={this.update("type")}
              checked={checked("type","delivery")}
              />

            <label htmlFor="takeout" className="type">Takeout</label>
            <input
              type="radio"
              value="takeout"
              id="takeout"
              className="transaction-type"
              onChange={this.update("type")}
              checked={checked("type","takeout")}
              />

            <label htmlFor="eatout" className="type">Eat Out</label>
            <input
              type="radio"
              value="eatout"
              id="eatout"
              className="transaction-type"
              onChange={this.update("type")}
              checked={checked("type","eatout")}
              />

          </div>
        </section>

        <section className="open-now-section">
          <div className="open-now-or-later">

            <div className="open-now">
            <h2>Open Now</h2>
              <div className="switch">
                <input id="cmn-toggle-4" className="cmn-toggle cmn-toggle-round-flat" type="checkbox"/>
                <label htmlFor="cmn-toggle-4"></label>
              </div>
            </div>

            <div className="open-later">

            </div>

            <div><h2>Help Me Decide</h2><span>Question Component</span></div>
          </div>
        </section>



      </form>
    </nav>
    );
  }

  render(){
    return (
      <div className="restaurants-page">
        {this.renderFilterBar()}
        <RestaurantIndex />
      </div>
    );
  }

}
    export default FilterBar;
