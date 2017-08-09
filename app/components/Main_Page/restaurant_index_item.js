import React from 'react';
import { Link } from 'react-router-dom';
//link this to restaurant show modal later
// <img src={restaurant.image_url} alt={restaurant.name} />

class RestaurantIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal(this.props.restaurant.id);
    console.log(this.props);
    // this.props.history.push("/restaurants/show
  }
  render() {
    const { restaurant } = this.props;
    return (
      <li className="restaurant-index-item">
        <button onClick={this.handleClick}>
          <span> { restaurant.id } </span>
          <span> { restaurant.name } </span>
        </button>
      </li>
    );
  }
}

export default RestaurantIndexItem;
