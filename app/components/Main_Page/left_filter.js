import React from 'react';
import ReactDOM from 'react-dom';

class FilterBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: null,
      type: null,
      openNow: true,
      openAt: null,
      deliveryTime: null,
    };

    //bindings
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

  handleButtonClick(e){

  }

  // renderErrors(){
  //
  // }



  render(){
    return (
      <nav className="filter-bar">
        <form className="filter-bar-form">

          <section className="price-section">
            <h2 className="filter-section-header">Price</h2>

            <div className="switch-button-group">
              <button onClick={this.handleButtonClick('price')} className="1">$</button>
              <button onClick={this.handleButtonClick('price')} className="2-and-fewer">$$</button>
              <button onClick={this.handleButtonClick('price')} className="3-and-fewer">$$$</button>
              <button onClick={this.handleButtonClick('price')} className="4-and-fewer">$$$$</button>
            </div>
          </section>

          <section className="transaction-type-section">
            <h2 className="filter-section-header">I want</h2>
            <div className="switch-button-group">
              <button onClick={this.handleButtonClick('type')} className="transaction-type">Delivery</button>
              <button onClick={this.handleButtonClick('type')} className="transaction-type">Takeout</button>
              <button onClick={this.handleButtonClick('type')} className="transaction-type">Eat Out</button>
            </div>
          </section>

          <section className="open-now-section">
            <div className="open-now-or-later">

              <div className="open-now">
              <h2>Open Now</h2>
                <div className="switch">
                  <input id="cmn-toggle-4" className="cmn-toggle cmn-toggle-round-flat" type="checkbox"/>
                  <label for="cmn-toggle-4"></label>
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

}
    export default FilterBar;
