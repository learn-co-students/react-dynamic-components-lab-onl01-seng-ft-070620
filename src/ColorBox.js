import React, { Component } from 'react';

// if the opacity variable is less than 0.2, return null
// otherwise, render another colorBox component...
  // with an opacity that's 0.1 less than the current opacity
  // *see App.js for example how to do this*
export default class ColorBox extends Component {
  render() {
    if (this.props.opacity >= 0.2) {

      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1}/>
        </div>
      )

    } else {
      return null
    }
  } // end render()

} // end ColorBox class
