import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import LandingPage from './Landing_page/landing_page';
import RightMapDisplay from './Main_Page/right_map';

class Home extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
        <LandingPage/>
      </div>
    );
  }
}

export default connect(null)(Home);


//
// <div className="row">
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
// </div>
