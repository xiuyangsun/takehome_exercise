# Airmap Front End Take Home Exercise

### Objective

Design a single page application, using React with Redux, that contains the following pages:

1. An About page, which should just contain text with information about the application. Just a simple description of who built the app and when is fine.
2. A Home page, which displays a collection of cat gifs in a carousel.
    1. We recommend using the public Giphy "Search" API to retrieve your data: [Giphy "Search" API](https://developers.giphy.com/docs/) (Note: you will need to create an app on Giphy's site to obtain an API key.) 
    2. You should fetch at least 5 gifs at a time, so the carousel will have several gifs the user can flip through.
    3. Your carousel should have a ‘Next’ button that will display the next gif when it is clicked.
        1. The Next button should be disabled when the user is viewing the last gif in the collection.
    4. Your carousel should have a ‘Previous’ button that will display the last gif the user viewed when it is clicked. 
        1. The Previous button should be disabled if the user is viewing the first gif in the collection. 
    5. The Home page should fetch the gifs upon load. It should display some kind of loader component instead of the carousel while the data is being fetched.
    6. Your data and internal UI state should be managed in Redux. You can use any redux architecture strategy you prefer.

#### Additional Notes:
- The app has been bootstrapped with create-react-app and Redux already installed, and some Redux boilerplate already set up for you.
- We have installed [Material UI](https://material-ui.com/getting-started/installation/) and [Semantic UI React](https://react.semantic-ui.com/usage) Frameworks for you to use for styling, but you can use any framework you wish, or none at all.  
- We have installed [Axios](https://github.com/axios/axios) already but you can use any async library to handle your API call.
- We have installed [Redux Thunk](https://github.com/reduxjs/redux-thunk) already and set up the middleware boilerplate for you to use it, but you can use any async redux middleware to manage your redux async actions that you like.

#### Bonus Points:
- A navigation bar that contains links to the Home page and About page, shared between both pages.
- Graceful error handling of the API call
# takehome_exercise
