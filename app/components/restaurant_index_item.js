import React from 'react';
import { Link } from 'react-router-dom';
//link this to restaurant show modal later
// <Link to={`/restaurant/${restaurant.id}`}>
// <img src={restaurant.image_url} alt={restaurant.name} />
// </Link>
const RestaurantIndexItem = ({ restaurant }) => (
  <li className="restaurant-index-item">
      <span> { restaurant.id } </span>
      <span> { restaurant.name } </span>
  </li>
);

export default RestaurantIndexItem;
