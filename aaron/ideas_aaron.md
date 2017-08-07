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





  ____
  things cut from README:


  Component Hierarchy:
    - Nav Bar
    - Landing Page
    - Filter
    - Filter results
    - User profile Page
    - Preference form
    - Restaurant List form
    - Session Forms
    - Footer


    backend:
    * designing schema:
      * tables:
        - Users
        - Sessions
        - Restaurants
        - Preference Lists // Moods ??
      * join tables:
        - likes?
        - Previous Orders
    adding users, restaurants,

    Frontend:
    * what pages:
      - landing page
      - The filtering/main product
      - User Dashboard
        - personal stats
        - pages for making lists
        - default preferences
        - customizable preference settings
      - Global Stats
        - top restaurants/lists/preferences/meals of the week, etc
      - Restaurant show pages?

  running considerations:
  - staff curated/ built-in default lists/preferences

    Bonus:
