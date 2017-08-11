import React from 'react';
import ReactDom from 'react-dom';

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
    this.forceUpdate();
  }
  handleSaveList() {

  }

  componentWillReceiveProps(newProps) {
    this.setState({ savedRestaurants: newProps.list});
  }

  render() {

    const restaurantNames = [];
    console.log(this.state);
    this.state.savedRestaurants.forEach(restaurant => {
      restaurantNames.push(<li><a href={restaurant.url}>{restaurant.name}</a></li>);
    });
    console.log("restaurantNames");
    console.log(restaurantNames);

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
