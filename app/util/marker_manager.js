export default class MarkerManager {
  constructor(map, infowindow, handleClick) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
    this.infowindow = infowindow;
    this.handleClick = handleClick;
  }

  updateMarkers(restaurants, bounds) {
    if (restaurants === undefined) {
      restaurants = {};
    }
    const restaurantsObj = {};

    restaurants.forEach((restaurant) => {
      restaurantsObj[restaurant.id] = restaurant;
      let currentRestaurantPosition = new google.maps.LatLng(
        restaurant.lat, restaurant.lng
      );
      bounds.extend(currentRestaurantPosition);
    });

    this.map.fitBounds(bounds);

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
    const goldStar = {
      path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
      fillColor: 'yellow',
      fillOpacity: 0.8,
      scale: .1,
      strokeColor: 'gold',
      strokeWeight: 1
    };

    const homeIcon = {
    url: 'http://res.cloudinary.com/dluh2fsyd/image/upload/v1502488794/if_Untitled-2-02_536304_ftxlwn.png', // url
      scaledSize: new google.maps.Size(25, 25), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    let icon = "";
    if (restaurant.displayPosition === 0) {
      icon = homeIcon;
    } else if (restaurant.displayPosition === 1) {
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
      // animation: google.maps.Animation.DROP,
      restaurantId: restaurant.id
    });
    this.markers[marker.restaurantId] = marker;

    // map.fitBounds(new google.maps.LatLngBounds())

    marker.addListener('click', function () {
      if (restaurant.id !== 0) {
        handleClick(restaurant.id);
      }
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
      if (marker.restaurantId !== 0) {
        infowindow.setContent(`${restaurant.name}`);
        infowindow.open(marker.map, marker);
      }
    });

    marker.addListener('mouseout', function () {
      infowindow.close();
    });
  }

}
