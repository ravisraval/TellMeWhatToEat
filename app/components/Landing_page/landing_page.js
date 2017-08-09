import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './address_search';
import { Link } from 'react-router';
// import { Link, withRouter } from 'react-router-dom';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dineType: "All",
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
        <option value="all">Eat out</option>
        <option value="Take-out">Take-out</option>
        <option value="Delivery">Delivery</option>
      </select>
    );
  }

  render() {
    // <Link to="/restaurants" position={this.state.position}>
    // </Link>
    return (
      <div>
        {this.dineType()}
        <AddressSearch
          updateAddress={this.updateAddress}
          updatePosition={this.updatePosition}
          address={this.state.address}/>
        <Link to='/restaurants'
          type={this.state.dineType}
          position={this.state.position}
          address={this.state.address} >
        <input type="submit"
          value="Tell Me What to Eat!">
        </input>
        </Link>
      </div>
    );
  }

}
export default LandingPage;
