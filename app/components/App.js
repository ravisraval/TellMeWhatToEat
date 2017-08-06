import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Test from './Test';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Test/>
        <Footer/>
      </div>
    );
  }
}

export default App;
