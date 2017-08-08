import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './address_search';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dineType: "All",
      address: ""
    };
    this.updateAddress = this.updateAddress.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //make call to search page with props
  }

  updateAddress(address) {
    this.setState({
      address: address
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
    console.log(this.state);
    return (
      <div>
        {this.dineType()}
        <AddressSearch updateAddress={this.updateAddress} address={this.state.address}/>
        <input type="submit" value="Tell Me What to Eat!"></input>
      </div>
    );
  }

}
export default LandingPage;
