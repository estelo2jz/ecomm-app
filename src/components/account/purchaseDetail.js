import React, { Component } from 'react'

class PurchaseDetails extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} purchase-detail`}>
        purchase detail goes hereee
      </div>
    )
  }
}

export default PurchaseDetails;