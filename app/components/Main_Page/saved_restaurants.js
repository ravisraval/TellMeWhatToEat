import React from 'react';
import ReactDom from 'react-dom';
// TODO: FIX RENDERING
class SavedRestaurants extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRestaurants: this.props.list
    };
    this.handleSaveList = this.handleSaveList.bind(this);
  }

  componentDidMount() {
    this.setState({ savedRestaurants: this.props.list});
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }
  
  handleSaveList() {

  }

  componentWillReceiveProps(newProps) {
    console.log("getting new props");
    this.setState({ savedRestaurants: newProps.list},
    () => this.forceUpdate());
  }

  render() {

    const restaurantNames = [];
    this.state.savedRestaurants.forEach(restaurant => {
      restaurantNames.push(<li><a href={`https://foursquare.com/v/${restaurant.id}?ref=5BRSE1L5L1ADIHASNWIHSAVWEWLQU0IDEEJXVE3V0DPVP3BX`} target="_blank">{restaurant.name}</a></li>);
    });

    return(
      <div>
        <h2>Saved Restaurant List</h2>
        <ul>
          {restaurantNames}
        </ul>
        <button onClick={this.handleSaveList}>Remember this list</button>
      </div>
    );
  }
}

export default SavedRestaurants;
