import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

  componentDidMount() {

    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]
    this.props.setHeaderLinks(headerLinks);
    // fetch shop products actions creator
    // set the header links
    // fetch navbar links
      // set the navbar links
        // filter products with links
  }

  render() {
    return (
      <div className="shop">
        {/* search bar component */}
        {/* shop product component */}
        {/* shop cart button component */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;