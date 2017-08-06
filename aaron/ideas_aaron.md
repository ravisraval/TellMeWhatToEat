Functionality and MVP

Main Page has pictures of food by restaurants, with filters


Backend Table Structure: DB

Users
  -first name
  -last name
  -email
  -address
  -DOB
  -preference_id
  -favorites_id

Preferences
  -user_id
  -string of filters?

Favorites
  -restaurant_id
  -user_id

Restaurants
  -yelp_id
  -user_id
