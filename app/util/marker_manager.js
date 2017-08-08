export default class MarkerManager {
  constructor(map, infowindow, handleClick) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
    this.infowindow = infowindow;
    this.handleClick = handleClick;
  }

  updateMarkers(restaurants) {
    const restaurantsObj = {};

    restaurants.forEach((restaurant) => {
      restaurantsObj[restaurant.id] = restaurant;
    });

    restaurants
      .filter(restaurant => !this.markers[restaurant.id])
      .forEach((newRestaurant) => {
      this.createMarkerFromRestaurant(newRestaurant, this.infowindow, this.handleClick);
    });
    Object.keys(this.markers)
      .filter(restaurantId => !restaurantsObj[restaurantId])
      .forEach((restaurantId) => this.removeMarker(this.markers[restaurantId]));
  }

  removeMarker(marker) {
    this.markers[marker.restaurantId].setMap(null);
    delete this.markers[marker.restaurantId];
  }

  iconFromDisplayPos(restaurant) {
    //get three colors and base icon off of that
    let icon = "";
    if (restaurant.displayPosition === 1) {
      icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    } else if (restaurant.displayPosition === 2) {
      icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    } else {
      icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
    }
    return icon;
  }

  createMarkerFromRestaurant(restaurant, infowindow, handleClick) {
    const pos = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: this.iconFromDisplayPos(restaurant),
      animation: google.maps.Animation.DROP,
      restaurantId: restaurant.id
    });
    this.markers[marker.restaurantId] = marker;

    marker.addListener('click', function () {
      handleClick(restaurant.id);
    });

    infowindow.addListener('click', function () {
      handleClick(restaurant.id);
    });

    //change this to be restaurant specific
    // var contentString = '<div id="content">'+
    //   '<div id="siteNotice">'+
    //   '</div>'+
    //   `<img src=${room.pic_url} height="100px" width="150px"></img>` +
    //   `<h4 id="firstHeading" class="firstHeading">$${room.price} ${room.title}</h4>`+
    //   `<h5>${room.room_type} · ${room.beds} beds</h5>`+
    //   '<div id="bodyContent">'+
    //   '</div>'+
    //   '</div>';

    marker.addListener('mouseover', function () {
      infowindow.close();
      // infowindow.setContent(contentString);
      infowindow.open(marker.map, marker);
    });

    marker.addListener('mouseout', function () {
      infowindow.close();
    });
  }

}
