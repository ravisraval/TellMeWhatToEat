Github: [Tell Me What to Eat](https://github.com/ravisraval/TellMeWhatToEat)

Live: [Tell Me What To Eat](https://boiling-waters-62095.herokuapp.com/)


Tell Me What To Eat is a decision-making app that uses an algorithm-like process to reduce choice and make satisfying but less difficult choices.

## Background and Overview


  TellMeWhatToEat solves one of the world's most pressing issues: what should we eat tonight? Who will decide this for us? With so many choices, how can we possibly decide? Choice overload is a real thing, and that's what we're addressing. Using your current location, TellMeWhatToEat generates a customized suggestion just for you. Optionally, put in some filters. Want cheap, hot food? We got you. Need to take the prime minister of Malaysia out to one your town's best restaurants? Let us know, and we'll send you a top shelf suggestion.

## Functionality and MVP


Users can immediately click a button to generate a small list of random food/restaurant choices based on user location.

![Landing Page](/docs/images/landing_page.gif)

Users can optionally respond to filtration questions to narrow down their options.

![Answering Questions](docs/images/question_picker_2.gif)

Additionally, users can set a radius for the search.

![Radius Change](docs/images/move_radius_slider.gif)


Users can create accounts.

![Signup](/docs/images/Signup.gif)


A map with the user's location and each restaurant populates upon searching.

![Map Rendering](/docs/images/adjust_current_address.gif)


Users can temporarily designate restaurants to a list for easier viewing.
![Save To List](docs/images/save_remove_list.gif)



## Technologies and Technical Challenges
###### Tech Stack
  *  Backend: Node.js with an Express.js framework and a PostGreSQL database
  *  Frontend: React with a Redux architecture

###### Retrieving Restaurant Data
A key technical challenge was the retrieving of data from existing databases, storing it on the front end during user interaction, and selectively rendering that information.

Chiefly, we utilize the FourSquare API to collect relevant restaurant information.

###### Filtering & Processing Restaurant Data

  * Users submit their location on the landing page. If they do not provide their location, the app checks their location from browser data. The app then makes an API call to FourSquare and loads a list of pertinent restaurants.
  * The user then inputs data to filter these results, and the app returns a corresponding list of restaurants.

###### Sorting Data According to User Input
  *  Generating useful algorithms by which to sort user input.

## STRETCH GOALS:
*  Add in specific meals for recommendations.
*  Visualize user preferences on a user dashboard.
*  Pixel-perfect mobile-responsive design.
*  Mobile App
*  Fetch menus
