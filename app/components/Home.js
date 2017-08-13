import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import LandingPage from './Landing_page/landing_page';
import RightMapDisplay from './Main_Page/right_map';
import Trending from './Landing_page/Trending';


class Home extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="landing-page-container">
          <LandingPage/>
        </div>

          <Trending />

      </div>
    );
  }
}

export default connect(null)(Home);
