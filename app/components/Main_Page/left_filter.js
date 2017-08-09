import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantIndex from './restaurant_index';


class FilterBar extends React.Component {
  // TODO: ADD IN AN ADDRESS BAR
  constructor(props){
    super(props);
    console.log("PROOPPPS", this.props);
    this.state = {
      price: "$",
      type: this.props.type,
      address: this.props.address,
      position: this.props.position,
      openNow: true,
      openAt: "",
      deliveryTime: 60,
    };
<<<<<<< HEAD
    console.log(this.state);
=======
    console.log(this.props.location.state);

>>>>>>> b9872b07d0be794d88b42e63e7dec44fe0223464
    //bindings

    this.handleToggle = this.handleToggle.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // to handle submit,
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createPreferences(this.state)
  //   .then(data => this.props.history.push(**what goes here**));
  // }

//update property for testing  (that can console log)
  // update(property) {
  //   const that = this;
  //   return e => {
  //     return that.setState({ [property]: e.target.value});
  //   };
  // }

// update property, refactored
  update(property) {
    return e => (this.setState({ [property]: e.target.value}));
  }

  handleToggle(e){
    const toggledBool = this.state.openNow ? false : true;
    this.setState({ openNow: toggledBool, openAt:""});
  }

  // renderErrors(){
  //
  // }

  renderOpenAt(){
    return (
      <div className="open-later">
      <p className="later">today at</p>
         <input
          className="open-at"
          type="time"
          value={this.state.openAt}
          onChange={this.update('openAt')}
        />

      </div>
    );
  }

  renderSliderBarHeader(){
    if (this.state.deliveryTime > 79) {
      return (<h3 className="slider-bar-header"><br/>Any delivery time</h3>);
    } else {
      return (
        <h3 className="slider-bar-header">{this.state.deliveryTime}m <br/> or less</h3>);
    }
  }

  renderFilterBar(){
    const checked = (property, value) => {
      return (
      this.state[property] === value ? true : false
      );
    };

    return (
    <nav className="filter-bar col-sm-4">
      <h1 className="title">Restaurant Picker</h1>
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
          <h2 className="filter-section-header">I want ...</h2>
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
        <h2 className="filter-section-header">Open</h2>
          <div className="open-now-or-later">
            <div className="open-now">

              <div className="toggle-section">

                <p className={this.state.openNow ? "now checked" : "now"}>now</p>
                <input
                  id="toggle"
                  className="toggle"
                  type="checkbox"
                  value={this.state.openNow}
                  checked={this.state.openNow}
                  onChange={this.handleToggle}
                />

                <label htmlFor="toggle" className="toggle-display"></label>

              </div>

            </div>

            {this.state.openNow ? "" : this.renderOpenAt()}

          </div>
        </section>

        <section className="delivery-time-section">
          <h2 className="filter-section-header">Delivery Time</h2>
          {this.renderSliderBarHeader()}
          <input
            className="slider-bar"
            type="range"
            min="40"
            max="80"
            value={this.state.deliveryTime}
            onChange={this.update('deliveryTime')}
          />

        </section>

        <section className="question-section">
          <h2 className="filter-section-header">Help Me Decide</h2>
          <span>Question Component</span>
        </section>



      </form>
    </nav>
    );
  }

  render(){
    return (
      <div className="restaurants-page row">
        {this.renderFilterBar()}
        <RestaurantIndex state={this.state}/>
      </div>
    );
  }

}
    export default FilterBar;
