import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opac = this.props.opacity;
    return (
      (opac*10) < 2 ? null : (
        <div className="color-box" style={{opacity: opac}}>
          <ColorBox opacity={(opac*10-1)/10} />
        </div>
      )
    )
  }

}

