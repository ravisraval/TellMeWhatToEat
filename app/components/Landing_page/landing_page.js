import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './address_search';
import { Link, withRouter } from 'react-router';
// import { Image } from 'cloudinary-react';
// import { Link, withRouter } from 'react-router-dom';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dineType: "eatout",
      address: "",
      position: null,
    };
    this.updateAddress = this.updateAddress.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.history.push('/restaurants');
    //pass through location
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

  updateList(field) {
  return e => {
    this.setState({
      [field]: e.target.value
    });
   };
  }

  dineType() {
    return (
      <select onChange={this.updateList('dineType')}>
        <option value="eatout">Eat out</option>
        <option value="takeout">Take-out</option>
        <option value="delivery">Delivery</option>
      </select>
    );
  }

  render() {
    // <Link to="/restaurants" position={this.state.position}>
    // </Link>
    const {type, position, address} = this.state;
    return (
      <div className="search-box-container">

        <div className="lp-header-container">
          <div className="lp-header">Tell Me What To Eat</div>
          <div className="lp-sub-header">More eating, less deciding</div>
        </div>

        <div className="lp-searchbar-container">
          <div className="lp-searchbar-dropdown">
            {this.dineType()}
          </div>

          <div className="lp-searchbar-input">
            <AddressSearch
              updateAddress={this.updateAddress}
              updatePosition={this.updatePosition}
              address={this.state.address}/>
          </div>

          <div className="lp-searchbar-button">
            <Link to={{ pathname: '/restaurants',
              state: {
                type: this.state.dineType,
                position: this.state.position,
                address: this.state.address
            }}}>
            <input type="submit"
              value="Tell Me What to Eat!">
            </input>
            </Link>
          </div>

        </div>
      </div>
    );
  }

}
export default withRouter(LandingPage);
