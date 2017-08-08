import React from 'react';
import { Link } from 'react-router-dom';
//link this to restaurant show modal later
// <img src={restaurant.image_url} alt={restaurant.name} />
const RestaurantIndexItem = ({ restaurant }) => (
  <li className="restaurant-index-item">
    <Link onClick={this.props.openModal} to={`/show`}>
      <span> { restaurant.id } </span>
      <span> { restaurant.name } </span>
    </Link>
  </li>
);

export default RestaurantIndexItem;
