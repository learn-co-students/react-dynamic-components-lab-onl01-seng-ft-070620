import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'
// need to import children components

// creating the outer HTML for the page and also...
// using BlogPost and ColorBox components to do so
class App extends Component {

  render() {
    return (
      <div id="app">
          <BlogPost />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}
// need to export so children can access parent
export default App;
