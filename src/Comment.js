import React, { Component } from 'react';

// creating divs for each comment...
// using the prop value passed in the BlogPost component
export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
