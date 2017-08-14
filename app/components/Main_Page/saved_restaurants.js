import React from 'react';
import ReactDom from 'react-dom';
// TODO: FIX RENDERING
class SavedRestaurants extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRestaurants: this.props.list
    };
    // this.handleSaveList = this.handleSaveList.bind(this);
  }

  componentDidMount() {
    this.setState({ savedRestaurants: this.props.list});
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  // handleSaveList() {
  // }

  handleClick(restId) {
    this.props.openModal(restId);
  }

  handleDelete(restaurant) {
    this.props.handleSavedDelete(restaurant);

    //delete this restaurant from restaurantindex.saveList
    //figure out which restaurantIndexItem this corresponds to
    //call restaurantindex.handleAdd
  }

  componentWillReceiveProps(newProps) {
    this.setState({ savedRestaurants: newProps.list},
    () => this.forceUpdate());
  }

  render() {
    const restaurantNames = [];
    this.state.savedRestaurants.forEach(restaurant => {
      restaurantNames.push(
        <li className="saved-restaurant-item">

          <button className="saved-restaurant-name" onClick={() => this.handleClick(restaurant.id)}>
            {restaurant.name}
          </button>

          <button className="saved-restaurant-delete" onClick={() => this.handleDelete(restaurant)}>
            x
          </button>

        </li>);
    });

    // <button onClick={this.handleSaveList}>Remember this list</button>
    return(
      <div className="saved-restaurant-container">
        <h2>Saved Restaurant List</h2>
        <ul className="saved-restaurant-list">
          {restaurantNames}
        </ul>
      </div>
    );
  }
}

export default SavedRestaurants;
