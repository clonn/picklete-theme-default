import React, { Component } from 'react'
import 'Shop/styles/ShopProductDetailQuantity.scss'

export default class ShopProductDetailQuantity extends Component {
  static defaultProps = {
    defaultValue: 1
  }
  
  state = {
    quantity: this.props.defaultValue
  }

  handleChangeQuantity = (e) => {
    this.setState({
      quantity: e.target.value
    });
    (this.props.onChange.bind(null, e.target.value))();
  }

  handleButtonClickQuantity = (sign) => {
    if (sign == -1 && this.state.quantity == 1) {
      return;
    }
    this.setState({
      quantity: this.state.quantity + sign
    });
    (this.props.onChange.bind(null, this.state.quantity + sign))();
  }

  render() {
    return (
      <div className="product-quantity">
        <button className="decrement" onClick={this.handleButtonClickQuantity.bind(null, -1)}>-</button>
        <input type="number" value={this.state.quantity} onChange={this.handleChangeQuantity}/>
        <button className="increment" onClick={this.handleButtonClickQuantity.bind(null, 1)}>+</button>
      </div>
    )
  }
}
