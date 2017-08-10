import React from 'react';
import ReactDom from 'react-dom';

class SavedRestaurants extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRestaurants: []
    };
    this.handleSaveList = this.handleSaveList.bind(this);
  }

  handleSaveList() {

  }

  componentWillReceiveProps(newProps) {
    this.setState({savedRestaurants: this.state.savedRestaurants.push(newProps)});
  }

  render() {
    const restaurantNames = [];
    this.state.savedRestaurants.forEach(restaurant => {
      restaurantNames.push(`<li><a href="${restaurant.url}">${restaurant.name}</a></li>`);
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
