import React, {Component} from 'react';
export default class Views extends Component{
  render() {

  const hello = this.views.name;

    return (
      <div>
        <p>What's popping <br/>
        </p>
        <p>{hello}</p>
      </div>
    )
  }

};