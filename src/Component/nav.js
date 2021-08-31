import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
        <Link to = '/'>test </Link>
        </nav>
      </div>
    )
  }

}